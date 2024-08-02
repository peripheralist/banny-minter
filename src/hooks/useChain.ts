import { mainnet, sepolia } from "viem/chains";
import { useAccount } from "wagmi";

const supportedChains = [mainnet, sepolia] as const;

export type ChainId = (typeof supportedChains)[number]["id"];

const DEFAULT_CHAIN_ID = process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID;

if (!DEFAULT_CHAIN_ID) {
  throw new Error(
    "NEXT_PUBLIC_DEFAULT_CHAIN_ID environment variable not defined"
  );
}

export const useChain = () => {
  const { chain } = useAccount();

  if (chain) {
    const _chain = supportedChains[chain.id];
    if (_chain) return _chain;
  }

  const defaultChain = supportedChains.find(
    (c) => c.id === parseInt(DEFAULT_CHAIN_ID)
  );

  if (!defaultChain) throw new Error("Error getting default chain");

  return defaultChain;
};
