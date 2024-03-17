import { TOOLBAR_HEIGHT } from "@/components/Toolbar";
import RoundedFrame from "@/components/shared/RoundedFrame";
import { useNftsOf } from "@/hooks/queries/useNftsOf";
import { decodeNFTInfo } from "@/utils/tokenInfo";
import Image from "next/image";
import { useRouter } from "next/router";
import { isAddress } from "viem";

export default function Index() {
  const router = useRouter();

  const address = router.query.address as string | undefined;

  const nfts = useNftsOf(address);

  if (!address || Array.isArray(address) || !isAddress(address)) {
    return <div>Bad route</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: TOOLBAR_HEIGHT,
      }}
    >
      <h1>
        {address}
        {"'"}s Closet
      </h1>

      <div>
        <RoundedFrame shadow style={{ maxWidth: 800, maxHeight: 600 }}>
          {nfts.data?.nfts.length ? (
            <div
              style={{
                background: "white",
                width: "90vw",
                height: "80vh",
                maxWidth: 800,
                maxHeight: 600,
                display: "grid",
                gridTemplateColumns: `repeat(4, 1fr)`,
              }}
            >
              {nfts.data.nfts.map((n) => {
                const src = decodeNFTInfo(n.tokenUri)?.image;
                if (!src) return null;
                return (
                  <Image
                    width={200}
                    height={200}
                    key={n.tokenId}
                    src={src}
                    alt={n.tokenId.toString()}
                  />
                );
              })}
            </div>
          ) : (
            <div
              style={{
                background: "white",
                width: "90vw",
                height: "80vh",
                maxWidth: 800,
                maxHeight: 600,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Closet is empty
            </div>
          )}
        </RoundedFrame>
      </div>
    </div>
  );
}
