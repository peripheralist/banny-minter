import { NFTCategory } from "@/constants/nfts";
import { MinterContext } from "@/contexts/minterContext";
import { formatEther } from "juice-sdk-core";
import { useContext, useMemo, useRef } from "react";
import Fuzz from "../../pixelRenderers/Fuzz";

export default function SelectedAssetDetail({
  category,
}: {
  category: NFTCategory;
}) {
  const {
    equipped: { get },
    changeAssetAnimation,
  } = useContext(MinterContext);

  const ref = useRef<HTMLSpanElement>(null);

  const width = ref.current?.clientWidth;

  const asset = useMemo(() => get[category], [get, category]);

  const frame = useMemo(
    () =>
      changeAssetAnimation?.category === category
        ? changeAssetAnimation.frame
        : undefined,
    [category, changeAssetAnimation]
  );

  return (
    <div style={{ display: "inline-flex", color: "white" }}>
      <span ref={ref}>
        {frame && frame !== 1 && width ? (
          <Fuzz width={width} height={12} pixelSize={4} fill="white" />
        ) : asset?.name ? (
          <span>
            {asset.price ? formatEther(asset.price) : "--"} ETH {asset.name}
          </span>
        ) : (
          "--"
        )}
      </span>
    </div>
  );
}
