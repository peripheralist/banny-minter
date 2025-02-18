import { BAN_REVNET_IDS } from "@/constants/contracts";
import { useAppChain } from "@/hooks/useAppChain";
import { JBChainId, JBProjectProvider } from "juice-sdk-react";
import { PropsWithChildren } from "react";

export function LooksJBProvider({ children }: PropsWithChildren) {
  const appChain = useAppChain();

  if (!appChain) return null;

  const projectId = BigInt(BAN_REVNET_IDS(appChain.id));

  return (
    // TODO ChainId and JBChainId should be the same
    <JBProjectProvider chainId={appChain.id as JBChainId} projectId={projectId}>
      {children}
    </JBProjectProvider>
  );
}
