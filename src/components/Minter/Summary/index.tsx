import RoundedFrame from "@/components/shared/RoundedFrame";
import { COLORS } from "@/constants/colors";
import { NFT_CATEGORIES } from "@/constants/nfts";
import { MinterContext } from "@/contexts/minterContext";
import { useContext } from "react";
import SelectedAssetDetail from "./SelectedAssetDetail";

export default function Index() {
  const {
    equipped: { get },
  } = useContext(MinterContext);

  const chosenAssets = NFT_CATEGORIES.filter((c) => !!get[c]);

  return (
    <RoundedFrame containerStyle={{ width: "100%", height: "100%" }}>
      <div
        style={{
          textTransform: "uppercase",
          height: "100%",
          background: "black",
          padding: 20,
        }}
      >
        {chosenAssets.map((c) => (
          <div style={{ display: "flex" }} key={c}>
            <div
              style={{
                fontWeight: "bold",
                width: "10%",
                minWidth: 100,
                color: COLORS.banana,
              }}
            >
              {c}:
            </div>
            <SelectedAssetDetail category={c} />
          </div>
        ))}
      </div>
    </RoundedFrame>
  );
}
