import { FONT_SIZE } from "@/constants/fontSize";
import Link from "next/link";
import { CSSProperties, PropsWithChildren } from "react";

export default function Downloadable({
  children,
  downloadHref,
  fileName,
  buttonStyle,
}: PropsWithChildren<{
  downloadHref: string;
  fileName: string;
  buttonStyle?: CSSProperties;
}>) {
  return (
    <div style={{ position: "relative" }}>
      {children}

      <Link
        style={{
          position: "absolute",
          bottom: 8,
          left: 8,
          fontSize: FONT_SIZE.xs,
          background: "white",
          ...buttonStyle,
        }}
        download={fileName}
        href={downloadHref}
      >
        ↓SVG
      </Link>
    </div>
  );
}
