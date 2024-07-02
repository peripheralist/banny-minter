import { CATEGORY_GROUP_NAMES } from "@/constants/nfts";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { useContext, useMemo } from "react";
import EquippedTiersPreview from "../EquippedTiersPreview";
import { TOOLBAR_HEIGHT } from "../Toolbar";
import ButtonPad from "../shared/ButtonPad";
import RoundedFrame from "../shared/RoundedFrame";
import BannyButtons from "./BannyButtons";
import CategoryGroupButton from "./CategoryGroupButton";
import CategoryGroupGrid from "./CategoryGroupGrid";
import Summary from "./Summary";

export default function LargeView({
  button,
  includeBannyButtons,
}: {
  button: JSX.Element;
  includeBannyButtons?: boolean;
}) {
  const {
    equipped,
    equippingCategory,
    unequippingCategory,
    equipRandom,
    selectedGroup,
    setSelectedGroup,
  } = useContext(EquipmentContext);

  const { measuredRef, height: containerHeight } = useMeasuredRef();
  const {
    measuredRef: previewRef,
    height: previewHeight,
    width: previewWidth,
  } = useMeasuredRef();

  const gridRows = useMemo(
    () => Math.max(Math.floor((containerHeight - 120) / 150), 0),
    [containerHeight]
  );

  const windowWidth = useWindowWidth();
  const gridCols = useMemo(
    () => (windowWidth && windowWidth < 1200 ? 2 : 3),
    [windowWidth]
  );

  return (
    <div
      ref={measuredRef}
      style={{
        width: "100vw",
        height: `calc(100vh - ${TOOLBAR_HEIGHT}px)`,
        marginTop: TOOLBAR_HEIGHT,
        overflow: "hidden",
        minHeight: 600,
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        padding: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div
          style={{
            padding: 0,
            display: "flex",
            alignItems: "flex-end",
            gap: 10,
            boxSizing: "border-box",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "flex-start",
              position: "relative",
              height: "100%",
              boxSizing: "border-box",
              gap: 10,
            }}
          >
            {includeBannyButtons && (
              <BannyButtons
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 8,
                }}
                buttonStyle={{ height: 40, width: 40 }}
              />
            )}

            {setSelectedGroup
              ? CATEGORY_GROUP_NAMES.map((g) => (
                  <CategoryGroupButton
                    key={g}
                    group={g}
                    active={selectedGroup === g}
                    onClick={
                      selectedGroup === g
                        ? undefined
                        : () => setSelectedGroup(g)
                    }
                  />
                ))
              : null}

            <ButtonPad
              style={{ height: 40, fontSize: "1.4rem" }}
              onClick={equipRandom}
            >
              RANDOMIZE
            </ButtonPad>
          </div>

          <CategoryGroupGrid
            style={{ padding: 24 }}
            gridRows={gridRows}
            gridCols={gridCols}
            imageSize={120}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          flex: 1,
          height: "100%",
          marginLeft: 10,
          gap: 10,
        }}
      >
        <RoundedFrame shadow containerStyle={{ width: "100%", height: "100%" }}>
          <div
            ref={previewRef}
            style={{
              height: "100%",
              width: "100%",
              background: "white",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <EquippedTiersPreview
              size={Math.min(previewHeight, previewWidth) * 0.92}
              pixelSize={4}
              equipped={equipped}
              equippingCategory={equippingCategory}
              unequippingCategory={unequippingCategory}
            />
          </div>
        </RoundedFrame>

        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            gap: 10,
          }}
        >
          <div style={{ flex: 1 }}>
            <Summary />
          </div>

          {button}
        </div>
      </div>
    </div>
  );
}
