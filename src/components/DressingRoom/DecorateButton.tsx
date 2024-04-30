import { COLORS } from "@/constants/colors";
import { BANNYVERSE_COLLECTION_ID, CATEGORIES } from "@/constants/nfts";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useDecorateBanny } from "@/hooks/writeContract/useDecorateBanny";
import { useCallback, useContext, useState } from "react";
import { useAccount } from "wagmi";
import Fuzz from "../pixelRenderers/Fuzz";
import ButtonPad from "../shared/ButtonPad";

export default function DecorateButton() {
  const { address } = useAccount();

  const [pending, setPending] = useState<boolean>();

  const { equipped } = useContext(EquipmentContext);

  const decorateBanny = useDecorateBanny();

  const decorate = useCallback(() => {
    if (!equipped.naked || !equipped.world) return;

    const outfitIds = CATEGORIES.filter(
      (c) => c !== "world" && c !== "naked" && !!equipped[c]
    ).map((c) => equipped[c]!.tierId);

    setPending(true);

    decorateBanny({
      hook: BANNYVERSE_COLLECTION_ID,
      nakedBannyId: equipped.naked.tierId,
      worldId: equipped.world.tierId,
      outfitIds,
    }).then(() => setPending(false));
  }, [equipped, decorateBanny]);

  return (
    <ButtonPad
      style={{
        padding: 1,
      }}
      fillFg={COLORS.pink}
      onClick={decorate}
    >
      {pending ? (
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
            Decorate
          </div>

          {!address && (
            <div
              style={{
                fontSize: "1.25rem",
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
  );
}
