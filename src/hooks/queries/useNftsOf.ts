import { BAN_HOOK } from "@/constants/contracts";
import { useNfTsQuery } from "@/generated/graphql";
import { Address } from "viem";

export function useNftsOf(wallet: Address | undefined) {
  return useNfTsQuery({
    variables: {
      where: {
        hook: BAN_HOOK.toLowerCase(),
        owner: wallet,
      },
    },
    // fetchPolicy: "cache-and-network",
  });
}
