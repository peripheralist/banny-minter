import ButtonPad from "@/components/shared/ButtonPad";
import { COLORS } from "@/constants/colors";

export default function PageArrowButtons({
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
      }}
    >
      <ButtonPad style={style} fillFg={COLORS.banana} onClick={onClickPrev}>
        {"<"}
      </ButtonPad>
      <ButtonPad style={style} fillFg={COLORS.banana} onClick={onClickNext}>
        {">"}
      </ButtonPad>
    </div>
  );
}
