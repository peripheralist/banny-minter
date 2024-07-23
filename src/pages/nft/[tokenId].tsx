import SingleFrameToolbarView from "@/components/SingleFrameToolbarView";
import Fuzz from "@/components/pixelRenderers/Fuzz";
import TierImage from "@/components/shared/TierImage";
import { useNfTsQuery } from "@/generated/graphql";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import { decodeNFTInfo } from "@/utils/decodeNftInfo";
import { parseTier } from "@/utils/parseTier";
import { isArray } from "@apollo/client/utilities";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import DressedBannyNftImage from "../closet/DressedBannyNftImage";
import { formatEther, isAddressEqual, parseEther } from "viem";
import { useAccount } from "wagmi";
import ButtonPad from "@/components/shared/ButtonPad";
import Link from "next/link";

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
    variables: { where: { tokenId: tokenId as unknown as bigint } },
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

  const decoded = decodeNFTInfo(nft?.tokenUri);

  const NftImage = useCallback(() => {
    if (decoded?.category === "0") {
      return <DressedBannyNftImage nft={nft} size={size} />;
    }

    if (!nft?.tier) return <Fuzz width={size} height={size} />;

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
            minWidth: 100,
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
      <div style={{ paddingBottom: 40 }}>
        <h2 style={{ textAlign: "center" }}>{decoded?.name}</h2>

        {isOwned && nft?.category === 0 && (
          <Link href={`/dress/${nft.tokenId.toString()}`}>
            <ButtonPad
              style={{
                height: 40,
                fontSize: "1.5rem",
                width: "40%",
                minWidth: 100,
                margin: "0 auto",
              }}
            >
              Dressing room
            </ButtonPad>
          </Link>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            marginTop: 30,
          }}
        >
          <NftInfoRow label="Owner" value={nft?.owner.address} />
          <NftInfoRow
            label="Purchase price"
            value={
              decoded?.price ? `${formatEther(BigInt(decoded.price))} ETH` : 0
            }
          />
          <NftInfoRow label="Category" value={decoded?.categoryName} />
          <NftInfoRow label="Total supply" value={decoded?.supply} />
          <NftInfoRow label="Remaining" value={decoded?.remaining} />
          <NftInfoRow label="UPC" value={decoded?.upc} />
          <NftInfoRow label="Token Id" value={decoded?.tokenId} />
          {decoded?.wornByNakedBannyId ? (
            <NftInfoRow
              label="Equipped"
              value={decoded.wornByNakedBannyId === "0" ? "NO" : "YES"}
            />
          ) : null}
        </div>
      </div>
    );
  }, [decoded, NftInfoRow, isOwned, nft]);

  return (
    <SingleFrameToolbarView
      footer={<NftInfo />}
      frameStyle={{ height: size, width: size, padding: 0 }}
    >
      <NftImage />
    </SingleFrameToolbarView>
  );
}
