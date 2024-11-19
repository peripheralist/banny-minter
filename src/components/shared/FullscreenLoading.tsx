import Loading from "./Loading";

export default function FullscreenLoading() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: 240, height: 240 }}>
        <Loading />
      </div>
    </div>
  );
}
