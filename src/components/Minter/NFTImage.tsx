import { NFTCategory } from "@/constants/nfts";
import { MinterContext } from "@/contexts/minterContext";
import Image from "next/image";
import { CSSProperties, useCallback, useContext } from "react";
import Fuzz from "../pixelRenderers/Fuzz";

const orderedLayers: NFTCategory[] = [
  "world",
  "backside",
  "body",
  "suitBottom",
  "suitTop",
  "suit",
  "onesie",
  "face",
  "eyes",
  "mouth",
  "head",
  "headgear",
  "necklace",
  "shoe",
  "fist",
  "topping",
];

export default function NFTImage({ imageSize }: { imageSize: number }) {
  const {
    equipped: { get },
    changeAssetAnimation,
  } = useContext(MinterContext);

  const animationCategory = changeAssetAnimation?.category;

  const _Fuzz = useCallback(
    ({ frame, style }: { frame: number | undefined; style?: CSSProperties }) =>
      !frame || frame === 1 ? null : (
        <Fuzz
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            maskPosition: "center",
            ...style,
          }}
          width={imageSize}
          height={imageSize}
          fill="#ffffff"
          pixelSize={4}
          density={0.75 - frame}
        />
      ),
    [imageSize]
  );

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "relative",
          width: imageSize,
          height: imageSize,
        }}
      >
        {orderedLayers.map((l) => {
          const src = get[l]?.image;

          if (!src) return null;

          return (
            <>
              <Image
                style={{
                  position: "absolute",
                }}
                width={imageSize}
                height={imageSize}
                src={src}
                alt={l}
              />
              {animationCategory === l ? (
                <_Fuzz
                  style={{
                    maskImage: src,
                    maskSize: imageSize,
                  }}
                  frame={changeAssetAnimation?.frame}
                />
              ) : null}
            </>
          );
        })}
      </div>
    </div>
  );
}
