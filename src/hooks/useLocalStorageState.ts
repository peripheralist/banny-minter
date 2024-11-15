import { useEffect, useState } from "react";

export function useLocalStorageState<V>(
  key: string,
  {
    initialValue,
    parse,
    serialize,
  }: {
    initialValue: V;
    parse?: (v: string | null) => V;
    serialize?: (v: V) => string;
  }
) {
  const [value, setValue] = useState<V>(initialValue);

  useEffect(() => {
    if (value !== initialValue) return;

    const raw = localStorage.getItem(key);

    setValue(parse ? parse(raw) : (raw as V));
  }, [key, parse, value, initialValue]);

  useEffect(() => {
    if (value === initialValue) return;

    localStorage.setItem(key, serialize ? serialize(value) : (value as string));
  }, [key, value, serialize, initialValue]);

  return { value, setValue };
}
