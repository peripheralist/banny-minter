import Beacon from "@/components/shared/Beacon";
import { COLORS } from "@/constants/colors";
import { useMemo } from "react";

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
