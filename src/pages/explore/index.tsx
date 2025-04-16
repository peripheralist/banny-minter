import Fuzz from "@/components/pixelRenderers/Fuzz";
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
import { ROUTES } from "@/utils/routes";
import Link from "next/link";
import { useCallback, useMemo } from "react";
import ActivityEventElem from "./ActivityEventElem";

export default function Activity() {
  const { events, loading: eventsLoading } = useAllActivity();

  const { data: bannys, loading: bannysLoading } = useNfTsQuery({
    variables: {
      where: {
        category: 0,
        hook: BAN_HOOK,
        customized: true,
      },
      orderBy: "createdAt",
      orderDirection: "desc",
    },
  });

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
        {eventsLoading ? (
          <>
            <Fuzz width={400} height={128} pixelSize={8} fill={"white"} />
            <Fuzz width={400} height={128} pixelSize={8} fill={"white"} />
            <Fuzz width={400} height={128} pixelSize={8} fill={"white"} />
            <Fuzz width={400} height={128} pixelSize={8} fill={"white"} />
            <Fuzz width={400} height={128} pixelSize={8} fill={"white"} />
          </>
        ) : (
          <>
            {events?.activityEvents.items.map((e) => (
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
          </>
        )}
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
          {bannysLoading ? (
            <>
              <Fuzz
                width={imgSize}
                height={imgSize}
                pixelSize={8}
                fill={"white"}
              />
              <Fuzz
                width={imgSize}
                height={imgSize}
                pixelSize={8}
                fill={"white"}
              />
              <Fuzz
                width={imgSize}
                height={imgSize}
                pixelSize={8}
                fill={"white"}
              />
              <Fuzz
                width={imgSize}
                height={imgSize}
                pixelSize={8}
                fill={"white"}
              />
            </>
          ) : (
            bannys?.nfts.items?.map((nft) => (
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
                      <FormattedAddress
                        address={nft.owner?.address as `0x${string}`}
                      />
                    </span>
                  </div>
                </RoundedFrame>
              </Link>
            ))
          )}
        </div>
      </div>
    ),
    [measuredRef, imgSize, bannys?.nfts.items]
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
              header: `Bannys (${bannys?.nfts.items.length ?? "--"})`,
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
