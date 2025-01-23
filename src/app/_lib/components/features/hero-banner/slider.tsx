"use client";
import { useState, useEffect } from "react";
import { getSlideData } from "@/app/_lib/services";
import type { sildeDataType } from "@/app/_lib/types";
import HeroCard from "@/app/_lib/components/features/hero-banner/card";

export default function Slider(): React.ReactElement {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState<sildeDataType[]>([]);

  // @sideEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [data]);

  // @fetcthData
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const footerData = await getSlideData();
      setData(footerData);
    };

    void fetchData();
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
        {data.concat(data).map((item, index) => {
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
