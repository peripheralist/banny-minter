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

// ensure the cache is created only once.
const apolloCache = new InMemoryCache();

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

  const scalarsLink = useMemo(() => withScalars({ schema, typesMap }), []);

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
    []
  );

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
