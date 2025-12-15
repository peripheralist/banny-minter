import { CATEGORY_IDS } from "@/constants/category";
import {
  BAN_HOOK,
  RESOLVER_ADDRESS,
  RESOLVER_ADDRESS_OLD,
} from "@/constants/contracts";
import { TierOrNft } from "@/model/tierOrNft";
import axios from "axios";
import { useAppChain } from "../useAppChain";
import {
  WriteContractHandlerOptions,
  useWriteContractHandler,
} from "./useWriteContractHandler";

const decorateBannyWithAbi = [
  {
    type: "function",
    name: "decorateBannyWith",
    inputs: [
      {
        name: "hook",
        type: "address",
        internalType: "address",
      },
      {
        name: "bannyBodyId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "backgroundId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "outfitIds",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
];

export function useDecorateBanny(
  options?: WriteContractHandlerOptions & { useOldResolver?: boolean }
) {
  const appChain = useAppChain();

  const { write: decorateBanny, ...data } = useWriteContractHandler(
    {
      abi: decorateBannyWithAbi,
      address: options?.useOldResolver
        ? RESOLVER_ADDRESS_OLD
        : RESOLVER_ADDRESS,
      functionName: "decorateBannyWith",
      args: ({
        body,
        background,
        outfits,
      }: {
        body: TierOrNft<true> | undefined;
        background: TierOrNft<true> | undefined;
        outfits: TierOrNft<true>[];
      }) => {
        const bannyBodyId = BigInt(body?.tokenId ?? 0);
        const backgroundId = BigInt(background?.tokenId ?? 0);
        const sortedOutfitIds = outfits
          .sort((o1, o2) =>
            CATEGORY_IDS[o1.category] < CATEGORY_IDS[o2.category] ? -1 : 1
          )
          .map((o) => BigInt(o.tokenId!));

        const args = [BAN_HOOK, bannyBodyId, backgroundId, sortedOutfitIds];

        console.info("Creating transaction with args:", args);

        return args;
      },
    },
    {
      ...options,
      onSuccess: (v) => {
        options?.onSuccess?.(v);

        // wait a few seconds so hopefully opensea is updated?
        setTimeout(() => {
          axios
            .post(`/api/refresh-metadata`, {
              chainId: appChain.id,
              tokenId: v[1],
            })
            .catch((e) => console.warn("Error refreshing metadata", e));
        }, 10000);
      },
    }
  );

  return { decorateBanny, ...data };
}
