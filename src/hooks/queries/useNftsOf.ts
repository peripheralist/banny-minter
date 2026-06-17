import { useNfTsQuery } from "@/generated/graphql";
import { Address } from "viem";
import { useBanHook } from "../useBanHook";

export function useNftsOf(wallet: Address | undefined) {
  const banHook = useBanHook();

  return useNfTsQuery({
    variables: {
      where: {
        hook: banHook.toLowerCase(),
        owner: wallet,
      },
      limit: 1000,
    },
  });
}
