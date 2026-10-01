export function Decorations({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`decorations ${compact ? "compact" : ""}`}
      aria-hidden="true"
    >
      {[
        "spring-lime",
        "spring-small",
        "ring-white",
        "cylinder-lime",
        "pyramid-white",
        "spring-white",
      ].map((name) => (
        <img key={name} className={name} src={`/assets/${name}.svg`} alt="" />
      ))}
    </div>
  );
}
