import { MinterContext } from "@/contexts/minterContext";
import Image from "next/image";
import { CSSProperties, useCallback, useContext } from "react";
import Fuzz from "../Fuzz";

const IMG_SIZE = 440;

export default function NFTImage() {
  const { body, outfit, background, bodyFrame, outfitFrame, backgroundFrame } =
    useContext(MinterContext);

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
          width={IMG_SIZE}
          height={IMG_SIZE}
          fill="#ffffff"
          pixelSize={4}
          density={0.75 - frame}
        />
      ),
    []
  );

  const bodyUrl = body ? `/assets/banny/body/${body}` : undefined;
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
          width: IMG_SIZE,
          maxWidth: IMG_SIZE,
          height: IMG_SIZE,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <_Fuzz
          style={{
            maskImage: `url(${backgroundUrl})`,
            maskSize: IMG_SIZE,
          }}
          frame={backgroundFrame}
        />
        {body && bodyUrl && (
          <Image
            style={{
              position: "absolute",
              // need an offset bc alien body is off-center
              marginLeft: body === "alien.png" ? IMG_SIZE * 0.035 : 0,
            }}
            width={IMG_SIZE * 1.4}
            height={IMG_SIZE * 1.4}
            src={bodyUrl}
            alt={body}
          />
        )}
        <_Fuzz
          style={{
            maskImage: `url(${bodyUrl})`,
            maskSize: IMG_SIZE * 1.4,
          }}
          frame={bodyFrame}
        />
        {outfit && outfitUrl && (
          <Image
            style={{ position: "absolute" }}
            width={IMG_SIZE * 1.05}
            height={IMG_SIZE * 1.05}
            src={outfitUrl}
            alt={outfit}
          />
        )}
        <_Fuzz
          style={{
            maskImage: `url(${outfitUrl})`,
            maskSize: IMG_SIZE,
          }}
          frame={outfitFrame}
        />
      </div>
    </div>
  );
}
