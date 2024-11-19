import ToolbarBagView from "@/components/shared/ToolbarBagView";
import ButtonPad from "@/components/shared/ButtonPad";
import NftTierInfo from "@/components/shared/NftTierInfo";
import RoundedFrame from "@/components/shared/RoundedFrame";
import TierImage from "@/components/shared/TierImage";
import { COLORS } from "@/constants/colors";
import { DROPS } from "@/constants/drops";
import { BANNYVERSE_COLLECTION_ID } from "@/constants/nfts";
import { ShopContext } from "@/contexts/shopContext";
import { useNftTiersQuery } from "@/generated/graphql";
import { useSingleImageSize } from "@/hooks/useSingleImageSize";
import { parseTier } from "@/utils/parseTier";
import { formatEther } from "juice-sdk-core";
import { useRouter } from "next/router";
import { useContext, useMemo } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";

export default function Index() {
  const { addItem } = useContext(ShopContext);

  const router = useRouter();

  const tierId = router.query.tierId as string | undefined;

  const _tierId = !tierId || isNaN(parseInt(tierId)) ? 0 : parseInt(tierId);

  const tiers = useNftTiersQuery({
    variables: {
      where: {
        collection: BANNYVERSE_COLLECTION_ID,
      },
    },
  });

  const tier = useMemo(() => {
    const _tier = tiers.data?.nfttiers.find((t) => t.tierId === _tierId);
    if (_tier) return parseTier(_tier);
  }, [tiers, _tierId]);

  const size = useSingleImageSize();

  const drop = useMemo(() => {
    return DROPS.find((d) => d.tierIds.includes(_tierId));
  }, [_tierId]);

  const { isSmallScreen } = useWindowSize();

  return (
    <ToolbarBagView
      frame
      header={`ITEM: ${tier?.name ?? "--"}`}
      backButton={drop ? { href: `/drop/${drop.id}` } : undefined}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexWrap: "wrap",
          padding: 24,
          paddingTop: 20,
          gap: 24,
          paddingBottom: 80,
        }}
      >
        <div>
          <RoundedFrame background={"white"}>
            <TierImage tier={tier} size={size} />
          </RoundedFrame>
        </div>

        {tier && (
          <div style={{ overflow: "hidden", paddingBottom: 12 }}>
            <NftTierInfo tier={tier} />

            <ButtonPad
              containerStyle={{
                position: isSmallScreen ? "fixed" : "absolute",
                bottom: 24,
                left: 24,
              }}
              style={{ padding: 16, color: COLORS.pink }}
              onClick={() => addItem?.(tier)}
            >
              Add to bag Ξ{formatEther(tier.price)}
            </ButtonPad>
          </div>
        )}
      </div>
    </ToolbarBagView>
  );
}
