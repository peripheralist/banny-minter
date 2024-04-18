import { CATEGORIES, Category } from "@/constants/nfts";
import { DEFAULT_SVG } from "@/constants/svgDefaults";
import { MinterContext } from "@/contexts/minterContext";
import { useFuzz } from "@/hooks/useFuzz";
import { CSSProperties, useCallback, useContext, useMemo } from "react";

export default function EquippedTiersPreview({
  imageSize,
}: {
  imageSize: number;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      {CATEGORIES.map((c) => (
        <ImageLayer key={c} category={c} size={imageSize} />
      ))}
    </div>
  );
}

function ImageLayer({ category, size }: { category: Category; size: number }) {
  const { equipped, equipAnimation, unequipAnimation } =
    useContext(MinterContext);

  const { naked, necklace, mouth } = equipped;

  const isEquipping = useMemo(
    () => equipAnimation?.category === category,
    [equipAnimation, category]
  );
  const isUnEquipping = useMemo(
    () => unequipAnimation?.category === category,
    [unequipAnimation, category]
  );

  const equipFuzz = useFuzz({
    enabled: isEquipping,
    width: 440,
    height: 440,
    fill: "white",
    pixelSize: 4,
    density: equipAnimation?.frame,
  });

  const unequipFuzz = useFuzz({
    enabled: isUnEquipping,
    width: 440,
    height: 440,
    fill: "white",
    pixelSize: 4,
    density: 0.75 - (equipAnimation?.frame ?? 0),
  });

  const tier = useMemo(() => equipped[category], [equipped, category]);

  const fuzzMask = useCallback(
    (fuzz: string | undefined) =>
      fuzz
        ? {
            maskImage: `url(data:image/svg+xml;base64,${btoa(fuzz)})`,
            maskSize: size,
          }
        : {},
    [size]
  );

  const SvgObject = useCallback(
    ({ svg, style }: { svg: string | undefined; style?: CSSProperties }) =>
      svg ? (
        <object
          style={{ position: "absolute", ...style }}
          width={size}
          height={size}
          data={`data:image/svg+xml;base64,${btoa(svg)}`}
        />
      ) : null,
    [size]
  );

  const svg = useMemo(() => tier?.svg?.(), [tier]);

  const NakedDefaultSvgs = useCallback(() => {
    if (category !== "naked") return null;

    let children: JSX.Element[] = [];

    // always add eyes
    if (naked?.tierId === 1) {
      children.push(<SvgObject svg={DEFAULT_SVG.eyesAlien} />);
    } else {
      children.push(<SvgObject svg={DEFAULT_SVG.eyes} />);
    }

    if (!necklace) {
      children.push(<SvgObject svg={DEFAULT_SVG.necklace} />);
    }

    if (!mouth) {
      children.push(<SvgObject svg={DEFAULT_SVG.mouth} />);
    }

    return children;
  }, [naked, necklace, mouth, SvgObject, category]);

  if (!svg || !tier?.image) return null;

  return (
    <>
      <SvgObject
        style={{ ...fuzzMask(equipFuzz), ...fuzzMask(unequipFuzz) }}
        svg={svg}
      />
      <NakedDefaultSvgs />
    </>
  );
}
