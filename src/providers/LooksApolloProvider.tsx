import { API_URL, TESTNET_API_URL } from "@/constants/apiUrl";
import { useAppChain } from "@/hooks/useAppChain";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { FunctionsMap, withScalars } from "apollo-link-scalars";
import { IntrospectionQuery, buildClientSchema } from "graphql";
import { PropsWithChildren } from "react";
import introspectionResult from "../../graphql.schema.json";

// https://github.com/reduxjs/redux-devtools/issues/1541#issuecomment-1834205251
(BigInt.prototype as unknown as { toJSON: unknown }).toJSON = function () {
  return this.toString();
};

function merge(
  existing: { pageInfo?: { endCursor?: string }; items: [] } | undefined,
  incoming: { pageInfo?: { endCursor?: string }; items: [] }
) {
  return {
    ...existing,
    ...incoming,
    pageInfo: {
      ...(existing?.pageInfo ?? {}),
      ...(incoming.pageInfo ?? {}),
    },
    items:
      incoming.pageInfo &&
      existing?.pageInfo &&
      incoming.pageInfo.endCursor === existing.pageInfo.endCursor // crude prevent double query
        ? incoming.items
        : [...(existing?.items || []), ...(incoming.items || [])],
  };
}

const cacheConfig = {
  typePolicies: {
    Query: {
      fields: {
        nfts: {
          keyArgs: ["where", "orderBy", "orderDirection"],
          merge,
        },
        activityEvents: {
          keyArgs: ["where", "orderBy", "orderDirection"],
          merge,
        },
      },
    },
  },
} as const;

// ensure the cache is created only once.
const mainnetCache = new InMemoryCache(cacheConfig);
const testnetCache = new InMemoryCache(cacheConfig);

const schema = buildClientSchema(
  introspectionResult as unknown as IntrospectionQuery
);

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

const scalarsLink = withScalars({ schema, typesMap });

const httpLink = (testnet?: boolean) =>
  new HttpLink({
    uri: `${testnet ? TESTNET_API_URL : API_URL}/graphql`,
  });

const apolloClient = (testnet?: boolean) =>
  new ApolloClient({
    cache: testnet ? testnetCache : mainnetCache,
    link: ApolloLink.from([scalarsLink, httpLink(testnet)]),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
      },
    },
  });

export function LooksApolloProvider({ children }: PropsWithChildren) {
  const appChain = useAppChain();

  return (
    <ApolloProvider client={apolloClient(appChain.testnet)}>
      {children}
    </ApolloProvider>
  );
}
