import Beacon from "@/components/shared/Beacon";
import { COLORS } from "@/constants/colors";
import { useMemo } from "react";

/**
 * Renders a list of icons for each page, showing which page is selected and which pages have equipped tiers.
 * @param pagesCount Number of pages
 * @param pageIdx Index of selected page
 * @param setPageIdx Function called when a page's icon is clicked.
 * @param pageIdxsOfSelected List of indexes of pages that include equipped tiers.
 */
export default function PageIndicator({
  pagesCount,
  pageIdx,
  setPageIdx,
  pageIdxsOfSelected,
}: {
  pagesCount: number | undefined;
  pageIdx: number;
  setPageIdx: (idx: number) => void;
  pageIdxsOfSelected: number[];
}) {
  const children = useMemo(() => {
    if (!pagesCount) return null;

    const _children: JSX.Element[] = [];

    for (let i = 0; i < pagesCount; i++) {
      const active = pageIdx === i;

      const hasSelectedTier = pageIdxsOfSelected.includes(i);

      _children.push(
        <Beacon
          key={i}
          onClick={() => setPageIdx(i)}
          on={active || hasSelectedTier}
          onColor={active || !hasSelectedTier ? "white" : COLORS.pink}
        />
      );
    }
  }, [pageIdxsOfSelected, setPageIdx, pageIdx, pagesCount]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 10,
      }}
    >
      {children}
    </div>
  );
}
