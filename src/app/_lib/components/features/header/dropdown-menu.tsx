"use client";
import { useState } from "react";
import clsx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

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
        <li className="cursor-pointer px-4 py-2 font-bold text-gray-900 hover:font-black hover:text-gray-900">
          채용
        </li>
        <li className="cursor-pointer px-4 py-2 hover:font-black hover:text-gray-900">
          해외 개발자 원격 채용
        </li>
        <li className="cursor-pointer border-b px-4 py-2 hover:font-black hover:text-gray-900">
          외국인 원격 채용 (비개발 직군)
        </li>
        <li className="cursor-pointer px-4 py-2 hover:font-black hover:text-gray-900">
          한국어 가능 외국인 채용
        </li>
      </ul>
    </div>
  );
}
