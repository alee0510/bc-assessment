import { twMerge } from "tailwind-merge";

export default function List({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): React.ReactElement {
  return (
    <li
      className={twMerge(
        "cursor-pointer px-4 py-2 hover:font-black hover:text-gray-900",
        className
      )}
    >
      {children}
    </li>
  );
}
