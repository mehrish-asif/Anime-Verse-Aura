'use client';

import React, { act, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { style } from "framer-motion/client";

function NavBar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-20 max-w-2xl mx-auto z-50 ", className)}
        >
            <Menu setActive={setActive} >
                <div className="flex flex-row space-v-4 text-sm ml-2 w-12">
                    <Link href={"/"}>
                        <MenuItem setActive={setActive} active={active} item="Home">
                        </MenuItem>
                    </Link>
                </div>
                <div className="flex flex-row space-v-2 text-sm" >
                    <MenuItem setActive={setActive} active={active} item="Anime Official">
                        <HoveredLink href='https://www.bing.com/ck/a?!&&p=78886480cfae588de2fd73027b4e9b51f110ed7e3f8e61cf4542babe81f320b7JmltdHM9MTc1ODMyNjQwMA&ptn=3&ver=2&hsh=4&fclid=32c658a1-5bd9-6c9b-26ba-4eae5a026d25&psq=crunchyroll&u=a1aHR0cHM6Ly93d3cuY3J1bmNoeXJvbGwuY29tLw' >Crunchyroll</HoveredLink> <br />
                        <HoveredLink href='https://www.bing.com/ck/a?!&&p=002934116225c6ce88f24dd615601d2b88c0753b8a661b6c3907f86ac0f8edf5JmltdHM9MTc1ODMyNjQwMA&ptn=3&ver=2&hsh=4&fclid=32c658a1-5bd9-6c9b-26ba-4eae5a026d25&psq=netflix&u=a1aHR0cHM6Ly93d3cubmV0ZmxpeC5jb20vP2RpcmVjdG9yeT10cnVl' >Netflix</HoveredLink> <br />
                        <HoveredLink href='https://www.bing.com/ck/a?!&&p=ac2193fca0b2b888c5756dafe82463cdc7d3a18400f5a7ea68676787294300bdJmltdHM9MTc1ODMyNjQwMA&ptn=3&ver=2&hsh=4&fclid=32c658a1-5bd9-6c9b-26ba-4eae5a026d25&psq=amazon+prime+video&u=a1aHR0cHM6Ly93d3cucHJpbWV2aWRlby5jb20vY29sbGVjdGlvbi9JbmNsdWRlZHdpdGhQcmltZQ' >Amazon Prime Video</HoveredLink> <br />
                        <HoveredLink href='https://www.bing.com/ck/a?!&&p=1e47241db1f9df93f8aa272ae4bd4b8ba504fb75b8589b8f22a3d3f7473311d8JmltdHM9MTc1ODMyNjQwMA&ptn=3&ver=2&hsh=4&fclid=32c658a1-5bd9-6c9b-26ba-4eae5a026d25&psq=hidive&u=a1aHR0cHM6Ly93d3cuaGlkaXZlLmNvbS8' >HiDive</HoveredLink>
                    </MenuItem>

                </div>

                <div className="flex flex-row space-v-2 text-sm">
                    <MenuItem setActive={setActive} active={active} item="Anime UnOfficial" >
                        <HoveredLink href='https://www.bing.com/ck/a?!&&p=3ae1a069fc8e56e489696fa13c56a3949ec354beca8f740314848a5711b42293JmltdHM9MTc1ODMyNjQwMA&ptn=3&ver=2&hsh=4&fclid=32c658a1-5bd9-6c9b-26ba-4eae5a026d25&psq=aniwatch&u=a1aHR0cHM6Ly9hbml3YXRjaC5jb20uY3Yv' >AniWatch</HoveredLink> <br />
                        <HoveredLink href='https://www.bing.com/ck/a?!&&p=743dbf66e94b43e6b01e5b85c54696f506f1e8e4bd66009de4da6c914ea00642JmltdHM9MTc1ODMyNjQwMA&ptn=3&ver=2&hsh=4&fclid=32c658a1-5bd9-6c9b-26ba-4eae5a026d25&psq=anime+world+india&u=a1aHR0cHM6Ly9hbmltZS13b3JsZHMuY28v' >Anime World India</HoveredLink> <br />
                        <HoveredLink href='https://www.bing.com/ck/a?!&&p=2ea80011bb35c4a39075e71c068a7a163d3810f8d3946da4869f26eb535236c6JmltdHM9MTc1ODMyNjQwMA&ptn=3&ver=2&hsh=4&fclid=32c658a1-5bd9-6c9b-26ba-4eae5a026d25&psq=animepahe&u=a1aHR0cHM6Ly9hbmltZXBhaGUuaW0v' >Animepahe</HoveredLink>
                    </MenuItem>

                </div>
                <div className="flex flex-row space-v-4 text-sm">
                    <Link href={"/contact"} >
                    <MenuItem setActive={setActive} active={active} item="About Us" ></MenuItem>
                    </Link>
                </div>

            </Menu>
        </div>
    )
}

export default NavBar
