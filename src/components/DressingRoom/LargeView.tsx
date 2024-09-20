import { CATEGORY_GROUP_NAMES } from "@/constants/category";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useContext, useMemo } from "react";
import EquippedTiersPreview from "../EquippedTiersPreview";
import { TOOLBAR_HEIGHT } from "../Toolbar";
import RoundedFrame from "../shared/RoundedFrame";
import CategoryGroupButton from "./CategoryGroupButton";
import Summary from "./Summary";
import TiersScrollGrid from "./TiersScrollGrid";
import { COLORS } from "@/constants/colors";

export default function LargeView({
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

  const {
    measuredRef: previewRef,
    height: previewHeight,
    width: previewWidth,
  } = useMeasuredRef();

  const { width: windowWidth } = useWindowSize();

  const gridCols = useMemo(
    () => (windowWidth && windowWidth < 800 ? 1 : 3),
    [windowWidth]
  );

  const imageSize = useMemo(
    () => (windowWidth && windowWidth < 800 ? 240 : 200),
    [windowWidth]
  );

  const layoutSpacing = 12;
  const contentSpacing = 20;

  const { measuredRef: groupButtonsRef, height: groupButtonsHeight } =
    useMeasuredRef();
  const { measuredRef: gridColumnRef, height: gridColumnHeight } =
    useMeasuredRef();

  return (
    <div
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
        padding: layoutSpacing,
      }}
    >
      <div
        ref={gridColumnRef}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            gap: layoutSpacing,
            marginBottom: layoutSpacing,
            boxSizing: "border-box",
          }}
          ref={groupButtonsRef}
        >
          {setSelectedGroup
            ? CATEGORY_GROUP_NAMES.map((g) => (
                <CategoryGroupButton
                  key={g}
                  group={g}
                  active={selectedGroup === g}
                  onClick={
                    selectedGroup === g ? undefined : () => setSelectedGroup(g)
                  }
                />
              ))
            : null}
        </div>

        <div
          style={{
            flex: 1,
            flexShrink: 1,
            boxSizing: "border-box",
            minHeight: 0,
          }}
        >
          <TiersScrollGrid
            categories={CATEGORY_GROUP_NAMES.filter((n) =>
              includeBody ? true : n !== "body"
            )}
            containerStyle={{
              maxHeight: gridColumnHeight - groupButtonsHeight - layoutSpacing,
            }}
            style={{
              maxHeight:
                gridColumnHeight - groupButtonsHeight - layoutSpacing - 36,
              padding: contentSpacing,
              paddingTop: 0,
            }}
            gridCols={gridCols}
            imageSize={imageSize}
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
          marginLeft: layoutSpacing,
          gap: layoutSpacing,
        }}
      >
        <div
          ref={previewRef}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <RoundedFrame
            shadow
            background={"white"}
            containerStyle={{
              width: "100%",
              height: "100%",
            }}
          >
            <EquippedTiersPreview
              size={Math.min(previewHeight, previewWidth) * 0.96}
              equipped={equipped}
              equippingCategory={equippingCategory}
              unequippingCategory={unequippingCategory}
            />
          </RoundedFrame>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "end",
            gap: layoutSpacing,
          }}
        >
          <div style={{ flex: 1, height: "100%" }}>
            <Summary />
          </div>

          {button}
        </div>
      </div>
    </div>
  );
}
