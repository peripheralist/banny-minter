import { CATEGORY_GROUPS, Category } from "@/constants/category";
import { COLORS } from "@/constants/colors";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { Tier } from "@/model/tier";
import {
  CSSProperties,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import ButtonPad from "../../shared/ButtonPad";
import RoundedFrame from "../../shared/RoundedFrame";
import NextPrevButtons from "./NextPrevButtons";
import PageIndicator from "./PageIndicator";
import TiersGrid from "./TiersGrid";

/**
 * Renders a paged grid of all tiers within a category group, that can be equipped or unequipped by clicking..
 * @param gridCols Number of grid columns
 * @param gridRows Number of grid rows
 * @param imageSize Base size of tier asset images in grid. May be scaled up based on tier category.
 * @param style CSS Style
 */
export default function CategoryGroupGrid({
  gridCols,
  gridRows,
  imageSize,
  containerStyle,
  style,
}: {
  gridCols: number;
  gridRows?: number;
  imageSize: number;
  containerStyle?: CSSProperties;
  style?: CSSProperties;
}) {
  const { measuredRef, height: containerHeight } = useMeasuredRef();

  const {
    selectedGroup,
    equipped,
    equip,
    availableTiers: tiers,
  } = useContext(EquipmentContext);

  // Categories of selected group
  const categories = useMemo(
    () => CATEGORY_GROUPS[selectedGroup],
    [selectedGroup]
  );

  // All tiers to be included in pages
  const allTiers = useMemo(() => {
    if (!tiers) return undefined;

    return Object.entries(tiers)
      .filter(([category]) => categories.includes(category as Category))
      .reduce((acc, [_, _tiers]) => [...acc, ..._tiers], [] as Tier[]);
  }, [tiers, categories]);

  const _gridRows = useMemo(
    () =>
      gridRows ??
      Math.max(Math.floor((containerHeight - 80) / (imageSize + 20)), 0),
    [containerHeight, gridRows, imageSize]
  );

  const pageSize = useMemo(() => _gridRows * gridCols, [_gridRows, gridCols]);

  const gap = 8;

  const [pageIdx, setPageIdx] = useState<number>(0);

  useEffect(() => {
    setPageIdx(0);
  }, [selectedGroup]);

  const pagesCount = useMemo(() => {
    const count = allTiers?.length;

    return pageSize && count ? Math.ceil(count / pageSize) : 0;
  }, [pageSize, allTiers]);

  const tiersForPage = useMemo(
    () => allTiers?.slice(pageIdx * pageSize, (pageIdx + 1) * pageSize),
    [pageIdx, allTiers, pageSize]
  );

  const pageIdxsOfSelected = useMemo(() => {
    const idxs: number[] = [];

    categories.forEach((c) => {
      const idx = allTiers?.findIndex((t) => t.tierId === equipped[c]?.tierId);
      if (idx !== undefined && idx > -1) idxs.push(Math.floor(idx / pageSize));
    });

    return idxs;
  }, [pageSize, allTiers, equipped, categories]);

  const hasSelectedTiers = useMemo(
    () => !!pageIdxsOfSelected.length,
    [pageIdxsOfSelected]
  );

  const unequipAllTiersForGroup = useCallback(
    () =>
      categories.forEach((c) => {
        if (equipped[c]) equip?.[c]?.(undefined);
      }),
    [categories, equipped, equip]
  );

  return (
    <div style={{ height: "100%" }} ref={measuredRef}>
      <RoundedFrame
        containerStyle={{
          height: "100%",
          boxSizing: "border-box",
          ...containerStyle,
        }}
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          boxSizing: "border-box",
          minWidth: gridCols * imageSize + (gridCols - 1) * 30 + 32, // 30 and 32 have no explanation. goal is to keep object same width when grid is empty
          ...style,
        }}
        shadow
        background={COLORS.bananaHint}
      >
        <TiersGrid
          style={{
            gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
            gap,
          }}
          tiers={tiersForPage}
          imageSize={imageSize}
        />

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap,
          }}
        >
          {pagesCount > 1 && (
            <>
              <NextPrevButtons
                onClickNext={() =>
                  setPageIdx((i) => (i === pagesCount - 1 ? 0 : i + 1))
                }
                onClickPrev={() =>
                  setPageIdx((i) => (i === 0 ? pagesCount - 1 : i - 1))
                }
              />
              <div style={{ flex: 1 }}>
                <PageIndicator
                  pageIdx={pageIdx}
                  pageIdxsOfSelected={pageIdxsOfSelected}
                  setPageIdx={setPageIdx}
                  pagesCount={pagesCount}
                />
              </div>
            </>
          )}

          <div style={{ flex: 1 }} />

          {hasSelectedTiers && (
            <ButtonPad
              style={{ width: 80, height: 40 }}
              onClick={unequipAllTiersForGroup}
              shadow="sm"
              fillFg={"white"}
            >
              CLEAR
            </ButtonPad>
          )}
        </div>
      </RoundedFrame>
    </div>
  );
}
