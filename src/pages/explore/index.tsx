import CustomHead from "@/components/shared/CustomHead";
import DressedBannyNftImage from "@/components/shared/DressedBannyNftImage";
import RoundedFrame from "@/components/shared/RoundedFrame";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { useAllActivity } from "@/hooks/queries/useAllActivity";
import { useMultichainBannyNFTs } from "@/hooks/queries/useMultichainBannyNFTs";
import { useWindowSize } from "@/hooks/useWindowSize";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import ActivityEventElem from "./ActivityEventElem";

export default function Activity() {
  const { data: multichainBannys } = useMultichainBannyNFTs();

  const sortedBannys = useMemo(
    () =>
      multichainBannys?.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)),
    [multichainBannys]
  );

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
              header: `Minted Bannys (${sortedBannys?.length ?? "--"})`,
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
                    {sortedBannys?.map((nft) => (
                      <Link
                        key={nft.tokenId.toString()}
                        style={{ display: "block" }}
                        href={`${router.asPath}?nft=${
                          nft.chain.id
                        }:${nft.tokenId.toString()}`}
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
                          <div
                            style={{
                              position: "absolute",
                              bottom: 8,
                              left: 8,
                              fontSize: FONT_SIZE.xs,
                              color: COLORS.blue200,
                              textTransform: "uppercase",
                              background: "white",
                            }}
                          >
                            {nft.chain.name}
                          </div>
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
