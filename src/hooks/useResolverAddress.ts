import { mainnet, sepolia } from "viem/chains";
import { ChainId, useChain } from "./useChain";

const addresses: Record<ChainId, `0x${string}`> = {
  [mainnet.id]: "0xasdf", // TODO
  [sepolia.id]: "0xe351AF531C17Cc2FD41552E263c6576F985Fe8bB",
};

export function useResolverAddress() {
  const chain = useChain();

  return addresses[chain.id];
}
