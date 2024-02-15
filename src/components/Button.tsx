import React, {
  ButtonHTMLAttributes,
  CSSProperties,
  DetailedHTMLProps,
  PropsWithChildren,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import PixelShape from "./PixelShape";

export default function Button({
  children,
  ...props
}: PropsWithChildren &
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) {
  const [isHover, setIsHover] = useState<boolean>();
  const [frame, setFrame] = useState<number>(0);
  const targetRef = useRef<HTMLButtonElement>(null);

  // const [height, setHeight] = useState(0);

  // useLayoutEffect(() => {
  //   if (targetRef.current) {
  //     setHeight(targetRef.current.offsetHeight);
  //   }
  // }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setFrame((f) => (isHover ? Math.min(f + 0.2, 1) : Math.max(f - 0.2, 0)));
    }, 10);

    return () => clearInterval(id);
  }, [isHover]);

  const bg = "#e221a0dd";

  const height = 48;
  const width = height / 2;

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
        height={width}
        width={width}
        pixelSize={4}
        plot={(x, y) => y < Math.sqrt(width ** 2 - (2 - frame) * x ** 2)}
        fill={bg}
      />
    ),
    [width, frame]
  );

  const textOffset = isHover ? 3 : 2;

  return (
    <button
      ref={targetRef}
      {...props}
      style={{
        position: "relative",
        background: bg,
        height: 48,
        fontSize: "1.6rem",
        transform: `scale(${isHover ? 1.05 : 1})`,
        transition: "transform 0.1s ease",
        ...props.style,
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Arc deg={180} right="100%" top={0} />
      <Arc deg={0} right="100%" bottom={0} flipX />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          transform: isHover
            ? `translate(-${textOffset}px, -${textOffset}px)`
            : undefined,
          textShadow: isHover
            ? `${textOffset}px ${textOffset}px #000`
            : undefined,
          transition: "text-shadow 0.1s ease",
        }}
      >
        {children}
      </div>
      <Arc deg={180} left="100%" top={0} flipX />
      <Arc deg={0} left="100%" bottom={0} />
    </button>
  );
}
