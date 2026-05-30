export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-slate-950">

      {/* Glow 1 */}
      <div className="blob blob-purple" />

      {/* Glow 2 */}
      <div className="blob blob-blue" />

      {/* Glow 3 */}
      <div className="blob blob-pink" />

      {/* Dark overlay für readability */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
