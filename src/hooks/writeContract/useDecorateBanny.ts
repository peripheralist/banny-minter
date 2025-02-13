import { LOOKS_COLLECTION_ID, RESOLVER_ADDRESS } from "@/constants/nfts";
import { Tier } from "@/model/tier";
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
        name: "nakedBannyId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "worldId",
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
        nakedBanny,
        world,
        outfits,
      }: {
        nakedBanny: Tier | undefined;
        world: Tier | undefined;
        outfits: Tier[];
      }) => {
        const nakedBannyId = BigInt(nakedBanny?.tokenId ?? 0);
        const worldId = BigInt(world?.tokenId ?? 0);
        const outfitIds = outfits.map((o) => BigInt(o.tokenId!));

        const args = [LOOKS_COLLECTION_ID, nakedBannyId, worldId, outfitIds];

        console.info("Creating transaction with args:", args);

        return args;
      },
    },
    options
  );

  return { decorateBanny, ...data };
}
