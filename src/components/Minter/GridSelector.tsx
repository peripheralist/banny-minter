import { ASSETS } from "@/constants/assets";
import { COLORS } from "@/constants/colors";
import { MinterContext } from "@/contexts/minterContext";
import { AssetType } from "@/model/assetType";
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
  const pageSize = useMemo(() => gridRows * gridCols, [gridRows, gridCols]);

  const gap = 6;

  // +/-12 accounts for button pad internal margin. idk man. shit's not perferct
  const gridWidth = useMemo(() => {
    return (imageSize + 12) * gridCols + (gridCols + 1) * gap - 12;
  }, [gridCols, imageSize]);
  const gridHeight = useMemo(() => {
    return (imageSize + 12) * gridRows + (gridRows + 1) * gap;
  }, [gridRows, imageSize]);

  const { setBackground, setOutfit, tab, background, outfit } =
    useContext(MinterContext);

  const [pageIdx, setPageIdx] = useState<number>(0);

  const [activeTab] = tab;

  useEffect(() => {
    setPageIdx(0);
  }, [activeTab]);

  const pagesCount = useMemo(
    () => (pageSize ? Math.ceil(ASSETS[activeTab].length / pageSize) : 0),
    [activeTab, pageSize]
  );

  const assetsForPage = useMemo(() => {
    return ASSETS[activeTab].slice(
      pageIdx * pageSize,
      (pageIdx + 1) * pageSize
    );
  }, [pageIdx, activeTab, pageSize]);

  const pageIdxOfSelected = useMemo(() => {
    switch (activeTab) {
      case "BACKGROUND":
        return background
          ? Math.floor(
              ASSETS["BACKGROUND"].indexOf(
                background as (typeof ASSETS)["BACKGROUND"][number]
              ) / pageSize
            )
          : undefined;
      case "OUTFIT":
        return outfit
          ? Math.floor(
              ASSETS["OUTFIT"].indexOf(
                outfit as (typeof ASSETS)["OUTFIT"][number]
              ) / pageSize
            )
          : undefined;
    }
  }, [activeTab, background, outfit, pageSize]);

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
    ({ assetType, style }: { assetType: AssetType; style?: CSSProperties }) => {
      let multiplier = 1;

      switch (assetType) {
        case "BACKGROUND":
          multiplier = 1;
          break;
        case "OUTFIT":
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
          {assetsForPage.map((a) => (
            <AssetOptionButton
              key={a}
              assetType={assetType}
              asset={a}
              buttonSize={imageSize}
              assetSize={_size}
            />
          ))}
        </div>
      );
    },
    [assetsForPage, imageSize, gridCols]
  );

  return (
    <RoundedFrame style={{ height: "100%", boxSizing: "border-box" }} shadow>
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
          <AssetGrid assetType={activeTab} />
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

          {((activeTab === "BACKGROUND" && background) ||
            (activeTab === "OUTFIT" && outfit)) && (
            <ButtonPad
              style={{ width: 24, height: 24, zIndex: 1 }}
              onClick={() => {
                switch (activeTab) {
                  case "BACKGROUND":
                    setBackground?.(undefined);
                    break;
                  case "OUTFIT":
                    setOutfit?.(undefined);
                    break;
                }
              }}
            >
              ✖️
            </ButtonPad>
          )}
        </div>
      </div>
    </RoundedFrame>
  );
}
