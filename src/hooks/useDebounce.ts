import { useState, useEffect } from "react";

export default function useDebounce<T>(
  value: T,
  delay: number,
  callback?: (t: T) => void
) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);

      callback?.(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debouncedValue;
}
