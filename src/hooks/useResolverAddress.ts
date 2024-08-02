import { mainnet, sepolia } from "viem/chains";
import { ChainId, useChain } from "./useChain";

const addresses: Record<ChainId, `0x${string}`> = {
  [mainnet.id]: "0xasdf", // TODO
  [sepolia.id]: "0x27B384c90561904512175E23104bF75Bd63f5eEe",
};

export function useResolverAddress() {
  const chain = useChain();

  return addresses[chain.id];
}
