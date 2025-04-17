import { COLORS } from "@/constants/colors";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { CSSProperties, PropsWithChildren } from "react";
import RoundedFrame from "./RoundedFrame";

export default function HeaderFrame({
  children,
  header,
  sectionStyle,
  contentStyle,
  onScrollFinish,
  onClick,
}: PropsWithChildren<{
  header: string | JSX.Element;
  sectionStyle?: CSSProperties;
  contentStyle?: CSSProperties;
  onScrollFinish?: VoidFunction;
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
              padding: "8px 16px",
              color: COLORS.banana200,
              width: "100%",
            }}
          >
            {header}
          </h4>
        </RoundedFrame>
      </div>

      <RoundedFrame
        background={COLORS.banana50}
        containerStyle={{
          width: "100%",
          height: `calc(100% - ${headerHeight}px)`,
        }}
      >
        <div
          onScroll={
            onScrollFinish
              ? (e) => {
                  const { scrollTop, clientHeight, scrollHeight } =
                    e.currentTarget;

                  if (
                    scrollHeight - (scrollTop + clientHeight) <
                    Math.max(1000, clientHeight)
                  ) {
                    onScrollFinish();
                  }
                }
              : undefined
          }
          style={{
            overflow: "auto",
            height: "100%",
            width: "100%",
            ...contentStyle,
          }}
        >
          {children}
        </div>
      </RoundedFrame>
    </div>
  );
}
