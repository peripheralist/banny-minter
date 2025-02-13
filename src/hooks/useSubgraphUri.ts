import { formatSubgraphUri } from "@/utils/formatSubgraphUri";
import { useMemo } from "react";
import { useAppChain } from "./useAppChain";

export const useSubgraphUri = () => {
  const appChain = useAppChain();

  const url = useMemo(() => {
    let _url = new URL(formatSubgraphUri(appChain));

    if (_url.pathname.match(/graphql$/g)) {
      return _url.href.slice(0, _url.href.lastIndexOf("/"));
    }
    return _url.href;
  }, [appChain]);

  return url;
};
