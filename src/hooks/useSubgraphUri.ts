import { SUBGRAPH_KEY } from "@/constants/subgraph";
import { useChain } from "./useChain";
import { isBrowser } from "@/constants/browser";

export const useSubgraphUri = () => {
  let uri: string | undefined;

  const chain = useChain();

  if (isBrowser()) {
    uri = `https://subgraph.satsuma-prod.com/${SUBGRAPH_KEY}/juicebox/nana-${chain.name}/api`;
  } else {
    uri = process.env.SUBGRAPH_URL;
    if (!uri) {
      throw new Error("SUBGRAPH_URL environment variable not defined");
    }
  }

  const url = new URL(uri);
  if (url.pathname.match(/graphql$/g)) {
    return url.href.slice(0, url.href.lastIndexOf("/"));
  }
  return url.href;
};
