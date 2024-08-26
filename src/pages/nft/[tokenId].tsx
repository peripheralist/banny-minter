import SingleFrameToolbarView from "@/components/SingleFrameToolbarView";
import Fuzz from "@/components/pixelRenderers/Fuzz";
import ButtonPad from "@/components/shared/ButtonPad";
import TierImage from "@/components/shared/TierImage";
import { useNfTsQuery } from "@/generated/graphql";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import { decodeNFTInfo } from "@/utils/decodeNftInfo";
import { parseTier } from "@/utils/parseTier";
import { isArray } from "@apollo/client/utilities";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import { formatEther, isAddressEqual } from "viem";
import { useAccount } from "wagmi";
import DressedBannyNftImage from "../closet/DressedBannyNftImage";
import { BANNYVERSE_COLLECTION_ID } from "@/constants/nfts";
import { useBannyEquippedTiers } from "@/hooks/useBannyEquippedTiers";
import { FONT_SIZE } from "@/constants/fontSize";
import RoundedFrame from "@/components/shared/RoundedFrame";
import { TOOLBAR_HEIGHT } from "@/components/Toolbar";
import { COLORS } from "@/constants/colors";
import dynamic from "next/dynamic";

const Toolbar = dynamic(() => import("@/components/Toolbar"), { ssr: false });

export default function Index() {
  const { address } = useAccount();

  const router = useRouter();

  const tokenId = useMemo(() => {
    const _tokenId = router.query.tokenId;

    return _tokenId && !isArray(_tokenId) && !isNaN(parseInt(_tokenId))
      ? parseInt(_tokenId)
      : 0;
  }, [router.query]);

  const { data } = useNfTsQuery({
    variables: {
      where: {
        tokenId: tokenId as unknown as bigint,
        collection: BANNYVERSE_COLLECTION_ID,
      },
    },
  });

  const smallScreen = useIsSmallScreen();

  const size = useMemo(() => (smallScreen ? 340 : 480), [smallScreen]);

  const nft = useMemo(() => data?.nfts[0], [data?.nfts]);

  const isOwned = useMemo(
    () =>
      address && nft?.owner.address
        ? isAddressEqual(nft?.owner.address, address)
        : false,
    [nft?.owner.address, address]
  );

  const { data: equippedTiers } = useBannyEquippedTiers(nft);

  const decoded = decodeNFTInfo(nft?.tokenUri);

  const NftImage = useCallback(() => {
    if (decoded?.category === 0) {
      return <DressedBannyNftImage nft={nft} size={size} />;
    }

    if (!nft?.tier) {
      return <Fuzz width={size} height={size} pixelSize={8} fill="#808080" />;
    }

    return <TierImage tier={parseTier(nft?.tier)} size={size} />;
  }, [nft, decoded, size]);

  const NftInfoRow = useCallback(
    ({
      label,
      value,
    }: {
      label: string;
      value: string | number | undefined;
    }) => (
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          width: "100%",
          gap: 40,
        }}
      >
        <div
          style={{
            fontWeight: "bolder",
            minWidth: 180,
            textTransform: "uppercase",
            opacity: 0.5,
          }}
        >
          {label}
        </div>
        <div style={{ flex: 1 }}>{value}</div>
      </div>
    ),
    []
  );

  const NftInfo = useCallback(() => {
    return (
      <div>
        <h2>{decoded?.name}</h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            marginTop: 32,
          }}
        >
          <NftInfoRow label="Token Id" value={decoded?.tokenId} />
          <NftInfoRow label="Category" value={decoded?.categoryName} />
          <NftInfoRow label="Owner" value={nft?.owner.address} />
          {decoded?.wornByNakedBannyId ? (
            <NftInfoRow
              label="Equipped"
              value={decoded.wornByNakedBannyId === "0" ? "NO" : "YES"}
            />
          ) : null}
          {decoded?.outfitIds?.length && equippedTiers ? (
            <NftInfoRow
              label="Wearing"
              value={Object.values(equippedTiers)
                .filter((t) => t?.category !== "naked")
                .map((t) => t?.name)
                .join(", ")}
            />
          ) : null}
          <NftInfoRow label="Total supply" value={decoded?.supply} />
          <NftInfoRow label="UPC" value={decoded?.upc} />
          <NftInfoRow
            label="Purchase price"
            value={
              decoded?.price ? `${formatEther(BigInt(decoded.price))} ETH` : 0
            }
          />
        </div>

        {isOwned && nft?.category === 0 && (
          <Link href={`/dress/${nft.tokenId.toString()}`}>
            <ButtonPad
              containerStyle={{
                height: 48,
                fontSize: FONT_SIZE.lg,
                width: "40%",
                minWidth: 100,
                marginTop: 32,
              }}
            >
              Dressing room
            </ButtonPad>
          </Link>
        )}
      </div>
    );
  }, [decoded, NftInfoRow, isOwned, nft, equippedTiers]);

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Toolbar />

      <style>{`body { background: ${COLORS.banana} }`}</style>

      <div
        style={{
          display: "flex",
          gap: 32,
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <RoundedFrame
          background={"white"}
          containerStyle={{ height: size, width: size }}
        >
          <NftImage />
        </RoundedFrame>

        <NftInfo />
      </div>
    </div>
  );
}
