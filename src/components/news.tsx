"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export const products = [
    {
        title: "",
        link: "",
        type: "",
        release: "",
        status: "",
        thumbnail:
            "/Image/anime.jpg",
    },
    {
        title: "Jujutsu Kaisen",
        link: "",
        type: "TV Series",
        release: "January 2026",
        status: "Announced",
        thumbnail:
            "/Image/Jujutsa.jpg",
    },
    {
        title: "Chainsaw Man – The Movie: Reze Arc",
        link: "",
        type: "Film",
        release: "September 19, 2025 (Japan) + Global later",
        status: "Upcoming",
        thumbnail:
            "/Image/chain.jpg",
    },

    {
        title: "In the Clear Moonlit Dusk (Uruwashi no Yoi no Tsuki)",
        link: "",
        type: "TV Series",
        release: "January 2026",
        status: "Announced",
        thumbnail:
            "/Image/Dusk.jpg",
    },
    {
        title: "",
        link: "",
        type: "",
        release: "",
        status: "",
        thumbnail:
            "/Image/arc.jpg",
    },
    {
        title: "",
        link: "",
        type: "",
        release: "",
        status: "",
        thumbnail:
            "/Image/battles.jpg",
    },

    {
        title: "Goodbye, Lara",
        link: "",
        type: "TV Series",
        release: "Jaunuary 2026",
        status: "Announced",
        thumbnail:
            "/Image/lara-1.jpg",
    },
    {
        title: "Digimon BeatBreak",
        link: "",
        type: "TV Series",
        release: "October 5, 2025",
        status: "Announced",
        thumbnail:
            "/Image/digimon.jpg",
    },
    {
        title: "Inherit The Winds (Kaze o Tsugu Mono)",
        link: "",
        type: "Original TV Anime Series",
        release: "Set for 2026",
        status: "Annnounced",
        thumbnail:
            "/Image/Inherit-winds.jpg",
    },
    {
         title: "Suikoden II",
        link: "",
        type: "TV Anime Adaptation",
        release: "Coming in 2026",
        status: "Announced",
        thumbnail:
            "/Image/suikoden.jpg",
    },
    {
        title: "",
        link: "",
        type: "",
        release: "",
        status: "",
        thumbnail:
            "/Image/hero.jpg",
    },

    {
        title: "Future kid Takara",
        link: "",
        type: "Short Anime",
        release: "8 or 9 of November 2025",
        status: "Announced",
        thumbnail:
            "/Image/takara.jpg",
    },
    {
        title: "Ghost of Tsushima: Legends (Anime Series)",
        link: "",
        type: "Anime Series",
        release: "Slated for 2027",
        status: "Announced",
        thumbnail:
            "/Image/ghost.jpg",
    },
    {
        title: "Sekiro: No Defeat",
        link: "",
        type: "TV Anime Series",
        release: "October 4, 2025",
        status: "Announced",
        thumbnail:
            "/Image/sekiro.jpg",
    },
    {
        title: "",
        link: "",
        type: "",
        release: "",
        status: "",
        thumbnail:
            "/Image/hero.jpg",
    },
];

export function HeroParallaxDemo() {
    return <HeroParallax products={products} />;
}


export default HeroParallaxDemo