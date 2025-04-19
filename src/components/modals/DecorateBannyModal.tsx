import { CATEGORIES } from "@/constants/category";
import { useDecorateBanny } from "@/hooks/writeContract/useDecorateBanny";
import { CategoryLib } from "@/model/categoryLib";
import { TierOrNft } from "@/model/tierOrNft";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo } from "react";
import TransactionPending from "../shared/TransactionPending";
import RoundedFrame from "../shared/RoundedFrame";
import EquippedTiersPreview from "../shared/EquippedTiersPreview";
import { FONT_SIZE } from "@/constants/fontSize";
import Link from "next/link";
import { RESOLVER_ADDRESS } from "@/constants/contracts";
import { useAppChain } from "@/hooks/useAppChain";
import TierImage from "../shared/TierImage";
import Modal from "../shared/Modal";

export function DecorateBannyModal({
  equipped,
  onClose,
}: {
  equipped: CategoryLib<TierOrNft<true>>;
  onClose?: VoidFunction;
}) {
  const appChain = useAppChain();

  const { decorateBanny, isPending, isSuccess, hash } = useDecorateBanny();

  const decorate = useCallback(() => {
    if (!equipped) return;

    const outfits = CATEGORIES.filter(
      (c) => c !== "background" && c !== "body" && !!equipped[c]
    ).map((c) => equipped![c]!);

    decorateBanny({
      body: equipped.body,
      background: equipped.background,
      outfits,
    });
  }, [equipped, decorateBanny]);

  const router = useRouter();

  const _onClose = useCallback(
    () => (isSuccess ? router.reload() : onClose?.()),
    [isSuccess, onClose, router]
  );

  const { content, action } = useMemo(() => {
    if (isSuccess) {
      return {
        content: (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1>Success!</h1>

              <div>
                <RoundedFrame background={"white"}>
                  <EquippedTiersPreview size={240} equipped={equipped} />
                </RoundedFrame>
              </div>
            </div>
          </>
        ),
      };
    }

    if (isPending) {
      return {
        content: <TransactionPending text="Dressing Banny..." hash={hash} />,
      };
    }

    return {
      action: { onClick: decorate, text: "Dress" },
      content: (
        <>
          <h1 style={{ fontSize: FONT_SIZE["3xl"] }}>New fit?</h1>

          <p
            style={{ marginTop: 12, marginBottom: 24, fontSize: FONT_SIZE.sm }}
          >
            When dressing a Banny, the accessory NFTs are transferred to the{" "}
            <Link
              href={`${appChain.blockExplorers.default.url}/address/${RESOLVER_ADDRESS}`}
              target="_blank"
            >
              Resolver contract
            </Link>
            . When undressed, the NFTs will be returned to whichever wallet owns
            the Banny.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <div>
              <RoundedFrame background={"white"}>
                <EquippedTiersPreview size={240} equipped={equipped} />
              </RoundedFrame>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {CATEGORIES.filter((c) => c !== "body" && !!equipped[c]).map(
                (c) => {
                  const tier = equipped[c];

                  return (
                    <div
                      key={c}
                      style={{
                        display: "flex",
                        gap: 12,
                        alignItems: "center",
                        overflow: "hidden",
                      }}
                    >
                      <div>
                        <RoundedFrame
                          background={"white"}
                          style={{ pointerEvents: "none" }}
                        >
                          <TierImage size={56} tier={tier} />
                        </RoundedFrame>
                      </div>

                      <div style={{ textWrap: "wrap" }}>{tier?.name}</div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </>
      ),
    };
  }, [decorate, hash, isPending, isSuccess, equipped]);

  return (
    <Modal
      id="decorate-banny"
      open
      onClose={_onClose}
      action={action}
      size="sm"
    >
      {content}
    </Modal>
  );
}
