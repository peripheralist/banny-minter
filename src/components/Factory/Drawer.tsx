import { ASSETS } from "@/constants/assets";
import { EditorContext } from "@/contexts/editorContext";
import Image from "next/image";
import {
  CSSProperties,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import CheckBadge from "../shared/images/CheckBadgeIcon";
import Buttons from "./Buttons";

export type AssetType = keyof typeof ASSETS;

const tabs: AssetType[] = [
  "BODY",
  "OUTFIT",
  "HEADGEAR",
  "GRIP_RIGHT",
  "BACKGROUND",
];

const IMG_SIZE = 150;
const GRID_WIDTH = IMG_SIZE * 4 + 6;

export default function Drawer({ style }: { style?: CSSProperties }) {
  const [prevTab, setPrevTab] = useState<AssetType>();
  const [activeTab, _setActiveTab] = useState<AssetType>("BODY");

  const setActiveTab = useCallback(
    (t: AssetType) => {
      setPrevTab(activeTab);
      _setActiveTab(t);

      setTimeout(() => {
        setPrevTab(undefined);
      }, 200);
    },
    [activeTab]
  );

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

  const AssetGrid = useCallback(
    ({ assetType, style }: { assetType: AssetType; style?: CSSProperties }) => {
      let fn: ((s: string) => void) | undefined;
      let multiplier = 1;

      switch (assetType) {
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
            width: GRID_WIDTH,
            minWidth: GRID_WIDTH,
            ...style,
          }}
        >
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
            {ASSETS[assetType].map((a) => {
              let active = false;

              switch (assetType) {
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
                    boxSizing: "border-box",
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
                    src={`/assets/banny/${assetType.toLowerCase()}/${a}`}
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
        </div>
      );
    },
    [setBackground, setBody, setOutfit, background, body, outfit]
  );

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 20,
        ...style,
      }}
    >
      <div
        style={{
          position: "relative",
          flex: 1,
          marginTop: 20,
          overflow: "hidden",
          background: "#00000064",
          border: "4px solid black",
        }}
      >
        <div
          style={{
            maxHeight: "100%",
            overflow: "auto",
            width: GRID_WIDTH,
            position: "relative",
            zIndex: 1,
          }}
        >
          {prevTab && (
            <AssetGrid
              assetType={prevTab}
              style={{
                position: "absolute",
                animation:
                  tabs.indexOf(activeTab) > tabs.indexOf(prevTab)
                    ? "slide-out-left .2s"
                    : "slide-out-right .2s",
              }}
            />
          )}
          <AssetGrid
            assetType={activeTab}
            style={
              prevTab
                ? {
                    animation:
                      tabs.indexOf(activeTab) > tabs.indexOf(prevTab)
                        ? "slide-in-left .2s"
                        : "slide-in-right .2s",
                  }
                : undefined
            }
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: 6,
            background: "#00000064",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 6,
            right: 0,
            height: 6,
            background: "#00000064",
            zIndex: 1,
          }}
        />
      </div>

      <Buttons tabs={tabs} activeTab={activeTab} onSelectTab={setActiveTab} />
      {/* <TabBar tabs={tabs} activeTab={activeTab} onSelectTab={setActiveTab} /> */}

      <div
        style={{
          display: "inline-block",
          color: "white",
          padding: 10,
          margin: "0 auto",
        }}
        onClick={randomize}
      >
        Randomize (space)
      </div>
    </div>
  );
}
