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

export default function Index({ bannyNft }: { bannyNft: TierOrNft<true> }) {
  const appChain = useAppChain();
  const { address } = useAccount();

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

  const { isSmallScreen } = useWindowSize();

  const formattedAvailableTiers = useMemo(() => {
    if (!nfts || !equippedTiers) return;

    const availableNfts = nfts.nfts.items.map(parseTierOrNft);

    // Add equipped nft tiers
    const formatted = Object.values(equippedTiers).reduce((acc, nft) => {
      if (acc.some((nft) => nft.tierId === nft.tierId)) {
        return acc.map((nft) => ({
          ...nft,
          ownedQuantity: (nft.ownedQuantity ?? 0) + 1,
        }));
      }

      return [
        ...acc,
        {
          ...nft,
          ownedQuantity: 1,
          dressed: true,
        } as TierOrNft<true>,
      ];
    }, availableNfts);

    return formatted;
  }, [nfts?.nfts.items, equippedTiers]);

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
    </DressBannyContextProvider>
  ) : (
    <FullscreenLoading />
  );
}
