import { ASSETS } from "@/constants/assets";
import { COLORS } from "@/constants/colors";
import { MinterContext } from "@/contexts/minterContext";
import {
  CSSProperties,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import ButtonPad from "../shared/ButtonPad";
import RoundedFrame from "../shared/RoundedFrame";
import AssetOptionButton from "./AssetOptionButton";
import { AssetType } from "./Controls";
import Beacon from "../shared/Beacon";

const IMG_SIZE = 120;

export default function GridSelector({
  style,
  gridCols,
  gridRows,
}: {
  style?: CSSProperties;
  gridCols: number;
  gridRows: number;
}) {
  const pageSize = useMemo(() => gridRows * gridCols, [gridRows, gridCols]);
  const gridWidth = useMemo(
    () => IMG_SIZE * gridCols + (gridCols + 1) * 10,
    [gridCols]
  );
  const gridHeight = useMemo(
    () => IMG_SIZE * gridRows + (gridRows + 1) * 10,
    [gridRows]
  );

  const { setBackground, setOutfit, tab, background, outfit } =
    useContext(MinterContext);

  const [pageIdx, setPageIdx] = useState<number>(0);

  const [activeTab, prevTab] = tab;

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
      <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
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

      const _size = IMG_SIZE * multiplier;

      return (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
            gap: 6,
            ...style,
          }}
        >
          {assetsForPage.map((a) => (
            <AssetOptionButton
              key={a}
              assetType={assetType}
              asset={a}
              buttonSize={IMG_SIZE}
              assetSize={_size}
            />
          ))}
        </div>
      );
    },
    [
      assetsForPage,
      // gridWidth,
      gridCols,
    ]
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
          {/* {prevTab && (
              <AssetGrid
                assetType={prevTab}
                style={{
                  position: "absolute",
                  animation:
                    tabs.indexOf(activeTab) > tabs.indexOf(prevTab)
                      ? "slide-out-left .2s"
                      : "slide-out-right .2s",
                }}
              />
            )} */}
          <AssetGrid
            assetType={activeTab}
            // style={
            //   prevTab
            //     ? {
            //         animation:
            //           tabs.indexOf(activeTab) > tabs.indexOf(prevTab)
            //             ? "slide-in-left .2s"
            //             : "slide-in-right .2s",
            //       }
            //     : undefined
            // }
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <PageSelector />
          <PageIndicator />

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
