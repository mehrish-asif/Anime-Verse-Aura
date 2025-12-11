import React from 'react';

interface AboutUsProps {

}

const AboutUs: React.FC<AboutUsProps> = () => {
    return (
        <>
            <div className="w-auto flex flex-col justify-center items-center">
                <div className="max-w-[70%] w-full">
                    <h1 className="text-2xl md:text-5xl mt-50 text-zinc-300 font-serif text-center">
                        About My Project
                    </h1>

                    <p className="text-base text-zinc-400 md:text-lg mt-10"><em>Last Updated: [11-Dec-2025]</em></p>

                    <p className="text-base text-zinc-400 md:text-lg mt-10">
                         Welcome to AnimeVerse Aura, your next-generation platform where stunning design meets intelligent discovery. We built this project to move beyond static listings, offering a website that is fully responsive, visually beautiful, and a true hub for anime exploration, complete with up-to-date genre details and industry news. Our unique value lies in our technology: when you select an anime from our list of expandable cards, an integrated AI component instantly fetches comprehensive data from AniList and utilizes the power of the Gemini large language model. This process allows us to generate a highly unique, insightful, and accurate summary for every title, ensuring you have the "Aura" (the definitive knowledge) before you hit the "Watch Now" link and dive into your next great series.
                    </p>

                    <hr className="mt-8 mb-4 h-[1px] bg-zinc-500 border-0" />
                </div>
                <div className="max-w-[70%] w-full">
                    <h1 className="text-2xl md:text-5xl  text-zinc-300 font-serif text-center">
                        My Mission
                    </h1>

                    <p className="text-base text-zinc-400 md:text-lg mt-10">
                        My mission at AnimeVerse Aura is to redefine the anime discovery experience. We strive to be the ultimate, visually stunning, and fully responsive platform where enthusiasts can find more than just a list of titles; they find context, news, and genuine insight. We are committed to innovation by integrating an AI system that fetches comprehensive, real-time data from AniList and utilizes the advanced Gemini large language model. This technology allows us to provide a highly unique, accurate, and insightful summary—the "Aura"—for every anime, ensuring users are empowered with definitive knowledge before they use the "Watch Now" feature and begin their next adventure
                    </p>

                    <hr className="mt-8 mb-4 h-[1px] bg-zinc-500 border-0" />
                </div>
                <div className="max-w-[70%] w-full">
                    <h1 className="text-2xl md:text-5xl  text-zinc-300 font-serif text-center">
                        My Values
                    </h1>
                        <ul className="list-disc text-zinc-400 ml-6 mt-4">
                            <li>Insightful Accuracy: We ensure every anime summary, or "Aura," is accurate and insightful, powered by real-time data from AniList and the advanced Gemini LLM.</li>
                            <li>Design Excellence: We are dedicated to providing a superior user experience through a visually stunning and fully responsive design on all devices</li>
                            <li>Seamless Discovery: We prioritize an effortless journey from browsing genres and news to instant viewing via the "Watch Now" feature.</li>
                            <li>Transparency & Trust: We maintain openness regarding the source of our data and the role of the AI in generating unique, trustworthy summaries.</li>
                            <li>
                                Community Enthusiasm: We are committed to building a platform that enhances the passion of the anime community, designed by fans, for fans
                            </li>
                        </ul>

                    <hr className="mt-8 mb-4 h-[1px] bg-zinc-500 border-0" />
                </div>
                <div className="max-w-[70%] w-full">
                    <h1 className="text-2xl md:text-5xl  text-zinc-300 font-serif text-center">
                        Contact ME
                    </h1>

                    <p className="text-base text-zinc-400 md:text-lg mt-10">
                        You can check me out on linkedin and on gmail also.
                    </p>

                    <hr className="mt-8 mb-4 h-[1px] bg-zinc-500 border-0" />
                </div>
            </div>
        </>
    );
};

export default AboutUs;