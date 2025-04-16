import ButtonPad from "@/components/shared/ButtonPad";
import RoundedFrame from "@/components/shared/RoundedFrame";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import { COLORS } from "@/constants/colors";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { useAppChain } from "@/hooks/useAppChain";
import { useSetSvgContentsOf } from "@/hooks/writeContract/useSetSvgContentsOf";
import { useMemo } from "react";

export default function Index() {
  const { tiers } = useAllTiers();

  const appChain = useAppChain();

  const tiersToStore = useMemo(
    () => tiers?.filter((t) => !!t.embeddedSvgUrl),
    [tiers]
  );

  const { setSvgContentsOf, isPending, hash, isSuccess, ready } =
    useSetSvgContentsOf(tiersToStore?.slice(0, 10));

  return (
    <ToolbarBagView
      sections={[
        {
          header: "Unstored tiers",
          content: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                padding: 8,
              }}
            >
              <h1>{appChain.name}</h1>

              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                }}
              >
                {tiersToStore?.map((t) => (
                  <div key={t.tierId}>
                    <RoundedFrame style={{ padding: 8 }}>
                      {t.metadata?.productName}
                    </RoundedFrame>
                  </div>
                ))}
              </div>

              <div style={{ maxWidth: 240 }}>
                <ButtonPad
                  loading={
                    isPending
                      ? { width: 80, height: 16, fill: "black" }
                      : undefined
                  }
                  onClick={setSvgContentsOf}
                  style={{ padding: 8, color: "white" }}
                  fillFg={COLORS.pink}
                  disabled={!ready}
                >
                  Store all (max 10)
                </ButtonPad>
              </div>
            </div>
          ),
        },
      ]}
    />
  );
}
