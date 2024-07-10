import { useAnimation } from "@/hooks/useAnimation";
import {
  ButtonHTMLAttributes,
  CSSProperties,
  DetailedHTMLProps,
  PropsWithChildren,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import PixelShape from "../pixelRenderers/PixelShape";
import Fuzz from "../pixelRenderers/Fuzz";

export default function Button({
  children,
  loading,
  ...props
}: PropsWithChildren &
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { loading?: boolean }) {
  const [isHover, setIsHover] = useState<boolean>();
  const contentRef = useRef<HTMLDivElement>(null);

  const { frame, animate } = useAnimation({ step: 0.25, interval: 25 });

  // storing width in state using useLayoutEffect not working great
  const width = contentRef.current?.clientWidth;

  const bg = "#e221a0";

  const height = 48;
  const edgeWidth = height / 2;

  const Arc = useCallback(
    ({
      deg,
      left,
      right,
      top,
      bottom,
      flipX,
    }: { deg: 0 | 90 | 180 | 270; flipX?: boolean } & Pick<
      CSSProperties,
      "left" | "right" | "top" | "bottom"
    >) => (
      <PixelShape
        style={{
          position: "absolute",
          transform: `rotate(${deg}deg)${flipX ? " scale(-1,1)" : ""}`,
          left,
          right,
          top,
          bottom,
        }}
        height={edgeWidth}
        width={edgeWidth}
        pixelSize={4}
        plot={(x, y) =>
          y <= Math.sqrt(edgeWidth ** 2 - (1 - frame + 0.1) * x ** 2)
        }
        fill={bg}
      />
    ),
    [edgeWidth, frame]
  );

  const textOffset = isHover ? 4 : 0;

  return (
    <button
      {...props}
      style={{
        position: "relative",
        background: bg,
        height,
        fontSize: "1.6rem",
        ...props.style,
      }}
      onMouseEnter={() => {
        setIsHover(true);
        animate(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
        animate();
      }}
    >
      <Arc deg={270} right="100%" top={0} />
      <Arc deg={270} right="100%" bottom={0} flipX />
      {loading && width ? (
        <Fuzz width={width} height={height - 20} fill="white" interval={250} />
      ) : (
        <div
          ref={contentRef}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            transform: isHover
              ? `scale(1.1, 1) translate(0, -${textOffset}px)`
              : undefined,
            // transform: `translate(-${textOffset}px, -${textOffset}px)`,
            textShadow: `0px ${textOffset}px #000`,
            transition: "text-shadow 0.1s ease-out, transform 0.1s ease-out",
          }}
        >
          {children}
        </div>
      )}
      <Arc deg={90} left="100%" top={0} flipX />
      <Arc deg={90} left="100%" bottom={0} />
    </button>
  );
}
