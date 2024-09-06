import { mannequinSvg } from "@/constants/mannequinSvg";
import { Category } from "@/constants/category";
import { DEFAULT_SVG } from "@/constants/svgDefaults";
import { EQUIP_DURATION_MILLIS } from "@/contexts/EquipmentContextProvider";
import { useFuzz } from "@/hooks/useFuzz";
import { EquippedTiers } from "@/model/tier";
import { CSSProperties, useCallback, useMemo } from "react";

const fuzzStepCount = 4;

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
    fill: "white",
  };

  const steps = useMemo(() => {
    const _steps: number[] = [];

    for (let i = 1; i <= fuzzStepCount; i++) {
      _steps.push(0.2 * i);
    }

    return _steps;
  }, []);

  const interval = useMemo(() => EQUIP_DURATION_MILLIS / fuzzStepCount, []);

  const equipFuzz = useFuzz({
    ...fuzzConfig,
    enabled: isEquipping,
    interval,
    pixelSize,
    steps: steps,
  });

  const unequipFuzz = useFuzz({
    ...fuzzConfig,
    enabled: isUnEquipping,
    interval,
    pixelSize,
    steps: [...steps].reverse(),
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
          style={{
            position: "absolute",
            ...style,
            width: size,
            height: size,
          }}
          data={`data:image/svg+xml;base64,${btoa(svg)}`}
        />
      ) : null,
    [size]
  );

  const NakedDefaultSvgs = useCallback(() => {
    if (category !== "naked") return null;

    let children: JSX.Element[] = [];

    if (!equipped.naked) {
      children.push(<SvgObject key="mannequin" svg={mannequinSvg} />);
    } else {
      // always add eyes
      children.push(
        <SvgObject
          key="eyes"
          svg={
            equipped.naked?.tierId === 1
              ? DEFAULT_SVG.eyesAlien
              : DEFAULT_SVG.eyes
          }
        />
      );

      if (!equipped.necklace) {
        children.push(<SvgObject key="necklace" svg={DEFAULT_SVG.necklace} />);
      }

      if (!equipped.mouth) {
        children.push(<SvgObject key="mouth" svg={DEFAULT_SVG.mouth} />);
      }
    }

    return children;
  }, [category, equipped.naked, equipped.necklace, equipped.mouth, SvgObject]);

  const svg = useMemo(() => equipped[category]?.svg, [equipped, category]);

  return (
    <>
      {svg && (
        <SvgObject
          style={{ ...fuzzMask(equipFuzz), ...fuzzMask(unequipFuzz) }}
          svg={svg}
        />
      )}

      <NakedDefaultSvgs />
    </>
  );
}
