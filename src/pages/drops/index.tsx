import ToolbarBagView from "@/components/shared/ToolbarBagView";
import ButtonPad from "@/components/shared/ButtonPad";
import RoundedFrame from "@/components/shared/RoundedFrame";
import { COLORS } from "@/constants/colors";
import { DROPS } from "@/constants/drops";
import { FONT_SIZE } from "@/constants/fontSize";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Drop } from "@/model/drop";
import Link from "next/link";
import { useState } from "react";

function DropLink({ drop }: { drop: Drop }) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={`/drops/${drop.id}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ButtonPad
        fillFg={COLORS.bananaLite}
        style={{
          color: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
        shadow={hover ? "md" : "sm"}
      >
        <RoundedFrame background={"black"} containerStyle={{ marginTop: -4 }}>
          <h3
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              padding: 4,
              color: COLORS.bananaLite,
              fontSize: FONT_SIZE.md,
              textTransform: "uppercase",
            }}
          >
            <div>
              Drop #{drop.id.toString().padStart(2, "0")} | {drop.itemCount}{" "}
              items
            </div>

            <div>{drop.dateCreated}</div>
          </h3>

          <div
            style={{
              width: "calc(100% + 8px)",
              margin: -4,
              height: 8,
              background: "black",
            }}
          />
        </RoundedFrame>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: 12,
          }}
        >
          <h1
            style={{
              boxSizing: "border-box",
              fontSize: FONT_SIZE["3xl"],
            }}
          >
            {drop.name}
          </h1>

          <p style={{ fontSize: FONT_SIZE.sm }}>{drop.summary}</p>
        </div>
      </ButtonPad>
    </Link>
  );
}

export default function Drops() {
  const { isSmallScreen } = useWindowSize();

  return (
    <ToolbarBagView header="DROPS">
      <div style={{ position: "relative" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${isSmallScreen ? 1 : 2}, 1fr)`,
            gap: 16,
            paddingBottom: 80,
          }}
        >
          {DROPS.map((d) => (
            <DropLink key={d.id} drop={d} />
          ))}
        </div>
      </div>
    </ToolbarBagView>
  );
}
