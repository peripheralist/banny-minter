import { EditorContext } from "@/contexts/editorContext";
import Image from "next/image";
import { useContext } from "react";
import Drawer from "./Drawer";

const IMG_SIZE = 540;

export default function Index() {
  const { body, outfit, background } = useContext(EditorContext);

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <h1
          style={{
            borderBottom: "4px solid #F8B431",
            color: "white",
            height: 60,
            paddingLeft: 20,
            lineHeight: 2,
            margin: 0,
          }}
        >
          Mint a Banny...
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              backgroundImage: `url("/assets/banny/background/${background}")`,
              width: IMG_SIZE,
              maxWidth: IMG_SIZE,
              height: IMG_SIZE,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              border: "40px solid white",
            }}
          >
            <Image
              style={{
                // need an offset bc alien body is off-center
                marginLeft: body === "alien.png" ? IMG_SIZE * 0.035 : 0,
              }}
              width={IMG_SIZE * 1.4}
              height={IMG_SIZE * 1.4}
              src={`/assets/banny/body/${body}`}
              alt={body}
            />
            <Image
              style={{ position: "absolute" }}
              width={IMG_SIZE * 1.05}
              height={IMG_SIZE * 1.05}
              src={`/assets/banny/outfit/${outfit}`}
              alt={body}
            />

            <div
              style={{
                top: -20,
                left: -20,
                width: IMG_SIZE + 80,
                height: IMG_SIZE + 80,
                position: "absolute",
                background: "#00000044",
                zIndex: -1,
              }}
            />
          </div>
        </div>
      </div>

      <Drawer />
    </div>
  );
}
