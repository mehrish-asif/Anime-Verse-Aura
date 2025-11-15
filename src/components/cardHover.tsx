`use client`
import { use } from "react";
import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <>
      <h1 className="text-2xl md:text-7xl text-center mt-20 font-bold dark:text-white">
        Genres / Categories
      </h1>
      <div className="flex justify-center ">
        <p className=" text-base md:text-xl text-center w-[32rem] my-6 dark:text-neutral-200">
          Discover anime for every trending genre, and don’t miss the hottest trending series.
        </p>
      </div>
          <div className="max-w-5xl mx-auto px-4">
        <HoverEffect items={projects} />
      </div>
    </>
  );
}
export const projects = [
  {
    img: "/Image/demon-slayer-infinity-castle.jpg",
    title: "1. Shonen (Action/Adventure)",
    description:
      "Fast-paced action, battles, training, heroes growing stronger ",
    exm: "Attack on Titan, Naruto, One Piece, Demon Slayer",
    link: "",
  },
  {
    img: "/Image/chainsaw-man.jpg",
    title: "2. Dark Fantasy",
    description:
      "A darker version of fantasy—violence, mystery, mature storylines, monsters.",
    exm: "Attack on Titan, Chainsaw Man, Tokyo Ghoul",
    link: "",
  },
  {
    img: "/Image/YourName.jpg",
    title: "3. Romance + Drama",
    description:
      "Emotional stories focused on love, heartbreak, and relationships.",
    exm: "Your Name, Horimiya, Your Lie in April",
    link: "",
  },
  {
    img: "/Image/re-zero.jpg",
    title: "4. Isekai (Another World)",
    description:
      "Main character gets transported or reincarnated into a new fantasy world.",
    exm: "Solo Leveling, Re:Zero, Mushoku Tensei",
    link: "",
  },
  {
    img: "/Image/Death-Note.jpg",
    title: "5. Psychological / Thriller",
    description:
      "Mind games, suspense, secrets, twists, intense character struggles",
    exm: "Death Note (still trending even after years), Classroom of the Elite, Monster",
    link: "",
  },
  {
    img: "/Image/spy-x-family.jpg",
    title: "6. Comedy + Slice of Life",
    description:
      "Feel-good, funny, relaxing anime about everyday situations",
    exm: "Spy x Family, Komi Can’t Communicate, My Dress-Up Darling",
    link: "",
  },

];
