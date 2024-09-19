import DressingRoom from "@/components/DressingRoom";
import MintButton from "@/components/DressingRoom/MintButton";
import FullscreenLoading from "@/components/shared/FullscreenLoading";
import { COLORS } from "@/constants/colors";
import EquipmentContextProvider from "@/contexts/EquipmentContextProvider";
import { useCategorizedTiers } from "@/hooks/queries/useCategorizedTiers";
import dynamic from "next/dynamic";
import Head from "next/head";

const Toolbar = dynamic(() => import("@/components/Toolbar"), { ssr: false });

export default function Mint() {
  const { tiers } = useCategorizedTiers();

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

        {tiers ? (
          <EquipmentContextProvider
            availableTiers={tiers}
            defaultEquippedTierIds={{ naked: tiers.naked[0].tierId }}
            displayStrategy="mint"
          >
            <DressingRoom button={<MintButton />} includeBody />
          </EquipmentContextProvider>
        ) : (
          <FullscreenLoading />
        )}
      </main>
    </>
  );
}
