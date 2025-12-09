// app/api/anime-explainer/route.ts

import { request, gql } from 'graphql-request';
import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai'; 

// --- TypeScript Interfaces ---
interface CharacterName { full: string; }
interface CharacterEdge { node: { name: CharacterName; }; }
interface MediaTitle { english: string | null; userPreferred: string | null; }
interface MediaCoverImage { large: string | null; } // New interface for image URL

interface AniListData {
  title: MediaTitle;
  description: string | null;
  episodes: number | null;
  genres: string[];
  season: 'WINTER' | 'SPRING' | 'SUMMER' | 'FALL' | null; // New field
  startDate: { year: number | null } | null;             // New field for year
  coverImage: MediaCoverImage | null;                    // New field for image
  characters: {
    edges: CharacterEdge[];
  };
}

// Updated interfaces to include all data sent to the frontend
interface AniListAPIResponse {
    Media: AniListData | null;
}
interface RequestBody {
    search_term: string;
}
interface FinalResponse { // Updated interface for the data sent to the client
    title: string;
    explanation: string | undefined;
    imageUrl: string | null;
    genres: string[];
    season: string; // Combined Season and Year for frontend display
}

// --- Configuration and Setup ---
const ANILIST_ENDPOINT: string = 'https://graphql.anilist.co';
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
    console.error("FATAL ERROR: GEMINI_API_KEY environment variable is NOT loaded. Check .env.local file.");
}

const ai = new GoogleGenAI({ 
  apiKey: apiKey as string 
});

// --- GraphQL Query (UPDATED to include season, year, and coverImage) ---
const ANIME_QUERY: string = gql`
  query SearchMedia($search: String) {
    Media(search: $search, type: ANIME) {
      title { english userPreferred }
      description(asHtml: false)
      episodes
      genres
      season                 # NEW
      startDate { year }     # NEW
      coverImage { large }   # NEW
      characters(role: MAIN, perPage: 3) {
        edges { node { name { full } } }
      }
    }
  }
`;

export async function POST(req: NextRequest) {
  try {
    const { search_term }: RequestBody = await req.json(); 

    if (!search_term) {
      return NextResponse.json({ error: "Search term is missing" }, { status: 400 });
    }

    // A. Call AniList API
    const anilistResponse = await request<AniListAPIResponse>(ANILIST_ENDPOINT, ANIME_QUERY, {
      search: search_term
    });
    
    const media = anilistResponse.Media;

    if (!media) {
         return NextResponse.json({ error: "Anime not found on AniList or data is unavailable." }, { status: 404 });
    }

    // B. Data Processing
    const seasonYear = media.startDate?.year || 'Unknown Year';
    // Combine season name and year for easy display
    const seasonText = media.season ? `${media.season} ${seasonYear}` : 'Unknown Season'; 

    const characters: string = media.characters.edges.map(e => e.node.name.full).join(', ');
    
    // UPDATED DATA FOR GEMINI PROMPT (includes Season and Genre)
    const anilist_data_for_ai: string = `
        Title: ${media.title.english || media.title.userPreferred}
        Episodes: ${media.episodes}
        Genres: ${media.genres.join(', ')}
        Season: ${seasonText} 
        Main Characters: ${characters}
        Plot Description: ${media.description}
    `;
    
    // C. Gemini Prompt
    const final_prompt_for_gemini: string = `
        You are a friendly and detailed anime explainer. 
        Your primary goal is to answer the user's request, but you **MUST begin your response** by stating the full Title and the total number of Episodes.
        
        Based ONLY on the ANILIST DATA provided below, generate a brief, conversational summary that includes:
        1. The full Title and Episode Count (e.g., "The anime [TITLE] runs for [EPISODES] episodes.")
        2. Explanation of the plot.
        3. Introduction of the main characters.

        ANILIST DATA:
        ---
        ${anilist_data_for_ai}
        ---
    `;

    // D. Call Gemini API for explanation
    const aiResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: final_prompt_for_gemini,
    });

    const explanationText: string | undefined = aiResponse.text;

    // E. Return the full response (including image, season, genres)
    const finalResponse: FinalResponse = { 
        title: media.title.english || media.title.userPreferred || "Unknown Title",
        explanation: explanationText,
        imageUrl: media.coverImage?.large || null, // Image URL for the frontend
        genres: media.genres || [],
        season: seasonText,
    };

    return NextResponse.json(finalResponse); 

  } catch (error) {
    console.error("Integration Error:", error);
    const errorMessage: string = error instanceof Error ? error.message : "An unknown error occurred during processing.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}