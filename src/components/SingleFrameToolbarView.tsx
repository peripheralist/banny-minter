import React, { CSSProperties, PropsWithChildren } from "react";
import { TOOLBAR_HEIGHT } from "./Toolbar";
import { COLORS } from "@/constants/colors";
import RoundedFrame from "./shared/RoundedFrame";
import dynamic from "next/dynamic";

const Toolbar = dynamic(() => import("@/components/Toolbar"), { ssr: false });

export default function SingleFrameToolbarView({
  children,
  footer,
  frameStyle,
}: PropsWithChildren<{
  footer?: React.JSX.Element;
  frameStyle?: CSSProperties;
}>) {
  return (
    <div>
      <Toolbar />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: TOOLBAR_HEIGHT,
        }}
      >
        <style>{`body { background: ${COLORS.banana} }`}</style>

        <div style={{ marginTop: 20 }}>
          <RoundedFrame
            shadow
            style={{
              height: `calc(100vh - ${TOOLBAR_HEIGHT + 40}px)`,
              overflow: "scroll",
              background: "white",
              padding: 10,
              ...frameStyle,
            }}
          >
            {children}
          </RoundedFrame>

          {footer}
        </div>
      </div>
    </div>
  );
}
