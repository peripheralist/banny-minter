import { CATEGORY_GROUP_NAMES } from "@/constants/nfts";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useContext, useMemo } from "react";
import EquippedTiersPreview from "../EquippedTiersPreview";
import RoundedFrame from "../shared/RoundedFrame";
import BannyButtons from "./BannyButtons";
import CategoryGroupButton from "./CategoryGroupButton";
import CategoryGroupGrid from "./CategoryGroupGrid";
import Summary from "./Summary";

export default function SmallView({
  button,
  includeBody,
}: {
  button: JSX.Element;
  includeBody?: boolean;
}) {
  const {
    equipped,
    equippingCategory,
    unequippingCategory,
    selectedGroup,
    setSelectedGroup,
  } = useContext(EquipmentContext);

  const { width: windowWidth } = useWindowSize();
  const gridImageSize = useMemo(
    () => (windowWidth && windowWidth > 600 ? 120 : 80),
    [windowWidth]
  );
  const gridCols = useMemo(
    () =>
      windowWidth ? Math.floor((windowWidth - 100) / (gridImageSize + 12)) : 3,
    [windowWidth, gridImageSize]
  );

  const gap = 10;

  return (
    <div
      style={{
        width: "100vw",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        padding: 20,
        paddingTop: 0,
        gap,
      }}
    >
      {includeBody && (
        <BannyButtons
          style={{ display: "flex", gap }}
          buttonStyle={{ height: 40, flex: 1 }}
        />
      )}

      <RoundedFrame shadow containerStyle={{ width: "100%", height: 320 }}>
        <div
          style={{
            height: "100%",
            background: "white",
          }}
        >
          <EquippedTiersPreview
            size={280}
            equipped={equipped}
            equippingCategory={equippingCategory}
            unequippingCategory={unequippingCategory}
          />
        </div>
      </RoundedFrame>

      {setSelectedGroup && (
        <div style={{ display: "flex", gap }}>
          {CATEGORY_GROUP_NAMES.map((g) => (
            <CategoryGroupButton
              key={g}
              group={g}
              active={selectedGroup === g}
              onClick={
                selectedGroup === g ? undefined : () => setSelectedGroup(g)
              }
            />
          ))}
        </div>
      )}

      <CategoryGroupGrid
        style={{ padding: 24 }}
        gridRows={3}
        gridCols={gridCols}
        imageSize={gridImageSize}
      />

      <div
        style={{
          display: "grid",
          gap,
          gridTemplateColumns: `repeat(${
            windowWidth && windowWidth < 800 ? 1 : 2
          }, 1fr)`,
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
          }}
        >
          <RoundedFrame containerStyle={{ flex: 1, height: "100%" }}>
            <div
              style={{
                padding: 20,
                boxSizing: "border-box",
              }}
            >
              <Summary />
            </div>
          </RoundedFrame>
        </div>

        {button}
      </div>
    </div>
  );
}
