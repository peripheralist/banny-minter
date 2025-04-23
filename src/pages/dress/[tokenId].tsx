import DressingRoom from "@/components/DressingRoom";
import FullscreenLoading from "@/components/shared/FullscreenLoading";
import { BAN_HOOK } from "@/constants/contracts";
import { AlertContext } from "@/contexts/alertContext";
import { useNftQuery } from "@/generated/graphql";
import { useAppChain } from "@/hooks/useAppChain";
import { parseTierOrNft } from "@/utils/parseTier";
import { useRouter } from "next/router";
import { useContext, useEffect, useMemo } from "react";
import { isAddressEqual } from "viem";
import { useAccount } from "wagmi";

export default function Index() {
  const { address } = useAccount();

  const { setAlert } = useContext(AlertContext);

  const router = useRouter();

  const appChain = useAppChain();

  const tokenId = useMemo(() => {
    try {
      return BigInt(parseInt(router.query.tokenId as string));
    } catch (e) {
      console.error("Error parsing tokenId");
      return BigInt(0);
    }
  }, [router.query.tokenId]);

  const { data: nft, loading: nftsLoading } = useNftQuery({
    variables: {
      tokenId,
      hook: BAN_HOOK,
      chainId: appChain.id,
    },
  });

  const isOwner = useMemo(
    () =>
      nft && address
        ? isAddressEqual(address, nft.nft?.wallet?.address as `0x${string}`)
        : undefined,
    [address, nft]
  );

  useEffect(() => {
    if (isOwner === false) {
      if (address) {
        router.push(`/locker/${address}`);
      } else {
        router.push("/explore");
      }

      setAlert?.({
        title: "You don't own this Banny!",
        body: "To dress this Banny, connect the owner's wallet.",
      });
    }
  }, [router, isOwner, setAlert, address]);

  if (nftsLoading) return <FullscreenLoading />;

  if (!nft?.nft) return null;

  return <DressingRoom bannyNft={parseTierOrNft(nft.nft)} />;
}
