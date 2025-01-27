import type { ReactElement, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

// @types
export type PositionType = "left" | "right" | "center";
export type PopOverProps = HTMLAttributes<HTMLDivElement> & {
  position: PositionType;
  ref?: React.Ref<HTMLDivElement>;
};

// @component
export default function PopOver({
  ref,
  position,
  children,
  style,
  className,
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
          width: 0,
          height: 0,
          borderLeft: "10px solid transparent",
          borderRight: "10px solid transparent",
          borderTop: "10px solid white",
          position: "absolute",
          ...getStyles(position),
        }}
      />
    </div>
  );
}
