import HeroSection from "@/components/HeroSection";
import { Spotlight } from "@/components/ui/spotlight-new";
import FeaturedAnimes from "@/components/featuredAnimes";
import { CardHoverEffectDemo } from "@/components/cardHover";
// import News from "@/components/news";
import MovingCards from "@/components/MovingCards"
import MustWatch from "@/components/mustWatch"
import AnimeWatch from "@/components/animemustwatch"

export default function Home() {
  return (
    <div>
      <main className="min-h-screen w-screen overflow-x-hidden bg-black/[0.96] antialiased bg-grid-white/[0.02] " >
      <HeroSection />
      <Spotlight/>
      <FeaturedAnimes/>
      <CardHoverEffectDemo/>
      {/* <News/> */}
      <MustWatch/>
      <AnimeWatch/>
      <MovingCards/>
      </main>
    </div>
  );
}
