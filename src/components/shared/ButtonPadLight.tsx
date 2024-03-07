import { CSSProperties, PropsWithChildren } from "react";
import Beacon from "./Beacon";
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
  pressed?: boolean;
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
        <Beacon on={active} />
      </div>
    </ButtonPad>
  );
}
