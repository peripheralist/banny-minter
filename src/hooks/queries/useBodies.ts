import { apolloClient } from "@/constants/apollo";
import { BANNYVERSE_COLLECTION_ID } from "@/constants/nfts";
import { useNftTiersQuery } from "@/generated/graphql";

export function useBodies() {
  return useNftTiersQuery({
    client: apolloClient,
    variables: {
      where: {
        collection: BANNYVERSE_COLLECTION_ID,
        category: 0,
      },
    },
  });
}
