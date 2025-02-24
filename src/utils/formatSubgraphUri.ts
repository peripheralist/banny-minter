import { isBrowser } from "@/constants/browser";
import { PUBLIC_SUBGRAPH_KEY } from "@/constants/subgraph";
import { Chain } from "@/model/chain";

export function formatSubgraphUri(chain: Chain) {
  if (!isBrowser()) {
    if (!process.env.SUBGRAPH_URL) {
      throw new Error("SATSUMA_KEY environment variable not defined");
    }

    return process.env.SUBGRAPH_URL;
  }

  return `https://subgraph.satsuma-prod.com/${PUBLIC_SUBGRAPH_KEY}/juicebox/${formatSubgraphPrefix(
    chain
  )}/api`;
}

function formatSubgraphPrefix(chain: Chain) {
  switch (chain.name) {
    case "Ethereum":
      return "ethereum";
    case "Sepolia":
      return "sepolia";
    case "Arbitrum One":
      return "arbitrum";
    case "Arbitrum Sepolia":
      return "arbitrum-sepolia";
    case "Base":
      return "base";
    case "Base Sepolia":
      return "base-sepolia";
    case "OP Mainnet":
      return "optimism";
    case "OP Sepolia":
      return "optimism-sepolia";
  }
}
