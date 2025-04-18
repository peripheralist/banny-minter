import NFTDetailModal from "@/components/modals/NFTDetailModal";
import StoreSVGsModal from "@/components/modals/StoreSVGsModal";
import TierDetailModal from "@/components/modals/TierDetailModal";
import FullscreenLoading from "@/components/shared/FullscreenLoading";
import AlertContextProvider from "@/contexts/AlertContextProvider";
import DressBannyContextProvider from "@/contexts/DressBannyContextProvider";
import ModalContextProvider from "@/contexts/ModalContextProvider";
import ShopContextProvider from "@/contexts/ShopContextProvider";
import WalletContextProvider from "@/contexts/WalletContextProvider";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { LooksApolloProvider } from "@/providers/LooksApolloProvider";
import { LooksJBProvider } from "@/providers/LooksJBProvider";
import "@/styles/globals.css";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { PropsWithChildren } from "react";
import { WagmiProvider } from "wagmi";
import { config } from "../../config.wagmi";

const queryCache = new QueryCache();

const queryClient = new QueryClient({
  queryCache,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <LooksApolloProvider>
          <_DressBannyContextProvider>
            <ShopContextProvider>
              <ModalContextProvider>
                <AlertContextProvider>
                  <LooksJBProvider>
                    <WalletContextProvider>
                      <Component {...pageProps} />

                      <TierDetailModal />
                      <NFTDetailModal />
                      <StoreSVGsModal />
                    </WalletContextProvider>
                  </LooksJBProvider>
                </AlertContextProvider>
              </ModalContextProvider>
            </ShopContextProvider>
          </_DressBannyContextProvider>
        </LooksApolloProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
}

function _DressBannyContextProvider({ children }: PropsWithChildren) {
  const { parsedTiers } = useAllTiers();

  if (!parsedTiers) return <FullscreenLoading />;

  return (
    <DressBannyContextProvider cacheKey="shop" availableTiers={parsedTiers}>
      {children}
    </DressBannyContextProvider>
  );
}
