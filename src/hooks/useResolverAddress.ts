import { mainnet, sepolia } from "viem/chains";
import { ChainId, useChain } from "./useChain";

const addresses: Record<ChainId, `0x${string}`> = {
  [mainnet.id]: "0xasdf", // TODO
  [sepolia.id]: "0x3e36590f4EEeF5b77285522E7B5A34F0D4c59Bab",
};

export function useResolverAddress() {
  const chain = useChain();

  return addresses[chain.id];
}
