import ToolbarBagView from "@/components/ToolbarBagView";
import ButtonPad from "@/components/shared/ButtonPad";
import RoundedFrame from "@/components/shared/RoundedFrame";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import Link from "next/link";
import { useState } from "react";

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
  {
    id: 2,
    name: "Genesis",
    summary: `Description of the drop. A tribute to the visionary professional, this wearable tech brings a corporate-induced future closer to our eyes. For the avant-garde digital nomad, it's a reimagined lens through which to view a world where screens merge with reality.`,
    itemCount: 69,
    dateCreated: "11-20-2024",
  },
  {
    id: 3,
    name: "Genesis",
    summary: `Description of the drop. A tribute to the visionary professional, this wearable tech brings a corporate-induced future closer to our eyes. For the avant-garde digital nomad, it's a reimagined lens through which to view a world where screens merge with reality.`,
    itemCount: 69,
    dateCreated: "11-20-2024",
  },
  {
    id: 4,
    name: "Genesis",
    summary: `Description of the drop. A tribute to the visionary professional, this wearable tech brings a corporate-induced future closer to our eyes. For the avant-garde digital nomad, it's a reimagined lens through which to view a world where screens merge with reality.`,
    itemCount: 69,
    dateCreated: "11-20-2024",
  },
  {
    id: 5,
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
              margin: 0,
              color: COLORS.bananaLite,
              fontSize: FONT_SIZE.md,
              textTransform: "uppercase",
            }}
          >
            <div>
              Drop #{drop.id.toString().padStart(3, "0")} | {drop.itemCount}{" "}
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
              margin: 0,
              fontSize: FONT_SIZE["3xl"],
            }}
          >
            {drop.name}
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: FONT_SIZE.sm,
            }}
          >
            {drop.summary}
          </p>
        </div>
      </ButtonPad>
    </Link>
  );
}

export default function Drops() {
  return (
    <ToolbarBagView header="DROPS">
      <div style={{ position: "relative" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(2, 1fr)`,
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
