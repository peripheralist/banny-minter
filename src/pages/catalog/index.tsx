import ToolbarBagView from "@/components/shared/ToolbarBagView";
import DressedBannyNftImage from "@/components/shared/DressedBannyNftImage";
import RoundedFrame from "@/components/shared/RoundedFrame";
import { CATEGORY_IDS } from "@/constants/category";
import { LOOKS_COLLECTION_ID } from "@/constants/nfts";
import { useNfTsQuery } from "@/generated/graphql";
import Link from "next/link";
import { useMemo } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";

export default function Catalog() {
  const { data: bannys } = useNfTsQuery({
    variables: {
      where: {
        collection: LOOKS_COLLECTION_ID,
        category: CATEGORY_IDS["naked"],
      },
    },
  });

  const { width, isSmallScreen } = useWindowSize();

  const imgSize = useMemo(() => {
    return isSmallScreen ? width - 40 : 280;
  }, [isSmallScreen, width]);

  return (
    <ToolbarBagView
      frame
      dynamicToolbar
      header={`CATALOG | ${bannys?.nfts.length ?? "--"} minted bannys`}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fit, ${imgSize}px)`,
          justifyContent: isSmallScreen ? "center" : undefined,
          gap: 4,
          padding: 12,
        }}
      >
        {bannys?.nfts.map((nft) => (
          <Link
            key={nft.tokenId.toString()}
            style={{ display: "block" }}
            href={`/nft/${nft.tokenId.toString()}`}
          >
            <RoundedFrame
              borderColor="white"
              background={"white"}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
                paddingTop: 8,
                paddingBottom: 8,
              }}
            >
              <DressedBannyNftImage nft={nft} size={imgSize - 16} />
            </RoundedFrame>
          </Link>
        ))}
      </div>
    </ToolbarBagView>
  );
}
