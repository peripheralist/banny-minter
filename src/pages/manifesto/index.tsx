import CustomHead from "@/components/shared/CustomHead";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import { FONT_SIZE } from "@/constants/fontSize";
import Link from "next/link";

export default function Manifesto() {
  return (
    <>
      <CustomHead title="Manifesto" />

      <ToolbarBagView
        sections={[
          {
            header: "Manifesto",
            content: (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 24,
                  paddingBottom: "10vh",
                  paddingTop: "10vh",
                  maxWidth: 800,
                  margin: "0 auto",
                  gap: 24,
                }}
              >
                <h1 style={{ fontSize: FONT_SIZE["3xl"] }}>Manifesto</h1>
                <p>{`Look around, look closely.`}</p>
                <p>{`There are Bannys among us.`}</p>
                <p>{`Calm, curious, casual.`}</p>
                <p>{`Aware of their silk, their feel, their makeup.`}</p>
                <p>{`In awe of the great mystery and its unfolding.`}</p>
                <p>{`Unbothered by the curves of its fabric.`}</p>
                <p>{`Students of the games, their players, their flaws.`}</p>
                <p>{`Modeling alternatives, dressing up, dressing down.`}</p>
                <p>{`Follow their eyes, observe their point of view.`}</p>
                <p>{`And when you see it too, opt out to opt in.`}</p>

                <br />

                <ol style={{ paddingLeft: 24 }}>
                  <li>Buy a Banny that resonates with you.</li>
                  <li>Shop for outfits, expressions, and backgrounds.</li>
                  <li>Dress and redress your Bannys over time.</li>
                </ol>

                <br />

                <p>{`Everything you buy here is yours.`}</p>
                <p>{`Encoded in high fidelity on global computers.`}</p>
                <p>{`The register gives you $BAN cash back as you spend.`}</p>
                <p>{`All $BAN is backed by future sales.`}</p>

                <br />

                <p>{`This shop is for Bannys by Bannys.`}</p>
              </div>
            ),
          },
        ]}
      />
    </>
  );
}
