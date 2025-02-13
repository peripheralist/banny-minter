import { LOOKS_REVNET_ID } from "@/constants/nfts";
import { useAppChain } from "@/hooks/useAppChain";
import { JBChainId, JBProjectProvider } from "juice-sdk-react";
import { PropsWithChildren } from "react";

const projectId = BigInt(LOOKS_REVNET_ID);

export function LooksJBProvider({ children }: PropsWithChildren) {
  const appChain = useAppChain();

  if (!appChain) return null;

  return (
    // TODO ChainId and JBChainId should be the same
    <JBProjectProvider chainId={appChain.id as JBChainId} projectId={projectId}>
      {children}
    </JBProjectProvider>
  );
}
