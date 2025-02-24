import ToolbarBagView from "@/components/shared/ToolbarBagView";

export default function Manifesto() {
  return (
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
                paddingTop: "10vh",
              }}
            >
              <p>
                Banny is a statement.
                <br />
                Fashion, yes, but more than that—
                <br />
                A vision for how we shape our world.
                <br />
                <br />
                A call to embrace the transparent, the ripe, the eternal, the
                organic.
                <br />
                A paradox: independent from pop, yet shaped by it.
                <br />
                A nod to the experimental, grounded in the traditions that make
                us who we are.
                <br />
                <br />
                Banny proposes an alternative outlook on retail—
                <br />
                the younger sibling of the status quo.
                <br />
                <br />
                An invitation to dress down, while dressing up.
                <br />
                To let loose while giving a damn.
                <br />
                To keep cool, while delivering the heat.
                <br />
                <br />
                Banny is a reminder:
                <br />
                Of us, of now.
                <br />
                Of the strange and shared reality we navigate.
                <br />
                Of the outcomes we manifest.
                <br />
                <br />
                And if you look closely, you'll see—
                <br />
                there are Bannys among us.
              </p>
            </div>
          ),
        },
      ]}
    />
  );
}
