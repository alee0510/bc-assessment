"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import List from "@/app/_lib/components/features/header/dropdown-list";

export default function HeaderDropdownMenu(): React.ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="dropdown" className="relative">
      <button type="button" className="flex cursor-pointer gap-1" onClick={handleMenuOpen}>
        채용
        <span>
          <ChevronDownIcon className="size-5" />
        </span>
      </button>
      <ul
        id="dropdown-menu"
        className={clsx(
          "absolute left-0 top-10 w-64 list-none rounded-md bg-white font-medium text-gray-700",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <List className="font-black">채용</List>
        <List>해외 개발자 원격 채용</List>
        <List className="border-b">외국인 원격 채용 (비개발 직군)</List>
        <List>한국어 가능 외국인 채용</List>
      </ul>
    </div>
  );
}
