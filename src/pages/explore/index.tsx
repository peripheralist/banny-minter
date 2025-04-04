import CustomHead from "@/components/shared/CustomHead";
import DressedBannyNftImage from "@/components/shared/DressedBannyNftImage";
import FormattedAddress from "@/components/shared/FormattedAddress";
import RoundedFrame from "@/components/shared/RoundedFrame";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import { COLORS } from "@/constants/colors";
import { BAN_HOOK } from "@/constants/contracts";
import { FONT_SIZE } from "@/constants/fontSize";
import { useNfTsQuery } from "@/generated/graphql";
import { useAllActivity } from "@/hooks/queries/useAllActivity";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { useWindowSize } from "@/hooks/useWindowSize";
import { chainName } from "@/utils/chainName";
import { decodeNFTInfo } from "@/utils/decodeNftInfo";
import { ROUTES } from "@/utils/routes";
import Link from "next/link";
import { useCallback, useMemo } from "react";
import ActivityEventElem from "./ActivityEventElem";

export default function Activity() {
  const { events } = useAllActivity();

  const { data: bannys } = useNfTsQuery({
    variables: {
      where: {
        category: 0,
        hook: BAN_HOOK,
      },
    },
  });

  const sortedDressedBannys = useMemo(
    () =>
      [...(bannys?.nfts.items ?? [])]
        ?.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
        .filter((nft) => {
          const info = decodeNFTInfo(nft.tokenUri);

          return !!info?.outfitIds?.length;
        }),
    [bannys?.nfts.items]
  );

  const { isSmallScreen } = useWindowSize();

  const { measuredRef, width } = useMeasuredRef();

  const imgSize = useMemo(() => {
    if (isSmallScreen) return width - 16;

    if (width > 800) return 400;

    return Math.max(width / 2 - 10, 200);
  }, [isSmallScreen, width]);

  const ActivityList = useCallback(
    () => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 8,
          gap: 4,
          ...(isSmallScreen
            ? {}
            : {
                maxWidth: 540,
                minWidth: 400,
                width: "30vw",
              }),
        }}
      >
        {events?.map((e) => (
          <ActivityEventElem key={`${e.chainId}-${e.txHash}`} event={e} />
        ))}

        <div
          style={{
            padding: 24,
            textAlign: "center",
            opacity: 0.5,
            fontSize: FONT_SIZE.sm,
          }}
        >
          That{`'`}s everything
        </div>
      </div>
    ),
    [events, isSmallScreen]
  );

  const BannysList = useCallback(
    () => (
      <div ref={measuredRef} style={{ flex: 1, padding: 8, overflow: "auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fit, ${imgSize}px)`,
            gap: 4,
          }}
        >
          {sortedDressedBannys?.map((nft) => (
            <Link
              key={nft.chainId + "-" + nft.tokenId.toString()}
              style={{ display: "block" }}
              href={ROUTES.nftPath({
                chainId: nft.chainId,
                tokenId: nft.tokenId,
              })}
            >
              <RoundedFrame
                key={nft.chainId + "-" + nft.tokenId.toString()}
                borderColor="white"
                background={"white"}
                style={{ pointerEvents: "none" }}
                containerStyle={{ height: imgSize, width: imgSize }}
              >
                <DressedBannyNftImage nft={nft} size={imgSize} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    position: "absolute",
                    bottom: 0,
                    left: 4,
                    right: 4,
                    fontSize: FONT_SIZE.xs,
                    textTransform: "uppercase",
                  }}
                >
                  <span
                    style={{
                      color: COLORS.blue300,
                      background: "white",
                      padding: 4,
                      paddingBottom: 8,
                    }}
                  >
                    {chainName(nft.chainId)}
                  </span>

                  <span
                    style={{
                      color: COLORS.gray,
                      background: "white",
                      padding: 4,
                      paddingBottom: 8,
                    }}
                  >
                    <FormattedAddress address={nft.owner as `0x${string}`} />
                  </span>
                </div>
              </RoundedFrame>
            </Link>
          ))}
        </div>
      </div>
    ),
    [measuredRef, imgSize, sortedDressedBannys]
  );

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
              content: <ActivityList />,
            },
            {
              header: `Bannys (${sortedDressedBannys?.length ?? "--"})`,
              sectionStyle: {
                flex: 1,
              },
              content: <BannysList />,
            },
          ]}
        />
      </main>
    </>
  );
}
