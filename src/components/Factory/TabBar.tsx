import React from "react";
import BackgroundIcon from "../shared/images/BackgroundIcon";
import BannyBodyIcon from "../shared/images/BannyBodyIcon";
import OutfitIcon from "../shared/images/OutfitIcon";
import TabEdge from "../shared/images/TabEdge";
import { Tab } from "./Drawer";
import HeadgearIcon from "../shared/images/HeadgearIcon";
import SwordIcon from "../shared/images/SwordIcon";

export default function TabBar({
  tabs,
  activeTab,
  onSelectTab,
}: {
  tabs: Tab[];
  activeTab: Tab;
  onSelectTab: (t: Tab) => void;
}) {
  const EDGE_WIDTH = 30; // Width of TabEdge elem

  return (
    <div style={{ position: "relative", width: "100%", height: 60 }}>
      <div
        style={{
          display: "flex",
          width: `calc(100% - ${EDGE_WIDTH + 4}px)`,
          paddingLeft: EDGE_WIDTH / 2 + 2,
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
                height: 60,
                flex: 1,
                // width: 140,
                marginRight: -(EDGE_WIDTH / 2),
                marginLeft: -(EDGE_WIDTH / 2),
                zIndex: active ? 10 : 10 - i,
              }}
              onClick={active ? undefined : () => onSelectTab(t)}
            >
              <div
                style={{
                  position: "absolute",
                  left: EDGE_WIDTH,
                  right: EDGE_WIDTH,
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
                width={EDGE_WIDTH}
                side="left"
              />
              <TabEdge
                active={active}
                style={{ position: "absolute", right: 0 }}
                width={EDGE_WIDTH}
                side="right"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
