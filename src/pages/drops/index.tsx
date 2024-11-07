import ToolbarBagView from "@/components/ToolbarBagView";
import ButtonPad from "@/components/shared/ButtonPad";
import RoundedFrame from "@/components/shared/RoundedFrame";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import Link from "next/link";
import React, { useState } from "react";

export interface Drop {
  id: number;
  name: string;
  summary: string;
  itemCount: number;
  dateCreated: string;
}

export const DROPS: Drop[] = [
  {
    id: 1,
    name: "Genesis",
    summary: `Description of the drop. A tribute to the visionary professional, this wearable tech brings a corporate-induced future closer to our eyes. For the avant-garde digital nomad, it's a reimagined lens through which to view a world where screens merge with reality.`,
    itemCount: 69,
    dateCreated: "11-20-2024",
  },
];

function DropLink({ drop }: { drop: Drop }) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={`/drop/${drop.id}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ButtonPad
        fillFg={"white"}
        style={{ color: "black", display: "flex", flexDirection: "column" }}
        shadow={hover ? "md" : "sm"}
      >
        <RoundedFrame
          background={"black"}
          borderColor="black"
          containerStyle={{ margin: -4 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              color: "white",
              padding: "4px 4px",
            }}
          >
            <h3
              style={{
                fontSize: FONT_SIZE.lg,
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              Drop #{drop.id.toString().padStart(3, "0")} | {drop.itemCount}{" "}
              items
            </h3>

            <h3
              style={{
                fontSize: FONT_SIZE.lg,
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              {drop.dateCreated}
            </h3>
          </div>

          <div
            style={{
              width: "calc(100% + 8px)",
              margin: -4,
              height: 8,
              background: "black",
            }}
          />
        </RoundedFrame>

        <h1
          style={{
            padding: 12,
            boxSizing: "border-box",
            margin: 0,
            fontSize: FONT_SIZE["3xl"],
            width: "100%",
          }}
        >
          {drop.name}
        </h1>
      </ButtonPad>
    </Link>
  );
}

export default function Drops() {
  return (
    <ToolbarBagView header="DROPS">
      <div
        style={{
          position: "relative",
          padding: 24,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {DROPS.map((d) => (
            <DropLink key={d.id} drop={d} />
          ))}
        </div>
      </div>
    </ToolbarBagView>
  );
}
