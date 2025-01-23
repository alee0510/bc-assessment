import Image from "next/image";

export default function HeroCard({
  src,
  alt,
  text,
}: {
  src: string;
  alt: string;
  text: string;
}): React.ReactElement {
  return (
    <div className="flex min-w-80 items-center rounded-lg bg-white/20 p-3">
      <div className="flex size-14 items-center justify-center rounded-lg bg-white/40 p-2">
        <div className="relative size-8">
          <Image src={src} alt={alt} sizes="100%" fill className="object-contain" />
        </div>
      </div>
      <p className="ml-4 text-2xl font-black">{text}</p>
    </div>
  );
}
