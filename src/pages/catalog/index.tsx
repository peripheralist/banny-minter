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
    return isSmallScreen ? width - 40 : 320;
  }, [isSmallScreen, width]);

  return (
    <ToolbarBagView
      dynamicToolbar
      header={`CATALOG | ${bannys?.nfts.length ?? "--"} minted bannys`}
    >
      <div
        style={{
          display: "grid",
          paddingTop: 20,
          gridTemplateColumns: `repeat(auto-fit, ${imgSize}px)`,
          justifyContent: isSmallScreen ? "center" : undefined,
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
              }}
            >
              <DressedBannyNftImage nft={nft} size={imgSize - 8} />
            </RoundedFrame>
          </Link>
        ))}
      </div>
    </ToolbarBagView>
  );
}
