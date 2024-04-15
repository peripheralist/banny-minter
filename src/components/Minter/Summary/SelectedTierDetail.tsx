import { Category } from "@/constants/nfts";
import { MinterContext } from "@/contexts/minterContext";
import { formatEther } from "juice-sdk-core";
import { useContext, useMemo, useRef } from "react";
import Fuzz from "../../pixelRenderers/Fuzz";

export default function SelectedTierDetail({
  category,
}: {
  category: Category;
}) {
  const { equipped, equipAnimation } = useContext(MinterContext);

  const ref = useRef<HTMLSpanElement>(null);

  const width = ref.current?.clientWidth;

  const tier = useMemo(() => equipped[category], [equipped, category]);

  const showFuzz = useMemo(
    () => equipAnimation?.category === category && width,
    [category, equipAnimation?.category, width]
  );

  return (
    <span ref={ref} style={{ color: "white", width: "100%" }}>
      {showFuzz ? (
        <Fuzz width={width!} height={12} pixelSize={4} fill="white" />
      ) : (
        <div
          style={{
            width: "100%",
            display: "inline-flex",
            justifyContent: "space-between",
          }}
        >
          <span>{tier?.name ? tier.name : "--"}</span>
          <span>{tier?.price ? formatEther(tier.price) : "--"} ETH </span>
        </div>
      )}
    </span>
  );
}
