import { LOOKS_REVNET_ID } from "@/constants/nfts";
import { JBChainId, JBProjectProvider, useChain } from "juice-sdk-react";
import { PropsWithChildren } from "react";

const projectId = BigInt(LOOKS_REVNET_ID);

export function LooksJBProvider({ children }: PropsWithChildren) {
  const chain = useChain();

  if (!chain) return null;

  return (
    <JBProjectProvider chainId={chain.id as JBChainId} projectId={projectId}>
      {children}
    </JBProjectProvider>
  );
}
