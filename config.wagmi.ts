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
  connectors: [
    // metamask is loaded by default (if metamask is in browser at least). idk why
    ...(walletConnectProjectId
      ? [
          walletConnect({
            projectId: walletConnectProjectId,
          }),
        ]
      : []),
  ],
  chains: [
    sepolia,
    arbitrumSepolia,
    baseSepolia,
    optimismSepolia,
    // mainnet,
    arbitrum,
    base,
    optimism,
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
});
