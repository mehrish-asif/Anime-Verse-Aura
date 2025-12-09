'use client'
import Link from 'next/link'
import React from 'react'
import { HoverBorderGradient } from "../ui/hover-border-gradient"
import { cn } from "../../../lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    img: string;
    title: string;
    description: string;
    exm: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
    <div
      className={cn(
        "grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 w-full p-8 ",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-600/[0.5] block  rounded-3xl "
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.4 },
                }}
              />
            )}
          </AnimatePresence>
          <Card bgImage={item.img} imageOpacity={0.25} className="h-68 w-68">
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription> <br />
            <p className="text-sm italic text-zinc-400">{item.exm}</p>
          </Card>
        </a>
      ))}
    </div>
       <div className="flex justify-center mb-6">
        <div className='flex flex-col items-center'>
          {/* <p className='my-4 text-lg text-purple-300 '>Click to see trendings animes according to genres</p>
          <Link href={"/genres"} >
            <HoverBorderGradient
              duration={1.5}
              as="button"
              containerClassName="rounded-xl"
              className="bg-white dark:bg-black text-black dark:text-white px-6 py-3 font-semibold"
            >
              Explore Genres
            </HoverBorderGradient>
          </Link> */}
        </div>
      </div>
    </>
  );
};

export const Card = ({
  className,
  children,
  bgImage,
  imageOpacity = 0.4,
}: {
  className?: string;
  children: React.ReactNode;
  bgImage?: string;
  imageOpacity?: number;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full bg-center bg-no-repeat bg-cover overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 p-2",
        className
      )}
    >
      <img
        src={bgImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: imageOpacity }}
      />
      <div className="relative z-50">
        <div className="relative z-10 p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
