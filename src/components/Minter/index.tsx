import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import LargeView from "./LargeView";
import SmallView from "./SmallView";

export default function Index() {
  const isSmallScreen = useIsSmallScreen();

  return isSmallScreen ? <SmallView /> : <LargeView />;
}
