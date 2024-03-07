import { CSSProperties } from "react";

export default function Beacon({
  on,
  onColor,
  offColor,
  onClick,
}: {
  on?: boolean;
  onColor?: CSSProperties["fill"];
  offColor?: CSSProperties["fill"];
  onClick?: VoidFunction;
}) {
  return (
    <div
      style={{
        width: 12,
        height: 12,
        background: "black",
        position: "relative",
        borderRadius: 2,
      }}
      onClick={onClick}
    >
      <div
        style={{
          width: 6,
          height: 6,
          position: "absolute",
          top: 2,
          left: 2,
          background: on ? onColor ?? "white" : offColor ?? "black",
          borderRadius: 1,
        }}
      />
    </div>
  );
}
