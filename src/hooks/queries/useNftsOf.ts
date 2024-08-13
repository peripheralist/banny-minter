import { BANNYVERSE_COLLECTION_ID } from "@/constants/nfts";
import { useNfTsQuery } from "@/generated/graphql";

export function useNftsOf(wallet: `0x${string}` | undefined) {
  return useNfTsQuery({
    variables: {
      where: {
        collection: BANNYVERSE_COLLECTION_ID,
        owner_: {
          wallet: wallet?.toLowerCase() ?? null,
        },
      },
    },
  });
}
