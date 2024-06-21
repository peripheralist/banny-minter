import ButtonPad from "@/components/shared/ButtonPad";
import { COLORS } from "@/constants/colors";

/**
 * Renders next and previous arrow buttons.
 */
export default function NextPrevButtons({
  onClickPrev,
  onClickNext,
}: {
  onClickPrev: VoidFunction;
  onClickNext: VoidFunction;
}) {
  const style = { width: 40, height: 40, fontSize: "1.4rem" };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        fontWeight: "bold",
      }}
    >
      <ButtonPad style={style} fillFg={COLORS.bananaLite} onClick={onClickPrev}>
        {"<"}
      </ButtonPad>
      <ButtonPad style={style} fillFg={COLORS.bananaLite} onClick={onClickNext}>
        {">"}
      </ButtonPad>
    </div>
  );
}
