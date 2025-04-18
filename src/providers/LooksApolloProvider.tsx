import { API_URL } from "@/constants/apiUrl";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { FunctionsMap, withScalars } from "apollo-link-scalars";
import { IntrospectionQuery, buildClientSchema } from "graphql";
import { PropsWithChildren, useMemo } from "react";
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

// ensure the cache is created only once.
const apolloCache = new InMemoryCache({
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
});

export function LooksApolloProvider({ children }: PropsWithChildren) {
  const schema = useMemo(
    () =>
      buildClientSchema(introspectionResult as unknown as IntrospectionQuery),
    []
  );

  const typesMap: FunctionsMap = useMemo(
    () => ({
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
    }),
    []
  );

  const scalarsLink = useMemo(
    () => withScalars({ schema, typesMap }),
    [schema, typesMap]
  );

  const httpLink = useMemo(
    () =>
      new HttpLink({
        uri: API_URL,
      }),
    []
  );

  const apolloClient = useMemo(
    () =>
      new ApolloClient({
        cache: apolloCache,
        link: ApolloLink.from([scalarsLink, httpLink]),
      }),
    [httpLink, scalarsLink]
  );

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
