import { twMerge } from "tailwind-merge";

export type PositionType = "left" | "right" | "center";

export default function PopOver({
  children,
  position,
  className,
}: {
  children: React.ReactElement;
  position: PositionType;
  className?: string;
}): React.ReactElement {
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
    <span className={twMerge("absolute -top-20 rounded-lg bg-white px-5 py-2", className)}>
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
    </span>
  );
}
