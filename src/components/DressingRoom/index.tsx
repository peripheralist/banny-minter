import { useWindowSize } from "@/hooks/useWindowSize";
import LargeView from "./LargeView";
import SmallView from "./SmallView";

export default function Index({ tokenId }: { tokenId: bigint }) {
  const { isSmallScreen } = useWindowSize();

  return isSmallScreen ? (
    <SmallView tokenId={tokenId} />
  ) : (
    <LargeView tokenId={tokenId} />
  );
}
