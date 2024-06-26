import { createContext } from "react";

export type Href = { label: string; href: string };

type Context = {
  alert: string | undefined;
  href?: Href;
  setAlert?: (alert: string, href?: Href) => void;
};

export const AlertContext = createContext<Context>({
  alert: undefined,
});
