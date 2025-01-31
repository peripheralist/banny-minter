import { FONT_SIZE } from "@/constants/fontSize";
import { useIsHover } from "@/hooks/useIsHover";
import { CSSProperties } from "react";
import { Address } from "viem";

export default function FormattedAddress({
  address,
  position,
  style,
}: {
  address: Address | undefined;
  position?: "left" | "right";
  style?: CSSProperties;
}) {
  const { isHover, ...hoverProps } = useIsHover();

  if (!address) return null;

  return (
    <div
      style={{ position: "relative", cursor: "default", ...style }}
      {...hoverProps}
    >
      {address.substring(0, 6)}…{address.substring(38)}
      {isHover && (
        <div
          style={{
            position: "absolute",
            right: position === "left" ? 0 : undefined,
            background: "black",
            color: "white",
            padding: "4px 8px",
            zIndex: 999,
            fontSize: FONT_SIZE.sm,
          }}
        >
          {address}
        </div>
      )}
    </div>
  );
}
