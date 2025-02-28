import { useEffect, useMemo, useState } from "react";

export default function Marquee({
  text,
  maxLength,
}: {
  text: string;
  maxLength?: number;
}) {
  const _maxLength = useMemo(() => maxLength ?? 20, [maxLength]);

  const [_text, setText] = useState<string>(text.substring(0, _maxLength));

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      if (i < text.length - _maxLength) {
        i++;
      } else {
        i = 0;
      }
      setText(text.substring(i, i + _maxLength));
    }, 750);

    return () => clearInterval(interval);
  }, [text, _maxLength]);

  return <div>{_text}</div>;
}
