import { useWindowSize } from "@/hooks/useWindowSize";
import LargeView from "./LargeView";
import SmallView from "./SmallView";

export default function Index() {
  const { isSmallScreen } = useWindowSize();

  return isSmallScreen ? <SmallView /> : <LargeView />;
}
