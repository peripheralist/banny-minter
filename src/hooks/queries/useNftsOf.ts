import { useApolloClient } from "@/constants/apollo";
import { BANNYVERSE_COLLECTION_ID } from "@/constants/nfts";
import { useNfTsQuery } from "@/generated/graphql";

export function useNftsOf(wallet: string | undefined) {
  const apolloClient = useApolloClient();

  return useNfTsQuery({
    client: apolloClient,
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
