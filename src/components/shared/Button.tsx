import React, { PropsWithChildren } from "react";

export default function Button({ children }: PropsWithChildren) {
  return <button>{children}</button>;
}
