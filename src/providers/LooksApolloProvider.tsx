import { useChain } from "@/hooks/useChain";
import { createApolloClient } from "@/utils/createApolloClient";
import { ApolloProvider } from "@apollo/client";
import { PropsWithChildren } from "react";

export function LooksApolloProvider({ children }: PropsWithChildren) {
  const chain = useChain();

  const client = createApolloClient(chain);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
