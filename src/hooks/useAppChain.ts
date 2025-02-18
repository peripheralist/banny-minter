import { Chain } from "@/model/chain";
import { useMemo } from "react";
import { mainnet, sepolia } from "viem/chains";
import { useAccount } from "wagmi";
import { config } from "../../config.wagmi";

export const isTestnet =
  process.env.NEXT_PUBLIC_IS_TESTNET === "true" ? true : false;

const defaultChain = (isTestnet ? sepolia : mainnet) as Chain;

/**
 * Get the chain currently being preferred by the UI.
 */
// This could be deprecated by a default chain in wagmi.config? idk how on current version
export const useAppChain = () => {
  const { chain } = useAccount();

  const _chain = useMemo(
    () => config.chains.find((c) => c.id === chain?.id) ?? defaultChain,
    [chain]
  );

  return _chain;
};
