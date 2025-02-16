import { Chain } from "@/model/chain";
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { FunctionsMap, withScalars } from "apollo-link-scalars";
import { IntrospectionQuery, buildClientSchema } from "graphql";
import introspectionResult from "../../graphql.schema.json";
import { formatSubgraphUri } from "./formatSubgraphUri";

// https://github.com/reduxjs/redux-devtools/issues/1541#issuecomment-1834205251
(BigInt.prototype as unknown as { toJSON: unknown }).toJSON = function () {
  return this.toString();
};

// ensure the cache is created only once.
const apolloCache = new InMemoryCache();

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

export function createApolloClient(chain: Chain) {
  const httpLink = new HttpLink({
    uri: formatSubgraphUri(chain),
  });

  return new ApolloClient({
    cache: apolloCache,
    link: ApolloLink.from([scalarsLink, httpLink]),
  });
}
