import { Chain } from "@/model/chain";
import { mainnet, sepolia } from "viem/chains";
import { useAccount } from "wagmi";
import { config } from "../../config.wagmi";

const defaultChain =
  process.env.NEXT_PUBLIC_IS_TESTNET === "true" ? sepolia : mainnet;

// this could be deprecated by a default chain in wagmi.config. idk how on current version
export const useChain = (): Chain => {
  const { chain } = useAccount();

  if (chain) {
    // restrict chain to supported chains
    const _chain = config.chains[chain.id];
    if (_chain) return _chain;
  }

  return defaultChain as Chain;
};
