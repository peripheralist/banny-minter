import React, { useContext, useMemo, useRef } from "react";
import { AssetType } from "../Controls";
import { MinterContext } from "@/contexts/minterContext";
import Fuzz from "../../Fuzz";

export default function AssetItem({ assetType }: { assetType: AssetType }) {
  const { body, bodyFrame, background, backgroundFrame, outfit, outfitFrame } =
    useContext(MinterContext);

  const ref = useRef<HTMLSpanElement>(null);

  const width = ref.current?.clientWidth;
  let asset: string | undefined = undefined;
  let frame: number | undefined = undefined;

  switch (assetType) {
    case "BACKGROUND":
      asset = background;
      frame = backgroundFrame;
      break;
    case "BODY":
      asset = body;
      frame = bodyFrame;
      break;
    case "OUTFIT":
      asset = outfit;
      frame = outfitFrame;
      break;
  }

  const price = useMemo(() => 0.69, []);

  return (
    <div
      style={{ display: "inline-flex", alignItems: "center", color: "white" }}
    >
      <span ref={ref}>
        {frame && frame !== 1 && width ? (
          <Fuzz width={width} height={12} pixelSize={4} fill="white" />
        ) : asset ? (
          <span>
            {price} ETH {asset.split(".")[0]}
          </span>
        ) : (
          "--"
        )}
      </span>
    </div>
  );
}
