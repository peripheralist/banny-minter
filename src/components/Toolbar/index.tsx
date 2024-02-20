import Link from "next/link";
import Wallet from "./Wallet";

export const TOOLBAR_HEIGHT = 48;

export default function Index() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-between",
        padding: 10,
        height: TOOLBAR_HEIGHT,
      }}
    >
      <Link href={"/"}>
        <h1
          style={{
            margin: 0,
            display: "block",
            appearance: "none",
            color: "black",
          }}
        >
          Bannyverse
        </h1>
      </Link>
      <Wallet />
    </div>
  );
}
