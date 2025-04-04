import { MAINNET_REVNET_ID, TESTNET_REVNET_ID } from "@/constants/contracts";
import { useActivityQuery } from "@/generated/graphql";
import { ActivityEvent } from "@/model/activity";
import { useMemo } from "react";
import { useAppChain } from "../useAppChain";

/**
 * @returns All Looks NFT tiers
 */
export function useAllActivity() {
  const appChain = useAppChain();

  // If connected to testnet, only show data from testnets
  const projectId = useMemo(
    () => (appChain.testnet ? TESTNET_REVNET_ID : MAINNET_REVNET_ID),
    [appChain.testnet]
  );

  const { data, ...props } = useActivityQuery({
    variables: {
      payWhere: {
        projectId,
      },
    },
  });

  const timeSortedEvents = useMemo(
    () =>
      [
        ...(data?.payEvents.items ?? []),
        ...(data?.decorateBannyEvents.items ?? []),
      ]
        .sort((a, b) => (a.timestamp > b.timestamp ? -1 : 1))
        .map((e) => ({
          ...e,
          type: (e as { bannyBodyId: bigint }).bannyBodyId ? "decorate" : "pay",
        })) as unknown as ActivityEvent[],
    [data?.payEvents.items, data?.decorateBannyEvents.items]
  );

  return {
    ...props,
    events: timeSortedEvents,
  };
}
