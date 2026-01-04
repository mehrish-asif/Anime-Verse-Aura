"use client";
import React from "react";
import { motion } from "motion/react";
import type { Transition } from "motion/react";

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

/* ================= MENU ITEM ================= */
export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      onMouseEnter={() => window.innerWidth >= 768 && setActive(item)}
      onClick={() => window.innerWidth < 768 && setActive(item)}
      className=" relative max-w-[200px] min-w-[70px]  "
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="
          cursor-pointer
          text-xs md:text-sm
          font-medium
          text-black
          hover:opacity-90
          dark:text-white
          px-1
          inline
        "
      >
        {item}
      </motion.p>

      {active === item && children && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="
            absolute
            top-[calc(100%_+_0.75rem)]
            left-1/2
            -translate-x-1/2
            z-50
          "
        >
          <motion.div
            layoutId="active"
            transition={transition}
            className="
              bg-white
              dark:bg-black
              rounded-2xl
              border border-black/[0.2]
              dark:border-white/[0.2]
              shadow-xl
              overflow-hidden
              max-w-[95vw]
            "
          >
            <motion.div layout className="p-3">
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

/* ================= MENU ================= */
export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => window.innerWidth >= 768 && setActive(null)}
      className="
        relative
        flex
        justify-center
        items-center
        gap-3
        px-[5px]
        py-2
        bg-white
        dark:bg-black
        rounded-full
        shadow-input
        border border-transparent
        dark:border-white/[0.2]
      "
    >
      {children}
    </nav>
  );
};

/* ================= PRODUCT ITEM ================= */
export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex gap-2 items-start">
      <img
        src={src}
        alt={title}
        className="w-[120px] h-auto rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-sm font-semibold text-black dark:text-white">
          {title}
        </h4>
        <p className="text-xs text-neutral-700 dark:text-neutral-300 max-w-[10rem]">
          {description}
        </p>
      </div>
    </a>
  );
};

/* ================= LINK ================= */
export const HoveredLink = ({
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      {...rest}
      className="block text-xs text-neutral-700 dark:text-neutral-200 hover:text-purple-500"
    >
      {children}
    </a>
  );
};
