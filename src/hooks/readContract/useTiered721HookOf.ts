import { LOOKS_REVNET_ID } from "@/constants/nfts";
import { ChainId } from "@/model/chain";
import { useQuery } from "@tanstack/react-query";
import { readContract } from "@wagmi/core";
import { Address, zeroAddress } from "viem";
import {
  arbitrum,
  arbitrumSepolia,
  base,
  baseSepolia,
  mainnet,
  optimism,
  optimismSepolia,
  sepolia,
} from "viem/chains";
import { config } from "../../../config.wagmi";
import { useChain } from "../useChain";

export function useTiered721Hook() {
  const chain = useChain();

  const revDeployerAddress: Record<ChainId, Address> = {
    // TODO
    [mainnet.id]: zeroAddress,
    [sepolia.id]: "0x25bC5D5A708c2E426eF3a5196cc18dE6b2d5A3d1",
    [base.id]: zeroAddress,
    [baseSepolia.id]: zeroAddress,
    [arbitrum.id]: zeroAddress,
    [arbitrumSepolia.id]: zeroAddress,
    [optimism.id]: zeroAddress,
    [optimismSepolia.id]: zeroAddress,
  };

  return useQuery({
    queryKey: ["looks-hook", revDeployerAddress],
    queryFn: () =>
      readContract(config, {
        address: revDeployerAddress[chain.id],
        functionName: "tiered721HookOf",
        args: [BigInt(LOOKS_REVNET_ID)],
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
