import { Chain, ChainId } from "@/model/chain";
import { useMemo, useState } from "react";
import { mainnet, sepolia } from "viem/chains";
import { useAccount } from "wagmi";
import { config } from "../../config.wagmi";

const defaultChain = (
  process.env.NEXT_PUBLIC_IS_TESTNET === "true" ? sepolia : mainnet
) as Chain;

// this could be deprecated by a default chain in wagmi.config. idk how on current version
export const useChain = () => {
  const { chain } = useAccount();

  const _chain = useMemo(
    () => config.chains.find((c) => c.id === chain?.id) ?? defaultChain,
    [chain]
  );

  return _chain;
};
