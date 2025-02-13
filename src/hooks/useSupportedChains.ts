import { config } from "../../config.wagmi";
import { useAppChain } from "./useAppChain";

export function useSupportedChains() {
  const appChain = useAppChain();

  // use testnet chains if connected to testnet
  return config.chains.filter((c) => appChain.testnet === c.testnet);
}
