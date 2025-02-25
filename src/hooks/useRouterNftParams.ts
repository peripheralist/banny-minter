import { useRouter } from "next/router";
import { useMemo } from "react";
import { useAppChain } from "./useAppChain";
import { useSupportedChains } from "./useSupportedChains";

export function useRouterNftParams(key: string) {
  const router = useRouter();
  const appChain = useAppChain();
  const chains = useSupportedChains();

  const { chain, tokenId } = useMemo(() => {
    try {
      const param = router.query[key] as string;

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
  }, [router.query, appChain.id, chains]);

  return { chain, tokenId };
}
