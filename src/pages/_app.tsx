import FullscreenLoading from "@/components/shared/FullscreenLoading";
import AlertContextProvider from "@/contexts/AlertContextProvider";
import EquipmentContextProvider from "@/contexts/EquipmentContextProvider";
import ShopContextProvider from "@/contexts/ShopContextProvider";
import WalletContextProvider from "@/contexts/WalletContextProvider";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { LooksApolloProvider } from "@/providers/LooksApolloProvider";
import { LooksJBProvider } from "@/providers/LooksJBProvider";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { PropsWithChildren } from "react";
import { WagmiProvider } from "wagmi";
import { config } from "../../config.wagmi";
import TierDetailModal from "@/components/modals/TierDetailModal";
import NFTDetailModal from "@/components/modals/NFTDetailModal";
import StoreSVGsModal from "@/components/modals/StoreSVGsModal";
import ModalContextProvider from "@/contexts/ModalContextProvider";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <LooksApolloProvider>
          <ModalContextProvider>
            <AlertContextProvider>
              <LooksJBProvider>
                <WalletContextProvider>
                  <_EquipmentContextProvider>
                    <ShopContextProvider>
                      <Component {...pageProps} />

                      <TierDetailModal />
                      <NFTDetailModal />
                      <StoreSVGsModal />
                    </ShopContextProvider>
                  </_EquipmentContextProvider>
                </WalletContextProvider>
              </LooksJBProvider>
            </AlertContextProvider>
          </ModalContextProvider>
        </LooksApolloProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
}

function _EquipmentContextProvider({ children }: PropsWithChildren) {
  const { tiers } = useAllTiers();

  if (!tiers) return <FullscreenLoading />;

  return (
    <EquipmentContextProvider cacheKey="bag_preview" availableTiers={tiers}>
      {children}
    </EquipmentContextProvider>
  );
}
