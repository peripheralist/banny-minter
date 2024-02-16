import { CSSProperties, PropsWithChildren } from "react";
import ButtonPad from "./ButtonPad";

export default function ButtonPadLight({
  children,
  active,
  ...props
}: PropsWithChildren<{
  fillBg?: CSSProperties["fill"];
  fillFg?: CSSProperties["fill"];
  radius?: number;
  onClick?: VoidFunction;
  style?: CSSProperties;
  active?: boolean;
}>) {
  return (
    <ButtonPad {...props}>
      {children}

      <div
        style={{
          position: "absolute",
          right: 4,
          bottom: 4,
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            background: "black",
            position: "relative",
            borderRadius: 2,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 4,
              left: 4,
              width: 6,
              height: 6,
              borderTopLeftRadius: 1,
              background: active ? "white" : "black",
            }}
          />
        </div>
      </div>
    </ButtonPad>
  );
}
