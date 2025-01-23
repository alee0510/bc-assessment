import Image from "next/image";
import type { sampleType } from "@/app/_lib/components/features/hero-banner/mockup";

export default function CarouselCard({ item }: { item: sampleType }): React.ReactElement {
  return (
    <div
      key={item.id}
      style={{ transform: item.id === 2 ? "translate3d(-50%, 0, -100px)" : "translate3d(0, 0, 0)" }}
      className="absolute left-0 top-0 flex max-w-72 cursor-pointer flex-col items-center gap-4 rounded-lg bg-white px-8 py-5 text-black drop-shadow-[24_0px_15px_rgba(0,0,0,0.12)]"
    >
      <div id="profile-image" className="relative">
        <div className="relative size-32 overflow-hidden rounded-full">
          <Image src={item.image} alt={item.name} sizes="100%" fill className="object-contain" />
        </div>
        <div className="absolute bottom-2 right-2 size-6">
          <Image src={item.flag} alt="flag" sizes="100%" fill className="object-contain" />
        </div>
      </div>
      <div className="text-center font-black">
        <p id="name" className="text-2xl">
          {item.name}
        </p>
        <p id="experiences" className="text-base text-blue-700">
          {item.experience}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-1">
        {item.skils.map((skill) => (
          <p className="rounded-md border px-2 py-1 text-base" key={`${item.id}-${skill}`}>
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
}
