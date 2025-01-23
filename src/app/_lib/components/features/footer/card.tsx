import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function FooterCard({
  icon,
  title,
}: {
  icon: string;
  title: string;
}): React.ReactElement {
  return (
    <div
      id="footer-card"
      className="flex flex-col gap-4 rounded-lg bg-white p-4 text-sm font-black"
    >
      <div className="flex size-10 items-center justify-center rounded-lg bg-blue-50">
        <div className="relative size-6">
          <Image src={icon} alt={title} sizes="100%" fill className="object-contain" />
        </div>
      </div>
      <p className="text-gray-800">{title}</p>
      <p className="flex cursor-pointer items-center gap-1 text-gray-600">
        바로가기 <ArrowRightIcon className="size-5 rounded-md border-2" />
      </p>
    </div>
  );
}
