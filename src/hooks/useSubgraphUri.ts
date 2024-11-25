import { formatSubgraphUri } from "@/utils/formatSubgraphUri";
import { useMemo } from "react";
import { useChain } from "./useChain";

export const useSubgraphUri = () => {
  const chain = useChain();

  const url = useMemo(() => {
    let _url = new URL(formatSubgraphUri(chain));

    if (_url.pathname.match(/graphql$/g)) {
      return _url.href.slice(0, _url.href.lastIndexOf("/"));
    }
    return _url.href;
  }, [chain]);

  return url;
};
