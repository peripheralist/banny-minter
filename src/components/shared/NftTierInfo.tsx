import { ITEM_DESCRIPTIONS } from "@/constants/itemDescriptions";
import { useBannyEquippedTiers } from "@/hooks/useBannyEquippedTiers";
import { NFT } from "@/model/nft";
import { Tier } from "@/model/tier";
import { decodeNFTInfo } from "@/utils/decodeNftInfo";
import { formatEther } from "juice-sdk-core";
import Link from "next/link";
import { useCallback, useMemo } from "react";
import { isAddressEqual } from "viem";
import { useAccount } from "wagmi";
import ButtonPad from "./ButtonPad";
import { CATEGORY_GROUPS, CATEGORY_GROUP_NAMES } from "@/constants/category";

export default function NftTierInfo({ tier, nft }: { tier: Tier; nft?: NFT }) {
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
          gap: 24,
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
        <div style={{ lineBreak: "anywhere", flex: 1 }}>{value}</div>
      </div>
    ),
    []
  );

  return (
    <div>
      <h2>{tier.name}</h2>

      <p style={{ margin: 0 }}>{ITEM_DESCRIPTIONS[tier.tierId]}</p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          marginTop: 24,
        }}
      >
        {nft && <NftInfoRow label="Token Id" value={nft.tokenId.toString()} />}
        <NftInfoRow
          label="Group"
          value={CATEGORY_GROUP_NAMES.find((n) =>
            CATEGORY_GROUPS[n].includes(tier.category)
          )}
        />
        <NftInfoRow label="Token category" value={tier.category} />
        {nft && <NftInfoRow label="Owner" value={nft.owner.address} />}
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
        <NftInfoRow
          label="Total supply"
          value={tier.initialSupply.toString()}
        />
        <NftInfoRow
          label="Mints"
          value={(tier.initialSupply - tier.remainingSupply).toString()}
        />
        <NftInfoRow label="UPC" value={tier.tierId} />
        <NftInfoRow
          label="Purchase price"
          value={`${formatEther(BigInt(tier.price))} ETH`}
        />
      </div>

      {nft && isOwned && nft?.category === 0 && (
        <Link
          style={{ display: "block", paddingBottom: 24, marginTop: 24 }}
          href={`/dress/${nft.tokenId.toString()}`}
        >
          <ButtonPad style={{ padding: "8px 12px" }}>Dressing room</ButtonPad>
        </Link>
      )}
    </div>
  );
}
