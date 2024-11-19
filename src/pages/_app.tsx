import FullscreenLoading from "@/components/shared/FullscreenLoading";
import AlertContextProvider from "@/contexts/AlertContextProvider";
import EquipmentContextProvider from "@/contexts/EquipmentContextProvider";
import ShopContextProvider from "@/contexts/ShopContextProvider";
import WalletContextProvider from "@/contexts/WalletContextProvider";
import { useCategorizedTiers } from "@/hooks/queries/useCategorizedTiers";
import { LooksApolloProvider } from "@/providers/LooksApolloProvider";
import { LooksJBProvider } from "@/providers/LooksJBProvider";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { PropsWithChildren } from "react";
import { WagmiProvider } from "wagmi";
import { config } from "../../config.wagmi";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <LooksApolloProvider>
          <AlertContextProvider>
            <LooksJBProvider>
              <WalletContextProvider>
                <_EquipmentContextProvider>
                  <ShopContextProvider>
                    <Component {...pageProps} />
                  </ShopContextProvider>
                </_EquipmentContextProvider>
              </WalletContextProvider>
            </LooksJBProvider>
          </AlertContextProvider>
        </LooksApolloProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
}

function _EquipmentContextProvider({ children }: PropsWithChildren) {
  const { tiers } = useCategorizedTiers();

  if (!tiers) return <FullscreenLoading />;

  return (
    <EquipmentContextProvider availableTiers={tiers} displayStrategy="mint">
      {children}
    </EquipmentContextProvider>
  );
}
