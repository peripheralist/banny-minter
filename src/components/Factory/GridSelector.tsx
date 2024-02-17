import React, {
  CSSProperties,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import CheckBadgeIcon from "../shared/images/CheckBadgeIcon";
import { EditorContext } from "@/contexts/editorContext";
import { AssetType, tabs } from "./Controls";
import { ASSETS } from "@/constants/assets";
import Image from "next/image";
import { COLORS } from "@/constants/colors";
import ButtonPad from "../shared/ButtonPad";
import RoundedFrame from "../shared/RoundedFrame";

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
  // const gridWidth = useMemo(
  //   () => IMG_SIZE * gridCols + (gridCols + 1) * 7,
  //   [gridCols]
  // );
  const gridHeight = useMemo(
    () => IMG_SIZE * gridRows + (gridRows + 1) * 10,
    [gridRows]
  );

  const { body, outfit, background, setBody, setOutfit, setBackground, tab } =
    useContext(EditorContext);

  const [pageIdx, setPageIdx] = useState<number>(0);

  const [activeTab, prevTab] = tab;

  useEffect(() => {
    setPageIdx(0);
  }, [activeTab]);

  const pagesCount = useMemo(
    () => Math.ceil(ASSETS[activeTab].length / pageSize),
    [activeTab, pageSize]
  );

  const assetsForPage = useMemo(() => {
    return ASSETS[activeTab].slice(
      pageIdx * pageSize,
      (pageIdx + 1) * pageSize
    );
  }, [pageIdx, activeTab, pageSize]);

  const PageIndicator = useCallback(() => {
    const children: JSX.Element[] = [];

    for (let i = 0; i < pagesCount; i++) {
      const active = pageIdx === i;

      children.push(
        <div
          key={i}
          style={{
            width: 12,
            height: 12,
            background: "black",
            position: "relative",
            borderRadius: 2,
          }}
          onClick={() => setPageIdx(i)}
        >
          <div
            style={{
              width: 6,
              height: 6,
              position: "absolute",
              top: 2,
              left: 2,
              background: active ? "white" : "black",
              borderRadius: 1,
            }}
          />
        </div>
      );
    }

    return (
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {children}
      </div>
    );
  }, [pagesCount, pageIdx]);

  const PageSelector = useCallback(() => {
    const style = { width: 40, height: 40, fontSize: "1.4rem" };

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
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
      let fn: ((s: string) => void) | undefined;
      let multiplier = 1;

      switch (assetType) {
        case "BACKGROUND":
          fn = setBackground;
          multiplier = 1;
          break;
        case "OUTFIT":
          fn = setOutfit;
          multiplier = 1.1;
          break;
      }

      const _size = IMG_SIZE * multiplier;

      return (
        <div
          style={{
            // width: gridWidth,
            ...style,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
              gap: 16,
            }}
          >
            {assetsForPage.map((a) => {
              let active = false;

              switch (assetType) {
                case "BACKGROUND":
                  active = background === a;
                  break;
                case "BODY":
                  active = body === a;
                  break;
                case "OUTFIT":
                  active = outfit === a;
                  break;
              }

              return (
                <ButtonPad fillFg="white" key={a} onClick={() => fn?.(a)}>
                  <div
                    style={{
                      position: "relative",
                      width: IMG_SIZE,
                      height: IMG_SIZE,
                      background: "white",
                    }}
                  >
                    <Image
                      style={{ position: "absolute", inset: 0 }}
                      width={_size}
                      height={_size}
                      src={`/assets/banny/${assetType.toLowerCase()}/${a}`}
                      alt={a}
                    />

                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        border: "4px solid",
                        borderColor: active ? COLORS.banana : "white",
                      }}
                    />

                    {active && (
                      <CheckBadgeIcon
                        style={{
                          position: "absolute",
                          bottom: 4,
                          left: 4,
                          zIndex: 1,
                        }}
                      />
                    )}
                  </div>
                </ButtonPad>
              );
            })}
          </div>
        </div>
      );
    },
    [
      setBackground,
      setOutfit,
      background,
      body,
      outfit,
      assetsForPage,
      // gridWidth,
      gridCols,
    ]
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 32,
      }}
    >
      <RoundedFrame shadow>
        <div
          style={{
            position: "relative",
            background: "#00000044",
            ...style,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              flex: 1,
              gap: 20,
              marginBottom: 32,
            }}
          >
            <PageSelector />
            <PageIndicator />
          </div>

          <div
            style={{
              // width: gridWidth,
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
        </div>
      </RoundedFrame>
    </div>
  );
}
