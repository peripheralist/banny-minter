import {
  CSSProperties,
  MouseEventHandler,
  PropsWithChildren,
  Ref,
  useCallback,
} from "react";
import PixelCorner from "../pixelRenderers/PixelCorner";

const clipPath = `polygon(
  4px 8px,
  8px 8px,
  8px 4px,

  calc(100% - 8px) 4px,
  calc(100% - 8px) 8px,
  calc(100% - 4px) 8px,

  calc(100% - 4px) calc(100% - 8px),
  calc(100% - 8px) calc(100% - 8px),
  calc(100% - 8px) calc(100% - 4px),

  8px calc(100% - 4px),
  8px calc(100% - 8px),
  4px calc(100% - 8px)
  )`;

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
  const cornerSize = 8;
  const borderSize = 4;

  const Corner = useCallback(
    ({ _style }: { _style?: CSSProperties }) => (
      <PixelCorner
        fillInner={background}
        fillBorder={_borderColor}
        style={_style}
      />
    ),
    [background, _borderColor]
  );

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        ...containerStyle,
      }}
      onClick={(e) => onClick?.(e)}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background,
          clipPath,
        }}
      />

      {/* top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 12,
          right: 12,
          height: 4,
          background: _borderColor,
        }}
      />

      {/* bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 12,
          right: 12,
          height: 4,
          background: _borderColor,
        }}
      />

      {/* left */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Corner />

        <div style={{ flex: 1 }}>
          <div
            style={{
              height: "100%",
              background: _borderColor,
              width: 4,
              float: "left",
            }}
          />
        </div>

        <Corner _style={{ transform: "scale(1, -1)" }} />
      </div>

      {/* right */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Corner _style={{ transform: "scale(-1, 1)" }} />

        <div style={{ flex: 1 }}>
          <div
            style={{
              height: "100%",
              background: _borderColor,
              width: 4,
              float: "right",
            }}
          />
        </div>

        <Corner _style={{ transform: "scale(-1, -1)" }} />
      </div>

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
            boxSizing: "border-box",
            width: "100%",
            height: "100%",
            zIndex: 1,
            clipPath,
            ...style,
          }}
          ref={contentRef}
        >
          {children}
        </div>
      </div>

      {shadow && (
        <>
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
