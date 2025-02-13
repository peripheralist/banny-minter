import { useAppChain } from "@/hooks/useAppChain";
import { createApolloClient } from "@/utils/createApolloClient";
import { ApolloProvider } from "@apollo/client";
import { PropsWithChildren } from "react";

export function LooksApolloProvider({ children }: PropsWithChildren) {
  const appChain = useAppChain();

  const client = createApolloClient(appChain);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
