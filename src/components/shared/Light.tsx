import { CSSProperties } from "react";

export default function Light({
  on,
  onColor,
  offColor,
  onClick,
}: {
  on?: boolean;
  onColor?: CSSProperties["background"];
  offColor?: CSSProperties["background"];
  onClick?: VoidFunction;
}) {
  return (
    <div style={{ background: "black" }}>
      <div
        onClick={onClick}
        style={{
          width: 4,
          height: 4,
          background: on ? onColor ?? "white" : offColor ?? `#ffffff64`,
          border: "4px solid black",
        }}
      />
    </div>
  );
}
