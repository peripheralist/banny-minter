import { configureChains, createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { InjectedConnector } from "wagmi/connectors/injected";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

const infuraApiKey = process.env.NEXT_PUBLIC_INFURA_API_KEY;

const { publicClient, chains } = configureChains(
  [sepolia],
  infuraApiKey ? [infuraProvider({ apiKey: infuraApiKey })] : [publicProvider()]
);

export const config = createConfig({
  autoConnect: true,
  connectors: [new InjectedConnector({ chains })],
  publicClient,
});
