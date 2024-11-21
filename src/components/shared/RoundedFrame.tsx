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
  const cornerSize = 8;
  const borderSize = 4;

  const Corner = useCallback(
    ({ _style }: { _style?: CSSProperties }) => (
      <PixelCorner
        fillInner={background}
        fillBorder={_borderColor}
        style={{ ..._style, zIndex: 1 }}
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: borderSize,
            right: borderSize,
            bottom: borderSize,
            top: borderSize,
            background,
            zIndex: 1
          }}
        />

        <div
          style={{
            zIndex: 1,
            padding: 4,
            boxSizing: "border-box",
            width: "100%",
            height: "100%",
            ...style,
          }}
          ref={contentRef}
        >
          {children}
        </div>
      </div>

      {/* top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 12,
          right: 12,
          height: 4,
          background: _borderColor,
          zIndex: 1,
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
          zIndex: 1,
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
              zIndex: 1,
            }}
          />
          <div
            style={{
              height: "100%",
              background,
              width: 8,
              float: "right",
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
              float: "left",
              height: "100%",
              background,
              width: 8,
            }}
          />
          <div
            style={{
              height: "100%",
              background: _borderColor,
              width: 4,
              float: "right",
              zIndex: 1,
            }}
          />
        </div>

        <Corner _style={{ transform: "scale(-1, -1)" }} />
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
