import { CATEGORIES } from "@/constants/nfts";
import { MinterContext } from "@/contexts/minterContext";
import Image from "next/image";
import { CSSProperties, useCallback, useContext } from "react";
import Fuzz from "../pixelRenderers/Fuzz";

export default function NFTImage({ imageSize }: { imageSize: number }) {
  const {
    equipped: { get },
    equipCategoryAnimation,
  } = useContext(MinterContext);

  const animationCategory = equipCategoryAnimation?.category;

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
          fill="white"
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
        {CATEGORIES.map((c) => {
          const tier = get[c];

          if (!tier?.image) return null;

          return (
            <>
              <Image
                style={{
                  position: "absolute",
                }}
                width={imageSize}
                height={imageSize}
                src={tier.image}
                alt={`${c}: ${tier.name}`}
              />
              {animationCategory === c ? (
                <_Fuzz
                  style={{
                    maskImage: tier.image,
                    maskSize: imageSize,
                  }}
                  frame={equipCategoryAnimation?.frame}
                />
              ) : null}
            </>
          );
        })}
      </div>
    </div>
  );
}
