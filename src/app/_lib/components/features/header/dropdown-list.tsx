import { twMerge } from "tailwind-merge";

export default function List({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}): React.ReactElement {
  return (
    <li
      onClick={onClick}
      className={twMerge(
        "cursor-pointer px-4 py-2 hover:font-black hover:text-gray-900",
        className
      )}
    >
      {children}
    </li>
  );
}
