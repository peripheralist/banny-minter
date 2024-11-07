import TierShopButton from "@/components/DressingRoom/TierShopButton";
import ToolbarBagView from "@/components/ToolbarBagView";
import {
  CATEGORY_GROUPS,
  CATEGORY_GROUP_NAMES,
  CategoryGroup,
} from "@/constants/category";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { ShopContext } from "@/contexts/shopContext";
import { useCategorizedTiers } from "@/hooks/queries/useCategorizedTiers";
import { Tier } from "@/model/tier";
import { useRouter } from "next/router";
import { useContext, useMemo } from "react";
import { DROPS } from "../drops";

const IMG_SIZE = 240;

function CategoryGroupGrid({ group }: { group: CategoryGroup }) {
  const { availableTiers: tiers } = useContext(ShopContext);

  const groupCategories = useMemo(() => CATEGORY_GROUPS[group], [group]);

  const tiersOfGroup = useMemo(() => {
    if (!tiers) return [];

    return groupCategories.reduce(
      (acc, cat) => [...acc, ...tiers[cat]],
      [] as Tier[]
    );
  }, [tiers, groupCategories]);

  return tiersOfGroup.length ? (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, ${IMG_SIZE}px)`,
        gap: 16,
      }}
    >
      {tiersOfGroup.map((t) => (
        <TierShopButton key={t.tierId} tier={t} buttonSize={IMG_SIZE} />
      ))}
    </div>
  ) : (
    <div style={{ columnSpan: "all" }}>None</div>
  );
}

export default function Drop() {
  const { tiers } = useCategorizedTiers();

  const router = useRouter();

  const dropId = useMemo(() => {
    const id = router.query.dropId as string;

    if (!id || isNaN(parseInt(id))) return undefined;

    return parseInt(id);
  }, [router.query.dropId]);

  const drop = useMemo(() => DROPS.find((d) => d.id === dropId), [dropId]);

  if (!tiers) return;

  return (
    <ToolbarBagView
      header={`Drop #${drop?.id.toString().padStart(3, "0")} | ${drop?.name}`}
    >
      <div
        style={{
          position: "relative",
          maxWidth: IMG_SIZE * 4 + 16 * 3, // fit 4 columns with gap
          padding: 80,
          paddingTop: 16,
        }}
      >
        <div style={{ marginBottom: 80 }}>
          <h1 style={{ fontSize: FONT_SIZE["4xl"] }}>{drop?.name}</h1>

          <div>
            {drop?.dateCreated} | {drop?.itemCount} items
          </div>

          <p>{drop?.summary}</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 24,
          }}
        >
          {CATEGORY_GROUP_NAMES.map((g) => (
            <div key={g}>
              <h3
                style={{
                  position: "sticky",
                  top: -4,
                  textTransform: "uppercase",
                  background: COLORS.bananaLite,
                  zIndex: 10,
                  paddingBottom: 16,
                  paddingTop: 16,
                  margin: 0,
                }}
              >
                {g}
              </h3>
              <CategoryGroupGrid group={g} />
            </div>
          ))}
        </div>
      </div>
    </ToolbarBagView>
  );
}
