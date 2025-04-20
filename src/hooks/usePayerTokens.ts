import { FixedInt } from "fpnum";
import { getTokenAToBQuote } from "juice-sdk-core";
import { useJBRuleset, useJBRulesetMetadata } from "juice-sdk-react";
import { useMemo } from "react";

export function usePayerTokens(price: bigint | number | undefined | null) {
  const ruleset = useJBRuleset();
  const rulesetMetadata = useJBRulesetMetadata();

  const tokenCount = useMemo(() => {
    if (!price || !ruleset.data || !rulesetMetadata.data) {
      return;
    }

    const { weight } = ruleset.data;

    const { reservedPercent } = rulesetMetadata.data;

    const tokenAAmt = new FixedInt(BigInt(price), 18);

    const { payerTokens } = getTokenAToBQuote(tokenAAmt, {
      weight,
      reservedPercent,
    });

    return payerTokens;
  }, [ruleset, rulesetMetadata, price]);

  return {
    tokenCount,
    formatted: tokenCount ? new FixedInt(tokenCount, 18).format(18) : undefined,
  };
}
