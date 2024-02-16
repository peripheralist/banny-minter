import React, { CSSProperties, useCallback, useEffect, useMemo } from "react";
import { AssetType } from "./Drawer";
import BackgroundIcon from "../shared/images/BackgroundIcon";
import BannyBodyIcon from "../shared/images/BannyBodyIcon";
import HeadgearIcon from "../shared/images/HeadgearIcon";
import OutfitIcon from "../shared/images/OutfitIcon";
import SwordIcon from "../shared/images/SwordIcon";
import PixelShape from "../PixelShape";
import PixelLine from "../PixelLine";
import { COLORS } from "@/constants/colors";

const SIZE = 80;

export default function AssetButton({
  asset,
  active,
  onClick,
}: {
  asset: AssetType;
  active?: boolean;
  onClick?: VoidFunction;
}) {
  const Icon = useCallback(() => {
    switch (asset) {
      case "BACKGROUND":
        return <BackgroundIcon active={active} />;
      case "BODY":
        return <BannyBodyIcon active={active} />;
      case "HEADGEAR":
        return <HeadgearIcon active={active} />;
      case "OUTFIT":
        return <OutfitIcon active={active} />;
      case "GRIP_RIGHT":
        return <SwordIcon active={active} />;
    }
  }, [active, asset]);

  const Corner = useCallback(
    ({ style, fill }: { style?: CSSProperties; fill?: string }) => (
      <PixelShape
        style={{ position: "absolute", ...style }}
        height={SIZE / 2}
        width={SIZE / 2}
        pixelSize={2}
        fill={fill ?? "white"}
        plot={(x, y) => y < Math.sqrt((SIZE / 2) ** 2 - x ** 2)}
      />
    ),
    []
  );

  const CornerLine = useCallback(
    ({ style }: { style?: CSSProperties }) => (
      <PixelLine
        style={{
          position: "absolute",
          ...style,
        }}
        height={SIZE / 2}
        width={SIZE / 2}
        pixelSize={2}
        fill={"black"}
        plot={(x) => Math.sqrt((SIZE / 2) ** 2 - x ** 2)}
      />
    ),
    []
  );

  return useMemo(
    () => (
      <div
        style={{
          position: "relative",
          height: SIZE,
          width: SIZE,
          userSelect: "none",
        }}
        onClick={onClick}
      >
        <Corner
          style={{
            left: 4,
            bottom: -4,
            transform: "scale(-1, -1)",
          }}
          fill={COLORS.brown}
        />
        <Corner style={{ right: -4, top: 4 }} fill={COLORS.brown} />
        <Corner
          style={{
            right: -4,
            bottom: -4,
            transform: "scale(1, -1)",
          }}
          fill={COLORS.brown}
        />

        <Corner
          style={{
            left: 0,
            top: 0,
            transform: "scale(-1, 1)",
          }}
        />
        <Corner style={{ right: 0, top: 0 }} />
        <Corner style={{ right: 0, bottom: 0, transform: "scale(1, -1)" }} />
        <Corner
          style={{
            left: 0,
            bottom: 0,
            transform: "scale(-1, -1)",
          }}
        />

        <CornerLine
          style={{
            right: 0,
            top: 0,
          }}
        />
        <CornerLine
          style={{
            right: 0,
            bottom: 0,
            transform: "scale(1, -1)",
          }}
        />
        <CornerLine
          style={{
            left: 0,
            top: 0,
            transform: "scale(-1, 1)",
          }}
        />
        <CornerLine
          style={{
            left: 0,
            bottom: 0,
            transform: "scale(-1, -1)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon />
        </div>
      </div>
    ),
    [Corner, CornerLine, Icon, onClick]
  );
}
