import { COLORS } from "@/constants/colors";
import { CATEGORY_GROUP_NAMES } from "@/constants/nfts";
import { MinterContext } from "@/contexts/minterContext";
import { useCategorizedTiers } from "@/hooks/queries/useCategorizedTiers";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { useMint } from "@/hooks/writeContract/useMint";
import { formatEther } from "juice-sdk-core";
import { useContext, useMemo } from "react";
import { useAccount } from "wagmi";
import { TOOLBAR_HEIGHT } from "../Toolbar";
import Fuzz from "../pixelRenderers/Fuzz";
import ButtonPad from "../shared/ButtonPad";
import RoundedFrame from "../shared/RoundedFrame";
import BannyButtons from "./BannyButtons";
import CategoryGroupButton from "./CategoryGroupButton";
import CategoryGroupGrid from "./CategoryGroupGrid";
import EquippedTiersPreview from "./EquippedTiersPreview";
import Summary from "./Summary";

export default function SmallView() {
  const { address } = useAccount();
  const { equipped, totalEquippedPrice, selectedGroup, setSelectedGroup } =
    useContext(MinterContext);

  const { loading } = useCategorizedTiers();

  const { mint, isLoading, tx } = useMint({
    amount: totalEquippedPrice,
    tierIds: [...(equipped.body ? [BigInt(equipped.body.tierId)] : [])],
  });

  const mintTxPending = isLoading || tx.status === "loading";

  const windowWidth = useWindowWidth();
  const gridImageSize = useMemo(
    () => (windowWidth && windowWidth > 600 ? 120 : 80),
    [windowWidth]
  );
  const gridCols = useMemo(
    () =>
      windowWidth ? Math.floor((windowWidth - 100) / (gridImageSize + 12)) : 3,
    [windowWidth, gridImageSize]
  );

  const gap = 10;

  if (loading) {
    return (
      <div
        style={{
          width: "100vw",
          height: `calc(100vh - ${TOOLBAR_HEIGHT}px)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <Fuzz width={200} height={200} fill="black" pixelSize={10} />
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100vw",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        padding: 20,
        paddingTop: 0,
        gap,
      }}
    >
      <BannyButtons
        style={{ display: "flex", gap }}
        buttonStyle={{ height: 40, flex: 1 }}
      />

      <RoundedFrame shadow containerStyle={{ width: "100%", height: 320 }}>
        <div
          style={{
            height: "100%",
            background: "white",
          }}
        >
          <EquippedTiersPreview imageSize={280} />
        </div>
      </RoundedFrame>

      {setSelectedGroup && (
        <div style={{ display: "flex", gap }}>
          {CATEGORY_GROUP_NAMES.map((g) => (
            <CategoryGroupButton
              key={g}
              group={g}
              active={selectedGroup === g}
              onClick={
                selectedGroup === g ? undefined : () => setSelectedGroup(g)
              }
            />
          ))}
        </div>
      )}

      <CategoryGroupGrid
        style={{ padding: 24 }}
        gridRows={3}
        gridCols={gridCols}
        imageSize={gridImageSize}
      />

      <div
        style={{
          display: "grid",
          gap,
          gridTemplateColumns: `repeat(${
            windowWidth && windowWidth < 800 ? 1 : 2
          }, 1fr)`,
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
          }}
        >
          <RoundedFrame containerStyle={{ flex: 1, height: "100%" }}>
            <div
              style={{
                background: "black",
                padding: 20,
                boxSizing: "border-box",
              }}
            >
              <Summary />
            </div>
          </RoundedFrame>
        </div>

        <RoundedFrame>
          <ButtonPad
            disabled={mintTxPending || !address}
            style={{
              height: 80,
              padding: 1,
            }}
            fillFg={COLORS.pink}
            onClick={() => {
              mint();
            }}
          >
            {mintTxPending ? (
              <Fuzz
                width={80}
                height={32}
                fill="white"
                pixelSize={4}
                interval={500}
              />
            ) : (
              <div
                style={{
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                <div
                  style={{
                    opacity: address ? 1 : 0.25,
                    color: address ? "white" : "black",
                  }}
                >
                  Mint
                </div>

                {!address && (
                  <div
                    style={{
                      fontSize: "1.6rem",
                      textTransform: "uppercase",
                      color: "white",
                    }}
                  >
                    No wallet
                  </div>
                )}
              </div>
            )}
          </ButtonPad>

          <div
            style={{
              padding: 8,
              fontSize: "2rem",
              textAlign: "center",
              fontWeight: "bold",
              background: "#ffffff",
            }}
          >
            {totalEquippedPrice
              ? formatEther(totalEquippedPrice).substring(0, 6)
              : "--"}{" "}
            ETH
          </div>
        </RoundedFrame>
      </div>
    </div>
  );
}
