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
  const {
    equipped: { get },
    equipAnimation,
  } = useContext(MinterContext);

  const ref = useRef<HTMLSpanElement>(null);

  const width = ref.current?.clientWidth;

  const tier = useMemo(() => get[category], [get, category]);

  const showFuzz = useMemo(
    () => equipAnimation?.category === category && width,
    [category, equipAnimation?.category, width]
  );

  return (
    <div style={{ display: "inline-flex", color: "white" }}>
      <span ref={ref}>
        {showFuzz ? (
          <Fuzz width={width!} height={12} pixelSize={4} fill="white" />
        ) : (
          <span>
            {tier?.price ? formatEther(tier.price) : "--"} ETH{" "}
            {tier?.name ? tier.name : "--"}
          </span>
        )}
      </span>
    </div>
  );
}
