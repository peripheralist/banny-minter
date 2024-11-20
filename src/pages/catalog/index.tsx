import ToolbarBagView from "@/components/shared/ToolbarBagView";
import DressedBannyNftImage from "@/components/shared/DressedBannyNftImage";
import RoundedFrame from "@/components/shared/RoundedFrame";
import { CATEGORY_IDS } from "@/constants/category";
import { LOOKS_COLLECTION_ID } from "@/constants/nfts";
import { useNfTsQuery } from "@/generated/graphql";
import Link from "next/link";

const IMG_SIZE = 320;

export default function Catalog() {
  const { data: bannys } = useNfTsQuery({
    variables: {
      where: {
        collection: LOOKS_COLLECTION_ID,
        category: CATEGORY_IDS["naked"],
      },
    },
  });

  return (
    <ToolbarBagView
      header={`CATALOG | ${bannys?.nfts.length ?? "--"} minted bannys`}
    >
      <div
        style={{
          display: "grid",
          paddingTop: 20,
          gridTemplateColumns: `repeat(auto-fit, ${IMG_SIZE}px)`,
          gap: 16,
        }}
      >
        {bannys?.nfts.map((nft) => (
          <Link
            key={nft.tokenId.toString()}
            style={{ display: "block" }}
            href={`/nft/${nft.tokenId.toString()}`}
          >
            <RoundedFrame
              background={"white"}
              style={{
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <DressedBannyNftImage nft={nft} size={IMG_SIZE - 8} />
            </RoundedFrame>
          </Link>
        ))}
      </div>
    </ToolbarBagView>
  );
}
