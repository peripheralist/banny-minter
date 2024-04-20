import { CATEGORY_GROUP_NAMES } from "@/constants/nfts";
import { MinterContext } from "@/contexts/minterContext";
import { useCategorizedTiers } from "@/hooks/queries/useCategorizedTiers";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { useCallback, useContext, useMemo, useState } from "react";
import { TOOLBAR_HEIGHT } from "../Toolbar";
import ButtonPad from "../shared/ButtonPad";
import RoundedFrame from "../shared/RoundedFrame";
import BannyButtons from "./BannyButtons";
import CategoryGroupButton from "./CategoryGroupButton";
import CategoryGroupGrid from "./CategoryGroupGrid";
import EquippedTiersPreview from "../EquippedTiersPreview";
import Loading from "./Loading";
import MintButton from "./MintButton";
import Summary from "./Summary";

export default function LargeView() {
  const { loading } = useCategorizedTiers();

  const {
    equipped,
    equippingCategory,
    unequippingCategory,
    equipRandom,
    selectedGroup,
    setSelectedGroup,
  } = useContext(MinterContext);

  const [containerHeight, setContainerHeight] = useState<number>(0);

  const measuredRef = useCallback((node: HTMLDivElement) => {
    const fn = () => {
      setContainerHeight(node.getBoundingClientRect().height);
    };

    if (node !== null) {
      window.removeEventListener("resize", fn);
      window.addEventListener("resize", fn);
      setContainerHeight(node.getBoundingClientRect().height);
    }
  }, []);

  const gridRows = useMemo(
    () => 3 + Math.max(Math.floor((containerHeight - 600) / 128), 0),
    [containerHeight]
  );

  const windowWidth = useWindowWidth();
  const gridCols = useMemo(
    () => (windowWidth && windowWidth < 1200 ? 2 : 3),
    [windowWidth]
  );

  if (loading) return <Loading />;

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
        padding: 32,
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
            gap: 24,
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
            <BannyButtons
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 8,
              }}
              buttonStyle={{ height: 40, width: 40 }}
            />

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
          marginLeft: 24,
          gap: 24,
        }}
      >
        <RoundedFrame shadow containerStyle={{ width: "100%", height: "100%" }}>
          <div
            style={{
              height: "100%",
              background: "white",
            }}
          >
            <EquippedTiersPreview
              size={440}
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
            gap: 32,
          }}
        >
          <div style={{ flex: 1 }}>
            <Summary />
          </div>

          <MintButton />
        </div>
      </div>
    </div>
  );
}
