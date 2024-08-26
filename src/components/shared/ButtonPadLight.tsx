import { CSSProperties, PropsWithChildren } from "react";
import Light from "./Light";
import ButtonPad from "./ButtonPad";

export default function ButtonPadLight({
  children,
  active,
  ...props
}: PropsWithChildren<{
  fillBg?: CSSProperties["background"];
  fillFg?: CSSProperties["background"];
  fillBorder?: CSSProperties["borderColor"];
  radius?: number;
  onClick?: VoidFunction;
  style?: CSSProperties;
  containerStyle?: CSSProperties;
  active?: boolean;
  pressed?: boolean;
}>) {
  return (
    <ButtonPad {...props}>
      {children}

      <div
        style={{
          position: "absolute",
          right: 8,
          bottom: 8,
        }}
      >
        <Light offColor={props.fillFg} on={active} />
      </div>
    </ButtonPad>
  );
}
