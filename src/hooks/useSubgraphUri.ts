import { isBrowser } from "@/constants/browser";
import { formatSubgraphUri } from "@/utils/formatSubgraphUri";
import { useMemo } from "react";
import { useChain } from "./useChain";

export const useSubgraphUri = () => {
  const chain = useChain();

  const chainName = useMemo(() => chain.name, [chain.name]);

  const uri = useMemo(() => {
    if (isBrowser()) {
      return formatSubgraphUri(chainName);
    } else {
      if (!process.env.SUBGRAPH_URL) {
        throw new Error("SUBGRAPH_URL environment variable not defined");
      }

      return process.env.SUBGRAPH_URL;
    }
  }, [chainName]);

  const url = useMemo(() => {
    let _url = new URL(uri);

    if (_url.pathname.match(/graphql$/g)) {
      return _url.href.slice(0, _url.href.lastIndexOf("/"));
    }
    return _url.href;
  }, [uri]);

  return url;
};
