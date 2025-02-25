import CustomHead from "@/components/shared/CustomHead";
import DressedBannyNftImage from "@/components/shared/DressedBannyNftImage";
import RoundedFrame from "@/components/shared/RoundedFrame";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import { CATEGORY_IDS } from "@/constants/category";
import { BAN_HOOK } from "@/constants/contracts";
import { Nft_OrderBy, OrderDirection, useNfTsQuery } from "@/generated/graphql";
import { useAllActivity } from "@/hooks/queries/useAllActivity";
import { useAppChain } from "@/hooks/useAppChain";
import { useWindowSize } from "@/hooks/useWindowSize";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import ActivityEventElem from "./ActivityEventElem";

export default function Activity() {
  const appChain = useAppChain();

  const { data: bannys, refetch } = useNfTsQuery({
    variables: {
      where: {
        collection: BAN_HOOK,
        category: CATEGORY_IDS.body,
      },
      orderBy: Nft_OrderBy.createdAt,
      orderDirection: OrderDirection.desc,
    },
  });

  useEffect(() => {
    refetch();
  }, [appChain]);

  const router = useRouter();

  const { events } = useAllActivity();

  const { width, isSmallScreen } = useWindowSize();

  const imgSize = useMemo(() => {
    return isSmallScreen ? width - 40 : 240;
  }, [isSmallScreen, width]);

  return (
    <>
      <CustomHead title="Explore" />

      <main>
        <ToolbarBagView
          dynamicToolbar
          sections={[
            {
              header: "Activity",
              sectionStyle: {
                flex: 0,
              },
              content: (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 4,
                    gap: 4,
                    minWidth: isSmallScreen ? undefined : 420,
                  }}
                >
                  {events.map((e) => (
                    <ActivityEventElem
                      key={`${e.chain.id}-${e.id}`}
                      event={e}
                    />
                  ))}
                </div>
              ),
            },
            {
              header: `Minted Bannys (${bannys?.nfts.length ?? "--"})`,
              sectionStyle: {
                flex: 1,
              },
              content: (
                <div style={{ flex: 1, padding: 4, overflow: "auto" }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: `repeat(auto-fit, ${imgSize}px)`,
                      gap: 4,
                    }}
                  >
                    {bannys?.nfts.map((nft) => (
                      <Link
                        key={nft.tokenId.toString()}
                        style={{ display: "block" }}
                        href={`${router.asPath}?nft=${nft.tokenId.toString()}`}
                      >
                        <RoundedFrame
                          borderColor="white"
                          background={"white"}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            pointerEvents: "none",
                          }}
                          containerStyle={{ height: imgSize, width: imgSize }}
                        >
                          <DressedBannyNftImage nft={nft} size={imgSize - 16} />
                        </RoundedFrame>
                      </Link>
                    ))}
                  </div>
                </div>
              ),
            },
          ]}
        />
      </main>
    </>
  );
}
