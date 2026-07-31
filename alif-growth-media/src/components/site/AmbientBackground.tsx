/**
 * Fixed ambient backdrop — animated aurora / mesh gradient with a silk
 * (satin) sheen sweep: large soft blooms drift and breathe like fabric folds,
 * while wide specular bands travel across them like light on cloth.
 *
 * Perf note: every layer animates only `transform` / `opacity`, so each stays
 * on the compositor and never repaints during scroll. No `filter: blur()`, no
 * `mix-blend-mode`, no JS — those were the source of scroll jank on mobile.
 * Softness comes from wide gradient falloff instead of blur.
 */
export function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 bg-background"
      style={{ contain: "strict" }}
    >
      <div
        className="ambient-wash absolute -inset-[12%]"
        style={{
          backgroundImage: [
            "radial-gradient(58rem 42rem at 8% -10%, color-mix(in oklab, var(--primary) 16%, transparent), transparent 60%)",
            "radial-gradient(48rem 38rem at 104% 38%, color-mix(in oklab, var(--gold) 18%, transparent), transparent 62%)",
            "radial-gradient(52rem 40rem at 42% 108%, color-mix(in oklab, var(--primary) 11%, transparent), transparent 62%)",
            "var(--gradient-hero)",
          ].join(","),
        }}
      />

      {/* Silk aurora — two counter-drifting bloom sets that breathe out of
          phase, so the field swells and folds instead of sliding. */}
      <div
        className="ambient-silk-a absolute -inset-[18%]"
        style={{
          backgroundImage: [
            "radial-gradient(70rem 52rem at 18% 22%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 66%)",
            "radial-gradient(56rem 46rem at 82% 70%, color-mix(in oklab, var(--primary) 15%, transparent), transparent 64%)",
          ].join(","),
        }}
      />
      <div
        className="ambient-silk-b absolute -inset-[18%]"
        style={{
          backgroundImage: [
            "radial-gradient(64rem 48rem at 72% 12%, color-mix(in oklab, var(--gold) 16%, transparent), transparent 64%)",
            "radial-gradient(72rem 54rem at 30% 92%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 66%)",
          ].join(","),
        }}
      />

      {/* Sheen sweeps — wide soft specular bands travelling across the cloth. */}
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 16%, black 82%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 16%, black 82%, transparent 100%)",
        }}
      >
        <div
          className="ambient-sheen absolute -inset-y-[40%] left-0 w-[70%]"
          style={{
            backgroundImage:
              "linear-gradient(100deg, transparent 0%, color-mix(in oklab, var(--gold) 10%, transparent) 38%, color-mix(in oklab, white 55%, transparent) 50%, color-mix(in oklab, var(--primary) 10%, transparent) 62%, transparent 100%)",
            opacity: 0.5,
          }}
        />
        <div
          className="ambient-sheen-alt absolute -inset-y-[40%] left-0 w-[55%]"
          style={{
            backgroundImage:
              "linear-gradient(80deg, transparent 0%, color-mix(in oklab, var(--primary) 14%, transparent) 45%, color-mix(in oklab, white 32%, transparent) 55%, transparent 100%)",
            opacity: 0.32,
          }}
        />
        {/* Weave grain — static, keeps the surface reading as cloth. */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: [
              "repeating-linear-gradient(45deg, var(--foreground) 0 1px, transparent 1px 4px)",
              "repeating-linear-gradient(-45deg, var(--foreground) 0 1px, transparent 1px 5px)",
            ].join(","),
          }}
        />
      </div>
    </div>
  );
}
