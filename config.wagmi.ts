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
import { sepolia } from "wagmi/chains";
// import { injected } from "wagmi/connectors";

export const config = createConfig({
  chains: [sepolia],
  // connectors: [
  //   injected(),
  //   // TODO walletConnect({ projectId: 69 }),
  //   // Unsure if this is needed except for walletConnect. Even when connectors is undefined, metamask is still an option
  // ],
  transports: {
    // [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
