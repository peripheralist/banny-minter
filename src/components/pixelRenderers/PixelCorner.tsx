import { CSSProperties, useMemo } from "react";

export default function PixelCorner({
  style,
  fillOuter,
  fillInner,
  fillBorder,
}: {
  style?: CSSProperties;
  fillOuter?: CSSProperties["background"];
  fillInner?: CSSProperties["background"];
  fillBorder?: CSSProperties["background"];
}) {
  const html = useMemo(() => {
    const outer = fillOuter
      ? `<path d="M0 8H4V4H8V0H0V8Z" fill="${fillOuter}"/>`
      : "";

    const border = fillBorder
      ? `<path d="M12 0H8V4H4V8H0V12H4V8H8V4H12V0Z" fill="${fillBorder}" />`
      : "";

    const inner = fillInner
      ? `<path d="M12 4H8V8H4V12H12V4Z" fill="${fillInner}" />`
      : "";

    return `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">${outer}${border}${inner}</svg>`;
  }, [fillOuter, fillBorder, fillInner]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 12,
        height: 12,
        ...style,
      }}
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
}
