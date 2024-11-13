import { useWindowSize } from "@/hooks/useWindowSize";
import LargeView from "./LargeView";
import SmallView from "./SmallView";

export default function Index({
  button,
  includeBody,
}: {
  button: JSX.Element;
  includeBody?: boolean;
}) {
  const { isSmallScreen } = useWindowSize();

  return isSmallScreen ? (
    <SmallView button={button} includeBody={includeBody} />
  ) : (
    <LargeView button={button} includeBody={includeBody} />
  );
}
