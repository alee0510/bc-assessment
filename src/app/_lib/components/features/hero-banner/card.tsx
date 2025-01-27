import type { ReactElement } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

// @component
export default function HeroCard({
  image,
  title,
  className,
}: {
  image: string;
  title: string;
  className?: string;
}): ReactElement {
  return (
    <div
      className={twMerge("flex min-w-[22rem] items-center rounded-lg bg-white/20 p-3", className)}
    >
      <div className="flex size-14 min-w-14 items-center justify-center rounded-lg bg-white/40">
        <div className="relative size-8 text-white">
          <Image src={image} alt={title} sizes="100%" fill className="object-contain" />
        </div>
      </div>
      <p className="ml-4 text-2xl font-black">{title}</p>
    </div>
  );
}
