import Modal from "@/components/shared/Modal";
import RoundedFrame from "@/components/shared/RoundedFrame";
import TierImage from "@/components/shared/TierImage";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { useSetSvgContentsOf } from "@/hooks/writeContract/useSetSvgContentsOf";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import TransactionPending from "../shared/TransactionPending";

const routerKey = "store-svgs";

export default function StoreSVGsModal() {
  const router = useRouter();

  const { tiers: allTiers } = useAllTiers();

  const tierIds = useMemo(() => {
    if (!router.query[routerKey]) return;

    try {
      return (router.query[routerKey] as string)
        .split(",")
        .map((str) => parseInt(str));
    } catch (e) {
      console.error(`Error parsing tierIds of SVGs`);
    }
  }, [router.query]);

  const tiers = useMemo(
    () => allTiers?.filter((t) => tierIds?.includes(t.tierId)),
    [allTiers, tierIds]
  );

  const { setSvgContentsOf, isPending, hash, isSuccess } =
    useSetSvgContentsOf(tiers);

  const onClose = useCallback(() => {
    if (!router.query[routerKey]) return;

    const newPath = router.asPath.split(`?${routerKey}=`)[0];
    router.replace(newPath, undefined, { shallow: true });
  }, [router]);

  const TiersDisplay = useCallback(
    () =>
      tiers ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {tiers.map((t) => (
            <div
              style={{ display: "flex", alignItems: "center", gap: 8 }}
              key={t.tierId}
            >
              <div>
                <RoundedFrame background={"white"}>
                  <TierImage tier={t} size={80} />
                </RoundedFrame>
              </div>

              <div>{t.name}</div>
            </div>
          ))}
        </div>
      ) : null,
    [tiers]
  );

  if (!tiers) return null;

  if (isSuccess) {
    return (
      <Modal open onClose={onClose}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            textAlign: "center",
          }}
        >
          <h1>Success!</h1>

          <p>Stored SVGs for:</p>
          <TiersDisplay />
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      open={tiers.length > 0}
      onClose={onClose}
      size="sm"
      action={{
        text: `Store ${tiers.length} SVG${tiers.length > 1 ? "s" : ""}`,
        onClick: () => setSvgContentsOf(undefined),
      }}
    >
      {isPending ? (
        <TransactionPending hash={hash} text="Storing SVGs..." />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <h1>Storing SVGs on-chain</h1>

          <p>
            The SVG for each Banny accessory must be stored on-chain manually.
            Until then, the accessory image is loaded from IPFS and may not
            render correctly on marketplaces or other apps. Each SVG only needs
            to be stored once, then they{"'"}ll be available for everyone.
          </p>

          <p>Storing is free! You{"'"}ll only pay gas.</p>

          <TiersDisplay />
        </div>
      )}
    </Modal>
  );
}
