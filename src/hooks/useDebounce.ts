import { useEffect, useState } from "react";

export default function useDebounce<V>(value: V, delayMillis: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delayMillis);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delayMillis]);

  return debouncedValue;
}
