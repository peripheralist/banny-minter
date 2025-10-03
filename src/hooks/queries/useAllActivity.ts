import { BAN_SUCKER_GROUP_ID } from "@/constants/contracts";
import { useActivityEventsQuery } from "@/generated/graphql";

/**
 * @returns All Looks NFT tiers
 */
export function useAllActivity() {
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
