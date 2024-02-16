import { EditorContext } from "@/contexts/editorContext";
import React, {
  CSSProperties,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Fuzz from "../Fuzz";
import Image from "next/image";
import { useAnimation } from "@/hooks/useAnimation";

const IMG_SIZE = 480;

export default function NFTImage() {
  const { body, outfit, background, bodyFrame, outfitFrame, backgroundFrame } =
    useContext(EditorContext);

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

  const bodyUrl = `/assets/banny/body/${body}`;
  const backgroundUrl = `/assets/banny/background/${background}`;
  const outfitUrl = `/assets/banny/outfit/${outfit}`;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
          border: "40px solid white",
        }}
      >
        <_Fuzz
          style={{
            maskImage: `url(${backgroundUrl})`,
            maskSize: IMG_SIZE,
          }}
          frame={backgroundFrame}
        />
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
        <_Fuzz
          style={{
            maskImage: `url(${bodyUrl})`,
            maskSize: IMG_SIZE * 1.4,
          }}
          frame={bodyFrame}
        />
        <Image
          style={{ position: "absolute" }}
          width={IMG_SIZE * 1.05}
          height={IMG_SIZE * 1.05}
          src={outfitUrl}
          alt={body}
        />
        <_Fuzz
          style={{
            maskImage: `url(${outfitUrl})`,
            maskSize: IMG_SIZE,
          }}
          frame={outfitFrame}
        />

        <div
          style={{
            top: -20,
            left: -20,
            width: IMG_SIZE + 80,
            height: IMG_SIZE + 80,
            position: "absolute",
            background: "#00000044",
            zIndex: -1,
          }}
        />
      </div>
    </div>
  );
}
