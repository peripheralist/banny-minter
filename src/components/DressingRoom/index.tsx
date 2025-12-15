import { BAN_HOOK } from "@/constants/contracts";
import DressBannyContextProvider from "@/contexts/DressBannyContextProvider";
import { useNfTsQuery } from "@/generated/graphql";
import { useBannyEquippedTiers } from "@/hooks/queries/useBannyEquippedTiers";
import { useAppChain } from "@/hooks/useAppChain";
import { useWindowSize } from "@/hooks/useWindowSize";
import { CategoryLib } from "@/model/categoryLib";
import { TierOrNft } from "@/model/tierOrNft";
import { parseTierOrNft } from "@/utils/parseTier";
import { useMemo } from "react";
import { useAccount } from "wagmi";
import FullscreenLoading from "../shared/FullscreenLoading";
import LargeView from "./LargeView";
import SmallView from "./SmallView";
import { useIsDressedWithOldResolver } from "@/hooks/readContract/useIsDressedWithOldResolver";
import { MigrateOutfitModal } from "../modals/MigrateOutfitModal";

export default function Index({ bannyNft }: { bannyNft: TierOrNft<true> }) {
  const appChain = useAppChain();
  const { address } = useAccount();

  // Only NFTs owned by connected wallet. Does not include worn NFTs owned by resolver contract
  const { data: nfts, loading } = useNfTsQuery({
    variables: {
      where: {
        hook: BAN_HOOK.toLowerCase(),
        owner: address,
        chainId: appChain.id,
      },
    },
  });

  const { data: equippedTiers } = useBannyEquippedTiers(bannyNft);

  const { dressedTokenIds: oldOutfitTokenIds } = useIsDressedWithOldResolver(
    bannyNft.tokenId
  );

  const { isSmallScreen } = useWindowSize();

  const formattedAvailableTiers = useMemo(() => {
    if (!nfts || !equippedTiers) return;

    const availableNfts = nfts.nfts.items.map(parseTierOrNft).filter((t) =>
      // only add body tier for the bannyNft
      t.category === "body"
        ? t.tokenId === bannyNft.tokenId
          ? true
          : false
        : true
    );

    // Add equipped nft tiers
    const withEquipped = Object.values(equippedTiers).reduce(
      (acc, tier) => [
        ...acc,
        {
          ...tier,
          ownedQuantity: 1,
        } as TierOrNft<true>,
      ],
      availableNfts
    );

    // Condense quantities
    const condensed = withEquipped.reduce((acc, tier) => {
      if (acc.some((t) => t.tierId === tier.tierId)) {
        return acc.map((t) =>
          t.tierId === tier.tierId
            ? {
                ...t,
                ownedQuantity: (t.ownedQuantity ?? 0) + 1,
              }
            : t
        );
      }

      return [...acc, { ...tier, ownedQuantity: 1 }];
    }, [] as TierOrNft<true>[]);

    return condensed;
  }, [equippedTiers, bannyNft.tokenId, nfts]);

  const equippedTierIds = useMemo(() => {
    if (!equippedTiers) return {};

    return Object.entries(equippedTiers).reduce(
      (acc, [category, tier]) => ({ ...acc, [category]: tier.tierId }),
      {} as CategoryLib<number>
    );
  }, [equippedTiers]);

  if (loading) return <FullscreenLoading />;

  return formattedAvailableTiers ? (
    <DressBannyContextProvider
      cacheKey="dress"
      availableTiers={formattedAvailableTiers}
      defaultEquippedTierIds={equippedTierIds}
      defaultGroup="head"
    >
      {isSmallScreen ? (
        <SmallView tokenId={bannyNft.tokenId} />
      ) : (
        <LargeView tokenId={bannyNft.tokenId} />
      )}

      {oldOutfitTokenIds?.length && oldOutfitTokenIds.length > 0 ? (
        <MigrateOutfitModal
          open={true}
          bannyNft={bannyNft}
          dressedTokenIds={oldOutfitTokenIds}
        />
      ) : null}
    </DressBannyContextProvider>
  ) : (
    <FullscreenLoading />
  );
}
