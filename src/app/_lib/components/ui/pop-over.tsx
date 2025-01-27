import type { ReactElement, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

// @types
export type PositionType = "left" | "right" | "center";
export type PopOverProps = HTMLAttributes<HTMLDivElement> & {
  position: PositionType;
  ref?: React.Ref<HTMLDivElement>;
  anchorClassName?: string;
};

// @component
export default function PopOver({
  ref,
  position,
  children,
  style,
  className,
  anchorClassName,
}: PopOverProps): ReactElement {
  const getStyles = (type: PositionType): React.CSSProperties => {
    if (type === "left") {
      return {
        bottom: "-0.5rem",
        left: "0.5rem",
      };
    }
    if (type === "right") {
      return {
        bottom: "-0.5rem",
        right: "0.5rem",
      };
    }
    if (type === "center") {
      return {
        bottom: "-0.9rem",
        left: "50%",
        transform: "translate(-50%, -50%)",
      };
    }
    return {};
  };

  return (
    <div
      ref={ref}
      style={style}
      className={twMerge("absolute -top-20 rounded-lg bg-white px-5 py-2", className)}
    >
      {children}
      <span
        style={{
          ...getStyles(position),
        }}
        className={twMerge(
          "absolute size-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white",
          anchorClassName
        )}
      />
    </div>
  );
}
