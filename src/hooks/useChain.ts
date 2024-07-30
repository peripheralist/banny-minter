import { useAccount } from "wagmi";

const supportedChains = {
  1155511: {
    name: "sepolia",
    id: 1155511,
  },
  1: { name: "mainnet", id: 1 },
} as const;

export type ChainId = keyof typeof supportedChains;

const DEFAULT_CHAIN_ID = process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID;

if (!DEFAULT_CHAIN_ID) {
  throw new Error(
    "NEXT_PUBLIC_DEFAULT_CHAIN_ID environment variable not defined"
  );
}

export const useChain = () => {
  const { chain } = useAccount();

  if (chain) {
    const _chain = supportedChains[chain.id as ChainId];
    if (_chain) return _chain;
  }

  const defaultChain = supportedChains[parseInt(DEFAULT_CHAIN_ID) as ChainId];

  if (!defaultChain) throw new Error("Error getting default chain name");

  return defaultChain;
};
