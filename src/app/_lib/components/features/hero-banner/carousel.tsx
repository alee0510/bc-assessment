"use client";
import { useState } from "react";
import Image from "next/image";
import { v4 as UUID4 } from "uuid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

// @mockup data
type dataType = {
  id: string;
  image: string;
  name: string;
};
const datas: dataType[] = [
  {
    id: UUID4(),
    image: "/images/sample-1.jpg",
    name: "sample-1",
  },
  {
    id: UUID4(),
    image: "/images/sample-3.jpg",
    name: "sample-2",
  },
  {
    id: UUID4(),
    image: "/images/sample-2.jpg",
    name: "sample-3",
  },
];

// @main component
export default function MainCarousel(): React.ReactElement {
  const [current, setCurrent] = useState(0);
  const getStyle = (index: number): React.CSSProperties => {
    if (index === current) {
      return {
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        opacity: 1,
        zIndex: 10,
      };
    } else if (index === (current - 1 + datas.length) % datas.length) {
      // @check prev item in circular mode before the current and move it to the left
      return {
        transform: "translateX(-188px) translateZ(-192px) rotateY(0deg)",
        opacity: 1,
        zIndex: 5,
      };
    } else if (index === (current + 1) % datas.length) {
      //@ check next item after current item and move it to the right
      return {
        transform: "translateX(188px) translateZ(-192px) rotateY(0deg)",
        opacity: 1,
        zIndex: 5,
      };
    } else {
      return {};
    }
  };
  const onNext = (): void => {
    setCurrent((prev) => (prev + 1) % datas.length);
  };
  const onPrev = (): void => {
    setCurrent((prev) => (prev - 1 + datas.length) % datas.length);
  };

  return (
    <div
      id="container"
      className="relative flex size-full items-center justify-center bg-yellow-300"
    >
      <div
        id="carousel-container"
        style={{
          position: "relative",
          width: "288px",
          height: "384px",
          transformStyle: "preserve-3d",
          perspective: "1000px",
          margin: "0 auto",
        }}
      >
        {datas.map((data, index) => (
          <div
            key={data.id}
            className="absolute inset-0 h-96 w-72"
            style={{
              position: "absolute",
              top: 0,
              transitionProperty: "transform, opacity, visibility",
              transitionDuration: "500ms, 500ms, 500ms",
              transitionTimingFunction: "ease, ease, ease",
              transitionDelay: "0s, 0s, 0s",
              ...getStyle(index),
            }}
          >
            <Image src={data.image} alt={data.name} sizes="100%" fill className="object-contain" />
          </div>
        ))}
      </div>
      <div
        id="navigator"
        className="absolute left-0 top-0 z-20 flex size-full items-center justify-between"
      >
        <button type="button" onClick={onPrev}>
          <ChevronLeftIcon className="size-6" />
        </button>
        <button type="button" onClick={onNext}>
          <ChevronRightIcon className="size-6" />
        </button>
      </div>
    </div>
  );
}
