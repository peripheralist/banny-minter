import { config } from "../../config.wagmi";
import { useChain } from "./useChain";

export function useSupportedChains() {
  const chain = useChain();

  // use testnet chains if connected to testnet
  return config.chains.filter((c) => chain.testnet === c.testnet);
}
