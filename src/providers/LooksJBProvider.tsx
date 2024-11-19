import { BANNYVERSE_PROJECT_ID } from "@/constants/nfts";
import {
  JBChainId,
  JBContractProvider,
  JBProjectProvider,
  useChain,
} from "juice-sdk-react";
import { PropsWithChildren } from "react";

const projectId = BigInt(BANNYVERSE_PROJECT_ID);

export function LooksJBProvider({ children }: PropsWithChildren) {
  const chain = useChain();

  if (!chain) return null;

  return (
    <JBProjectProvider chainId={chain.id as JBChainId} projectId={projectId}>
      <JBContractProvider projectId={projectId}>{children}</JBContractProvider>
    </JBProjectProvider>
  );
}
