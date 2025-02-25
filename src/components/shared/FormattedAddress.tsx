import { FONT_SIZE } from "@/constants/fontSize";
import { useIsHover } from "@/hooks/useIsHover";
import { CSSProperties } from "react";
import { Address } from "viem";
import { useEnsName } from "wagmi";

export default function FormattedAddress({
  address,
  position,
  style,
}: {
  address: Address | undefined;
  position?: "left" | "right";
  style?: CSSProperties;
}) {
  const { data: ensName } = useEnsName({ address });

  const { isHover, ...hoverProps } = useIsHover();

  if (!address) return null;

  return (
    <div style={{ position: "relative", cursor: "default" }} {...hoverProps}>
      <span style={style}>
        {ensName ?? `${address.substring(0, 6)}…${address.substring(38)}`}
      </span>
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
