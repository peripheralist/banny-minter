import { BAN_HOOK } from "@/constants/contracts";
import { useNftTiersQuery } from "@/generated/graphql";
import { TierOrNft } from "@/model/tierOrNft";
import { parseTierOrNft } from "@/utils/parseTier";

/**
 * @returns All Looks NFT tiers
 */
export function useAllTiers() {
  const { data: tiers, ...props } = useNftTiersQuery({
    variables: {
      where: {
        hook: BAN_HOOK,
        chainId: 1,
      },
    },
    fetchPolicy: "cache-and-network",
  });

  const _tiers = tiers?.nftTiers.items;

  return {
    ...props,
    tiers: _tiers,
    parsedTiers: _tiers
      ?.map((t) => parseTierOrNft(t))
      .reduce(
        (acc, curr) =>
          // remove duplicates
          acc.some((parsed) => parsed.tierId === curr.tierId)
            ? acc
            : [...acc, curr],
        [] as TierOrNft[]
      ),
  };
}
