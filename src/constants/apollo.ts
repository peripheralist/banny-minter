import {
  ApolloClient,
  ApolloLink,
  FieldPolicy,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { FunctionsMap, withScalars } from "apollo-link-scalars";
import { IntrospectionQuery, buildClientSchema } from "graphql";
import introspectionResult from "../../graphql.schema.json";
import { subgraphUri } from "./subgraph";

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
const httpLink = new HttpLink({ uri: subgraphUri });

// const paginationConfig: FieldPolicy = {
//   // Create a new cache list when the `keyArgs` variables change. Otherwise apply the below `merge` function to any existing cached list, even if other variables change like `first` or `skip`. This strategy enables infinite paging for unique lists while still preventing cached data from being unexpectedly included in query results, especially when updating the `where` argument to filter by properties of entities.
//   // https://www.apollographql.com/docs/react/pagination/key-args/
//   keyArgs: ["where", "orderBy", "orderDirection"],
//   merge(existing, incoming, { args }) {
//     const merged = existing ? existing.slice(0) : [];

//     if (incoming) {
//       if (args?.["skip"]) {
//         // Assume an offset of 0 if args.offset omitted.
//         for (let i = 0; i < incoming.length; ++i) {
//           merged[args["skip"] + i] = incoming[i];
//         }
//       } else {
//         return incoming;
//       }
//     }

//     return merged;
//   },
// };

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache({
    // typePolicies: {
    //   Query: {
    //     fields: {
    //       nfts: paginationConfig,
    //       nftTiers: paginationConfig,
    //     },
    //   },
    // },
  }),
  link: ApolloLink.from([scalarsLink, httpLink]),
});
