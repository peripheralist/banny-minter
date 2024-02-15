import { ASSETS } from "@/constants/assets";
import { EditorContext } from "@/contexts/editorContext";
import Image from "next/image";
import {
  CSSProperties,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import CheckBadge from "../shared/images/CheckBadgeIcon";
import TabBar from "./TabBar";
import { COLORS } from "@/constants/colors";
import PixelShape from "../PixelShape";

export type Tab = keyof typeof ASSETS;

const tabs: Tab[] = ["BODY", "OUTFIT", "HEADGEAR", "GRIP_RIGHT", "BACKGROUND"];

const IMG_SIZE = 150;

export default function Drawer({ style }: { style?: CSSProperties }) {
  const [activeTab, setActiveTab] = useState<Tab>("BODY");

  const {
    body,
    outfit,
    background,
    setBody,
    setOutfit,
    setBackground,
    randomize,
  } = useContext(EditorContext);

  useEffect(() => {
    if (!randomize) return;

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

  const AssetGrid = useCallback(() => {
    let fn: Dispatch<SetStateAction<string>> | undefined;
    let multiplier = 1;

    switch (activeTab) {
      case "BACKGROUND":
        fn = setBackground;
        break;
      case "BODY":
        fn = setBody;
        multiplier = 1.5;
        break;
      case "OUTFIT":
        fn = setOutfit;
        multiplier = 1.2;
        break;
    }

    const _size = IMG_SIZE * multiplier;

    return (
      <div
        style={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: "repeat(4, 1fr)",
          width: "100%",
          boxSizing: "border-box",
          overflow: "auto",
        }}
      >
        {ASSETS[activeTab].map((a) => {
          let active = false;

          switch (activeTab) {
            case "BACKGROUND":
              active = background === a;
              break;
            case "BODY":
              active = body === a;
              break;
            case "OUTFIT":
              active = outfit === a;
              break;
          }

          return (
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: active ? "4px solid white" : "none",
                // borderColor: active ? "white" : "transparent",
                boxSizing: "border-box",
                // opacity: active ? 1 : 0.5,
                background: "white",
                width: IMG_SIZE,
                height: IMG_SIZE,
                overflow: "hidden",
              }}
              key={a}
              onClick={() => fn?.(a)}
            >
              <Image
                width={_size}
                height={_size}
                src={`/assets/banny/${activeTab.toLowerCase()}/${a}`}
                alt={a}
              />

              {active && (
                <CheckBadge
                  style={{ position: "absolute", bottom: 0, left: 0 }}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }, [setBackground, setBody, setOutfit, activeTab, background, body, outfit]);

  return (
    <div
      style={{
        display: "flex",
        height: "calc(100vh - 20px)",
      }}
    >
      <div>
        <PixelShape
          width={20}
          height={40}
          fill={COLORS.brown}
          plot={(x, y) => y < x * 2}
        />
        <div
          style={{
            background: COLORS.brown,
            width: 20,
            height: "calc(100% - 40px)",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          minWidth: IMG_SIZE * 4,
          zIndex: 1,
          padding: 20,
          ...style,
        }}
      >
        <h1
          style={{
            zIndex: 1,
            margin: 0,
            textAlign: "center",
            fontSize: "3rem",
          }}
        >
          1-800-BANANA
        </h1>
        <div
          style={{
            position: "relative",
            flex: 1,
            zIndex: 1,
            marginTop: 20,
            overflow: "hidden",
            background: "#00000044",
            border: "2px solid #00000044",
          }}
        >
          <div style={{ maxHeight: "100%", overflow: "auto" }}>
            <AssetGrid />
          </div>

          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: 6,
              background: "#00000044",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 6,
              right: 0,
              height: 6,
              background: "#00000044",
            }}
          />
        </div>

        <div
          style={{
            display: "inline-block",
            color: "white",
            zIndex: 1,
            padding: 20,
            margin: "0 auto",
          }}
          onClick={randomize}
        >
          Randomize (space)
        </div>

        <TabBar tabs={tabs} activeTab={activeTab} onSelectTab={setActiveTab} />

        <div
          style={{
            background: "#F8B431",
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            borderTop: "2px solid white",
          }}
        />
      </div>
    </div>
  );
}
