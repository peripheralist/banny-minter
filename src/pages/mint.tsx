import DressingRoom from "@/components/DressingRoom";
import MintButton from "@/components/DressingRoom/MintButton";
import FullscreenLoading from "@/components/shared/FullscreenLoading";
import { COLORS } from "@/constants/colors";
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
        return <div>SOLD OUT</div>;
      } else {
        return (
          <div>
            <span>{tier.remainingSupply.toString()}</span>
            <span style={{ opacity: 0.6 }}>
              /{tier.initialSupply.toString()}
            </span>
          </div>
        );
      }
    }

    function detailForTier(tier: Tier) {
      return (
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
            <DressingRoom
              button={<MintButton />}
              includeBannyButtons
              includeShuffle
            />
          </EquipmentContextProvider>
        ) : (
          <FullscreenLoading />
        )}
      </main>
    </>
  );
}
