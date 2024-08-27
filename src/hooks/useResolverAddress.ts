import { mainnet, sepolia } from "viem/chains";
import { ChainId, useChain } from "./useChain";

const addresses: Record<ChainId, `0x${string}`> = {
  [mainnet.id]: "0xasdf", // TODO
  [sepolia.id]: "0x9499f78B1d237615Ce5DbE0E7d7B79200F740e8C",
};

export function useResolverAddress() {
  const chain = useChain();

  return addresses[chain.id];
}
