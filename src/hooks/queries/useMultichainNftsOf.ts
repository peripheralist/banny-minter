import { BAN_HOOK } from "@/constants/contracts";
import { NfTsDocument, NfTsQuery } from "@/generated/graphql";
import { Chain } from "@/model/chain";
import { Address } from "viem";
import { useMultichainQuery } from "./useMultichainQuery";

export function useMultichainNftsOf(wallet: Address | undefined) {
  return useMultichainQuery<
    NfTsQuery,
    NfTsQuery["nfts"][number] & {
      chain: Chain;
    }
  >({
    key: `multichain-nfts-${wallet?.toString()}`,
    document: NfTsDocument,
    variables: () => ({
      where: {
        collection: BAN_HOOK.toLowerCase(),
        owner_: {
          wallet: wallet?.toLowerCase() ?? null,
        },
      },
    }),
    parse: (r, chain) =>
      r.nfts.map((nft) => ({
        ...nft,
        chain,
      })),
  });
}
