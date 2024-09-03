import {
  CSSProperties,
  MouseEventHandler,
  PropsWithChildren,
  Ref,
  useCallback,
} from "react";
import PixelCorner from "../pixelRenderers/PixelCorner";

export default function RoundedFrame({
  children,
  shadow,
  background,
  borderColor,
  containerStyle,
  style,
  onClick,
  contentRef,
}: PropsWithChildren<{
  shadow?: boolean;
  background?: CSSProperties["background"];
  borderColor?: CSSProperties["borderColor"];
  containerStyle?: CSSProperties;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
  contentRef?: Ref<HTMLDivElement>;
}>) {
  const _borderColor = borderColor ?? "black";
  const shadowColor = "#00000044";
  const cornerSize = 12;
  const borderSize = 4;

  const Corner = useCallback(
    ({ _style }: { _style?: CSSProperties }) => (
      <PixelCorner
        size={12}
        fillInner={background}
        fillBorder={_borderColor}
        style={_style}
      />
    ),
    [background, _borderColor]
  );

  return (
    <div
      style={{ position: "relative", height: "100%", ...containerStyle }}
      onClick={(e) => onClick?.(e)}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <div
          style={{
            width: "calc(100% - 24px)",
            position: "absolute",
            margin: "0 auto",
            background,
            bottom: 12,
            top: borderSize,
          }}
        />

        <div
          className="sup"
          style={{
            zIndex: 1,
            padding: 4,
            boxSizing: "border-box",
            maxHeight: "calc(100% - 8px)",
            ...style,
          }}
          ref={contentRef}
        >
          {children}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
        }}
      >
        <Corner />

        <div style={{ flex: 1, background: _borderColor, height: 4 }} />

        <Corner _style={{ transform: "scale(-1, 1)" }} />
      </div>

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

        <div style={{ flex: 1 }}>
          <div style={{ width: "100%", background, height: 8 }} />
          <div style={{ width: "100%", background: _borderColor, height: 4 }} />
        </div>

        <Corner _style={{ transform: "scale(-1, -1)" }} />
      </div>

      <div
        style={{
          position: "absolute",
          left: 0,
          top: 12,
          bottom: 12,
          display: "flex",
        }}
      >
        <div style={{ height: "100%", background: _borderColor, width: 4 }} />
        <div
          style={{
            height: "100%",
            background,
            width: 8,
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          right: 0,
          top: 12,
          bottom: 12,
          display: "flex",
        }}
      >
        <div
          style={{
            height: "100%",
            background,
            width: 8,
          }}
        />
        <div style={{ height: "100%", background: _borderColor, width: 4 }} />
      </div>

      {shadow && (
        <>
          <PixelCorner
            size={borderSize * 2}
            fillBorder={shadowColor}
            pixelSize={borderSize}
            style={{
              position: "absolute",
              top: borderSize,
              left: borderSize,
              transform: "scale(-1,-1)",
            }}
          />
          <div
            style={{
              position: "absolute",
              background: shadowColor,
              top: cornerSize,
              bottom: borderSize * 2,
              left: borderSize,
              width: borderSize,
            }}
          />
          <div
            style={{
              position: "absolute",
              background: shadowColor,
              top: borderSize,
              left: cornerSize,
              right: borderSize * 2,
              height: borderSize,
            }}
          />
        </>
      )}
    </div>
  );
}
