import { mainnet, sepolia } from "viem/chains";
import { ChainId, useChain } from "./useChain";

const addresses: Record<ChainId, `0x${string}`> = {
  [mainnet.id]: "0xasdf", // TODO
  [sepolia.id]: "0xd9485D5A6D5ff42b821B59173b749B0A5186e3eD",
};

export function useResolverAddress() {
  const chain = useChain();

  return addresses[chain.id];
}
