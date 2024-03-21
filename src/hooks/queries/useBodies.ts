import { apolloClient } from "@/constants/apollo";
import { BANNYVERSE_COLLECTION_ID } from "@/constants/nfts";
import { NftTier_OrderBy, useNftTiersQuery } from "@/generated/graphql";

export function useBodies() {
  return useNftTiersQuery({
    client: apolloClient,
    variables: {
      orderBy: NftTier_OrderBy.price,
      where: {
        collection: BANNYVERSE_COLLECTION_ID,
        category: 0,
      },
    },
  });
}
