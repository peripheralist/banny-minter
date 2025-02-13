import { createContext } from "react";

type Context = {
  connect?: VoidFunction;
  switchChain?: VoidFunction;
  wrongNetwork?: boolean;
};

export const WalletContext = createContext<Context>({});
