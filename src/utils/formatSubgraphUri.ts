import { SUBGRAPH_KEY } from "@/constants/subgraph";

export function formatSubgraphUri(network: string) {
  return `https://subgraph.satsuma-prod.com/${SUBGRAPH_KEY}/juicebox/nana-${network.toLowerCase()}/api`;
}
