import { SUBGRAPH_KEY } from "@/constants/subgraph";
import { ChainName } from "@/model/chainName";

export function formatSubgraphUri(chainName: ChainName) {
  return `https://subgraph.satsuma-prod.com/${SUBGRAPH_KEY}/juicebox/nana-${formatSubgraphPrefix(
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
