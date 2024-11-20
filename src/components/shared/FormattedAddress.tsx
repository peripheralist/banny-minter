import { FONT_SIZE } from "@/constants/fontSize";
import { useIsHover } from "@/hooks/useIsHover";
import { Address } from "viem";

export default function FormattedAddress({
  address,
}: {
  address: Address | undefined;
}) {
  const { isHover, ...hoverProps } = useIsHover();

  if (!address) return null;

  return (
    <div {...hoverProps}>
      {address.substring(0, 6)}…{address.substring(38)}
      {isHover && (
        <div
          style={{
            position: "absolute",
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
