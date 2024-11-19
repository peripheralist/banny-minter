import { CATEGORY_GROUPS, CATEGORY_GROUP_NAMES } from "@/constants/category";
import { DROPS } from "@/constants/drops";
import { FONT_SIZE } from "@/constants/fontSize";
import { ITEM_DESCRIPTIONS } from "@/constants/itemDescriptions";
import { useBannyEquippedTiers } from "@/hooks/queries/useBannyEquippedTiers";
import { useWindowSize } from "@/hooks/useWindowSize";
import { NFT } from "@/model/nft";
import { Tier } from "@/model/tier";
import { decodeNFTInfo } from "@/utils/decodeNftInfo";
import { formatEther } from "juice-sdk-core";
import Link from "next/link";
import { CSSProperties, useCallback, useMemo } from "react";
import { isAddressEqual } from "viem";
import { useAccount } from "wagmi";
import ButtonPad from "./ButtonPad";
import FormattedAddress from "./FormattedAddress";
import RoundedFrame from "./RoundedFrame";

export default function NftTierInfo({
  tier,
  nft,
  style,
}: {
  tier: Tier;
  nft?: NFT;
  style?: CSSProperties;
}) {
  const { address } = useAccount();

  const { data: equippedTiers } = useBannyEquippedTiers(nft);

  const decoded = decodeNFTInfo(nft?.tokenUri);

  const isOwned = useMemo(
    () =>
      address && nft?.owner.address
        ? isAddressEqual(nft?.owner.address, address)
        : false,
    [nft?.owner.address, address]
  );

  const { isSmallScreen } = useWindowSize();

  const drop = useMemo(() => {
    return DROPS.find((d) => d.tierIds.includes(tier.tierId));
  }, [tier]);

  const NftInfoRow = useCallback(
    ({
      label,
      value,
    }: {
      label: string;
      value: JSX.Element | string | number | undefined;
    }) => (
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          width: "100%",
          gap: 24,
          minWidth: 400,
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

  return (
    <div style={style}>
      <h1>{tier.name}</h1>

      <div style={{ display: "flex" }}>
        <RoundedFrame
          background={"black"}
          containerStyle={{ width: "auto" }}
          style={{ padding: "8px 12px", color: "white" }}
        >
          {formatEther(BigInt(tier.price))} ETH
        </RoundedFrame>
      </div>

      <p style={{ margin: 0, marginTop: 12, maxWidth: 400 }}>
        {ITEM_DESCRIPTIONS[tier.tierId]}
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          marginTop: 24,
          fontSize: FONT_SIZE.sm,
        }}
      >
        {nft && (
          <NftInfoRow
            label="Owner"
            value={
              <div style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
                <FormattedAddress address={nft?.owner.address} />{" "}
                {isOwned ? "(You) " : ""}
              </div>
            }
          />
        )}
        <NftInfoRow
          label="Supply"
          value={`${tier.remainingSupply.toString()}/${tier.initialSupply.toString()} available ${
            tier.remainingSupply === BigInt(0) ? "(Sold out)" : ""
          }`}
        />
        {drop && <NftInfoRow label="Drop" value={`#${drop.id} ${drop.name}`} />}
        <NftInfoRow
          label="Type"
          value={CATEGORY_GROUP_NAMES.find((n) =>
            CATEGORY_GROUPS[n].includes(tier.category)
          )}
        />
        <NftInfoRow label="Token category" value={tier.category} />
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
        {nft && <NftInfoRow label="Token Id" value={nft.tokenId.toString()} />}
        {/* <NftInfoRow label="UPC" value={tier.tierId} /> */}
      </div>

      {nft && isOwned && nft?.category === 0 && (
        <Link
          style={{
            display: "block",
            position: isSmallScreen ? "fixed" : "absolute",
            bottom: 24,
            left: 24,
          }}
          href={`/dress/${nft.tokenId.toString()}`}
        >
          <ButtonPad style={{ padding: 16 }}>Dressing room</ButtonPad>
        </Link>
      )}
    </div>
  );
}
