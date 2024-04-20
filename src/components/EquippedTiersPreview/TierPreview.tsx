import { Category } from "@/constants/nfts";
import { DEFAULT_SVG } from "@/constants/svgDefaults";
import { useFuzz } from "@/hooks/useFuzz";
import { EquippedTiers } from "@/model/tier";
import { CSSProperties, useCallback, useMemo } from "react";

export function TierPreview({
  equipped,
  equippingCategory,
  unequippingCategory,
  category,
  pixelSize,
  size,
}: {
  category: Category;
  pixelSize?: number;
  size: number;
  equipped: EquippedTiers;
  equippingCategory?: Category;
  unequippingCategory?: Category;
}) {
  const isEquipping = useMemo(
    () => equippingCategory === category,
    [equippingCategory, category]
  );
  const isUnEquipping = useMemo(
    () => unequippingCategory === category,
    [unequippingCategory, category]
  );

  const fuzzConfig = {
    width: size,
    height: size,
    pixelSize: 4,
    fill: "white",
  };

  const equipFuzz = useFuzz({
    ...fuzzConfig,
    enabled: isEquipping,
    interval: 100,
    pixelSize,
    steps: [0.2, 0.4, 0.6, 0.8],
  });

  const unequipFuzz = useFuzz({
    ...fuzzConfig,
    enabled: isUnEquipping,
    interval: 100,
    pixelSize,
    steps: [0.8, 0.6, 0.4, 0.2],
  });

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

  const NakedDefaultSvgs = useCallback(() => {
    if (category !== "naked") return null;

    let children: JSX.Element[] = [];

    // always add eyes
    if (equipped.naked?.tierId === 1) {
      children.push(<SvgObject svg={DEFAULT_SVG.eyesAlien} />);
    } else {
      children.push(<SvgObject svg={DEFAULT_SVG.eyes} />);
    }

    if (!equipped.necklace) {
      children.push(<SvgObject svg={DEFAULT_SVG.necklace} />);
    }

    if (!equipped.mouth) {
      children.push(<SvgObject svg={DEFAULT_SVG.mouth} />);
    }

    return children;
  }, [category, equipped.naked, equipped.necklace, equipped.mouth, SvgObject]);

  const svg = useMemo(() => equipped[category]?.svg?.(), [equipped, category]);

  if (!svg) return null;

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
