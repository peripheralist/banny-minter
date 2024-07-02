import { Category, CATEGORY_GROUPS } from "@/constants/nfts";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useCategorizedTiers } from "@/hooks/queries/useCategorizedTiers";
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
  style,
}: {
  gridCols: number;
  gridRows: number;
  imageSize: number;
  style?: CSSProperties;
}) {
  const {
    selectedGroup,
    equipped,
    equip,
    availableTiers: tiers,
  } = useContext(EquipmentContext);

  const pageSize = useMemo(() => gridRows * gridCols, [gridRows, gridCols]);

  const gap = 6;

  // +/-12 accounts for button pad internal margin. idk man. shit's not perferct
  const gridWidth = useMemo(() => {
    return (imageSize + 12) * gridCols + (gridCols + 1) * gap - 12;
  }, [gridCols, imageSize]);
  const gridHeight = useMemo(() => {
    return (imageSize + 12) * gridRows + (gridRows + 1) * gap;
  }, [gridRows, imageSize]);

  const [pageIdx, setPageIdx] = useState<number>(0);

  useEffect(() => {
    setPageIdx(0);
  }, [selectedGroup]);

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
      if (idx && idx > -1) idxs.push(Math.floor(idx / pageSize));
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
    <RoundedFrame
      containerStyle={{ height: "100%", boxSizing: "border-box" }}
      shadow
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          background: "#00000044",
          height: "100%",
          boxSizing: "border-box",
          ...style,
        }}
      >
        <div
          style={{
            width: gridWidth,
            height: gridHeight,
          }}
        >
          <TiersGrid
            style={{
              gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
              gap,
            }}
            tiers={tiersForPage}
            imageSize={imageSize}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 10,
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

          {hasSelectedTiers && (
            <ButtonPad
              style={{ width: 24, height: 24, zIndex: 1 }}
              onClick={unequipAllTiersForGroup}
            >
              ✖️
            </ButtonPad>
          )}
        </div>
      </div>
    </RoundedFrame>
  );
}
