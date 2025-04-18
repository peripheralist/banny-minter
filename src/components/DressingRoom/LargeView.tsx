import { DressBannyContext } from "@/contexts/dressBannyContext";
import { useContext } from "react";
import { CategoryGroupGrid } from "../shared/CategoryGroupGrid";
import EquippedTiersPreview from "../shared/EquippedTiersPreview";
import FullscreenLoading from "../shared/FullscreenLoading";
import ToolbarBagView from "../shared/ToolbarBagView";
import DecorateButton from "./DecorateButton";
import TierEquipButton from "./TierEquipButton";

// TODO make two columns separate sections
export default function LargeView({ tokenId }: { tokenId: number }) {
  const { availableTiers, equipped, equippingCategory, unequippingCategory } =
    useContext(DressBannyContext);

  if (!availableTiers) return <FullscreenLoading />;

  return (
    <ToolbarBagView
      dynamicToolbar
      disableDrawer
      sections={[
        {
          contentStyle: {
            display: "flex",
            flexDirection: "column",
            gap: 48,
            padding: 8,
            paddingLeft: 136,
            paddingBottom: 80,
            paddingTop: 12,
          },
          sectionStyle: {
            flex: 1,
          },
          header: `Outfit options`,
          content: (
            <CategoryGroupGrid
              label
              emptyText="None owned"
              items={availableTiers}
              render={(t) => (
                <TierEquipButton key={t.tierId} tier={t} size={180} />
              )}
              gridStyle={{
                gridTemplateColumns: `repeat(auto-fit, ${180}px)`,
                gap: 4,
              }}
              excludeGroups={["banny"]}
            />
          ),
        },
        {
          sectionStyle: {
            flex: 0,
          },
          header: `Banny #${tokenId.toString()}`,
          content: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                margin: -4,
                height: "100%",
                minWidth: 440,
                maxWidth: "30vw",
                background: "white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                }}
              >
                <EquippedTiersPreview
                  size={400}
                  equipped={equipped}
                  equippingCategory={equippingCategory}
                  unequippingCategory={unequippingCategory}
                />
              </div>

              <div style={{ margin: 12 }}>
                <DecorateButton />
              </div>
            </div>
          ),
        },
      ]}
    />
  );
}
