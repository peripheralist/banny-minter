import { BAN_HOOK } from "@/constants/contracts";
import { NfTsDocument, NfTsQuery } from "@/generated/graphql";
import { Chain } from "@/model/chain";
import { useMultichainQuery } from "./useMultichainQuery";

export function useMultichainBannyNFTs() {
  return useMultichainQuery<
    NfTsQuery,
    NfTsQuery["nfts"][number] & {
      chain: Chain;
    }
  >({
    key: "multichain-bannys",
    document: NfTsDocument,
    variables: () => ({
      where: {
        collection: BAN_HOOK.toLowerCase(),
        category: 0,
      },
    }),
    parse: (r, chain) =>
      r.nfts.map((nft) => ({
        ...nft,
        chain,
      })),
  });
}
