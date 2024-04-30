import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import LargeView from "./LargeView";
import SmallView from "./SmallView";

export default function Index({ button }: { button: JSX.Element }) {
  const isSmallScreen = useIsSmallScreen();

  return isSmallScreen ? (
    <SmallView button={button} />
  ) : (
    <LargeView button={button} />
  );
}
