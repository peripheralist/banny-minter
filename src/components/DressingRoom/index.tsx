import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import LargeView from "./LargeView";
import SmallView from "./SmallView";

export default function Index({
  button,
  includeBannyButtons,
  includeShuffle,
}: {
  button: JSX.Element;
  includeBannyButtons?: boolean;
  includeShuffle?: boolean;
}) {
  const isSmallScreen = useIsSmallScreen();

  return isSmallScreen ? (
    <SmallView button={button} includeBannyButtons={includeBannyButtons} />
  ) : (
    <LargeView
      button={button}
      includeBannyButtons={includeBannyButtons}
      includeShuffle={includeShuffle}
    />
  );
}
