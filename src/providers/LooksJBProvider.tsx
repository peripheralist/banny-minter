import { BAN_REVNET_IDS } from "@/constants/contracts";
import { useAppChain } from "@/hooks/useAppChain";
import { JBChainId, JBProjectProvider } from "juice-sdk-react";
import { PropsWithChildren, useEffect, useMemo, useState } from "react";

export function LooksJBProvider({ children }: PropsWithChildren) {
  const [isHydrated, setIsHydrated] = useState(false);

  const appChain = useAppChain();

  const projectId = useMemo(
    () => BigInt(BAN_REVNET_IDS(appChain.id)),
    [appChain.id]
  );

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!appChain || !isHydrated) return null;

  return (
    // TODO ChainId and JBChainId should be the same
    <JBProjectProvider chainId={appChain.id as JBChainId} projectId={projectId}>
      {children}
    </JBProjectProvider>
  );
}
