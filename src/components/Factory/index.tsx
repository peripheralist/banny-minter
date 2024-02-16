import { useState } from "react";
import Button from "../Button";
import Drawer from "./Drawer";
import NFTImage from "./NFTImage";

export default function Index() {
  const [mintLoading, setMintLoading] = useState<boolean>();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        boxSizing: "border-box",
        padding: 40,
      }}
    >
      <Drawer
        style={{
          boxSizing: "border-box",
          height: "94vh",
          maxHeight: 1200,
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          gap: 80,
          padding: 40,
        }}
      >
        <NFTImage />

        <Button
          onClick={() => {
            setMintLoading(true);
            setTimeout(() => {
              setMintLoading(false);
            }, 2000);
          }}
          loading={mintLoading}
        >
          Mint Banny
        </Button>
      </div>
    </div>
  );
}
