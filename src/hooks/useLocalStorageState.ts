import { useEffect, useMemo, useState } from "react";

export function useLocalStorageState<V>(
  key: string | undefined,
  {
    defaultValue,
    parse,
    serialize,
  }: {
    defaultValue: V;
    parse?: (v: string | null) => V;
    serialize?: (v: V) => string;
  }
) {
  const [initialized, setInitialized] = useState(false);
  const [value, setValue] = useState<V>(defaultValue);

  const _key = useMemo(() => (key ? `looks_${key}` : undefined), [key]);

  // read from cache
  useEffect(() => {
    if (initialized || !_key) return;

    const raw = localStorage.getItem(_key);

    setValue(parse ? parse(raw) : (raw as V));

    setInitialized(true);
  }, [_key, parse, initialized]);

  // update cache
  useEffect(() => {
    if (!initialized || !_key) return;

    localStorage.setItem(
      _key,
      serialize ? serialize(value) : (value as string)
    );
  }, [_key, value, serialize, initialized]);

  return { value, setValue };
}
