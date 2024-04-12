import { CATEGORIES, Category } from "@/constants/nfts";
import { MinterContext } from "@/contexts/minterContext";
import { useContext, useMemo } from "react";
import { useFuzz } from "@/hooks/useFuzz";

export default function EquippedTiersPreview({
  imageSize,
}: {
  imageSize: number;
}) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "relative",
          width: imageSize,
          height: imageSize,
        }}
      >
        {CATEGORIES.map((c) => (
          <ImageLayer key={c} category={c} size={imageSize} />
        ))}
      </div>
    </div>
  );
}

function ImageLayer({ category, size }: { category: Category; size: number }) {
  const {
    equipped: { get },
    equipAnimation,
    unequipAnimation,
  } = useContext(MinterContext);

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

  const tier = useMemo(() => get[category], [get, category]);

  if (!tier?.svg || !tier.image) return null;

  return (
    <object
      style={{
        position: "absolute",
        ...(unequipFuzz
          ? {
              maskImage: `url(data:image/svg+xml;base64,${btoa(unequipFuzz)})`,
              maskSize: size,
            }
          : {}),
        ...(equipFuzz
          ? {
              maskImage: `url(data:image/svg+xml;base64,${btoa(equipFuzz)})`,
              maskSize: size,
            }
          : {}),
      }}
      width={size}
      height={size}
      data={
        category === "body" && !get.face
          ? tier.image
          : `data:image/svg+xml;base64,${btoa(tier.svg)}`
      }
    />
  );
}
