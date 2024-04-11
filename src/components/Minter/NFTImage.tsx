import { CATEGORIES } from "@/constants/nfts";
import { MinterContext } from "@/contexts/minterContext";
import Image from "next/image";
import { CSSProperties, useCallback, useContext, useState } from "react";
import Fuzz from "../pixelRenderers/Fuzz";

export default function NFTImage({ imageSize }: { imageSize: number }) {
  const [unequippingFuzz, setUnequippingFuzz] = useState<string>();
  const {
    equipped: { get },
    equipCategoryAnimation,
  } = useContext(MinterContext);

  const _Fuzz = useCallback(
    ({
      frame,
      retrieveSvg,
      style,
    }: {
      frame: number | undefined;
      retrieveSvg?: boolean;
      style?: CSSProperties;
    }) =>
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
          getSvg={retrieveSvg ? setUnequippingFuzz : undefined}
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

          const isEquipping = equipCategoryAnimation?.equipping === c;
          const isUnequipping = equipCategoryAnimation?.unequipping === c;

          return (
            <>
              <Image
                style={{
                  position: "absolute",
                  ...(isUnequipping
                    ? {
                        maskImage: unequippingFuzz,
                        maskSize: imageSize,
                      }
                    : {}),
                }}
                width={imageSize}
                height={imageSize}
                src={tier.image}
                alt={`${c}: ${tier.name}`}
              />
              {isEquipping ? (
                <_Fuzz
                  style={{
                    maskImage: tier.image,
                    maskSize: imageSize,
                  }}
                  frame={equipCategoryAnimation?.frame}
                />
              ) : null}
              {isUnequipping ? (
                <_Fuzz
                  style={{
                    opacity: 0,
                  }}
                  frame={equipCategoryAnimation?.frame}
                  retrieveSvg
                />
              ) : null}
            </>
          );
        })}
      </div>
    </div>
  );
}
