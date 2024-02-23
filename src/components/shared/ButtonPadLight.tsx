import { CSSProperties, PropsWithChildren } from "react";
import ButtonPad from "./ButtonPad";
import Fuzz from "../pixelRenderers/Fuzz";

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
            width: 20,
            height: 20,
            background: "black",
            position: "relative",
            borderRadius: 2,
          }}
        >
          {active && (
            <Fuzz
              style={{ position: "absolute", left: 4, top: 4 }}
              width={12}
              height={12}
              fill="white"
              interval={500}
              pixelSize={6}
            />
          )}
        </div>
      </div>
    </ButtonPad>
  );
}
