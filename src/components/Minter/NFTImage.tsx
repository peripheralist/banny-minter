import { MinterContext } from "@/contexts/minterContext";
import { useBodies } from "@/hooks/queries/useBodies";
import { decodeNFTInfo } from "@/utils/tokenInfo";
import Image from "next/image";
import { CSSProperties, useCallback, useContext, useMemo } from "react";
import Fuzz from "../pixelRenderers/Fuzz";

export default function NFTImage({ imageSize }: { imageSize: number }) {
  const { body, outfit, background, bodyFrame, outfitFrame, backgroundFrame } =
    useContext(MinterContext);

  const bodies = useBodies();

  const bodyImgUrl = useMemo(() => {
    const uri = bodies.data?.nfttiers.find(
      (t) => t.tierId === body?.tierId
    )?.resolvedUri;

    return decodeNFTInfo(uri)?.image;
  }, [body, bodies]);

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
    []
  );

  const backgroundUrl = background
    ? `/assets/banny/background/${background}`
    : undefined;
  const outfitUrl = outfit ? `/assets/banny/outfit/${outfit}` : undefined;

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        // border: "4px solid black",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          backgroundImage: `url(${backgroundUrl})`,
          width: imageSize,
          maxWidth: imageSize,
          height: imageSize,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <_Fuzz
          style={{
            maskSize: imageSize,
          }}
          frame={backgroundFrame}
        />
        {bodyImgUrl && (
          <>
            <Image
              style={{
                position: "absolute",
              }}
              width={imageSize}
              height={imageSize}
              src={bodyImgUrl}
              alt={"body"}
            />
            <_Fuzz
              style={{
                maskImage: bodyImgUrl,
                maskSize: imageSize,
              }}
              frame={bodyFrame}
            />
          </>
        )}
        {outfitUrl && (
          <>
            <Image
              style={{ position: "absolute" }}
              width={imageSize}
              height={imageSize}
              src={outfitUrl}
              alt={"outfit"}
            />
            <_Fuzz
              style={{
                maskImage: `url(${outfitUrl})`,
                maskSize: imageSize,
              }}
              frame={outfitFrame}
            />
          </>
        )}
      </div>
    </div>
  );
}
