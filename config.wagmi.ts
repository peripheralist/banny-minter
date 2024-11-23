// import { configureChains, createConfig } from "wagmi";
// import { sepolia } from "wagmi/chains";
// import { InjectedConnector } from "wagmi/connectors/injected";
// import { infuraProvider } from "wagmi/providers/infura";
// import { publicProvider } from "wagmi/providers/public";

// const infuraApiKey = process.env.NEXT_PUBLIC_INFURA_API_KEY;

// const { publicClient, chains } = configureChains(
//   [sepolia],
//   infuraApiKey ? [infuraProvider({ apiKey: infuraApiKey })] : [publicProvider()]
// );

// export const config = createConfig({
//   autoConnect: true,
//   connectors: [new InjectedConnector({ chains })],
//   publicClient,
// });

import { createConfig, http } from "wagmi";
import {
  arbitrum,
  arbitrumSepolia,
  base,
  baseSepolia,
  mainnet,
  optimism,
  optimismSepolia,
  sepolia,
} from "wagmi/chains";
import { walletConnect } from "wagmi/connectors";

const walletConnectProjectId =
  process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;

function transportUrl(prefix: string) {
  return `https://${prefix}.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`;
}

export const config = createConfig({
  chains: [sepolia],
  connectors: [
    ...(walletConnectProjectId
      ? [
          walletConnect({
            projectId: walletConnectProjectId,
            showQrModal: true,
          }),
        ]
      : []),
  ],
  transports: {
    [mainnet.id]: http(transportUrl("mainnet")),
    [sepolia.id]: http(transportUrl("sepolia")),
    [optimism.id]: http(transportUrl("optimism")),
    [optimismSepolia.id]: http(transportUrl("optimism-sepolia")),
    [base.id]: http(transportUrl("base")),
    [baseSepolia.id]: http(transportUrl("base-sepolia")),
    [arbitrum.id]: http(transportUrl("arbitrum")),
    [arbitrumSepolia.id]: http(transportUrl("arbitrum-sepolia")),
  },
  pollingInterval: 2000,
});
