'use client'
import { p } from 'framer-motion/client';
import AnimeData from '../data/anime.json'
import { BackgroundGradient } from './ui/background-gradient';
import Image from 'next/image';
interface Anime {
    id: number;
    title: string;
    genre: string[];
    episodes: number | null;
    rating: number;
    isTrending: boolean;
    release: string;
    img: string;
    description: string;
}

function featuredAnimes() {
    const TrendingAnimes = AnimeData.anime.filter((anime: Anime) => anime.isTrending)
    return (
        <div className='py-12 ' style={{ backgroundColor: "#100117" }}>
            <div>
                <div className="text-center">
                    <h2 className='text-sm md:text-xl text-purple-400 font-semibold tracking-wide uppercase'>Trending Anime Picks</h2>
                    <p className='mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-400 md:text-4xl'>Discover the best stories and visuals ruling the anime world</p>
                </div>
            </div>
            <div className='mt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mx-4 md:mx-4'>
                    {TrendingAnimes.map((anime: Anime) => (
                        <div key={anime.id} className="flex justify-center">
                            <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                                <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                                    <img
                                        src={anime.img}
                                        alt="img"
                                        className="object-contain rounded-lg h-[200px] md:h[250px]"
                                    />
                                    <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{anime.title}</p>
                                    <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>Genre: {anime.genre}</p>
                                    <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>⭐ {anime.rating}</p>
                                    <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>Ep: {anime.episodes}</p>
                                    <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>Year: {anime.release}</p>
                                    <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>{anime.description}</p>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default featuredAnimes
