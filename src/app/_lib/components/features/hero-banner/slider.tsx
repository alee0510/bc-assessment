import HeroCard from "@/app/_lib/components/features/hero-banner/card";
import { heroSamples } from "@/app/_lib/components/features/hero-banner/mockup";

export default function Slider(): React.ReactElement {
  return (
    <div id="slider-content" className="relative text-white">
      {heroSamples.map((item, index) => {
        return (
          <HeroCard
            index={index}
            quantity={heroSamples.length}
            key={item.id}
            image={item.icon}
            title={item.title}
            className="absolute left-full animate-autoRunSlide"
          />
        );
      })}
    </div>
  );
}
