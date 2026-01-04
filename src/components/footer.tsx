import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <>
        <div className="flex flex-col">
            <footer className='w-full bg-gray-950 border-t border-gray-900 text-white py-8 px-6 mt-auto'>
                <div className="max-w-6xl mx-auto flex flex-col justify-center items-center mt-6">
                    <img src="/Image/AnimeVerseAura.jpg" alt="" style={{ borderRadius: "50%", width: "50px", height: "50px" }} /> <br />

                    <h1 className='text-2xl md:text-5xl text-cyan-500'>AnimeVerseAura</h1>

                    <p className='mt-6 text-purple-300 text-center text-sm md:text-base'>Step into a vibrant world of anime where every card tells a story. From fierce battles to heart-touching tales, our site curates the best titles with crisp details, ratings, and watch guides—all wrapped in a sleek, modern design made for true fans.</p>
                </div>
                <div className='flex flex-col justify-center items-center mt-6'>
                    <h1 className='text-xl md:text-4xl text-aliceblue'>Contact Us</h1>
                    <div className="flex justify-center items-center text-xs md:text-base gap-6 mt-4">
                        <Link href={"https://youtube.com/@mehrishasif-624?si=xlVFnwLo2hyktr4f"}>
                            <img src="/Image/3146788_youtube_logo_icon.png" alt="" className='w-8 inline' /> Youtube
                        </Link>
                        <Link href={"https://www.linkedin.com/in/mehrish-asif-299658384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} >
                            <img src="/Image/LI-Logo.png" alt="" className='w-17 inline '/>
                        </Link>
                        <Link href={"#"} >
                            <img src="/Image/1715965947instagram-logo-png (1).png" alt="" className='w-7 inline '/> Instagram
                        </Link>
                    </div>
                </div>
                <div className='w-full  bg-black border-t border-gray-900 text-xs md:text-base text-white mt-6 px-6 py-4 flex justify-center gap-4'>
                    <p>©2025 AnimeVerseAura</p>
                    <Link href={"/terms"}>
                    <p>Terms and Conditions</p>
                    </Link>
                </div>
            </footer>
            </div>
        </>
    )
}