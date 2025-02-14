import ButtonPad from "@/components/shared/ButtonPad";
import FullscreenLoading from "@/components/shared/FullscreenLoading";
import Modal from "@/components/shared/Modal";
import RoundedFrame from "@/components/shared/RoundedFrame";
import TierImage from "@/components/shared/TierImage";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import TransactionPending from "@/components/shared/TransactionPending";
import { COLORS } from "@/constants/colors";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { useSetSvgContentsOf } from "@/hooks/writeContract/useSetSvgContentsOf";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { useMemo } from "react";

export default function Index() {
  const router = useRouter();

  const { tiers, refetch } = useAllTiers();

  const { setSvgContentsOf, isPending, hash, data } = useSetSvgContentsOf({
    onSuccess: () => refetch(),
  });

  const tierId = useMemo(() => {
    try {
      const _tierId = parseInt(router.query.tierId as string);

      return isNaN(_tierId) ? undefined : _tierId;
    } catch (e) {
      return undefined;
    }
  }, [router.query]);

  const tier = useMemo(
    () => tiers?.find((t) => t.tierId === tierId),
    [tiers, tierId]
  );

  const svgContents = useQuery({
    queryKey: [tier?.embeddedSvgUrl],
    queryFn: () =>
      tier?.embeddedSvgUrl
        ? axios.get(tier?.embeddedSvgUrl).then((res) => res.data)
        : null,
  });

  const formattedSvgContents = useMemo(
    () =>
      svgContents.data
        ?.replace(
          `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' fill='none'>`,
          ""
        )
        .replace("</svg>", ""),
    [svgContents]
  );

  // crude but good?
  const isStored = useMemo(() => tier && !tier.embeddedSvgUrl, [tier]);

  if (!tier?.tierId) return <FullscreenLoading />;

  return (
    <ToolbarBagView
      sections={[
        {
          header: `SVG: ${tier?.name}`,
          content: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                maxWidth: 400,
                padding: 24,
                gap: 24,
              }}
            >
              <h1>{tier.name}</h1>

              <RoundedFrame
                background={"white"}
                containerStyle={{ width: "auto" }}
              >
                <TierImage size={200} tier={tier} />
              </RoundedFrame>

              <p>
                The SVG for each Banny accessory must be stored on-chain
                manually. Until then, the accessory image may not render
                correctly in marketplaces or other apps. Each SVG must only be
                stored once.
              </p>

              <p>Storing only costs the gas required for the transaction.</p>

              <ButtonPad
                style={{ padding: 12, color: "white" }}
                fillFg={COLORS.pink}
                onClick={() =>
                  formattedSvgContents
                    ? setSvgContentsOf({
                        tierId: tier?.tierId,
                        svgContents: formattedSvgContents,
                      })
                    : undefined
                }
                disabled={isStored || !svgContents.data || isPending}
              >
                {isStored ? "Already stored!" : "Store SVG contents"}
              </ButtonPad>

              {isPending && !data.error && (
                <Modal open>
                  <TransactionPending hash={hash} text="Storing SVG..." />
                </Modal>
              )}
            </div>
          ),
        },
      ]}
    />
  );
}
