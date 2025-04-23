import { useCallback, useEffect, useMemo, useState } from "react";

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

    if (raw !== undefined && raw !== null) {
      setValue((v) =>
        parse
          ? parse(raw)
          : typeof v === "boolean"
          ? ((raw === "true") as V)
          : (raw as V)
      );
    }

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

  const purge = useCallback(() => {
    if (!_key) return;
    localStorage.removeItem(_key);
  }, [_key]);

  return { value, setValue, initialized, purge };
}
