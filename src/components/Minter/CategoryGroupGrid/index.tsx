import { Category, CATEGORY_GROUPS } from "@/constants/nfts";
import { MinterContext } from "@/contexts/minterContext";
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
import PageArrowButtons from "./PageArrowButtons";
import PageIndicator from "./PageIndicator";
import TiersGrid from "./TiersGrid";

export default function CategoryGroupGrid({
  style,
  gridCols,
  gridRows,
  imageSize,
}: {
  style?: CSSProperties;
  gridCols: number;
  gridRows: number;
  imageSize: number;
}) {
  const { tiers } = useCategorizedTiers();

  const {
    selectedGroup,
    equipped: { get, set },
  } = useContext(MinterContext);

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
      const idx = allTiers?.findIndex((t) => t.tierId === get[c]?.tierId);
      if (idx && idx > -1) idxs.push(Math.floor(idx / pageSize));
    });

    return idxs;
  }, [pageSize, allTiers, get, categories]);

  const hasSelectedTiers = useMemo(
    () => !!pageIdxsOfSelected.length,
    [pageIdxsOfSelected]
  );

  const unequipAllTiersForGroup = useCallback(
    () =>
      categories.forEach((c) => {
        if (get[c]) set?.[c]?.(undefined);
      }),
    [categories, get, set]
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
          <PageArrowButtons
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
