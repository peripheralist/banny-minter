import ToolbarBagView from "@/components/ToolbarBagView";
import { CATEGORY_IDS } from "@/constants/category";
import { BANNYVERSE_COLLECTION_ID } from "@/constants/nfts";
import { useNfTsQuery } from "@/generated/graphql";
import React from "react";
import DressedBannyNftImage from "../closet/DressedBannyNftImage";
import RoundedFrame from "@/components/shared/RoundedFrame";
import Link from "next/link";

const IMG_SIZE = 320;

export default function Runway() {
  const { data: bannys } = useNfTsQuery({
    variables: {
      where: {
        collection: BANNYVERSE_COLLECTION_ID,
        category: CATEGORY_IDS["naked"],
      },
    },
  });

  return (
    <ToolbarBagView
      frame
      header={`RUNWAY | ${bannys?.nfts.length} minted bannys`}
    >
      <div
        style={{
          display: "grid",
          padding: 24,
          paddingTop: 20,
          gridTemplateColumns: `repeat(auto-fit, ${IMG_SIZE}px)`,
          gap: 16,
        }}
      >
        {bannys?.nfts.map((nft) => (
          <Link
            key={nft.tokenId.toString()}
            href={`/nft/${nft.tokenId.toString()}`}
          >
            <RoundedFrame background={"white"}>
              <DressedBannyNftImage nft={nft} size={IMG_SIZE} />
            </RoundedFrame>
          </Link>
        ))}
      </div>
    </ToolbarBagView>
  );
}
