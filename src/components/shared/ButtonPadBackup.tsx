import { COLORS } from "@/constants/colors";
import { CSSProperties, PropsWithChildren, useCallback, useState } from "react";
import PixelArc from "../pixelRenderers/PixelArc";
import RoundedRect from "./RoundedRect";

export default function ButtonPad({
  children,
  radius,
  fillBg,
  fillFg,
  onClick,
  pressed,
  style,
  disabled,
}: PropsWithChildren<{
  fillBg?: CSSProperties["fill"];
  fillFg?: CSSProperties["fill"];
  radius?: number;
  onClick?: VoidFunction;
  pressed?: boolean;
  style?: CSSProperties;
  disabled?: boolean;
}>) {
  const [clicked, setClicked] = useState<boolean>();

  const _onClick = useCallback(() => {
    if (disabled) return;

    setClicked(true);

    setTimeout(() => {
      setClicked(false);
      onClick?.();
    }, 100);
  }, [onClick, disabled]);

  const depth = 6;
  const edge = 6;
  const r = radius ?? 4;

  const highlightColor = pressed || clicked ? "#00000044" : "#ffffff88";

  return (
    <div
      style={{
        position: "relative",
        userSelect: "none",
        margin: edge,
      }}
      role="button"
      onClick={_onClick}
    >
      <RoundedRect
        fill={fillBg ?? COLORS.blushDeep}
        radius={r}
        style={{
          position: "absolute",
          left: -edge,
          right: -edge,
          top: -edge,
          bottom: -edge,
        }}
      />

      <div
        style={{
          width: "100%",
          height: "100%",
          transform:
            pressed || clicked || disabled
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
        <PixelArc
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: `scale(-1,1)`,
          }}
          width={5}
          height={5}
          pixelSize={1}
          fill={highlightColor}
          radius={2}
          thickness={4}
        />
        <div
          style={{
            position: "absolute",
            height: "calc(100% - 7px)",
            top: 5,
            width: 3,
            background: highlightColor,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 7px)",
            height: 3,
            left: 5,
            background: highlightColor,
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
            ...style,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}