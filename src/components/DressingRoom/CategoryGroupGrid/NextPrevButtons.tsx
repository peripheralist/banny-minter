import ButtonPad from "@/components/shared/ButtonPad";

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

  const shadow = "sm";
  const fillFg = "white";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        fontWeight: "bold",
      }}
    >
      <ButtonPad
        style={style}
        fillFg={fillFg}
        shadow={shadow}
        onClick={onClickPrev}
      >
        {"<"}
      </ButtonPad>
      <ButtonPad
        style={style}
        fillFg={fillFg}
        shadow={shadow}
        onClick={onClickNext}
      >
        {">"}
      </ButtonPad>
    </div>
  );
}
