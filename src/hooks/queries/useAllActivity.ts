import { BAN_SUCKER_GROUP_ID } from "@/constants/contracts";
import { useActivityEventsQuery } from "@/generated/graphql";
import { useAppChain } from "../useAppChain";

/**
 * @returns All Looks NFT tiers
 */
export function useAllActivity() {
  const appChain = useAppChain();

  const { data: events, ...props } = useActivityEventsQuery({
    variables: {
      where: {
        suckerGroupId: BAN_SUCKER_GROUP_ID,
        OR: [{ payEvent_not: null }, { decorateBannyEvent_not: null }],
      },
      orderBy: "timestamp",
      orderDirection: "desc",
      limit: 20,
    },
    notifyOnNetworkStatusChange: true,
  });

  return {
    ...props,
    events,
  };
}
