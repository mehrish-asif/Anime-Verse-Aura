"use client";
import ColourfulText from "@/components/ui/colourful-text";
import { Tabs } from "./ui/tabs";

export default function TabsDemo() {
    const tabs = [
        {
            title: "Buddy Daddies",
            value: "buddy daddies",
            content: (
                <div className="w-full relative h-[30rem] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 ">
                    <img
                        src="/Image/wp11955469-buddy-daddies-wallpapers.jpg"
                        alt="background"
                        className="absolute inset-0 w-full h-full object-cover brightness-30 rounded-2xl"
                    />
                    <p className="relative z-10 text-2xl md:text-5xl font-bold">Buddy Daddies</p>
                    <p className="relative z-10 text-base mt-8 mb-4">Episodes: 12 <br />Where to Watch: Netflix, Crunchyroll, Anime World India <br /> Genre: Action, Comedy, Crime <br /> Rating: 9.2/10 <br />Description: Two professional assassins, Kazuki and Rei, unexpectedly have to take care of a 4‑year-old girl, Miri. They decide to raise her despite the risks, and “fatherhood” becomes part of their dangerous lives. </p>
                </div>
            ),
        },
        {
            title: "Silent Voice",
            value: "silent voice",
            content: (
                <div className="w-full overflow-visible relative h-[30rem] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 ">
                    <img
                        src="/Image/1460629.jpg"
                        alt="background"
                        className="absolute inset-0 w-full h-full object-cover brightness-30 rounded-2xl"
                    />
                    <p className="relative z-10 text-2xl md:text-5xl font-bold text-white">Silent Voice</p>
                     <p className="relative z-10 text-base mt-8 mb-4">Movie: ~130min <br />Genre: Romance, Psychological <br /> Rating: Critically acclaimed — 95% Tomatometer on Rotten Tomatoes <br />Description: A deeply emotional coming-of-age story about Shoya, a former bully, and Shoko, a deaf girl he used to torment. He seeks redemption and reconciliation as they reconnect. <br />Where to Watch: Netflix (region dependent), other streaming platforms</p>
                </div>
            ),
        },
        {
            title: "Grave of Firefiles",
            value: "grave of firefiles",
            content: (
                <div className="w-full overflow-visible relative h-[30rem] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <img
                        src="/Image/2001913.jpg"
                        alt="background"
                        className="absolute inset-0 w-full h-full object-cover brightness-40 rounded-2xl"
                    />
                    <p className="relative z-10 text-xl md:text-4xl font-bold">Grave of Firefiles</p>
                    <p className="relative z-10 text-base mt-8 mb-4 ">Movie: ~88min  <br />Where to Watch: Netflix (in many regions)<br /> Genre: War, Drama, Historica <br /> Rating: IMDb 8.5 / 10, Rotten Tomatoes 100% <br />Description: Set in WWII Japan, it follows two orphaned siblings, Seita and his little sister Setsuko, struggling to survive after losing their parents in the firebombing</p>
                </div>
            ),
        },
        {
            title: "Vinland Saga",
            value: "vinland saga",
            content: (
                <div className="w-full overflow-visible relative h-[30rem] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <img
                        src="/Image/10854780.jpg"
                        alt="background"
                        className="absolute inset-0 w-full h-full object-cover brightness-40 rounded-2xl"
                    />
                    <p className="relative z-10 text-xl md:text-4xl font-bold">Vinland Saga</p>
                     <p className="relative z-10 text-base mt-8 mb-4">Episodes: 48 (across 2 seasons) <br className="mb-4" />Where to Watch: Netflix, Crunchyroll, Anime World India <br /> Genre: Action, Adventure, Historical, Epic <br /> Rating: Highly rated; 100% Tomatometer for some seasons <br />Description: Thorfinn, a young Viking warrior, seeks revenge for his father’s death. The story is epic and explores war, honor, and what it really means to be a warrior.</p>
                </div>
            ),
        },
        {
            title: "Tokyo Revengers",
            value: "tokyo revengers",
            content: (
                <div className="w-full overflow-visible relative h-[30rem] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                   <img
                        src="/Image/8406609.jpg"
                        alt="background"
                        className="absolute inset-0 w-full h-full object-cover brightness-30 rounded-2xl"
                    />
                    <p className="relative z-10 text-xl md:text-4xl font-bold">Tokyo Revengers</p>
                     <p className="relative z-10 text-base mt-8 mb-4">Episodes: ~50 (first few seasons) <br />Description: Takemichi travels back in time to his middle school days to save his ex-girlfriend Hinata from being killed by a dangerous gang. As he changes the gang’s history, things get more complicated. <br />Where to Watch: Netflix, Crunchyroll, Muse Asia YouTube, Anime World India <br /> Genre: Action, Drama, Supernatural, Time Travel <br /> Rating: ~4.3 / 5</p>
                </div>
            ),
        },
    ];

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-14">
            <Tabs tabs={tabs} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <img
            src="/linear.webp"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
    );
};
