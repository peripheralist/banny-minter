import ButtonPad from "@/components/shared/ButtonPad";
import Downloadable from "@/components/shared/Downloadable";
import TierImage from "@/components/shared/TierImage";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import { CATEGORIES, Category, CATEGORY_IDS } from "@/constants/category";
import { COLORS } from "@/constants/colors";
import { DEFAULT_SVG } from "@/constants/defaultSvgs";
import { FONT_SIZE } from "@/constants/fontSize";
import { getInheritedStyle } from "@/constants/inheritedColors";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { Tier } from "@/model/tier";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function Index() {
  const [svg, setSvg] = useState<string>("");
  const [equipped, setEquipped] = useState<Partial<Record<Category, Tier>>>({});

  const onClickTier = useCallback((t: Tier) => {
    setEquipped((e) => ({
      ...e,
      [t.category]: e[t.category]?.tierId === t.tierId ? undefined : t,
    }));
  }, []);

  const { tiers } = useAllTiers();

  useEffect(() => {
    const size = 400;

    const styles = getInheritedStyle(equipped["body"]?.tierId);

    async function getSvgs() {
      let _svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">${styles}`;

      for (let i = 0; i < CATEGORIES.length; i++) {
        const c = CATEGORIES[i];

        let tierSvg = equipped[c]?.svg;

        if (tierSvg?.includes("image href=")) {
          const href = tierSvg.match(/image href="(.*)" w/);
          console.log("asdf href", href);
          if (href?.[1]) {
            axios
              .get(href[1])
              .then((res) => (_svg += res.data))
              .catch((e) => {
                console.log("Couldn't load svg", href[1], e);
              });
          }
        }

        tierSvg = tierSvg
          ?.replace(/<svg.*svg">/i, "")
          .replace("</svg>", "")
          .replace(/<style>.*<\/style>/, "");

        if (!tierSvg) {
          if (c === "body") _svg += DEFAULT_SVG.mannequin;
          if (c === "necklace") _svg += DEFAULT_SVG.necklace;
          if (c === "mouth") _svg += DEFAULT_SVG.mouth;
        } else {
          _svg += tierSvg;
        }
      }

      _svg += "</svg>";

      setSvg(_svg);
    }

    getSvgs();
  }, [equipped]);

  return (
    <ToolbarBagView
      disableDrawer
      sections={[
        {
          header: "Tiers",
          contentStyle: {
            padding: 8,
          },
          content: (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {tiers
                ?.sort((a, b) =>
                  CATEGORY_IDS[a.category] < CATEGORY_IDS[b.category] ? -1 : 1
                )
                .map((t) => (
                  <ButtonPad
                    key={t.tierId}
                    onClick={() => onClickTier(t)}
                    fillBorder={
                      equipped[t.category]?.tierId === t.tierId
                        ? COLORS.pink
                        : "white"
                    }
                    style={{
                      padding: 8,
                      display: "flex",
                      flexDirection: "column",
                      fontSize: FONT_SIZE.xs,
                    }}
                    containerStyle={{ width: 120, height: 120 }}
                    shadow="sm"
                  >
                    <TierImage size={80} tier={t} />
                    <br />
                    {t.name}
                  </ButtonPad>
                ))}
            </div>
          ),
        },
        {
          header: "Image",
          content: (
            <div style={{ background: "white" }}>
              <Downloadable
                fileName="custom-banny.svg"
                downloadHref={`data:image/svg+xml;base64,${btoa(svg)}`}
                buttonStyle={{
                  fontSize: FONT_SIZE.lg,
                }}
              >
                <div dangerouslySetInnerHTML={{ __html: svg }} />
              </Downloadable>
            </div>
          ),
        },
      ]}
    />
  );
}
