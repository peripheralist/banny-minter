import { COLORS } from "@/constants/colors";
import dynamic from "next/dynamic";
import { PropsWithChildren, useContext, useState } from "react";
import { TOOLBAR_WIDTH } from "./Toolbar2";
import Bag from "./shared/Bag";
import RoundedFrame from "./shared/RoundedFrame";
import { FONT_SIZE } from "@/constants/fontSize";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import EquippedTiersPreview from "./EquippedTiersPreview";
import EquipmentContextProvider from "@/contexts/EquipmentContextProvider";
import { useCategorizedTiers } from "@/hooks/queries/useCategorizedTiers";
import { ShopContext } from "@/contexts/shopContext";
import { EquipmentContext } from "@/contexts/equipmentContext";

const Toolbar = dynamic(() => import("@/components/Toolbar2"), { ssr: false });

const BAG_WIDTH = 340;
const BAG_CLOSED_WIDTH = 80;

export default function ToolbarBagView({
  children,
  header,
}: PropsWithChildren<{ header: string }>) {
  const [bagIsOpen, setBagIsOpen] = useState(false);

  const { measuredRef: headerRef, height: headerHeight } = useMeasuredRef();

  const { tiers } = useCategorizedTiers();

  const { bag } = useContext(ShopContext);

  if (!tiers) return null;

  return (
    <EquipmentContextProvider availableTiers={tiers} displayStrategy="mint">
      <div
        style={{
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        <style>{`body { background: ${COLORS.banana} }`}</style>

        <Toolbar onBagClick={() => setBagIsOpen((o) => !o)} />

        <div
          style={{
            position: "fixed",
            padding: 12,
            top: 0,
            bottom: 0,
            left: TOOLBAR_WIDTH,
            right: bag.length
              ? (bagIsOpen ? BAG_WIDTH : BAG_CLOSED_WIDTH) + 12
              : 0,
            transition: "right 0.1s ease-in, transform 0.1s ease-in",
            overflow: "hidden",
          }}
        >
          <div ref={headerRef} style={{ paddingBottom: 8 }}>
            <RoundedFrame background={"black"}>
              <h4
                style={{
                  position: "sticky",
                  top: -4,
                  textTransform: "uppercase",
                  padding: "4px 8px",
                  margin: 0,
                  color: COLORS.banana,
                  fontSize: FONT_SIZE.md,
                  zIndex: 11,
                }}
              >
                {header}
              </h4>
            </RoundedFrame>
          </div>

          <RoundedFrame
            background={COLORS.bananaLite}
            style={{ overflow: "auto" }}
            containerStyle={{ height: `calc(100% - ${headerHeight}px)` }}
          >
            {children}
          </RoundedFrame>
        </div>

        {bag.length && (
          <Drawer
            open={bagIsOpen}
            onClick={bagIsOpen ? undefined : () => setBagIsOpen(true)}
            onClose={() => setBagIsOpen(false)}
          />
        )}
      </div>
    </EquipmentContextProvider>
  );
}

function Drawer({
  open,
  onClick,
  onClose,
}: {
  open?: boolean;
  onClick?: VoidFunction;
  onClose?: VoidFunction;
}) {
  const { equipped, equippingCategory, unequippingCategory } =
    useContext(EquipmentContext);

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        top: 12,
        bottom: 12,
        right: 12,
        transition: "width 0.1s ease-in, transform 0.1s ease-in",
        width: open ? BAG_WIDTH : BAG_CLOSED_WIDTH,
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <RoundedFrame
        background={"white"}
        containerStyle={{
          height: open ? BAG_WIDTH + 12 : BAG_CLOSED_WIDTH,
          transition: "height 0.1s ease-in, transform 0.1s ease-in",
          flexShrink: 0,
          marginBottom: -32,
          paddingTop: 4,
        }}
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {open && (
          <>
            <EquippedTiersPreview
              equipped={equipped}
              size={BAG_WIDTH - 24}
              equippingCategory={equippingCategory}
              unequippingCategory={unequippingCategory}
            />

            <div
              style={{
                position: "absolute",
                top: 8,
                left: 8,
                background: "white",
                padding: "4px 8px",
              }}
            >
              PREVIEW
            </div>
          </>
        )}
      </RoundedFrame>

      <RoundedFrame
        background={COLORS.bananaLite}
        containerStyle={{
          height: open ? `calc(100% - ${BAG_WIDTH - 20}px)` : "100%",
        }}
      >
        <Bag open={open} onClose={onClose} />
      </RoundedFrame>
    </div>
  );
}
