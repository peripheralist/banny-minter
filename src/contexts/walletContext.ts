import { createContext } from "react";

type Context = {
  connect?: VoidFunction;
};

export const WalletContext = createContext<Context>({});
