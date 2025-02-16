import { BAN_HOOK } from "@/constants/nfts";
import { useNfTsQuery } from "@/generated/graphql";
import { Address } from "viem";

export function useNftsOf(wallet: Address | undefined) {
  return useNfTsQuery({
    variables: {
      where: {
        collection: BAN_HOOK.toLowerCase(),
        owner_: {
          wallet: wallet?.toLowerCase() ?? null,
        },
      },
    },
  });
}
