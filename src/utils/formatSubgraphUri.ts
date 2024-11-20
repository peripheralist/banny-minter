import { isBrowser } from "@/constants/browser";
import { PUBLIC_SUBGRAPH_KEY } from "@/constants/subgraph";
import { ChainName } from "@/model/chainName";

export function formatSubgraphUri(chainName: ChainName) {
  if (!isBrowser()) {
    if (!process.env.SUBGRAPH_URL) {
      throw new Error("SATSUMA_KEY environment variable not defined");
    }

    return process.env.SUBGRAPH_URL;
  }

  return `https://subgraph.satsuma-prod.com/${PUBLIC_SUBGRAPH_KEY}/juicebox/nana-${formatSubgraphPrefix(
    chainName
  )}/api`;
}

function formatSubgraphPrefix(chainName: ChainName) {
  switch (chainName) {
    case "Arbitrum Sepolia":
      return "arbitrum-sepolia";
    case "Base Sepolia":
      return "base-sepolia";
    case "OP Sepolia":
      return "optimism-sepolia";
    case "Sepolia":
      return "sepolia";
  }
}
