import { CSSProperties, PropsWithChildren, useCallback, useState } from "react";
import RoundedRect from "./RoundedRect";

export default function ButtonPad({
  children,
  radius,
  fillBg,
  fillFg,
  onClick,
  style,
  disabled,
}: PropsWithChildren<{
  fillBg?: CSSProperties["fill"];
  fillFg?: CSSProperties["fill"];
  radius?: number;
  onClick?: VoidFunction;
  style?: CSSProperties;
  disabled?: boolean;
}>) {
  const [clicked, setClicked] = useState<boolean>();

  const _onClick = useCallback(() => {
    if (disabled) return;

    setClicked(true);
    onClick?.();

    setTimeout(() => {
      setClicked(false);
    }, 100);
  }, [onClick, disabled]);

  const depth = 6;
  const edge = 6;
  const r = radius ?? 4;

  return (
    <div
      style={{
        position: "relative",
        userSelect: "none",
        ...style,
      }}
      role="button"
      onClick={_onClick}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          transform:
            clicked || disabled
              ? "translate(0px, 0px)"
              : `translate(-${depth / 2}px, -${depth / 2}px)`,
          transition: "transform 40ms",
        }}
      >
        <RoundedRect
          style={{ position: "absolute", inset: 0, zIndex: -1 }}
          fill={fillFg ?? "white"}
          radius={r / 2}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          {children}
        </div>
      </div>

      <RoundedRect
        fill={fillBg ?? "black"}
        radius={r}
        style={{
          position: "absolute",
          zIndex: -1,
          left: -edge,
          right: -edge,
          top: -edge,
          bottom: -edge,
        }}
      />
    </div>
  );
}
