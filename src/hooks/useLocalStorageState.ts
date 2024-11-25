import { useEffect, useState } from "react";

export function useLocalStorageState<V>(
  key: string | undefined,
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
  const [didSetInitial, setDidSetInitial] = useState(false);
  const [value, setValue] = useState<V>(initialValue);

  // read from cache
  useEffect(() => {
    if (didSetInitial || !key) return;

    const raw = localStorage.getItem(key);

    setValue(parse ? parse(raw) : (raw as V));

    setDidSetInitial(true);
  }, [key, parse, didSetInitial]);

  // update cache
  useEffect(() => {
    if (!key) return;

    localStorage.setItem(key, serialize ? serialize(value) : (value as string));
  }, [key, value, serialize]);

  return { value, setValue };
}
