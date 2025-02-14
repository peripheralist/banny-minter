import { createContext } from "react";

export type Href = { label: string; href: string; blank?: boolean };

export type Alert = {
  title?: string;
  body?: string;
  action?: Href;
};

type Context = {
  alert: Alert | undefined;
  setAlert?: (alert: Alert) => void;
};

export const AlertContext = createContext<Context>({
  alert: undefined,
});
