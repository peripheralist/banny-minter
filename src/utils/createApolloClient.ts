import { ApolloClient, ApolloLink, HttpLink } from "@apollo/client";
import { FunctionsMap, withScalars } from "apollo-link-scalars";
import { IntrospectionQuery, buildClientSchema } from "graphql";
import introspectionResult from "../../graphql.schema.json";
import { formatSubgraphUri } from "./formatSubgraphUri";
import { apolloCache } from "@/constants/apolloCache";

export function createApolloClient(networkName: string) {
  const subgraphUri = formatSubgraphUri(networkName);

  const httpLink = new HttpLink({ uri: subgraphUri });

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

  return new ApolloClient({
    cache: apolloCache,
    link: ApolloLink.from([scalarsLink, httpLink]),
  });
}
