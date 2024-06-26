import { BANNYVERSE_PROJECT_ID } from "@/constants/nfts";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { JBContractProvider, JBProjectProvider } from "juice-sdk-react";
import type { AppProps } from "next/app";
import { WagmiProvider } from "wagmi";
import { config } from "../../config.wagmi";
import AlertContextProvider from "@/contexts/AlertContextProvider";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AlertContextProvider>
        <WagmiProvider config={config}>
          <JBProjectProvider projectId={BigInt(BANNYVERSE_PROJECT_ID)}>
            <JBContractProvider projectId={BigInt(BANNYVERSE_PROJECT_ID)}>
              <Component {...pageProps} />
            </JBContractProvider>
          </JBProjectProvider>
        </WagmiProvider>
      </AlertContextProvider>
    </QueryClientProvider>
  );
}
