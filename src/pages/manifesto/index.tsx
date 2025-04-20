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
                <h1 style={{ fontSize: FONT_SIZE["3xl"] }}>What is Banny?</h1>
                <p>
                  Banny combines digital rarity with fashion in a system where
                  you actually share in the project's success and the ethos of
                  better finance.
                </p>

                <h2>How it works:</h2>

                <ul style={{ paddingLeft: 24 }}>
                  <li>
                    Choose a Banny that resonates with you and customize it with
                    fits that express your style
                  </li>
                  <li>
                    When you purchase, you receive both the Banny assets AND
                    $BAN tokens, from the{" "}
                    <Link
                      href={`https://app.revnet.eth.sucks/eth:4`}
                      target="blank"
                    >
                      $BAN Revnet
                    </Link>
                  </li>
                  <li>
                    You can dress the Bannys you bought with the outfits you
                    bought, undress and slip on new ones at any time
                  </li>
                  <li>
                    These tokens represent your ownership stake in the project's
                    revenue stream
                  </li>
                  <li>
                    As the community grows through new drops and collaborations,
                    your $BAN grows in value
                  </li>
                  <li>
                    You can hold, cash out, or use your $BAN tokens as
                    collateral at any time
                  </li>
                </ul>

                <h2>Why fashion?</h2>
                <p>
                  Fashion is how we express our values and identity every day.
                  When you wear something you love and others ask about it,
                  you're creating value for that brand - but traditionally, you
                  never share in that value. Banny closes this loop, recognizing
                  that community members who spread the culture deserve to
                  participate in its success.
                </p>

                <h2>Why Banny matters</h2>
                <p>
                  This isn't just another NFT project. It's a working model of a
                  different kind of economy where value flows to all
                  participants, where customers are owners that help grow the
                  network. Built on Juicebox's RevNet infrastructure, Banny
                  demonstrates how creativity, community, and commerce can align
                  in sustainable ways.
                </p>

                <p>
                  Join us in building something that matters, where your
                  participation is recognized and rewarded programmatically.
                </p>

                <br />
                <br />
                <br />
                <br />
                <h1 style={{ fontSize: FONT_SIZE["3xl"] }}>Philosophy</h1>
                <p>
                  Banny exists at the intersection of form and function,
                  commerce and community.
                </p>
                <p>
                  Beyond fashion, Banny represents a mathematical constant in an
                  unpredictable universe—a symbol that connects individual
                  expression to collective value creation. Each Banny serves as
                  both personal statement and network signal, backed by
                  technology that honors the principles of fair exchange.
                </p>
                <p>
                  We observe the pattern: alignment with symbols of abundance
                  creates corresponding results. This isn't mysticism—it's how
                  complex systems operate, where similar energies naturally find
                  each other.
                </p>
                <p>
                  Banny doesn't promise; it proves. The RevNet infrastructure
                  transforms retail from extraction to circulation, where value
                  flows in multiple directions where customers are owners that
                  help grow the network. Your participation isn't
                  consumption—it's contribution.
                </p>
                <p>
                  Look around. The Bannys among us aren't following trends;
                  they're revealing the underlying code—the pulse beneath
                  commerce, the rhythm beneath culture.
                </p>
                <p>
                  This is an invitation to see differently. To understand that
                  true abundance isn't accumulated but circulated.
                </p>

                <h2>The Lived Experience</h2>
                <p>
                  The journey begins when you find a Banny that resonates with
                  you. You select fits that express your values and aesthetics.
                  You can dress the Bannys you bought with the outfits you
                  bought, undress and slip on new ones at any time. But what
                  happens next matters more.
                </p>
                <p>
                  Your purchase yields not just the Banny and its attire, but
                  $BAN tokens—your claim to a transparent portion of the
                  project's revenue. These tokens are backed by a programmatic
                  treasury where 38% of all issuance flows back to token
                  holders, with a minimum redemption value that protects you and
                  moves as the project grows. As you move through the world with
                  your Banny, as new collaborations emerge and the community
                  grows, your $BAN grows in value according to real
                  participation.
                </p>
                <p>
                  Your $BAN functions as capital, available for exchange or
                  collateralization. You can hold, cash out, or use your $BAN
                  tokens as collateral at any time. The ecosystem evolves as
                  RevNets begin to interlink, creating networks of complementary
                  value systems, each culturally distinct yet governed by the
                  same principles.
                </p>

                <h2>The Deeper Current</h2>
                <p>
                  Fashion is the perfect medium for this model. Every day, we
                  choose items that reflect who we are. These choices connect us
                  to global systems of production and creativity.
                </p>
                <p>
                  Yet traditionally, when you discover a piece that expresses
                  your identity, when you advocate for it through wear and word,
                  when you contribute to a brand's success, you remain excluded
                  from the value you help generate.
                </p>
                <p>
                  Banny and RevNets close this gap. They recognize that every
                  wearer is also a creator of value—that the boundary between
                  producer and consumer is artificial. They acknowledge that we
                  are all building value together.
                </p>
                <p>
                  This isn't speculation; it's recognition of patterns that have
                  always governed human exchange, now made transparent and
                  accessible to all who participate.
                </p>
              </div>
            ),
          },
        ]}
      />
    </>
  );
}
