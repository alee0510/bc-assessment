"use client";
import { useState, useEffect } from "react";
import HeroCard from "@/app/_lib/components/features/hero-banner/card";
import { heroSamples } from "@/app/_lib/components/features/hero-banner/mockup";

export default function Slider(): React.ReactElement {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSamples.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        id="slider-content"
        style={{
          transform: `translateX(-${currentIndex * 320}px)`,
          transition: "transform 1s ease",
        }}
        className="relative flex size-full gap-4 text-white"
      >
        {heroSamples.concat(heroSamples).map((item, index) => {
          return (
            <HeroCard
              index={index}
              quantity={heroSamples.length}
              // eslint-disable-next-line react/no-array-index-key
              key={item.id + "-" + index}
              image={item.icon}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
}
