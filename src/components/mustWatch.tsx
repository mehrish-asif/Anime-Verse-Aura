"use client";
import React from "react";
import ColourfulText from "@/components/ui/colourful-text";
import { motion } from "motion/react";
import { div } from "framer-motion/client";

export default function ColourfulTextDemo() {
    return (
        <>
            <div className="flex justify-center flex-col items-center relative overflow-hidden bg-black">
                <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-zinc-300 relative z-2 font-sans mt-8 mb-0">
                    Checkout some more <br /><ColourfulText text="Must Watch" /><br /> animes
                </h1>
                <p className="text-center w-4xl mt-4">You can definitely check out the animes mentioned above — they’re some of the top-trending hits right now. But if you’re craving something fresh or a bit different, there are plenty more amazing shows waiting for you to discover</p>
            </div>
        </>
    );
}
