import ButtonPad from "@/components/shared/ButtonPad";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { CATEGORY_GROUPS, CategoryGroup } from "@/constants/category";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { Tier } from "@/model/tier";
import { useCallback, useContext, useMemo } from "react";
import TierSelectorButton from "../TierSelectorButton";

export default function CategoryGroupGrid({
  group,
  gridCols,
  imageSize,
}: {
  group: CategoryGroup;
  gridCols: number;
  imageSize: number;
}) {
  const {
    equipped,
    equip,
    availableTiers: tiers,
  } = useContext(EquipmentContext);

  const groupCategories = useMemo(() => CATEGORY_GROUPS[group], [group]);

  const unequipAllForGroup = useCallback(
    () =>
      groupCategories.forEach((c) => {
        if (equipped[c]) equip?.[c]?.(undefined);
      }),
    [groupCategories, equipped, equip]
  );

  const selectedTiersCount = useMemo(
    () => groupCategories.filter((c) => !!equipped[c]).length,
    [groupCategories, equipped]
  );

  const tiersOfGroup = useMemo(() => {
    if (!tiers) return [];

    return groupCategories.reduce(
      (acc, cat) => [...acc, ...tiers[cat]],
      [] as Tier[]
    );
  }, [tiers, groupCategories]);

  return (
    <div id={group} style={{ marginBottom: 24 }}>
      <div
        id={`h-${group}`}
        style={{
          position: "sticky",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          top: 0,
          padding: "4px 0 12px",
          background: COLORS.bananaHint,
          zIndex: 10,
        }}
      >
        <h4
          style={{
            margin: 0,
            paddingTop: 8,
            fontSize: FONT_SIZE.xl,
          }}
        >
          {group[0].toUpperCase()}
          {group.substring(1)}
        </h4>

        {selectedTiersCount > 0 && (
          <>
            <span
              style={{
                color: COLORS.pink,
                flex: 1,
                marginLeft: 12,
                fontSize: FONT_SIZE.lg,
              }}
            >
              {selectedTiersCount}
            </span>

            <ButtonPad
              style={{
                padding: "8px 12px",
                color: COLORS.pink,
                fontSize: FONT_SIZE.sm,
              }}
              containerStyle={{ alignSelf: "center" }}
              onClick={unequipAllForGroup}
              shadow="none"
              fillBorder={COLORS.pink}
              fillFg={COLORS.bananaHint}
            >
              CLEAR
            </ButtonPad>
          </>
        )}
      </div>

      <div
        style={{
          scrollMarginTop: 60,
          display: "grid",
          gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
          gap: 8,
          paddingBottom: 8,
        }}
      >
        {tiersOfGroup.length ? (
          tiersOfGroup.map((t) => (
            <TierSelectorButton
              key={t.tierId}
              tier={t}
              buttonSize={imageSize}
            />
          ))
        ) : (
          <div style={{ columnSpan: "all" }}>None</div>
        )}
      </div>
    </div>
  );
}
