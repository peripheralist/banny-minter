import {
  CSSProperties,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";
import PixelCorner from "../pixelRenderers/PixelCorner";
import RoundedFrame from "./RoundedFrame";

const TRANSITION_TIME_MILLIS = 60;

export default function ButtonPad({
  children,
  fillBg,
  fillFg,
  fillBorder,
  shadow,
  onClick,
  pressed,
  containerStyle,
  style,
  disabled,
}: PropsWithChildren<{
  fillBg?: CSSProperties["background"];
  fillFg?: CSSProperties["background"];
  fillBorder?: CSSProperties["borderColor"];
  shadow?: "sm" | "md" | "none";
  onClick?: VoidFunction;
  pressed?: boolean;
  containerStyle?: CSSProperties;
  style?: CSSProperties;
  disabled?: boolean;
}>) {
  const [clicked, setClicked] = useState<boolean>();

  const shadowDepth = useMemo(() => {
    switch (shadow) {
      case undefined:
      case "md":
        return 8;
      case "sm":
        return 4;
    }

    return 0;
  }, [shadow]);

  const _onClick = useCallback(() => {
    if (disabled) return;

    setClicked(true);

    const timeout = setTimeout(() => {
      setClicked(false);
      onClick?.();
    }, TRANSITION_TIME_MILLIS);

    return () => clearTimeout(timeout);
  }, [onClick, disabled]);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        boxSizing: "border-box",
        ...containerStyle,
      }}
      role="button"
      onClick={_onClick}
    >
      {shadowDepth > 0 && (
        <LayerBg
          fill={fillBg ?? (clicked || pressed ? "#000000aa" : "#00000064")}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: -shadowDepth,
          }}
        />
      )}

      <RoundedFrame
        background={fillFg ?? "white"}
        borderColor={fillBorder ?? "black"}
        containerStyle={{
          transform: clicked || pressed ? `translate(0px, 4px)` : undefined,
          transition: `transform ${TRANSITION_TIME_MILLIS}ms`,
          transitionTimingFunction: "ease-out",
          minWidth: "100%",
          boxSizing: "border-box",
        }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...style,
        }}
      >
        {children}
      </RoundedFrame>
    </div>
  );
}

function LayerBg({
  fill,
  style,
}: {
  fill: CSSProperties["background"];
  style?: CSSProperties;
}) {
  const Corner = useCallback(
    ({ _style }: { _style?: CSSProperties }) => (
      <PixelCorner
        size={12}
        fillInner={fill}
        fillBorder={fill}
        style={_style}
      />
    ),
    [fill]
  );

  return (
    <div style={{ position: "relative", ...style }}>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
        }}
      >
        <Corner _style={{ transform: "scale(1, -1)" }} />

        <div style={{ flex: 1, background: fill, height: 12 }} />

        <Corner _style={{ transform: "scale(-1, -1)" }} />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 12,
          left: 0,
          right: 0,
          height: 4,
          background: fill,
        }}
      />
    </div>
  );
}
