"use client";
import { useEffect, useRef, type ReactElement, type CSSProperties } from "react";
import Image from "next/image";
import type { dataType } from "@/app/_lib/components/features/hero-banner/mockup";
import PopOver from "@/app/_lib/components/ui/pop-over";

export default function CarouselCard({
  item,
  active,
  style,
}: {
  item: dataType;
  active: boolean;
  style: CSSProperties;
}): ReactElement {
  const popOverRef = useRef<HTMLDivElement>(null);
  const infoContainerRef = useRef<HTMLDivElement>(null);
  //@fadeIn
  useEffect(() => {
    if (active && popOverRef.current !== null && infoContainerRef.current !== null) {
      popOverRef.current.style.opacity = "1";
      popOverRef.current.style.transform = "scale(1)";
      infoContainerRef.current.style.opacity = "1";
    }
    if (!active && popOverRef.current !== null && infoContainerRef.current !== null) {
      popOverRef.current.style.opacity = "0";
      popOverRef.current.style.transform = "scale(0.8)";
      infoContainerRef.current.style.opacity = "0.7";
    }
  }, [active]);

  console.log("@LOG: active", active);
  return (
    <div
      key={item.id}
      style={{
        transitionProperty: "transform, opacity, visibility",
        transitionDuration: "500ms, 500ms, 500ms",
        transitionTimingFunction: "ease, ease, ease",
        transitionDelay: "0s, 0s, 0s",
        boxShadow: "24px 0px 15px rgba(0,0,0,0.12)",
        ...style,
      }}
      className="absolute left-0 top-0 flex h-80 w-60 cursor-pointer flex-col items-center gap-4 rounded-lg bg-white px-8 py-5 text-black md:h-[28rem] md:w-72 md:gap-8"
    >
      <PopOver
        ref={popOverRef}
        position="center"
        style={{
          transitionProperty: "opacity",
          transitionDuration: "500ms",
          transitionTimingFunction: "ease",
          transitionDelay: "0s",
          opacity: 0,
          scale: 0.8,
        }}
      >
        <div className="flex items-center">
          <div className="rounded-full bg-teal-200/60 p-2">
            <div className="relative size-6">
              <Image
                src={"/icons/icon-dolar.svg"}
                alt="icon-dolar"
                sizes="100%"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="ml-2 text-lg font-black text-teal-500">월 100만원</p>
        </div>
      </PopOver>
      <div id="profile-image" className="relative">
        <div className="relative size-16 overflow-hidden rounded-full md:size-32">
          <Image src={item.image} alt={item.name} sizes="100%" fill className="object-contain" />
        </div>
        <div className="absolute bottom-0 right-0 size-5 md:bottom-2 md:right-2 md:size-6">
          <Image src={item.flag} alt="flag" sizes="100%" fill className="object-contain" />
        </div>
      </div>
      <div className="text-center font-black">
        <p id="name" className="text-lg md:text-2xl">
          {item.name}
        </p>
        <p id="experiences" className="text-sm text-blue-700 md:text-base">
          {item.experience}
        </p>
      </div>
      <div
        ref={infoContainerRef}
        style={{
          transitionProperty: "opacity",
          transitionDuration: "500ms",
          transitionTimingFunction: "ease",
          transitionDelay: "0s",
          opacity: 0,
        }}
        className="flex animate-fadeIn flex-wrap justify-center gap-1"
      >
        {item.skils.map((skill) => (
          <p
            className="rounded-md border px-2 py-1 text-sm md:text-base"
            key={`${item.id}-${skill}`}
          >
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
}
