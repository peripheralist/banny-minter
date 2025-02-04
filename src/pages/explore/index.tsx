import CustomHead from "@/components/shared/CustomHead";
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
import { useRouter } from "next/router";

export default function Activity() {
  const { data: bannys } = useNfTsQuery({
    variables: {
      where: {
        collection: LOOKS_COLLECTION_ID,
        category: CATEGORY_IDS["naked"],
      },
    },
  });

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
                    <ActivityEventElem key={e.id} event={e} />
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
