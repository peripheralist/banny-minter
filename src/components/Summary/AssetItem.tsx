import React, { useContext, useRef } from "react";
import { AssetType } from "../Factory/Controls";
import { EditorContext } from "@/contexts/editorContext";
import Fuzz from "../Fuzz";

export default function AssetItem({ assetType }: { assetType: AssetType }) {
  const { body, bodyFrame, background, backgroundFrame, outfit, outfitFrame } =
    useContext(EditorContext);

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

  return (
    <div style={{ display: "inline-flex", alignItems: "center" }}>
      <span ref={ref}>
        {frame && frame !== 1 && width ? (
          <Fuzz width={width} height={12} pixelSize={4} fill="black" />
        ) : (
          asset?.split(".")[0] || "--"
        )}
      </span>
    </div>
  );
}
