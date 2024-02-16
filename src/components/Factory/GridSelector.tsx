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

const IMG_SIZE = 150;
const GRID_COUNT = 3;
const PAGE_SIZE = 3 ** 2;
const GRID_WIDTH = IMG_SIZE * GRID_COUNT + (GRID_COUNT + 1);

export default function GridSelector({ style }: { style?: CSSProperties }) {
  const { body, outfit, background, setBody, setOutfit, setBackground, tab } =
    useContext(EditorContext);

  const [pageIdx, setPageIdx] = useState<number>(0);

  const [activeTab, prevTab] = tab;

  useEffect(() => {
    setPageIdx(0);
  }, [activeTab]);

  const pagesCount = useMemo(
    () => Math.ceil(ASSETS[activeTab].length / PAGE_SIZE),
    [activeTab]
  );

  const assetsForPage = useMemo(() => {
    return ASSETS[activeTab].slice(
      pageIdx * PAGE_SIZE,
      (pageIdx + 1) * PAGE_SIZE
    );
  }, [pageIdx, activeTab]);

  const PageIndicator = useCallback(() => {
    const children: JSX.Element[] = [];

    for (let i = 0; i < pagesCount; i++) {
      const active = pageIdx === i;

      children.push(
        <div
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
              background: active ? "white" : COLORS.banana,
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
          onClick={() => setPageIdx((i) => Math.max(i - 1, 0))}
        >
          {"<"}
        </ButtonPad>
        <ButtonPad
          style={style}
          fillFg={COLORS.banana}
          onClick={() => setPageIdx((i) => Math.min(i + 1, pagesCount - 1))}
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
          break;
        case "BODY":
          fn = setBody;
          multiplier = 1.5;
          break;
        case "OUTFIT":
          fn = setOutfit;
          multiplier = 1.2;
          break;
      }

      const _size = IMG_SIZE * multiplier;

      return (
        <div
          style={{
            width: GRID_WIDTH,
            ...style,
          }}
        >
          <div
            style={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: "repeat(3, 1fr)",
              width: "100%",
              boxSizing: "border-box",
              overflow: "auto",
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
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: active ? "4px solid white" : "none",
                    boxSizing: "border-box",
                    background: "white",
                    width: IMG_SIZE,
                    height: IMG_SIZE,
                    overflow: "hidden",
                  }}
                  key={a}
                  onClick={() => fn?.(a)}
                >
                  <Image
                    width={_size}
                    height={_size}
                    src={`/assets/banny/${assetType.toLowerCase()}/${a}`}
                    alt={a}
                  />

                  {active && (
                    <CheckBadgeIcon
                      style={{ position: "absolute", bottom: 0, left: 0 }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    },
    [setBackground, setBody, setOutfit, background, body, outfit, assetsForPage]
  );

  return (
    <div>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#00000064",
          border: "4px solid black",
          ...style,
        }}
      >
        <div
          style={{
            maxHeight: "100%",
            width: GRID_WIDTH,
            height: GRID_WIDTH,
            position: "relative",
            zIndex: 1,
          }}
        >
          {prevTab && (
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
          )}
          <AssetGrid
            assetType={activeTab}
            style={
              prevTab
                ? {
                    animation:
                      tabs.indexOf(activeTab) > tabs.indexOf(prevTab)
                        ? "slide-in-left .2s"
                        : "slide-in-right .2s",
                  }
                : undefined
            }
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: 6,
            background: "#00000064",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 6,
            right: 0,
            height: 6,
            background: "#00000064",
            zIndex: 1,
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: 20,
          paddingTop: 20,
          paddingBottom: 20,
          paddingLeft: 6,
        }}
      >
        <PageSelector />
        <PageIndicator />
      </div>
    </div>
  );
}
