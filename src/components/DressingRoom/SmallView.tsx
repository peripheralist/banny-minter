import { CATEGORY_GROUPS, CATEGORY_GROUP_NAMES } from "@/constants/category";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { useContext } from "react";
import EquippedTiersPreview from "../shared/EquippedTiersPreview";
import FullscreenLoading from "../shared/FullscreenLoading";
import RoundedFrame from "../shared/RoundedFrame";
import DecorateButton from "./DecorateButton";
import TierEquipButton from "./TierEquipButton";
import ToolbarBagView from "../shared/ToolbarBagView";

export default function SmallView({ tokenId }: { tokenId: bigint }) {
  const { availableTiers, equipped, equippingCategory, unequippingCategory } =
    useContext(EquipmentContext);

  const { measuredRef: previewRef, width: previewWidth } = useMeasuredRef();

  const buttonWidth = 180;

  if (!availableTiers) return <FullscreenLoading />;

  return (
    <ToolbarBagView
      dynamicToolbar
      sections={[
        {
          header: `Dress Banny #${tokenId.toString()}`,
          content: (
            <>
              <div style={{ marginBottom: 12 }} ref={previewRef}>
                <RoundedFrame
                  shadow
                  background={"white"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <EquippedTiersPreview
                    size={previewWidth}
                    equipped={equipped}
                    equippingCategory={equippingCategory}
                    unequippingCategory={unequippingCategory}
                  />
                </RoundedFrame>
              </div>

              <div
                style={{
                  display: "flex",
                  padding: 12,
                  marginLeft: -12,
                  marginRight: -12,
                  overflow: "auto",
                }}
              >
                {CATEGORY_GROUP_NAMES.filter((g) => g !== "banny").map((g) => {
                  const groupTiers = availableTiers.filter((t) =>
                    CATEGORY_GROUPS[g].includes(t.category)
                  );

                  return (
                    <>
                      <div
                        style={{
                          position: "sticky",
                          top: 0,
                          left: 0,
                          width: 0,
                          overflow: "visible",
                        }}
                      >
                        <RoundedFrame
                          background={"black"}
                          containerStyle={{ height: 24, width: buttonWidth }}
                          style={{
                            color: COLORS.banana100,
                            textTransform: "uppercase",
                            padding: "4px 24px",
                            textAlign: "center",
                          }}
                        >
                          {g}
                        </RoundedFrame>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: 4,
                          marginTop: 32,
                          marginRight: "50%",
                        }}
                      >
                        {groupTiers.length
                          ? groupTiers.map((t) => (
                              <TierEquipButton
                                key={t.tierId}
                                tier={t}
                                size={buttonWidth}
                                labelStyle={{
                                  fontSize: FONT_SIZE.xs,
                                  whiteSpace: "pre",
                                  padding: 12,
                                }}
                              />
                            ))
                          : "None owned"}
                      </div>
                    </>
                  );
                })}
              </div>

              <div
                style={{
                  position: "fixed",
                  width: "calc(100% - 24px)",
                  zIndex: 200,
                  bottom: 12,
                }}
              >
                <DecorateButton />
              </div>
            </>
          ),
        },
      ]}
    />
  );
}
