import { Category } from "@/constants/category";
import { getInheritedStyle } from "@/constants/inheritedColors";
import { EQUIP_DURATION_MILLIS } from "@/contexts/DressBannyContextProvider";
import { useFuzz } from "@/hooks/useFuzz";
import { CategoryLib } from "@/model/categoryLib";
import { TierOrNft } from "@/model/tierOrNft";
import { useCallback, useMemo } from "react";
import AssetSvg from "../AssetSvg";
import DefaultAsset from "../DefaultAsset";

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
  equipped: CategoryLib<TierOrNft>;
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

  const tier = useMemo(() => equipped[category], [equipped, category]);

  const Svg = useCallback(() => {
    const inheritedStyle = getInheritedStyle(equipped.body?.tierId);

    return (
      <>
        {tier?.metadata && (
          <AssetSvg
            style={{
              position: "absolute",
              ...fuzzMask(equipFuzz),
              ...fuzzMask(unequipFuzz),
            }}
            svgStyle={inheritedStyle}
            name={tier.metadata.productName}
            size={size}
          />
        )}

        {category === "body" &&
          (tier?.metadata?.productName ? (
            <>
              {!equipped.mouth && <DefaultAsset size={size} type="mouth" />}
              {!equipped.necklace && (
                <DefaultAsset size={size} type="necklace" />
              )}
            </>
          ) : (
            <DefaultAsset size={size} type="mannequin" />
          ))}
      </>
    );
  }, [tier, size, equipFuzz, unequipFuzz, equipped, category, fuzzMask]);

  return <Svg />;
}
