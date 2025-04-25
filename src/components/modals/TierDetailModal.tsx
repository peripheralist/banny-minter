import Modal from "@/components/shared/Modal";
import NftTierInfo from "@/components/shared/NftTierInfo";
import RoundedFrame from "@/components/shared/RoundedFrame";
import TierImage from "@/components/shared/TierImage";
import { FONT_SIZE } from "@/constants/fontSize";
import { categoryIncompatibles } from "@/constants/incompatibles";
import { ShopContext } from "@/contexts/shopContext";
import { useWindowSize } from "@/hooks/useWindowSize";
import { formatEther } from "juice-sdk-core";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import EquippedTiersPreview from "../shared/EquippedTiersPreview";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { TierOrNft } from "@/model/tierOrNft";
import { useAppChain } from "@/hooks/useAppChain";

const IMG_COUNT = 4;

export default function TierDetailModal() {
  const [imgIdx, setImgIdx] = useState(0);

  const { parsedTiers } = useAllTiers();

  const { addItem } = useContext(ShopContext);

  const { width, isSmallScreen } = useWindowSize();

  const router = useRouter();

  const itemId = router.query.item as string;

  const tier = useMemo(() => {
    const tierId = parseInt(itemId);

    if (!tierId || isNaN(tierId)) return;

    return parsedTiers?.find((t) => t.tierId === tierId);
  }, [parsedTiers, itemId]);

  const isSoldOut = useMemo(
    () => (tier ? tier.remainingSupply <= BigInt(0) : undefined),
    [tier]
  );

  useEffect(() => {
    // reset image idx
    setImgIdx(0);
  }, [tier]);

  // Sets of tiers to equip in preview images
  const previewTierSets = useMemo(() => {
    function generateTiers() {
      if (!tier) return [];

      const setLength = 3;

      const _tiers: TierOrNft[] = [tier];

      for (let i = 0; i < setLength; i++) {
        const options = parsedTiers?.filter(
          (t) =>
            _tiers.every((_t) => t.tierId !== _t.tierId) &&
            !categoryIncompatibles[tier.category]?.includes(t.category) &&
            t.category !== tier.category &&
            t.category !== "background" && // no backgrounds
            (i === 0 ? t.category === "body" : t.category !== "body") // ensure 1 body
        );

        if (options?.length) {
          _tiers.push(options[Math.floor(Math.random() * options.length)]);
        }
      }

      return _tiers;
    }

    const sets = [];
    for (let i = 0; i < IMG_COUNT; i++) {
      sets.push(generateTiers());
    }
    return sets;
  }, [tier, parsedTiers]);

  const imgSize = useMemo(
    () => Math.min(Math.max(width ? width - 96 : 0, 240), 400),
    [width]
  );

  const images = useCallback(
    (size: number) => {
      const _imgs = [<TierImage key={0} tier={tier} size={size} />];

      for (let i = 0; i < IMG_COUNT; i++) {
        _imgs.push(<Look key={i + 1} tiers={previewTierSets[i]} size={size} />);
      }

      return _imgs;
    },
    [tier, previewTierSets]
  );

  const bigImages = useMemo(() => images(imgSize), [imgSize, images]);
  const smallImages = useMemo(() => images(80), [images]);

  useEffect(() => {
    if (isSmallScreen) return; // odd behavior on mobile

    document.getElementById(`preview-${imgIdx}`)?.scrollIntoView();
  }, [imgIdx, isSmallScreen]);

  const onClose = useCallback(() => {
    if (!router.query.item) return;

    const newPath = router.asPath.split("?item=")[0];
    router.replace(newPath, undefined, { shallow: true });
  }, [router]);

  if (!tier) return null;

  return (
    <Modal
      open
      onClose={onClose}
      action={
        isSoldOut
          ? undefined
          : {
              onClick: () => {
                addItem?.(tier);
                onClose();
              },
              text: `Add to bag Ξ${formatEther(tier.price)}`,
            }
      }
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 36,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <RoundedFrame borderColor="white" background={"white"}>
            {bigImages[imgIdx]}
          </RoundedFrame>

          <div
            style={{
              display: "flex",
              gap: 4,
              maxWidth: imgSize + 12,
              overflow: "auto",
              marginTop: 8,
              paddingBottom: 12,
            }}
          >
            {smallImages.map((img, i) => (
              <div id={`preview-${i}`} key={i} onClick={() => setImgIdx(i)}>
                <RoundedFrame
                  borderColor={imgIdx === i ? "black" : "white"}
                  background="white"
                  style={{ pointerEvents: "none" }}
                >
                  {img}
                </RoundedFrame>
              </div>
            ))}
          </div>

          <div
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "space-between",
              top: imgSize / 2,
              right: 12,
              left: 12,
              zIndex: 1,
              fontSize: FONT_SIZE.lg,
            }}
          >
            <div
              style={{
                cursor: "pointer",
                height: 80,
              }}
              onClick={() => setImgIdx((i) => (i ? i - 1 : IMG_COUNT - 1))}
            >
              {"<"}
            </div>

            <div
              style={{ cursor: "pointer", height: 80 }}
              onClick={() => setImgIdx((i) => (i + 1) % (IMG_COUNT + 1))}
            >
              {">"}
            </div>
          </div>
        </div>

        <NftTierInfo tierOrNft={tier} />
      </div>
    </Modal>
  );
}

function Look({ tiers, size }: { tiers: TierOrNft[]; size: number }) {
  const equipped = useMemo(
    () =>
      tiers.reduce(
        (acc, _tier) => ({
          ...acc,
          [_tier.category]: _tier,
        }),
        {}
      ),
    [tiers]
  );

  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <EquippedTiersPreview size={size} equipped={equipped} />
    </div>
  );
}
