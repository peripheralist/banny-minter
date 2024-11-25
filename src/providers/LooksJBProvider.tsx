import { LOOKS_REVNET_ID } from "@/constants/nfts";
import { useChain } from "@/hooks/useChain";
import { JBChainId, JBProjectProvider } from "juice-sdk-react";
import { PropsWithChildren } from "react";

const projectId = BigInt(LOOKS_REVNET_ID);

export function LooksJBProvider({ children }: PropsWithChildren) {
  const chain = useChain();

  if (!chain) return null;

  return (
    // TODO ChainId and JBChainId should be the same
    <JBProjectProvider chainId={chain.id as JBChainId} projectId={projectId}>
      {children}
    </JBProjectProvider>
  );
}
