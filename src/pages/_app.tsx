import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { WagmiProvider } from "wagmi";
import { config } from "../../config.wagmi";
import dynamic from "next/dynamic";
import { JBProjectProvider } from "juice-sdk-react";
import { BANNYVERSE_PROJECT_ID } from "@/constants/projectId";

const Toolbar = dynamic(() => import("@/components/Toolbar"), { ssr: false });

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <JBProjectProvider projectId={BigInt(BANNYVERSE_PROJECT_ID)}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <Toolbar />
          <Component {...pageProps} />
        </QueryClientProvider>
      </WagmiProvider>
    </JBProjectProvider>
  );
}
