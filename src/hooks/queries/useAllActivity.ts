import { BAN_HOOK, BAN_REVNET_ID } from "@/constants/nfts";
import {
  DecorateBannyEventsDocument,
  DecorateBannyEventsQuery,
  PayEventsDocument,
  PayEventsQuery,
  useNftTiersQuery,
} from "@/generated/graphql";
import { ActivityEvent } from "@/model/activity";
import { Chain } from "@/model/chain";
import { useMultichainQuery } from "./useMultichainQuery";

/**
 * @returns All Looks NFT tiers
 */
export function useAllActivity() {
  const { data: allTiers, ...props } = useNftTiersQuery({
    variables: {
      where: {
        collection: BAN_HOOK,
      },
    },
  });

  const { data: mints } = useMultiChainMints();
  const { data: decorates } = useMultiChainDecorates();

  const timeSortedEvents = [...(mints ?? []), ...(decorates ?? [])]
    .sort((a, b) => (a.timestamp > b.timestamp ? -1 : 1))
    .map((e) => ({
      ...e,
      type: (e as { bannyBodyId: bigint }).bannyBodyId ? "decorate" : "mint",
    })) as unknown as ActivityEvent[];

  return {
    ...props,
    events: timeSortedEvents,
  };
}

function useMultiChainMints() {
  return useMultichainQuery<
    PayEventsQuery,
    PayEventsQuery["payEvents"][number] & {
      chain: Chain;
    }
  >({
    key: "multichain-pays",
    document: PayEventsDocument,
    variables: {
      where: {
        projectId: BAN_REVNET_ID,
      },
    },
    parse: (r, chain) =>
      r.payEvents
        .map((e) => ({
          ...e,
          chain,
          bannyBodyId: undefined,
          backgroundId: undefined,
          outfitIds: [],
        }))
        .filter((e) => e.note.startsWith("Minted tiers")), // get only mints
  });
}

function useMultiChainDecorates() {
  return useMultichainQuery<
    DecorateBannyEventsQuery,
    DecorateBannyEventsQuery["decorateBannyEvents"][number] & {
      chain: Chain;
    }
  >({
    key: "multichain-decorates",
    document: DecorateBannyEventsDocument,
    parse: (r, chain) => r.decorateBannyEvents.map((e) => ({ ...e, chain })),
  });
}
