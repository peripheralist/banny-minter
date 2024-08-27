import { FONT_SIZE } from "@/constants/fontSize";
import { CATEGORY_GROUP_NAMES } from "@/constants/nfts";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useContext, useMemo } from "react";
import EquippedTiersPreview from "../EquippedTiersPreview";
import { TOOLBAR_HEIGHT } from "../Toolbar";
import ButtonPad from "../shared/ButtonPad";
import RoundedFrame from "../shared/RoundedFrame";
import BannyButtons from "./BannyButtons";
import CategoryGroupButton from "./CategoryGroupButton";
import CategoryGroupGrid from "./CategoryGroupGrid";
import Summary from "./Summary";
import { COLORS } from "@/constants/colors";

export default function LargeView({
  button,
  includeBannyButtons,
  includeShuffle,
}: {
  button: JSX.Element;
  includeBannyButtons?: boolean;
  includeShuffle?: boolean;
}) {
  const {
    equipped,
    equippingCategory,
    unequippingCategory,
    equipRandom,
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
    () => (windowWidth && windowWidth < 1200 ? 2 : 3),
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
        }}
      >
        <RoundedFrame
          background={COLORS.bananaLite}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "flex-start",
            position: "relative",
            height: "100%",
            boxSizing: "border-box",
            overflow: "auto",
            gap: 16,
            padding: contentSpacing,
          }}
          containerStyle={{ zIndex: 1 }}
        >
          {includeBannyButtons && (
            <RoundedFrame
              background={"white"}
              containerStyle={{
                padding: contentSpacing,
                margin: -contentSpacing,
                height: 140,
                boxSizing: "border-box",
                marginBottom: 0,
              }}
              style={{
                width: "100%",
                padding: 0,
                boxSizing: "border-box",
                marginTop: 8,
              }}
            >
              <BannyButtons
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                  marginBottom: contentSpacing,
                }}
                buttonStyle={{ height: 44, width: 44 }}
              />
            </RoundedFrame>
          )}

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

          <div style={{ flex: 1 }}></div>

          {includeShuffle && (
            <ButtonPad
              style={{ height: 40, fontSize: FONT_SIZE.md }}
              onClick={equipRandom}
              fillFg={COLORS.bananaHint}
              shadow="sm"
            >
              SHUFFLE
            </ButtonPad>
          )}
        </RoundedFrame>

        <div
          style={{
            height: "calc(100% - 12px)",
            width: 8,
            background: "#00000044",
            margin: -4,
            marginTop: 8,
            zIndex: 1,
          }}
        />

        <CategoryGroupGrid
          containerStyle={{ marginLeft: -16 }}
          style={{
            padding: contentSpacing,
            paddingLeft: contentSpacing + 12,
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
