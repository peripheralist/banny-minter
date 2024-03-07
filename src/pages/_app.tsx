import { BANNYVERSE_PROJECT_ID } from "@/constants/projectId";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { JBProjectProvider, JBContractProvider } from "juice-sdk-react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { WagmiConfig } from "wagmi";
import { config } from "../../config.wagmi";

const Toolbar = dynamic(() => import("@/components/Toolbar"), { ssr: false });

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <JBProjectProvider projectId={BigInt(BANNYVERSE_PROJECT_ID)}>
        <JBContractProvider projectId={BigInt(BANNYVERSE_PROJECT_ID)}>
          <QueryClientProvider client={queryClient}>
            <Toolbar />
            <Component {...pageProps} />
          </QueryClientProvider>
        </JBContractProvider>
      </JBProjectProvider>
    </WagmiConfig>
  );
}
