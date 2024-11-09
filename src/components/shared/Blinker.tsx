import React, { useEffect, useState } from "react";
import Light from "./Light";

export default function Blinker(props?: Partial<Parameters<typeof Light>>[0]) {
  const [on, setOn] = useState<boolean>();

  useEffect(() => {
    const id = setInterval(() => setOn((o) => !o), 1000);

    return () => clearInterval(id);
  }, []);

  return <Light on={on} {...props} />;
}
