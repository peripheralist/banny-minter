import { createPublicClient, http } from "viem";
import { createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";

export const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: sepolia,
    transport: http(), // TODO need provider
  }),
});
