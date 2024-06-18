import { BANNYVERSE_PROJECT_ID } from "@/constants/nfts";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { JBContractProvider, JBProjectProvider } from "juice-sdk-react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { WagmiProvider } from "wagmi";
import { config } from "../../config.wagmi";

const Toolbar = dynamic(() => import("@/components/Toolbar"), { ssr: false });

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <JBProjectProvider projectId={BigInt(BANNYVERSE_PROJECT_ID)}>
        <JBContractProvider projectId={BigInt(BANNYVERSE_PROJECT_ID)}>
          <QueryClientProvider client={queryClient}>
            <Toolbar />
            <Component {...pageProps} />
          </QueryClientProvider>
        </JBContractProvider>
      </JBProjectProvider>
    </WagmiProvider>
  );
}
