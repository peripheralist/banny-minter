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
import CheckBadge from "../shared/images/CheckBadge";
import TabEdge from "../shared/images/TabEdge";
import BannyBody from "../shared/images/BannyBody";
import Outfit from "../shared/images/Outfit";
import Background from "../shared/images/Background";

type Tab = keyof typeof ASSETS;

const tabs: Tab[] = ["BODY", "OUTFIT", "BACKGROUND"];

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

  const TabBar = useCallback(
    () => (
      <div style={{ position: "relative", width: "100%", height: 60 }}>
        <div
          style={{
            display: "flex",
            // width: "100%",
            width: IMG_SIZE * 4 - 24,
            paddingLeft: 17,
            position: "absolute",
          }}
        >
          {tabs.map((t, i) => {
            const active = activeTab === t;

            let icon: JSX.Element | undefined = undefined;

            switch (t) {
              case "BACKGROUND":
                icon = <Background active={active} />;
                break;
              case "BODY":
                icon = <BannyBody active={active} />;
                break;
              case "OUTFIT":
                icon = <Outfit active={active} />;
                break;
            }

            return (
              <div
                key={t}
                style={{
                  position: "relative",
                  cursor: "default",
                  height: 60,
                  flex: 1,
                  // width: 140,
                  marginRight: -15,
                  marginLeft: -15,
                  zIndex: active ? 10 : 10 - i,
                }}
                onClick={active ? undefined : () => setActiveTab(t)}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 30,
                    right: 30,
                    top: 0,
                    bottom: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: active ? "white" : "#F8B431",
                    borderTop: "2px solid",
                    borderColor: "white",
                  }}
                >
                  {icon}
                </div>

                <TabEdge
                  active={active}
                  style={{ position: "absolute", left: 0 }}
                  side="left"
                />
                <TabEdge
                  active={active}
                  style={{ position: "absolute", right: 0 }}
                  side="right"
                />
              </div>
            );
          })}
        </div>
      </div>
    ),
    [activeTab]
  );

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
                cursor: "pointer",
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
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: IMG_SIZE * 4,
        zIndex: 1,
        padding: 20,
        ...style,
      }}
    >
      <TabBar />

      <div
        style={{
          position: "relative",
          overflow: "auto",
          flex: 1,
          border: "2px solid #F8B431",
          boxSizing: "border-box",
          background: "#F8B431",
          zIndex: 1,
        }}
      >
        <AssetGrid />
      </div>

      <div
        style={{
          color: "white",
          zIndex: 1,
          textAlign: "center",
          paddingTop: 20,
          cursor: "pointer",
        }}
        onClick={randomize}
      >
        Randomize (space)
      </div>

      <div
        style={{
          background: "#F8B431",
          position: "absolute",
          left: 0,
          top: 60,
          bottom: 0,
          right: 0,
        }}
      />
    </div>
  );
}
