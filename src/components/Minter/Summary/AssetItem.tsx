import { TIER_NAMES } from "@/constants/nfts";
import { MinterContext } from "@/contexts/minterContext";
import { useBodies } from "@/hooks/queries/useBodies";
import { useTierPrice } from "@/hooks/useTierPrice";
import { useContext, useRef } from "react";
import Fuzz from "../../pixelRenderers/Fuzz";
import { AssetType } from "../Controls";
import { formatEther } from "juice-sdk-core";

export default function AssetItem({ assetType }: { assetType: AssetType }) {
  const { body, bodyFrame, background, backgroundFrame, outfit, outfitFrame } =
    useContext(MinterContext);

  const ref = useRef<HTMLSpanElement>(null);

  const bodies = useBodies();

  const width = ref.current?.clientWidth;
  let assetName: string | undefined = undefined;
  let tierId: number | undefined = undefined;
  let frame: number | undefined = undefined;

  switch (assetType) {
    case "BACKGROUND":
      assetName = background;
      frame = backgroundFrame;
      break;
    case "BODY":
      assetName = body ? TIER_NAMES[body] : undefined; // TODO how to store/display asset names. Tiers have no name. Do we need asset names at all?
      tierId = body;
      frame = bodyFrame;
      break;
    case "OUTFIT":
      assetName = outfit;
      frame = outfitFrame;
      break;
  }

  const price = useTierPrice({ assetType, tierId });

  return (
    <div
      style={{ display: "inline-flex", alignItems: "center", color: "white" }}
    >
      <span ref={ref}>
        {frame && frame !== 1 && width ? (
          <Fuzz width={width} height={12} pixelSize={4} fill="white" />
        ) : assetName ? (
          <span>
            {price.data ? formatEther(price.data) : "--"} ETH{" "}
            {assetName.split(".")[0]}
          </span>
        ) : (
          "--"
        )}
      </span>
    </div>
  );
}
