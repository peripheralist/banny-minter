import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { ShopContext } from "@/contexts/shopContext";
import useDebounce from "@/hooks/useDebounce";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useWindowSize } from "@/hooks/useWindowSize";
import dynamic from "next/dynamic";
import {
  CSSProperties,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import ToolbarIcon from "../ToolbarIcon";
import Bag from "./Bag";
import EquippedTiersPreview from "./EquippedTiersPreview";
import HeaderFrame from "./HeaderFrame";
import RoundedFrame from "./RoundedFrame";

type Section = {
  header: string | JSX.Element;
  content: JSX.Element;
  contentStyle?: CSSProperties;
  sectionStyle?: CSSProperties;
};

const Toolbar = dynamic(() => import("@/components/Toolbar"), { ssr: false });

const BAG_WIDTH = 340;
const BAG_CLOSED_WIDTH = 80;

export default function ToolbarBagView({
  sections,
  dynamicToolbar,
  disableDrawer,
}: {
  sections: Section[];
  dynamicToolbar?: boolean;
  disableDrawer?: boolean;
}) {
  const {
    value: bagIsOpen,
    setValue: setBagIsOpen,
    initialized: bagInitialized,
  } = useLocalStorageState("bag_open", {
    defaultValue: true,
    parse: (v) => (v === "true" ? true : false),
    serialize: (v) => (v ? "true" : "false"),
  });

  const { bag } = useContext(ShopContext);

  const { isSmallScreen } = useWindowSize();

  if (isSmallScreen) {
    return (
      <SmallScreenView
        bagIsOpen={bagIsOpen}
        setBagIsOpen={setBagIsOpen}
        dynamicToolbar={dynamicToolbar}
        sections={sections}
      />
    );
  }

  if (!bagInitialized) return null;

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Toolbar />

      <div
        style={{
          display: "flex",
          flex: 1,
          padding: 8,
          paddingLeft: 0,
          paddingBottom: 8,
          gap: 8,
          overflow: "hidden",
        }}
      >
        {sections.map(({ header, content, contentStyle, sectionStyle }) => (
          <HeaderFrame
            key={header.toString()}
            header={header}
            contentStyle={contentStyle}
            sectionStyle={sectionStyle}
          >
            {content}
          </HeaderFrame>
        ))}

        {bag.length > 0 && bagInitialized && !disableDrawer && (
          <Drawer
            open={bagIsOpen}
            onClick={bagIsOpen ? undefined : () => setBagIsOpen(true)}
            onClose={() => setBagIsOpen(false)}
          />
        )}
      </div>
    </div>
  );
}

function SmallScreenView({
  sections,
  dynamicToolbar,
  bagIsOpen,
  setBagIsOpen,
}: {
  sections: Section[];
  dynamicToolbar?: boolean;
  bagIsOpen?: boolean;
  setBagIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { bag } = useContext(ShopContext);
  const { equipped, equippingCategory, unequippingCategory } =
    useContext(EquipmentContext);

  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const Tabs = useMemo(
    () =>
      sections.map(({ header }, i) => (
        <h4
          key={header.toString()}
          onClick={() => setSelectedTabIdx(i)}
          style={{ color: selectedTabIdx === i ? "white" : COLORS.banana100 }}
        >
          {header}
        </h4>
      )),
    [sections, selectedTabIdx]
  );

  const { ref, direction, onScroll, scrollPosition } = useScrollDirection();

  const showHeader =
    scrollPosition < 100 ||
    (dynamicToolbar ? !direction || direction === "up" : true);

  const _showHeader = useDebounce(showHeader, 200);

  const { width: windowWidth } = useWindowSize();

  const bagWidth = useMemo(
    () => Math.min(480, windowWidth - 48),
    [windowWidth]
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
      <style>{`body{background: ${COLORS.banana100}}`}</style>

      <div
        style={{
          position: "sticky",
          top: _showHeader ? 0 : "-100%",
          transition: "top .2s ease-in",
          boxSizing: "border-box",
          zIndex: 101,
          background: COLORS.banana100,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              padding: "8px 12px",
              opacity: _showHeader ? 1 : 0,
              maxHeight: 40,
            }}
          >
            <ToolbarIcon />
          </div>

          <h4
            style={{ padding: "8px 12px", opacity: _showHeader ? 1 : 0 }}
            onClick={() => setBagIsOpen(true)}
          >
            BAG ({bag.length || 0})
          </h4>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 24,
            padding: "10px 12px 8px",
            background: "black",
            color: COLORS.banana100,
            textTransform: "uppercase",
          }}
        >
          {Tabs}
        </div>
      </div>

      <div
        style={{
          padding: 12,
          paddingBottom: 40,
        }}
      >
        {sections[selectedTabIdx].content}
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
            width: bagIsOpen ? bagWidth : 0,
            right: 0,
            transition: "width 0.1s ease-in",
            background: COLORS.banana100,
            display: "flex",
            flexDirection: "column",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <h4 style={{ padding: 12, fontSize: FONT_SIZE["2xl"] }}>Bag</h4>

          <div style={{ padding: 12 }}>
            <RoundedFrame background={"white"}>
              <EquippedTiersPreview
                equipped={equipped}
                size={bagWidth - 24}
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
                  fontSize: FONT_SIZE.xs,
                }}
              >
                PREVIEW
              </div>
            </RoundedFrame>
          </div>

          <Bag open />
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
    <HeaderFrame
      header={
        <div
          style={{
            display: "flex",
            gap: 8,
            cursor: "pointer",
          }}
          onClick={open ? onClose : onClick}
        >
          <span>{open ? ">" : "<"}</span>
          <span>Bag</span>
        </div>
      }
      sectionStyle={{ flex: 0 }}
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        transition: "width 0.1s ease-in",
        width: open ? BAG_WIDTH : BAG_CLOSED_WIDTH,
        overflow: "auto",
        padding: 0,
      }}
      onClick={open ? undefined : onClick}
    >
      <RoundedFrame
        background={"white"}
        containerStyle={{
          height: open ? BAG_WIDTH + 8 : BAG_CLOSED_WIDTH + 4,
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
        background={COLORS.banana100}
        containerStyle={{
          height: open ? `calc(100% - ${BAG_WIDTH - 20}px)` : "100%",
          minHeight: 360,
        }}
      >
        <Bag open={open} />
      </RoundedFrame>
    </HeaderFrame>
  );
}
