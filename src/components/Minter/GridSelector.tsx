import { COLORS } from "@/constants/colors";
import { MinterContext } from "@/contexts/minterContext";
import { useTiers } from "@/hooks/queries/useTiers";
import {
  CSSProperties,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Beacon from "../shared/Beacon";
import ButtonPad from "../shared/ButtonPad";
import RoundedFrame from "../shared/RoundedFrame";
import AssetOptionButton from "./AssetOptionButton";

export default function GridSelector({
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
  const { tiers } = useTiers();

  const {
    selectedCategory,
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
  }, [selectedCategory]);

  const pagesCount = useMemo(() => {
    const count = tiers?.[selectedCategory]?.length;

    return pageSize && count ? Math.ceil(count / pageSize) : 0;
  }, [selectedCategory, pageSize, tiers]);

  const assetsForPage = useMemo(
    () =>
      tiers?.[selectedCategory]?.slice(
        pageIdx * pageSize,
        (pageIdx + 1) * pageSize
      ),
    [pageIdx, selectedCategory, pageSize, tiers]
  );

  const pageIdxOfSelected = useMemo(() => {
    const idx = tiers?.[selectedCategory]?.findIndex(
      (t) => t.tierId === get[selectedCategory]?.tierId
    );

    return idx ? Math.floor(idx / pageSize) : undefined;
  }, [selectedCategory, pageSize, tiers, get]);

  const PageIndicator = useCallback(() => {
    const children: JSX.Element[] = [];

    for (let i = 0; i < pagesCount; i++) {
      const active = pageIdx === i;

      children.push(
        <Beacon
          key={i}
          onClick={() => setPageIdx(i)}
          on={active || i === pageIdxOfSelected}
          onColor={
            active ? "white" : i === pageIdxOfSelected ? COLORS.pink : "white"
          }
        />
      );
    }

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
  }, [pagesCount, pageIdx, pageIdxOfSelected]);

  const PageSelector = useCallback(() => {
    const style = { width: 40, height: 40, fontSize: "1.4rem" };

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <ButtonPad
          style={style}
          fillFg={COLORS.banana}
          onClick={() => setPageIdx((i) => (i === 0 ? pagesCount - 1 : i - 1))}
        >
          {"<"}
        </ButtonPad>
        <ButtonPad
          style={style}
          fillFg={COLORS.banana}
          onClick={() => setPageIdx((i) => (i === pagesCount - 1 ? 0 : i + 1))}
        >
          {">"}
        </ButtonPad>
      </div>
    );
  }, [pagesCount]);

  const AssetGrid = useCallback(
    ({ style }: { style?: CSSProperties }) => {
      let multiplier = 1;

      switch (selectedCategory) {
        case "world":
          multiplier = 1;
          break;
        case "head":
          multiplier = 1.1;
          break;
      }

      const _size = imageSize * multiplier;

      return (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
            gap,
            ...style,
          }}
        >
          {assetsForPage?.map((a) => (
            <AssetOptionButton
              key={a.tierId}
              asset={a}
              buttonSize={imageSize}
              assetSize={_size}
            />
          ))}
        </div>
      );
    },
    [assetsForPage, imageSize, gridCols, selectedCategory]
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
          <AssetGrid />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 10,
          }}
        >
          <PageSelector />
          <div style={{ flex: 1 }}>
            <PageIndicator />
          </div>

          {get[selectedCategory] && (
            <ButtonPad
              style={{ width: 24, height: 24, zIndex: 1 }}
              onClick={() => set?.[selectedCategory]?.(undefined)}
            >
              ✖️
            </ButtonPad>
          )}
        </div>
      </div>
    </RoundedFrame>
  );
}
