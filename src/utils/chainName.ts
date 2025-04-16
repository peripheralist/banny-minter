import { config } from "../../config.wagmi";

export const chainName = (chainId: number) =>
  config.chains.find((c) => c.id === chainId)?.name;
