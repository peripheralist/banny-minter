import {
  arbitrum,
  arbitrumSepolia,
  base,
  baseSepolia,
  mainnet,
  optimism,
  optimismSepolia,
  sepolia,
} from "viem/chains";

export const SUPPORTED_CHAINS = [
  // mainnet,
  sepolia,
  // arbitrum,
  arbitrumSepolia,
  // base,
  baseSepolia,
  // optimism,
  optimismSepolia,
] as const;
