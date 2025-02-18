import { Chain } from "@/model/chain";
import { createApolloClient } from "@/utils/createApolloClient";
import { useQuery } from "@tanstack/react-query";
import { DocumentNode } from "graphql";
import { useSupportedChains } from "../useSupportedChains";

export function useMultichainQuery<T, R>({
  key,
  document,
  parse,
  variables,
}: {
  key: string;
  document: DocumentNode;
  parse: (r: T, chain: Chain) => R[];
  variables?: (chainId: number) => object;
}) {
  const chains = useSupportedChains();

  return useQuery({
    queryKey: [key, ...chains.map((c) => c.id)],
    queryFn: () =>
      Promise.allSettled(
        chains.map((chain) => {
          const client = createApolloClient(chain);

          return client.query<T>({
            query: document,
            variables: variables?.(chain.id),
            fetchPolicy: "no-cache",
          });
        })
      ).then((promises) => {
        const results: R[] = [];

        promises.forEach((p, i) => {
          if (p.status === "rejected") {
            console.log("Cross-chain query failed", p);

            return;
          }

          const chain = chains[i];

          results.push(...parse(p.value.data, chain));
        });

        return results;
      }),
  });
}
