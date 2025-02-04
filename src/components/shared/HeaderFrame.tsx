import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import React, { CSSProperties, PropsWithChildren } from "react";
import RoundedFrame from "./RoundedFrame";
import { COLORS } from "@/constants/colors";

export default function HeaderFrame({
  children,
  header,
  sectionStyle,
  contentStyle,
  onClick,
}: PropsWithChildren<{
  header: string | JSX.Element;
  sectionStyle?: CSSProperties;
  contentStyle?: CSSProperties;
  onClick?: VoidFunction;
}>) {
  const { measuredRef: headerRef, height: headerHeight } = useMeasuredRef();

  return (
    <div style={{ width: "100%", ...sectionStyle }} onClick={onClick}>
      <div ref={headerRef} style={{ paddingBottom: 8 }}>
        <RoundedFrame
          background={"black"}
          style={{ display: "flex", alignItems: "baseline" }}
          containerStyle={{
            flex: 1,
            marginBottom: -24,
            paddingBottom: 10,
          }}
        >
          <h4
            style={{
              textTransform: "uppercase",
              padding: "4px 12px",
              color: COLORS.banana200,
            }}
          >
            {header}
          </h4>
        </RoundedFrame>
      </div>

      <RoundedFrame
        background={COLORS.banana50}
        style={{ overflow: "auto", ...contentStyle }}
        containerStyle={{
          width: "100%",
          height: `calc(100% - ${headerHeight}px)`,
        }}
      >
        {children}
      </RoundedFrame>
    </div>
  );
}
