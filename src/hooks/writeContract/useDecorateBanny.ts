import { BAN_HOOK, RESOLVER_ADDRESS } from "@/constants/contracts";
import { Tier } from "@/model/tier";
import {
  WriteContractHandlerOptions,
  useWriteContractHandler,
} from "./useWriteContractHandler";
import { CATEGORY_IDS } from "@/constants/category";

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

export function useDecorateBanny(options?: WriteContractHandlerOptions) {
  const { write: decorateBanny, ...data } = useWriteContractHandler(
    {
      abi: decorateBannyWithAbi,
      address: RESOLVER_ADDRESS,
      functionName: "decorateBannyWith",
      args: ({
        body,
        background,
        outfits,
      }: {
        body: Tier | undefined;
        background: Tier | undefined;
        outfits: Tier[];
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
    options
  );

  return { decorateBanny, ...data };
}
