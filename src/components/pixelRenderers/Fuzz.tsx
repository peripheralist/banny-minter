import { useFuzz } from "@/hooks/useFuzz";
import { CSSProperties } from "react";

export default function Fuzz({
  style,
  density,
  ...props
}: {
  interval?: number;
  pixelSize?: number;
  density?: number;
  getSvg?: (svg: string) => void;
  width: number;
  height: number;
  fill: CSSProperties["fill"];
  style?: CSSProperties;
}) {
  const fuzz = useFuzz({ ...props, density: density ?? 0.75, enabled: true });

  if (!fuzz) return null;

  return <div style={style} dangerouslySetInnerHTML={{ __html: fuzz }} />;
}
