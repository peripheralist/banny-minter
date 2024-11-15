import { useQuery } from "@tanstack/react-query";
import { readContract } from "@wagmi/core";
import { config } from "../../../config.wagmi";
import { ChainId, useChain } from "../useChain";
import { BANNYVERSE_PROJECT_ID } from "@/constants/nfts";

export function useTiered721Hook() {
  const chain = useChain();

  const revDeployerAddress: Record<ChainId, `0x${string}`> = {
    "1": "0xasdf", // TODO
    "11155111": "0x25bC5D5A708c2E426eF3a5196cc18dE6b2d5A3d1",
  };

  return useQuery({
    queryKey: ["looks-hook", revDeployerAddress],
    queryFn: () =>
      readContract(config, {
        address: revDeployerAddress[chain.id],
        functionName: "tiered721HookOf",
        args: [BigInt(BANNYVERSE_PROJECT_ID)],
        abi: [
          {
            type: "function",
            name: "tiered721HookOf",
            inputs: [
              {
                name: "revnetId",
                type: "uint256",
                internalType: "uint256",
              },
            ],
            outputs: [
              {
                name: "tiered721Hook",
                type: "address",
                internalType: "contract IJB721TiersHook",
              },
            ],
            stateMutability: "view",
          },
        ],
      }),
  });
}
