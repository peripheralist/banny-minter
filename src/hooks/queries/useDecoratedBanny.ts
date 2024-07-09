import { useDecoratedBannyQuery } from "@/generated/graphql";

export function useDecoratedBanny(tokenId: number | undefined) {
  return useDecoratedBannyQuery({
    variables: {
      tokenId: tokenId?.toString() ?? "0",
    },
  });
}
