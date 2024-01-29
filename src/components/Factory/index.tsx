import { BACKGROUND, BODY, OUTFIT } from "@/constants/assets";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

const IMG_SIZE = 700;

export default function Index() {
  const [bodyIdx, setBodyIdx] = useState<number>(0);
  const [outfitIdx, setOutfitIdx] = useState<number>(0);
  const [backgroundIdx, setBackgroundIdx] = useState<number>(0);

  const body = BODY[bodyIdx];
  const outfit = OUTFIT[outfitIdx];
  const background = BACKGROUND[backgroundIdx];

  const decrementIdx = useCallback((t: "body" | "bg" | "outfit") => {
    switch (t) {
      case "bg":
        setBackgroundIdx((i) => (i ? i - 1 : BACKGROUND.length - 1));
        break;
      case "body":
        setBodyIdx((i) => (i ? i - 1 : BODY.length - 1));
        break;
      case "outfit":
        setOutfitIdx((i) => (i ? i - 1 : OUTFIT.length - 1));
        break;
    }
  }, []);

  const incrementIdx = useCallback((t: "body" | "bg" | "outfit") => {
    switch (t) {
      case "bg":
        setBackgroundIdx((i) => (i === BACKGROUND.length - 1 ? 0 : i + 1));
        break;
      case "body":
        setBodyIdx((i) => (i === BODY.length - 1 ? 0 : i + 1));
        break;
      case "outfit":
        setOutfitIdx((i) => (i === OUTFIT.length - 1 ? 0 : i + 1));
        break;
    }
  }, []);

  const randomize = useCallback(() => {
    setBodyIdx(Math.floor(Math.random() * BODY.length));
    setOutfitIdx(Math.floor(Math.random() * OUTFIT.length));
    setBackgroundIdx(Math.floor(Math.random() * BACKGROUND.length));
  }, []);

  useEffect(() => {
    randomize();
  }, [randomize]);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      switch (e.code) {
        case "Space":
          randomize();
          break;
      }
    };

    document.addEventListener("keypress", listener);

    return () => document.removeEventListener("keypress", listener);
  }, [randomize]);

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        color: "black",
        background: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "35%",
          gap: 40,
          maxWidth: 600,
          padding: 30,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <button onClick={() => decrementIdx("body")}>{"<"}</button>
          <button onClick={() => incrementIdx("body")}>{">"}</button>
          <h2>banny</h2>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <button onClick={() => decrementIdx("outfit")}>{"<"}</button>
          <button onClick={() => incrementIdx("outfit")}>{">"}</button>
          <h2>outfit</h2>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <button onClick={() => decrementIdx("bg")}>{"<"}</button>
          <button onClick={() => incrementIdx("bg")}>{">"}</button>
          <h2>background</h2>
        </div>

        <div>
          <button onClick={randomize}>Surprise ( SPACE )</button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            backgroundImage: `url("/assets/banny/background/${background}")`,
            width: IMG_SIZE,
            height: IMG_SIZE,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Image
            style={{ marginLeft: bodyIdx === 0 ? IMG_SIZE * 0.035 : 0 }}
            width={IMG_SIZE * 1.4}
            height={IMG_SIZE * 1.4}
            src={`/assets/banny/body/${body}`}
            alt={body}
          />
          <Image
            style={{ position: "absolute" }}
            width={IMG_SIZE * 1.05}
            height={IMG_SIZE * 1.05}
            src={`/assets/banny/outfit/${outfit}`}
            alt={body}
          />
        </div>
      </div>
    </div>
  );
}
