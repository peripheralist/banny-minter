import { createConfig, http } from "wagmi";
import { mainnet } from "wagmi/chains";
import { injected, metaMask } from "wagmi/connectors";

export const config = createConfig({
  chains: [mainnet],
  // chains: [mainnet, sepolia],
  connectors: [
    injected(), // will inject metamask...?
    // metaMask(),
    // walletConnect({ projectId }),
    // safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    // [sepolia.id]: http(),
  },
});
