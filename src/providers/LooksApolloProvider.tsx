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
import { useSubgraphUri } from "../hooks/useSubgraphUri";

// ensure the cache is created only once.
const cache = new InMemoryCache();

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

export function LooksApolloProvider({ children }: PropsWithChildren) {
  const subgraphUri = useSubgraphUri();

  const client = useMemo(() => {
    const httpLink = new HttpLink({ uri: subgraphUri });

    // https://github.com/reduxjs/redux-devtools/issues/1541#issuecomment-1834205251
    (BigInt.prototype as unknown as { toJSON: unknown }).toJSON = function () {
      return this.toString();
    };

    return new ApolloClient({
      cache,
      link: ApolloLink.from([scalarsLink, httpLink]),
    });
  }, [subgraphUri, scalarsLink]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
