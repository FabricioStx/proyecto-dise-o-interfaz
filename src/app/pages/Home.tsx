import { HeroCarousel } from "../components/HeroCarousel";
import { AboutSnippet } from "../components/AboutSnippet";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <HeroCarousel />
      <AboutSnippet />
    </div>
  );
}
