import { useEffect, useMemo, useState } from "react";

export function useLocalStorageState<V>(
  key: string | undefined,
  {
    disabled,
    defaultValue,
    parse,
    serialize,
  }: {
    disabled?: boolean;
    defaultValue: V;
    parse?: (v: string | null) => V;
    serialize?: (v: V) => string;
  }
) {
  const [initialized, setInitialized] = useState(false);
  const [value, setValue] = useState<V>(defaultValue);

  const _key = useMemo(() => (key ? `banny_retail_${key}` : undefined), [key]);

  // read from cache
  useEffect(() => {
    if (disabled || initialized || !_key) return;

    const raw = localStorage.getItem(_key);

    setValue(parse ? parse(raw) : (raw as V));

    setInitialized(true); // ensure initial read completes before updating cache
  }, [_key, parse, initialized, disabled]);

  // update cache
  useEffect(() => {
    if (disabled || !initialized || !_key) return;

    localStorage.setItem(
      _key,
      serialize ? serialize(value) : (value as string)
    );
  }, [_key, value, serialize, initialized, disabled]);

  return { value, setValue, initialized };
}
