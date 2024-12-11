import DressedBannyNftImage from "@/components/shared/DressedBannyNftImage";
import RoundedFrame from "@/components/shared/RoundedFrame";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import { CATEGORY_IDS } from "@/constants/category";
import { LOOKS_COLLECTION_ID } from "@/constants/nfts";
import { useNfTsQuery } from "@/generated/graphql";
import { useAllActivity } from "@/hooks/queries/useAllActivity";
import { useWindowSize } from "@/hooks/useWindowSize";
import Link from "next/link";
import { useMemo } from "react";
import ActivityEventElem from "./ActivityEventElem";
import CustomHead from "@/components/shared/CustomHead";

export default function Activity() {
  const { data: bannys } = useNfTsQuery({
    variables: {
      where: {
        collection: LOOKS_COLLECTION_ID,
        category: CATEGORY_IDS["naked"],
      },
    },
  });

  const { events } = useAllActivity();

  const { width, isSmallScreen } = useWindowSize();

  const imgSize = useMemo(() => {
    return isSmallScreen ? width - 40 : 400;
  }, [isSmallScreen, width]);

  return (
    <>
      <CustomHead title="Activity" />

      <ToolbarBagView
        dynamicToolbar
        header={`ACTIVITY | ${bannys?.nfts.length ?? "--"} minted bannys`}
      >
        <div
          style={{
            display: "flex",
            gap: 24,
            padding: 24,
            overflow: "hidden",
            maxHeight: "100%",
            maxWidth: 800,
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              width: imgSize,
              maxWidth: imgSize,
              overflow: "auto",
            }}
          >
            <h4 style={{ marginBottom: 24 }}>Minted Bannys</h4>

            {bannys?.nfts.map((nft) => (
              <Link
                key={nft.tokenId.toString()}
                style={{ display: "block" }}
                href={`/nft/${nft.tokenId.toString()}`}
              >
                <RoundedFrame
                  borderColor="white"
                  background={"white"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "none",
                    paddingTop: 8,
                    paddingBottom: 8,
                  }}
                >
                  <DressedBannyNftImage nft={nft} size={imgSize - 16} />
                </RoundedFrame>
              </Link>
            ))}
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              overflow: "auto",
            }}
          >
            <h4 style={{ marginBottom: 24 }}>Activity</h4>

            {events.map((e) => (
              <ActivityEventElem key={e.id} event={e} />
            ))}
          </div>
        </div>
      </ToolbarBagView>
    </>
  );
}
