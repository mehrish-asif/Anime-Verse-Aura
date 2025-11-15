"use client";
import { cn } from "../.././lib/utils";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <>
     <div className="relative flex h-[30rem] w-full items-center justify-center bg-purple-950 dark:bg-[#1f022b]">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
     <h1 className="text-2xl md:text-7xl text-center mt-20 font-bold dark:text-white">
        Anime News <br /> Corner
      </h1>
      <div className="flex justify-center ">
       <p className=" text-base md:text-xl text-center w-[32rem] my-6 dark:text-neutral-200">
        Fans worldwide gear up for thrilling anime news, with studios revealing future projects, special collaborations, and surprise premieres, ensuring audiences stay engaged and entertained with endless waves of creative storytelling
      </p>
      </div>
      </div>
      </div>
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden mt-0 pt-0
">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    </>
  );
}

const testimonials = [
  {
    quote:
      "The official trailer for Jujutsu Kaisen Season 3 is out! Fans are excited as the new season will premiere in January 2026. The story promises intense battles, new characters, and emotional twists. Crunchyroll confirmed streaming worldwide, making it one of the most awaited anime releases of next year.",
    name: "Jujutsu Kaisen",
    title: "Jujutsu Kaisen Season 3 Trailer Released",
  },
  {
    quote:
      "One Piece anime will pause for three months from January to March 2026. It returns in April with the highly anticipated “Elbaph Arc.” Fans are eager to see Luffy and the crew face new adventures. The break allows animators to improve animation quality and prepare for exciting storylines.",
    name: "One Piece",
    title: "One Piece Anime Takes a Short Break",
  },
  {
    quote: "Demon Slayer: Kimetsu no Yaiba – Infinity Castle movie shattered box office records in Japan and internationally. Fans praised the stunning animation, fight scenes, and emotional storytelling. It proves that anime films can compete with global blockbusters. The movie continues to attract audiences months after release.",
    name: "Demon Slayer",
    title: "Demon Slayer: Infinity Castle Breaks Records",
  },
  {
    quote:
      "The new action fantasy anime Tougen Anki will premiere on July 11, 2025 in Japan. Fans can expect thrilling battles, unique powers, and engaging characters. Special pre-release events and teaser previews have already created hype. International streaming is planned later, so global anime fans are looking forward to it.",
    name: "Tougen Anki",
    title: "Tougen Anki Anime Coming Soon",
  },
  {
    quote:
      "Legendary voice actor Toru Furuya admitted to a long-term affair, surprising fans and the anime community. The news spread quickly on social media, sparking discussions about celebrities’ personal lives. While some fans were shocked, others focused on respecting privacy. The incident has reminded the industry about accountability and public image.",
    name: "Toru Furuya",
    title: "Voice Actor Toru Furuya Scandal",
  },
];
