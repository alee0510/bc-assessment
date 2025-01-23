import Image from "next/image";
import type { dataType } from "@/app/_lib/components/features/hero-banner/mockup";
import PopOver from "@/app/_lib/components/ui/pop-over";

export default function CarouselCard({
  item,
  style,
}: {
  item: dataType;
  style: React.CSSProperties;
}): React.ReactElement {
  return (
    <div
      key={item.id}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        transitionProperty: "transform, opacity, visibility",
        transitionDuration: "500ms, 500ms, 500ms",
        transitionTimingFunction: "ease, ease, ease",
        transitionDelay: "0s, 0s, 0s",
        display: "flex",
        cursor: "pointer",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        borderRadius: "0.5rem",
        padding: "2rem 1.25rem",
        width: "18rem",
        height: "28rem",
        color: "black",
        boxShadow: "24px 0px 15px rgba(0,0,0,0.12)",
        ...style,
      }}
    >
      <PopOver position="center" className="hidden">
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
