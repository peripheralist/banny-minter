import React from "react";
import BackgroundIcon from "../shared/images/BackgroundIcon";
import BannyBodyIcon from "../shared/images/BannyBodyIcon";
import OutfitIcon from "../shared/images/OutfitIcon";
import TabEdge from "../shared/images/TabEdge";
import { Tab } from "./Drawer";
import HeadgearIcon from "../shared/images/HeadgearIcon";
import SwordIcon from "../shared/images/SwordIcon";
import PixelShape from "../PixelShape";
import { COLORS } from "@/constants/colors";

export default function TabBar({
  tabs,
  activeTab,
  onSelectTab,
}: {
  tabs: Tab[];
  activeTab: Tab;
  onSelectTab: (t: Tab) => void;
}) {
  const HEIGHT = 60;
  const SLOPE = 2;
  const SLOPE_WIDTH = HEIGHT / SLOPE;

  return (
    <div style={{ position: "relative", width: "100%", height: 60 }}>
      <div
        style={{
          display: "flex",
          width: `calc(100% - ${SLOPE_WIDTH}px)`,
          paddingLeft: SLOPE_WIDTH / 2,
          position: "absolute",
        }}
      >
        {tabs.map((t, i) => {
          const active = activeTab === t;

          let icon: JSX.Element | undefined = undefined;

          switch (t) {
            case "BACKGROUND":
              icon = <BackgroundIcon active={active} />;
              break;
            case "BODY":
              icon = <BannyBodyIcon active={active} />;
              break;
            case "HEADGEAR":
              icon = <HeadgearIcon active={active} />;
              break;
            case "OUTFIT":
              icon = <OutfitIcon active={active} />;
              break;
            case "GRIP_RIGHT":
              icon = <SwordIcon active={active} />;
          }

          return (
            <div
              key={t}
              style={{
                position: "relative",
                cursor: "default",
                height: HEIGHT,
                flex: 1,
                marginRight: -(SLOPE_WIDTH / 2),
                marginLeft: -(SLOPE_WIDTH / 2),
                zIndex: active ? 10 : 10 - i,
              }}
              onClick={active ? undefined : () => onSelectTab(t)}
            >
              <div
                style={{
                  position: "absolute",
                  left: SLOPE_WIDTH,
                  right: SLOPE_WIDTH,
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

              <PixelShape
                style={{ position: "absolute", left: 0 }}
                height={HEIGHT}
                width={SLOPE_WIDTH}
                pixelSize={2}
                fill={active ? "white" : COLORS.banana}
                plot={(x, y) => y < 2 * x}
              />
              <PixelShape
                style={{ position: "absolute", left: 0 }}
                height={HEIGHT}
                width={SLOPE_WIDTH}
                pixelSize={2}
                fill="white"
                plot={(x, y) => Math.abs(2 * x - y) < 3}
              />

              <PixelShape
                style={{
                  position: "absolute",
                  right: 0,
                  transform: `scale(-1,1)`,
                }}
                height={HEIGHT}
                width={SLOPE_WIDTH}
                pixelSize={2}
                fill={active ? "white" : COLORS.banana}
                plot={(x, y) => y < 2 * x}
              />
              <PixelShape
                style={{
                  position: "absolute",
                  right: 0,
                  transform: `scale(-1,1)`,
                }}
                height={HEIGHT}
                width={SLOPE_WIDTH}
                pixelSize={2}
                fill="white"
                plot={(x, y) => Math.abs(2 * x - y) < 3}
              />
              {i === tabs.length - 1 ? (
                <PixelShape
                  style={{
                    position: "absolute",
                    transform: `scale(-1,1)`,
                    right: -10,
                    top: 6,
                    zIndex: -1,
                    height: 54,
                    overflow: "hidden",
                  }}
                  height={56}
                  width={34}
                  pixelSize={2}
                  fill="#00000022"
                  plot={(x, y) => Math.abs(2 * x - 8 - y) < 12}
                />
              ) : (
                <>
                  <PixelShape
                    style={{
                      position: "absolute",
                      transform: `scale(-1,1)`,
                      right: -6,
                      top: 6,
                      zIndex: -1,
                      height: 54,
                      overflow: "hidden",
                    }}
                    height={56}
                    width={34}
                    pixelSize={2}
                    fill="#00000022"
                    plot={(x, y) => Math.abs(2 * x - 8 - y) < 12}
                  />
                  <PixelShape
                    style={{
                      position: "absolute",
                      transform: `scale(-1,1)`,
                      right: 10,
                      top: 6,
                      zIndex: -1,
                      height: 20,
                      overflow: "hidden",
                    }}
                    height={20}
                    width={10}
                    pixelSize={2}
                    fill="#00000022"
                    plot={(x, y) => Math.abs(2 * x + 2 - y) < 4}
                  />
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
