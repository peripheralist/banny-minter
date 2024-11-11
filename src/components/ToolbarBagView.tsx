import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { ShopContext } from "@/contexts/shopContext";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { useWindowSize } from "@/hooks/useWindowSize";
import dynamic from "next/dynamic";
import {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import EquippedTiersPreview from "./EquippedTiersPreview";
import { TOOLBAR_WIDTH } from "./Toolbar2";
import Bag from "./shared/Bag";
import RoundedFrame from "./shared/RoundedFrame";
import Link from "next/link";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import ToolbarIcon, { TOOLBAR_ICON_SIZE } from "./ToolbarIcon";

const Toolbar = dynamic(() => import("@/components/Toolbar2"), { ssr: false });

const BAG_WIDTH = 340;
const BAG_CLOSED_WIDTH = 80;

export default function ToolbarBagView({
  children,
  header,
  backButton,
  frame,
}: PropsWithChildren<{
  header: string | JSX.Element;
  frame?: boolean;
  backButton?: {
    href: string;
    label?: string | JSX.Element;
  };
}>) {
  const [bagIsOpen, setBagIsOpen] = useState<boolean>();

  const { measuredRef: headerRef, height: headerHeight } = useMeasuredRef();

  const { width } = useWindowSize();

  const { bag } = useContext(ShopContext);

  const isSmallScreen = useIsSmallScreen();

  const Header = useCallback(
    () => (
      <div
        ref={headerRef}
        style={{ display: "flex", gap: 12, paddingBottom: 12 }}
      >
        {backButton && (
          <RoundedFrame background={"black"} containerStyle={{ width: "auto" }}>
            <Link
              href={backButton.href}
              style={{
                display: "flex",
                padding: "4px 8px",
                gap: 8,
                alignItems: "baseline",
                color: COLORS.banana,
                textTransform: "uppercase",
              }}
            >
              <span>{"<"}</span>
              {backButton.label || null}
            </Link>
          </RoundedFrame>
        )}
        <RoundedFrame background={"black"} containerStyle={{ flex: 1 }}>
          <h4
            style={{
              textTransform: "uppercase",
              padding: "4px 8px",
              margin: 0,
              color: COLORS.banana,
            }}
          >
            {header}
          </h4>
        </RoundedFrame>
      </div>
    ),
    [header, backButton, headerRef]
  );

  useEffect(() => {
    if (width && width > 1500 && bagIsOpen === undefined) {
      setBagIsOpen(true);
    }
  }, [width, bagIsOpen]);

  if (isSmallScreen)
    return (
      <div style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 12,
            boxSizing: "border-box",
          }}
        >
          <ToolbarIcon />

          <div onClick={() => setBagIsOpen(true)}>BAG ({bag.length || 0})</div>
        </div>

        <div style={{ paddingLeft: 12, paddingRight: 12 }}>
          <Header />
        </div>

        <div
          style={{
            position: "fixed",
            top: TOOLBAR_ICON_SIZE + 12 * 2 + headerHeight,
            left: 0,
            right: 0,
            bottom: 0,
            paddingLeft: 12,
            paddingRight: 12,
            paddingBottom: 80,
            overflow: "auto",
          }}
        >
          {children}
        </div>

        <div
          id="bagcontainer"
          style={{
            position: "fixed",
            inset: 0,
            opacity: bagIsOpen ? 1 : 0,
            pointerEvents: bagIsOpen ? "all" : "none",
            transition: "opacity 0.1s ease-in, transform 0.1s ease-in",
            background: "#00000088",
          }}
          onClick={() => setBagIsOpen(false)}
        >
          <div
            style={{
              position: "fixed",
              top: 0,
              bottom: 0,
              left: bagIsOpen ? 80 : "100%",
              right: 0,
              transition: "left 0.1s ease-in, transform 0.1s ease-in",
              background: COLORS.bananaLite,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Bag open />
          </div>
        </div>
      </div>
    );

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Toolbar />

      <div
        style={{
          position: "fixed",
          padding: 12,
          paddingBottom: frame ? 12 : 0,
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
        <div
          ref={headerRef}
          style={{ display: "flex", gap: 12, paddingBottom: 12 }}
        >
          {backButton && (
            <RoundedFrame
              background={"black"}
              containerStyle={{ width: "auto" }}
            >
              <Link
                href={backButton.href}
                style={{
                  display: "flex",
                  padding: "4px 8px",
                  gap: 8,
                  alignItems: "baseline",
                  color: COLORS.banana,
                  textTransform: "uppercase",
                }}
              >
                <span>{"<"}</span>
                {backButton.label || null}
              </Link>
            </RoundedFrame>
          )}
          <RoundedFrame background={"black"} containerStyle={{ flex: 1 }}>
            <h4
              style={{
                textTransform: "uppercase",
                padding: "4px 8px",
                margin: 0,
                color: COLORS.banana,
              }}
            >
              {header}
            </h4>
          </RoundedFrame>
        </div>

        {frame ? (
          <RoundedFrame
            background={COLORS.bananaLite}
            style={{ overflow: "auto" }}
            containerStyle={{ height: `calc(100% - ${headerHeight}px)` }}
          >
            {children}
          </RoundedFrame>
        ) : (
          <div
            style={{
              overflow: "auto",
              height: `calc(100% - ${headerHeight}px)`,
            }}
          >
            {children}
          </div>
        )}
      </div>

      {bag.length > 0 && (
        <Drawer
          open={bagIsOpen}
          onClick={bagIsOpen ? undefined : () => setBagIsOpen(true)}
          onClose={() => setBagIsOpen(false)}
        />
      )}
    </div>
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
        overflow: "auto",
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
        <EquippedTiersPreview
          equipped={equipped}
          size={(open ? BAG_WIDTH : BAG_CLOSED_WIDTH) - 24}
          equippingCategory={equippingCategory}
          unequippingCategory={unequippingCategory}
        />

        {open && (
          <div
            style={{
              position: "absolute",
              top: 8,
              left: 8,
              background: "white",
              padding: "4px 8px",
              fontSize: FONT_SIZE.xs,
            }}
          >
            PREVIEW
          </div>
        )}
      </RoundedFrame>

      <RoundedFrame
        background={COLORS.bananaLite}
        containerStyle={{
          height: open ? `calc(100% - ${BAG_WIDTH - 20}px)` : "100%",
          minHeight: 360,
        }}
      >
        <Bag open={open} onClose={onClose} />
      </RoundedFrame>
    </div>
  );
}
