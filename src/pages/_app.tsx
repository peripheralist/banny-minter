import { BANNYVERSE_PROJECT_ID } from "@/constants/nfts";
import AlertContextProvider from "@/contexts/AlertContextProvider";
import EquipmentContextProvider from "@/contexts/EquipmentContextProvider";
import ShopContextProvider from "@/contexts/ShopContextProvider";
import WalletContextProvider from "@/contexts/WalletContextProvider";
import { useCategorizedTiers } from "@/hooks/queries/useCategorizedTiers";
import { useChain } from "@/hooks/useChain";
import { useSubgraphUri } from "@/hooks/useSubgraphUri";
import "@/styles/globals.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FunctionsMap, withScalars } from "apollo-link-scalars";
import { IntrospectionQuery, buildClientSchema } from "graphql";
import {
  JBChainId,
  JBContractProvider,
  JBProjectProvider,
} from "juice-sdk-react";
import type { AppProps } from "next/app";
import Image from "next/image";
import { PropsWithChildren, useMemo } from "react";
import { WagmiProvider } from "wagmi";
import { config } from "../../config.wagmi";
import introspectionResult from "../../graphql.schema.json";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <_ApolloProvider>
          <AlertContextProvider>
            <JBProvider>
              <WalletContextProvider>
                <_EquipmentContextProvider>
                  <ShopContextProvider>
                    <Component {...pageProps} />
                  </ShopContextProvider>
                </_EquipmentContextProvider>
              </WalletContextProvider>
            </JBProvider>
          </AlertContextProvider>
        </_ApolloProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
}

function _EquipmentContextProvider({ children }: PropsWithChildren) {
  const { tiers } = useCategorizedTiers();

  if (!tiers)
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={"/assets/banny_eyes.svg"}
          width={240}
          height={(240 * 8) / 14}
          alt="banny eyes"
        />
      </div>
    );

  return (
    <EquipmentContextProvider availableTiers={tiers} displayStrategy="mint">
      {children}
    </EquipmentContextProvider>
  );
}

function JBProvider({ children }: PropsWithChildren) {
  const chain = useChain();

  if (!chain) return null;

  return (
    <JBProjectProvider
      chainId={chain.id as JBChainId}
      projectId={BigInt(BANNYVERSE_PROJECT_ID)}
    >
      <JBContractProvider projectId={BigInt(BANNYVERSE_PROJECT_ID)}>
        {children}
      </JBContractProvider>
    </JBProjectProvider>
  );
}

// for some reason multiple apollo instances are being created (maybe just a dev thing?). this ensures the cache is created only once.
const cache = new InMemoryCache();

function _ApolloProvider({ children }: PropsWithChildren) {
  const subgraphUri = useSubgraphUri();

  const typesMap: FunctionsMap = {
    BigInt: {
      serialize: (parsed: unknown): string | null => {
        // convert bigints to strings
        return parsed !== null ? (parsed as bigint).toString() : null;
      },
      parseValue: (raw: unknown): bigint | null => {
        // convert bigint-typed strings to bigints
        if (raw === undefined || raw === null) return null;

        return BigInt(raw as string | number);
      },
    },
  };

  const schema = buildClientSchema(
    introspectionResult as unknown as IntrospectionQuery
  );

  const scalarsLink = withScalars({ schema, typesMap });

  const client = useMemo(() => {
    const httpLink = new HttpLink({ uri: subgraphUri });

    // https://github.com/reduxjs/redux-devtools/issues/1541#issuecomment-1834205251
    (BigInt.prototype as unknown as { toJSON: unknown }).toJSON = function () {
      return this.toString();
    };

    return new ApolloClient({
      devtools: {
        enabled: true,
      },
      cache,
      link: ApolloLink.from([scalarsLink, httpLink]),
    });
  }, [subgraphUri, scalarsLink]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
