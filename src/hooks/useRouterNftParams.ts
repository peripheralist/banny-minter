import { useRouter } from "next/router";
import { useMemo } from "react";
import { useAppChain } from "./useAppChain";
import { useSupportedChains } from "./useSupportedChains";

export function useRouterNftParams(key: string) {
  const router = useRouter();
  const appChain = useAppChain();
  const chains = useSupportedChains();

  const param = router.query[key] as string;

  const { chain, tokenId } = useMemo(() => {
    try {
      if (!param) return { chain: undefined, tokenId: undefined };

      const [_chainId, _tokenId] = param.includes(":")
        ? param.split(":")
        : [appChain.id.toString(), param];

      const tokenId = parseInt(_tokenId);
      const chain = chains.find((c) => c.id === parseInt(_chainId));

      return { chain, tokenId };
    } catch (e) {
      console.error("Error parsing NFT route");

      return { chain: undefined, tokenId: undefined };
    }
  }, [param, appChain.id, chains, key]);

  return { chain, tokenId };
}
