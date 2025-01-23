"use client";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Card from "@/app/_lib/components/features/hero-banner/carousel-card";
import { samples } from "@/app/_lib/components/features/hero-banner/mockup";

// @main component
export default function MainCarousel(): React.ReactElement {
  const [current, setCurrent] = useState(0);
  const [fraction, setFraction] = useState(2);

  // @side-effect
  useEffect(() => {
    const updateFraction = (): void => {
      if (window.innerWidth < 768) {
        setFraction(5);
      } else {
        setFraction(2);
      }
    };

    updateFraction(); // Set initial value
    window.addEventListener("resize", updateFraction);

    return () => {
      window.removeEventListener("resize", updateFraction);
    };
  }, []);

  // @event handler
  const getStyle = (index: number): React.CSSProperties => {
    const containerWidth = 384; // 24rem in pixels
    if (index === current) {
      return {
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        backgroundColor: "white",
        opacity: 1,
        zIndex: 10,
      };
    } else if (index === (current - 1 + samples.length) % samples.length) {
      // @check prev item in circular mode before the current and move it to the left
      return {
        transform: `translateX(-${containerWidth / fraction}px) translateZ(-192px) rotateY(0deg)`,
        backgroundColor: "#EDFCFF",
        opacity: 1,
        zIndex: 5,
      };
    } else if (index === (current + 1) % samples.length) {
      //@ check next item after current item and move it to the right
      return {
        transform: `translateX(${containerWidth / fraction}px) translateZ(-192px) rotateY(0deg)`,
        backgroundColor: "#EDFCFF",
        opacity: 1,
        zIndex: 5,
      };
    } else {
      return {};
    }
  };
  const onNext = (): void => {
    setCurrent((prev) => (prev + 1) % samples.length);
  };
  const onPrev = (): void => {
    setCurrent((prev) => (prev - 1 + samples.length) % samples.length);
  };

  return (
    <div id="container" className="relative size-full">
      <div
        id="carousel-container"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
          margin: "0 auto",
        }}
        className="relative flex h-80 w-60 md:h-[28rem] md:w-72"
      >
        {samples.map((item, index) => (
          <Card key={item.id} item={item} active={index === current} style={getStyle(index)} />
        ))}
      </div>
      <div
        id="navigator"
        className="absolute left-0 top-0 z-20 flex size-full items-center justify-between"
      >
        <button type="button" onClick={onPrev}>
          <ChevronLeftIcon className="size-8" />
        </button>
        <button type="button" onClick={onNext}>
          <ChevronRightIcon className="size-8" />
        </button>
      </div>
    </div>
  );
}
