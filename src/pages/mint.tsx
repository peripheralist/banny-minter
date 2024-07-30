import DressingRoom from "@/components/DressingRoom";
import MintButton from "@/components/DressingRoom/MintButton";
import FullscreenLoading from "@/components/shared/FullscreenLoading";
import { COLORS } from "@/constants/colors";
import { Category } from "@/constants/nfts";
import EquipmentContextProvider from "@/contexts/EquipmentContextProvider";
import { useCategorizedTiers } from "@/hooks/queries/useCategorizedTiers";
import { Tier, Tiers } from "@/model/tier";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useMemo } from "react";
import { formatEther } from "viem";

const Toolbar = dynamic(() => import("@/components/Toolbar"), { ssr: false });

export default function Mint() {
  const { tiers } = useCategorizedTiers();

  const formattedTiers = useMemo(() => {
    if (!tiers) return;

    function labelForTier(tier: Tier) {
      if (tier.remainingSupply <= BigInt(0)) {
        return (
          <div
            style={{
              fontSize: "0.875rem",
              fontWeight: "bold",
            }}
          >
            SOLD OUT
          </div>
        );
      } else {
        return (
          <div
            style={{
              fontSize: "0.875rem",
            }}
          >
            <span style={{ fontWeight: "bold" }}>
              {tier.remainingSupply.toString()}
            </span>
            <span>/{tier.initialSupply.toString()} left</span>
          </div>
        );
      }
    }

    function detailForTier(tier: Tier) {
      return (
        <div style={{ display: "flex" }}>
          <div
            style={{
              fontWeight: "bold",
              width: "10%",
              minWidth: 100,
              color: COLORS.banana,
            }}
          >
            {tier.category}:
          </div>
          <div
            style={{
              width: "100%",
              display: "inline-flex",
              justifyContent: "space-between",
            }}
          >
            <span>{tier?.name ? tier.name : "--"}</span>
            <span>{tier?.price ? formatEther(tier.price) : "--"} ETH </span>
          </div>
        </div>
      );
    }

    return Object.entries(tiers).reduce((acc, [category, _tiers]) => {
      return {
        ...acc,
        [category]: _tiers.map((t) => ({
          ...t,
          label: labelForTier(t),
          detail: detailForTier(t),
        })),
      };
    }, {} as Tiers);
  }, [tiers]);

  return (
    <>
      <Head>
        <title>Mint a Banny</title>
        <meta name="description" content="Mint a Banny" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`body { background: ${COLORS.banana} }`}</style>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <Toolbar />

        {formattedTiers ? (
          <EquipmentContextProvider
            availableTiers={formattedTiers}
            defaultEquippedTierIds={{ naked: formattedTiers.naked[0].tierId }}
          >
            <DressingRoom button={<MintButton />} includeBannyButtons />
          </EquipmentContextProvider>
        ) : (
          <FullscreenLoading />
        )}
      </main>
    </>
  );
}
