"use client";
import { useState, useEffect, useRef } from "react";
import { getSlideData } from "@/app/_lib/services";
import type { sildeDataType } from "@/app/_lib/types";
import HeroCard from "@/app/_lib/components/features/hero-banner/card";

export default function Slider(): React.ReactElement {
  const [data, setData] = useState<sildeDataType[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // @fetcthData
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const footerData = await getSlideData();
      setData(footerData);
    };

    void fetchData();
  }, []);

  // @start the animation
  useEffect(() => {
    if (data.length > 0) {
      const interval = setInterval(() => {
        setIsAnimating(true);
        if (sliderRef.current !== null) {
          sliderRef.current.style.transition = "transform 1s ease-in-out";
          sliderRef.current.style.transform = `translateX(-368px)`; // 368 (352 + 16) is the width of the card
        }
      }, 5000);
      return () => {
        clearInterval(interval);
      };
    }
    return undefined;
  }, [data]);

  // @reset the animation
  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        if (sliderRef.current !== null) {
          sliderRef.current.style.transition = "none";
          sliderRef.current.style.transform = "translateX(0)";
          setIsAnimating(false);

          // @move the first card to the end
          if (data.length > 0) {
            setData((prevData) => {
              return [...prevData.slice(1), prevData[0]!];
            });
          }
        }
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
    return undefined;
  }, [isAnimating]);

  return (
    <div className="animate-fadeIn overflow-hidden whitespace-nowrap">
      <div id="slider-content" ref={sliderRef} className="relative flex size-full gap-4 text-white">
        {data.map((item, index) => {
          return (
            <HeroCard
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
