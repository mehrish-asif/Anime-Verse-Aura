import Link from 'next/link'
import React from 'react'
import { HoverBorderGradient } from "./ui/hover-border-gradient"
import { color } from 'framer-motion'

function HeroSection() {
    return (
        <div className='h-auto mt-20 md:h-[50rem] w-full rounded-md flex flex-col item-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 ' >
            <div className='p-4 relative z-10 w-full text-center' >
                <h1
                    className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'
                >Explore more about Anime</h1>
                <p
                    className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'
                >Experience anime like never before – action, drama, fantasy, all in one spot. Join the world of heroes, magic, and adventure – your anime journey starts here. <br /> Use Anime AI to gather information about your <br />favourite anime.
                </p>

            </div>
            <div className='mt-4 flex justify-center items-center ' >
                <Link href={"/explore-animes"} >
                    <HoverBorderGradient
                        duration={1.5}
                        as="button"
                        containerClassName="rounded-xl"
                        className="bg-white dark:bg-black text-black dark:text-white px-6 py-3 font-semibold"
                    >
                        Anime AI
                    </HoverBorderGradient>
                </Link> 
            </div>
        </div>
    )
}

export default HeroSection
