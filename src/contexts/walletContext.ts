import { createContext } from "react";

type Context = {
  connect?: VoidFunction;
  switchChain?: (chainId?: number) => void;
  wrongNetwork?: boolean;
};

export const WalletContext = createContext<Context>({});
