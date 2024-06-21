import RoundedFrame from "@/components/shared/RoundedFrame";
import { COLORS } from "@/constants/colors";
import { CATEGORIES } from "@/constants/nfts";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useContext } from "react";
import SelectedTierDetail from "./SelectedTierDetail";

export default function Index() {
  const { equipped } = useContext(EquipmentContext);

  const equippedCategories = CATEGORIES.filter((c) => !!equipped[c]);

  return (
    <RoundedFrame shadow containerStyle={{ width: "100%", height: "100%" }}>
      <div
        style={{
          textTransform: "uppercase",
          height: "100%",
          background: "#000000c8",
          padding: 20,
        }}
      >
        {equippedCategories.map((c) => (
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
            <SelectedTierDetail category={c} />
          </div>
        ))}
      </div>
    </RoundedFrame>
  );
}
