import RoundedFrame from "@/components/shared/RoundedFrame";
import { useRouter } from "next/router";
import React from "react";
import { isAddress } from "viem";

export default function Index() {
  const router = useRouter();

  const address = router.query.address as string | undefined;

  if (!address || Array.isArray(address) || !isAddress(address)) {
    return <div>Bad route</div>;
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Owned by {address}</h1>

      <div>
        <RoundedFrame shadow style={{ maxWidth: 800, maxHeight: 600 }}>
          <div
            style={{
              background: "white",
              width: "90vw",
              height: "80vh",
              maxWidth: 800,
              maxHeight: 600,
            }}
          >
            Assets
          </div>
        </RoundedFrame>
      </div>
    </div>
  );
}
