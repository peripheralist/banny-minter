import { TOOLBAR_WIDTH } from "@/components/Toolbar";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { ShopContext } from "@/contexts/shopContext";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useWindowSize } from "@/hooks/useWindowSize";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  CSSProperties,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
} from "react";
import ToolbarIcon from "../ToolbarIcon";
import Bag from "./Bag";
import EquippedTiersPreview from "./EquippedTiersPreview";
import RoundedFrame from "./RoundedFrame";
import useDebounce from "@/hooks/useDebounce";

const Toolbar = dynamic(() => import("@/components/Toolbar"), { ssr: false });

const BAG_WIDTH = 340;
const BAG_CLOSED_WIDTH = 80;

export default function ToolbarBagView({
  children,
  dynamicToolbar,
  header,
  backButton,
  frame,
  frameStyle,
}: PropsWithChildren<{
  dynamicToolbar?: boolean;
  header: string | JSX.Element;
  frame?: boolean;
  frameStyle?: CSSProperties;
  backButton?: {
    href: string;
    label?: string | JSX.Element;
  };
}>) {
  const { value: bagIsOpen, setValue: setBagIsOpen } = useLocalStorageState(
    "looks_bag_open",
    {
      initialValue: undefined,
      parse: (v) => (v === "true" ? true : false),
      serialize: (v) => (v ? "true" : "false"),
    }
  );

  const { measuredRef: headerRef, height: headerHeight } = useMeasuredRef();

  const { width } = useWindowSize();

  const { bag } = useContext(ShopContext);

  const { isSmallScreen } = useWindowSize();

  useEffect(() => {
    if (width && width > 1500 && bagIsOpen === undefined) {
      setBagIsOpen(true);
    }
  }, [width, bagIsOpen, setBagIsOpen]);

  // don't render while checking if bag is open
  if (bagIsOpen === undefined) return null;

  if (isSmallScreen) {
    return (
      <SmallScreenView
        header={header}
        bagIsOpen={bagIsOpen}
        setBagIsOpen={setBagIsOpen}
        dynamicToolbar={dynamicToolbar}
      >
        {children}
      </SmallScreenView>
    );
  }

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
          transition: "right 0.1s ease-in, left 0.1s ease-in",
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
            style={{ overflow: "auto", ...frameStyle }}
            containerStyle={{
              width: "100%",
              height: `calc(100% - ${headerHeight}px)`,
            }}
          >
            {children}
          </RoundedFrame>
        ) : (
          <div
            style={{
              position: "relative",
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

function SmallScreenView({
  children,
  dynamicToolbar,
  header,
  bagIsOpen,
  setBagIsOpen,
}: PropsWithChildren<{
  dynamicToolbar?: boolean;
  header: string | JSX.Element;
  bagIsOpen?: boolean;
  setBagIsOpen: Dispatch<SetStateAction<boolean | undefined>>;
}>) {
  const { bag } = useContext(ShopContext);

  const { ref, direction, onScroll, scrollPosition } = useScrollDirection();

  const showHeader = dynamicToolbar ? !direction || direction === "up" : true;

  const { width: windowWidth } = useWindowSize();

  const _showHeader = useDebounce(showHeader, 125);

  const { measuredRef: toolbarRef, height: toolbarHeight } = useMeasuredRef(
    scrollPosition
    // pass as dependency to ensure height is recalculated on scroll
  );

  return (
    <div
      ref={ref}
      onScroll={onScroll}
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "auto",
      }}
    >
      <div
        ref={toolbarRef}
        style={{
          position: "sticky",
          top: 0,
          background: COLORS.banana,
          ...(_showHeader ? { maxHeight: 68 } : { maxHeight: 0 }),
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "max-height 0.1s ease-in",
          boxSizing: "border-box",
          zIndex: 101,
        }}
      >
        <div style={{ padding: 12, opacity: _showHeader ? 1 : 0 }}>
          <ToolbarIcon />
        </div>

        <div
          style={{ padding: 12, opacity: _showHeader ? 1 : 0 }}
          onClick={() => setBagIsOpen(true)}
        >
          BAG ({bag.length || 0})
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          position: "sticky",
          top: toolbarHeight,
          padding: 12,
          zIndex: 100,
          background: "black",
          color: COLORS.banana,
          textTransform: "uppercase",
        }}
      >
        <h4>{header}</h4>

        <div hidden={_showHeader} onClick={() => setBagIsOpen(true)}>
          BAG ({bag.length || 0})
        </div>
      </div>

      <div
        style={{
          padding: 12,
          paddingBottom: 40,
        }}
      >
        {children}
      </div>

      <div
        style={{
          position: "fixed",
          inset: 0,
          opacity: bagIsOpen ? 1 : 0,
          pointerEvents: bagIsOpen ? "all" : "none",
          transition: "opacity 0.1s ease-in",
          background: "#00000088",
          zIndex: 200,
        }}
        onClick={() => setBagIsOpen(false)}
      >
        <div
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            width: bagIsOpen ? Math.min(480, windowWidth - 48) : 0,
            right: 0,
            transition: "width 0.1s ease-in",
            background: COLORS.bananaLite,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <Bag open onClose={() => setBagIsOpen(false)} />
        </div>
      </div>
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
        transition: "width 0.1s ease-in",
        width: open ? BAG_WIDTH : BAG_CLOSED_WIDTH,
        zIndex: 200,
        overflow: "auto",
      }}
      onClick={onClick}
    >
      <RoundedFrame
        background={"white"}
        containerStyle={{
          height: open ? BAG_WIDTH + 12 : BAG_CLOSED_WIDTH + 4,
          transition: "height 0.1s ease-in",
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
