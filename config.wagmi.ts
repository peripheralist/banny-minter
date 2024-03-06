import { createConfig, http } from "wagmi";
import { sepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const config = createConfig({
  chains: [sepolia],
  // chains: [mainnet, sepolia],
  connectors: [
    injected(), // will inject metamask...?
    // metaMask(),
    // walletConnect({ projectId }),
    // safe(),
  ],
  transports: {
    // [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
