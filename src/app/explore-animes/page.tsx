'use client';
import React, { useState } from 'react';
import { Spotlight } from '@/components/ui/spotlight-new';
import ColourfulText from '@/components/ui/colourful-text';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { ExpandableCardDemo } from '@/components/expandable-card';

// Interfaces for the expected response from our own API route
interface FinalResponse {
    title: string;
    explanation: string;
    imageUrl: string | null;
    genres: string[];
    season: string;
}

export default function AnimeChatInterface() {
    const [query, setQuery] = useState<string>('');
    const [response, setResponse] = useState<FinalResponse | null>(null); // State type changed to FinalResponse
    const [loading, setLoading] = useState<boolean>(false);

    // State to hold the temporary loading/error messages as strings
    const [message, setMessage] = useState<string>('Anime Expalnation Here...');

    const sendQuery = async () => {
        if (!query) return;

        setLoading(true);
        setMessage('Thinking...');
        setResponse(null); // Clear previous response data

        try {
            // Call the custom API Route we created
            const res = await fetch('/api/anime-explainer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ search_term: query }),
            });

            const data = await res.json();

            if (res.ok && data.explanation) {
                const finalData = data as FinalResponse;
                setResponse(finalData);
                setMessage(''); 
            } else {
                setMessage(`No such anime exist`);
                // setMessage(`Error: ${data.error || "Could not get explanation. Check API keys and server logs."}`);
                setResponse(null);
            }
        } catch (e) {
            setMessage(" Network error occurred. Check your connection.");
            setResponse(null);
        } finally {
            setLoading(false);
        }
    };

    // Helper variable to access response data easily
    const finalData = response;

    return (
        <>
            <Spotlight />

            <div className='' style={{ padding: '20px', maxWidth: '700px', margin: 'auto' }}>
                <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-zinc-300 relative z-2 font-sans mt-50 mb-0">
                    <ColourfulText text='Anime AURA' /> <br />
                    <ColourfulText text='Summaries' />
                </h1>
                <p className="text-center text-sm mt-4 text-zinc-300">This AI uses AniList data and Gemini to generate conversational, detailed explanations of anime plots and characters. </p>

                <div className="flex gap-4 items-center w-full mt-10">
                    <HoverBorderGradient
                        containerClassName="flex-grow rounded-xl"
                        as="div"
                        className="w-full"
                    >
                        <input
                            className="
              focus:ring-transparent 
              focus:outline-none 
              w-full
              bg-transparent
              text-white
              px-4 py-2
            "
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Enter an anime title (e.g., Death Note)"
                            disabled={loading}
                        />
                    </HoverBorderGradient>

                    <HoverBorderGradient
                        containerClassName="rounded-xl"
                        as="div"
                        className="
              px-4 py-2 
              text-white 
              whitespace-nowrap
            "
                    >
                        <button
                            onClick={sendQuery}
                            disabled={loading}
                            className="bg-transparent focus:outline-none"
                        >
                            {loading ? 'Processing...' : 'Ask AI'}
                        </button>
                    </HoverBorderGradient>
                </div>

                {/* --- DISPLAY AREA --- */}
                <div className='mb-60 border rounded-lg border-purple-950 text-purple-200 bg-black p-4 mt-4' style={{ whiteSpace: 'pre-wrap' }}>

                    {loading && <p>{message}</p>}

                    {!loading && finalData && (
                        <>
                            {/* Image, Title, and Season */}
                            <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', alignItems: 'flex-start' }}>
                                {finalData.imageUrl && (
                                    <img
                                        src={finalData.imageUrl}
                                        alt={finalData.title}
                                        style={{ width: '100px', height: 'auto', borderRadius: '4px' }}
                                    />
                                )}
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold mb-1">{finalData.title}</h3>
                                    {finalData.season && <p className="text-sm text-zinc-400">**Season:** {finalData.season}</p>}

                                    {/* Genres */}
                                    {finalData.genres && finalData.genres.length > 0 && (
                                        <p className="text-sm mt-1 text-zinc-400">
                                            **Genres:** {finalData.genres.join(', ')}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* AI Explanation */}
                            <p className="text-base text-purple-200 mt-3">
                                {finalData.explanation}
                            </p>
                        </>
                    )}

                    {!loading && !finalData && message && message !== 'Awaiting your question...' && (
                        <p>{message}</p>
                    )}

                    {!loading && !finalData && message === 'Awaiting your question...' && (
                        <p>Awaiting your question...</p>
                    )}
                </div>

                <h1
                    className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-center text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'
                > <ColourfulText text='List of Anime'></ColourfulText> </h1>
                <p
                    className='mt-4 font-normal text-center md:text-lg text-neutral-300 max-w-lg mx-auto my-8'
                >Explore our definitive list of the best anime, spanning high-octane action to thoughtful drama, complete with ratings, summaries, and instant links to Watch Now. Discover your next favorite series today!
                </p>
                <br /> <hr className='h-px border-0 bg-purple-950 mb-8' />
                <ExpandableCardDemo />
            </div>
        </>
    );
}