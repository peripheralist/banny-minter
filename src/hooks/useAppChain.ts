import { useMemo } from "react";
import { mainnet } from "viem/chains";
import { useAccount } from "wagmi";
import { config } from "../../config.wagmi";

/**
 * Get the chain currently being preferred by the UI.
 */
// This could be deprecated by a default chain in wagmi.config? idk how on current version
export const useAppChain = () => {
  const { chain } = useAccount();

  const _chain = useMemo(
    () => config.chains.find((c) => c.id === chain?.id) ?? mainnet,
    [chain]
  );

  return _chain;
};
