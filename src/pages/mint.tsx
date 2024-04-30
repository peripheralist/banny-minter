import DressingRoom from "@/components/DressingRoom";
import MintButton from "@/components/DressingRoom/MintButton";
import FullscreenLoading from "@/components/shared/FullscreenLoading";
import EquipmentContextProvider from "@/contexts/EquipmentContextProvider";
import { useCategorizedTiers } from "@/hooks/queries/useCategorizedTiers";
import Head from "next/head";

export default function Mint() {
  const { tiers } = useCategorizedTiers();

  return (
    <>
      <Head>
        <title>Mint a Banny</title>
        <meta name="description" content="Mint a Banny" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        {tiers ? (
          <EquipmentContextProvider
            availableTiers={tiers}
            defaultEquippedTierIds={{ naked: tiers.naked[0].tierId }}
          >
            <DressingRoom button={<MintButton />} />
          </EquipmentContextProvider>
        ) : (
          <FullscreenLoading />
        )}
      </main>
    </>
  );
}
