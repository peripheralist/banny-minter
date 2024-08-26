import { mainnet, sepolia } from "viem/chains";
import { ChainId, useChain } from "./useChain";

const addresses: Record<ChainId, `0x${string}`> = {
  [mainnet.id]: "0xasdf", // TODO
  [sepolia.id]: "0x564B851da553e37C4d519894E0B286c896c3F18a",
};

export function useResolverAddress() {
  const chain = useChain();

  return addresses[chain.id];
}
