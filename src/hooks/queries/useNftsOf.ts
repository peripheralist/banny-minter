import { LOOKS_COLLECTION_ID } from "@/constants/nfts";
import { useNfTsQuery } from "@/generated/graphql";
import { Address } from "viem";

export function useNftsOf(wallet: Address | undefined) {
  return useNfTsQuery({
    variables: {
      where: {
        collection: LOOKS_COLLECTION_ID.toLowerCase(),
        owner_: {
          wallet: wallet?.toLowerCase() ?? null,
        },
      },
    },
  });
}
