import React, { useEffect, useState } from "react";
import Beacon from "./Beacon";

export default function Blinker() {
  const [on, setOn] = useState<boolean>();

  useEffect(() => {
    const id = setInterval(() => setOn((o) => !o), 1000);

    return () => clearInterval(id);
  }, []);

  return <Beacon on={on} />;
}
