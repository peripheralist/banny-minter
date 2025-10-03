import { BAN_REVNET_ID } from "@/constants/contracts";
import { useAppChain } from "@/hooks/useAppChain";
import { JBChainId, JBProjectProvider } from "juice-sdk-react";
import { PropsWithChildren, useEffect, useState } from "react";

export function LooksJBProvider({ children }: PropsWithChildren) {
  const [isHydrated, setIsHydrated] = useState(false);

  const appChain = useAppChain();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!appChain || !isHydrated) return null;

  return (
    // TODO ChainId and JBChainId should be the same
    <JBProjectProvider
      chainId={appChain.id as JBChainId}
      projectId={BigInt(BAN_REVNET_ID)}
    >
      {children}
    </JBProjectProvider>
  );
}
