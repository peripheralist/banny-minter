import { createContext, ReactElement } from "react";

export type ModalConfig = {
  id: string;
  modal: ReactElement;
  onClose?: VoidFunction;
};

type Context = {
  openModal?: (c: ModalConfig) => void;
  closeModal?: (id: ModalConfig["id"]) => void;
};

export const ModalContext = createContext<Context>({});
