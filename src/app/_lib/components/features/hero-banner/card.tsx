import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function HeroCard({
  index,
  image,
  title,
  className,
  quantity,
}: {
  index: number;
  quantity: number;
  image: string;
  title: string;
  className?: string;
}): React.ReactElement {
  return (
    <div
      className={twMerge("flex min-w-80 items-center rounded-lg bg-white/20 p-3", className)}
      style={
        { "--width": "320px", "--index": index, "--quantity": quantity } as React.CSSProperties
      }
    >
      <div className="flex size-14 items-center justify-center rounded-lg bg-white/40 p-2">
        <div className="relative size-8">
          <Image src={image} alt={title} sizes="100%" fill className="object-contain" />
        </div>
      </div>
      <p className="ml-4 text-2xl font-black">{title}</p>
    </div>
  );
}
