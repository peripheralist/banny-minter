import { FONT_SIZE } from "@/constants/fontSize";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function Downloadable({
  children,
  downloadHref,
  fileName,
}: PropsWithChildren<{ downloadHref: string; fileName: string }>) {
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
        }}
        download={fileName}
        href={downloadHref}
      >
        ↓SVG
      </Link>
    </div>
  );
}
