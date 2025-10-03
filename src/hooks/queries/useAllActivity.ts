import { MAINNET_REVNET_ID, TESTNET_REVNET_ID } from "@/constants/contracts";
import { useActivityEventsQuery, useProjectQuery } from "@/generated/graphql";
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

  const { data: project } = useProjectQuery({
    variables: {
      chainId: appChain.id,
      projectId,
    },
  });

  const { data: events, ...props } = useActivityEventsQuery({
    variables: {
      where: {
        suckerGroupId: project?.project?.suckerGroup?.id,
        OR: [{ payEvent_not: null }, { decorateBannyEvent_not: null }],
      },
      orderBy: "timestamp",
      orderDirection: "desc",
      limit: 20,
    },
    skip: !project,
    notifyOnNetworkStatusChange: true,
  });

  return {
    ...props,
    events,
  };
}
