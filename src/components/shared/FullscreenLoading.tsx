import React from "react";
import Fuzz from "../pixelRenderers/Fuzz";
import { TOOLBAR_HEIGHT } from "../Toolbar";

export default function FullscreenLoading() {
  return (
    <div
      style={{
        width: "100vw",
        height: `calc(100vh - ${TOOLBAR_HEIGHT}px)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <Fuzz width={200} height={200} fill="black" pixelSize={10} />
      <h1>Loading</h1>
    </div>
  );
}
