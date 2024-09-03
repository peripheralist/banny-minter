import { CATEGORY_GROUP_NAMES } from "@/constants/nfts";
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
    () =>
      windowWidth && windowWidth < 1200
        ? 2
        : windowWidth && windowWidth < 1320
        ? 3
        : 4,
    [windowWidth]
  );

  const layoutSpacing = 12;
  const contentSpacing = 20;

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
        style={{
          display: "flex",
          height: "100%",
          gap: layoutSpacing,
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
            overflow: "auto",
            gap: 16,
          }}
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

        <TiersScrollGrid
          categories={CATEGORY_GROUP_NAMES.filter((n) =>
            includeBody ? true : n !== "body"
          )}
          style={{
            padding: contentSpacing,
            paddingTop: 0,
          }}
          gridCols={gridCols}
          imageSize={132}
        />
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
              size={Math.min(previewHeight, previewWidth) * 0.9}
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
