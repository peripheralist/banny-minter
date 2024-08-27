import { mainnet, sepolia } from "viem/chains";
import { ChainId, useChain } from "./useChain";

const addresses: Record<ChainId, `0x${string}`> = {
  [mainnet.id]: "0xasdf", // TODO
  [sepolia.id]: "0xcD2b6C7678B134098467AB9F37Cf54b7e03D8C41",
};

export function useResolverAddress() {
  const chain = useChain();

  return addresses[chain.id];
}
