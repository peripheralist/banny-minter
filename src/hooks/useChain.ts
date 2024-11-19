import { SUPPORTED_CHAINS } from "@/constants/supportedChains";
import { useAccount } from "wagmi";

export type ChainId = (typeof SUPPORTED_CHAINS)[number]["id"];

const DEFAULT_CHAIN_ID = process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID;

if (!DEFAULT_CHAIN_ID) {
  throw new Error(
    "NEXT_PUBLIC_DEFAULT_CHAIN_ID environment variable not defined"
  );
}

export const useChain = () => {
  const { chain } = useAccount();

  if (chain) {
    const _chain = SUPPORTED_CHAINS[chain.id];
    if (_chain) return _chain;
  }

  const defaultChain = SUPPORTED_CHAINS.find(
    (c) => c.id === parseInt(DEFAULT_CHAIN_ID)
  );

  if (!defaultChain) throw new Error("Error getting default chain");

  return defaultChain;
};
