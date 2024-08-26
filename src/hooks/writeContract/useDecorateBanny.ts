import { Tier } from "@/model/tier";
import { useFind721DataHook } from "juice-sdk-react";
import { useResolverAddress } from "../useResolverAddress";
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
  const resolverAddress = useResolverAddress();

  const jb721DataHookQuery = useFind721DataHook();
  const jb721DataHookQueryAddress = jb721DataHookQuery.data as `0x${string}`;

  const { write: decorateBanny, ...data } = useWriteContractHandler(
    {
      abi: decorateBannyWithAbi,
      address: resolverAddress,
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

        const args = [
          jb721DataHookQueryAddress,
          nakedBannyId,
          worldId,
          outfitIds,
        ];

        console.info("Creating transaction with args:", args);

        return args;
      },
    },
    options
  );

  return { decorateBanny, ...data };
}
