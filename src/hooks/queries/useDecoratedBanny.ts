import { apolloClient } from "@/constants/apollo";
import { useDecoratedBannyQuery } from "@/generated/graphql";

export function useDecoratedBanny(tokenId: number | undefined) {
  return useDecoratedBannyQuery({
    client: apolloClient,
    variables: {
      tokenId: tokenId?.toString() ?? "0",
    },
  });
}
