import { useApolloClient } from "@/constants/apollo";
import { useDecoratedBannyQuery } from "@/generated/graphql";

export function useDecoratedBanny(tokenId: number | undefined) {
  const apolloClient = useApolloClient();

  return useDecoratedBannyQuery({
    client: apolloClient,
    variables: {
      tokenId: tokenId?.toString() ?? "0",
    },
  });
}
