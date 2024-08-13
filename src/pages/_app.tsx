import { BANNYVERSE_PROJECT_ID } from "@/constants/nfts";
import AlertContextProvider from "@/contexts/AlertContextProvider";
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
import { PropsWithChildren, useMemo } from "react";
import { WagmiProvider } from "wagmi";
import { config } from "../../config.wagmi";
import introspectionResult from "../../graphql.schema.json";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AlertContextProvider>
        <WagmiProvider config={config}>
          <_ApolloProvider>
            <JBProvider>
              <Component {...pageProps} />
            </JBProvider>
          </_ApolloProvider>
        </WagmiProvider>
      </AlertContextProvider>
    </QueryClientProvider>
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

        return BigInt(raw as string);
      },
    },
  };

  const schema = buildClientSchema(
    introspectionResult as unknown as IntrospectionQuery
  );

  const scalarsLink = withScalars({ schema, typesMap });

  const client = useMemo(() => {
    const httpLink = new HttpLink({ uri: subgraphUri });
    return new ApolloClient({
      cache: new InMemoryCache(),
      link: ApolloLink.from([scalarsLink, httpLink]),
    });
  }, [subgraphUri, scalarsLink]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
