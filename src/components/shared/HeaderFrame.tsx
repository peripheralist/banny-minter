import { COLORS } from "@/constants/colors";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { CSSProperties, PropsWithChildren } from "react";
import RoundedFrame from "./RoundedFrame";

export default function HeaderFrame({
  children,
  header,
  secondaryHeader,
  sectionStyle,
  contentStyle,
  onScrollFinish,
  onClick,
}: PropsWithChildren<{
  header: string | JSX.Element;
  secondaryHeader?: string | JSX.Element;
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
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 16,
          }}
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
              flex: 1,
            }}
          >
            {header}
          </h4>

          {secondaryHeader && (
            <div
              style={{
                textTransform: "uppercase",
                padding: "8px 16px",
                color: COLORS.banana200,
              }}
            >
              {secondaryHeader}
            </div>
          )}
        </RoundedFrame>
      </div>

      <RoundedFrame
        background={COLORS.banana50}
        containerStyle={{
          width: "100%",
          maxWidth: "100%",
          height: `calc(100% - ${headerHeight}px)`,
        }}
        style={{
          height: "100%",
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
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
            maxHeight: "100%",
            boxSizing: "border-box",
            ...contentStyle,
          }}
        >
          {children}
        </div>
      </RoundedFrame>
    </div>
  );
}
