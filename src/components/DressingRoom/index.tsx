import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import LargeView from "./LargeView";
import SmallView from "./SmallView";

export default function Index({
  button,
  includeBannyButtons,
}: {
  button: JSX.Element;
  includeBannyButtons?: boolean;
}) {
  const isSmallScreen = useIsSmallScreen();

  return isSmallScreen ? (
    <SmallView button={button} includeBannyButtons={includeBannyButtons} />
  ) : (
    <LargeView button={button} includeBannyButtons={includeBannyButtons} />
  );
}
