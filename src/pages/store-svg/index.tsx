import ButtonPad from "@/components/shared/ButtonPad";
import RoundedFrame from "@/components/shared/RoundedFrame";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import { COLORS } from "@/constants/colors";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { useAppChain } from "@/hooks/useAppChain";
import { useSetSvgContentsOf } from "@/hooks/writeContract/useSetSvgContentsOf";
import { TierOrNft } from "@/model/tierOrNft";
import { useMemo, useState } from "react";

export default function Index() {
  const [tiersToStore, setTiersToStore] = useState<TierOrNft[]>([]);

  const { parsedTiers } = useAllTiers();

  const appChain = useAppChain();

  const storableTiers = useMemo(
    () => parsedTiers?.filter((t) => !!t.embeddedSvgUrl),
    [parsedTiers]
  );

  const { setSvgContentsOf, isPending, ready } =
    useSetSvgContentsOf(tiersToStore);

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
                {storableTiers?.map((t) => {
                  const selected = tiersToStore.some(
                    ({ tierId }) => tierId === t.tierId
                  );

                  return (
                    <div key={t.tierId}>
                      <ButtonPad
                        style={{
                          padding: 8,
                          color: selected ? "white" : undefined,
                        }}
                        fillFg={selected ? COLORS.pink : undefined}
                        shadow="none"
                        onClick={() =>
                          setTiersToStore((_t) =>
                            selected
                              ? _t.filter(({ tierId }) => tierId !== t.tierId)
                              : [..._t, t]
                          )
                        }
                      >
                        {t.metadata?.productName}
                      </ButtonPad>
                    </div>
                  );
                })}
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
                  disabled={!ready || !tiersToStore.length}
                >
                  Store {tiersToStore.length}
                </ButtonPad>
              </div>
            </div>
          ),
        },
      ]}
    />
  );
}
