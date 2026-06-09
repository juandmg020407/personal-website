/**
 * Hand-drawn ink illustration for OpenRoute: a depot, two delivery clusters
 * and their planned routes. The dashes flow along each route (CSS only).
 */
export function RouteMap() {
  return (
    <svg
      viewBox="0 0 380 300"
      role="presentation"
      aria-hidden
      className="block h-auto w-full"
    >
      <defs>
        <pattern id="rm-grid" width="26" height="26" patternUnits="userSpaceOnUse">
          <path d="M26 0H0v26" fill="none" stroke="var(--rule-faint)" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="380" height="300" fill="url(#rm-grid)" />

      {/* route A — pen blue */}
      <path
        className="route-path"
        d="M62 178 Q 84 120 116 102 T 186 132 Q 220 96 244 78 T 314 122"
        fill="none"
        stroke="var(--pen)"
        strokeWidth="2"
      />
      {/* route B — vermilion, flowing the other way */}
      <path
        className="route-path"
        style={{ animationDirection: "reverse", animationDuration: "11s" }}
        d="M62 178 Q 76 226 102 236 T 190 214 Q 234 232 268 250"
        fill="none"
        stroke="var(--verm-bright)"
        strokeWidth="2"
      />

      {/* depot */}
      <rect x="54" y="170" width="16" height="16" fill="var(--ink)" />
      <text
        x="54"
        y="206"
        fontFamily="var(--font-plex-mono), monospace"
        fontSize="10"
        fill="var(--ink-soft)"
      >
        depot
      </text>

      {/* cluster A stops */}
      {[
        [116, 102],
        [186, 132],
        [244, 78],
        [314, 122],
      ].map(([x, y]) => (
        <circle key={`a-${x}`} cx={x} cy={y} r="5.5" fill="var(--paper)" stroke="var(--pen)" strokeWidth="2" />
      ))}

      {/* cluster B stops */}
      {[
        [102, 236],
        [190, 214],
        [268, 250],
      ].map(([x, y]) => (
        <circle key={`b-${x}`} cx={x} cy={y} r="5.5" fill="var(--paper)" stroke="var(--verm-bright)" strokeWidth="2" />
      ))}

      {/* annotations */}
      <text
        x="318"
        y="106"
        fontFamily="var(--font-plex-mono), monospace"
        fontSize="10"
        fill="var(--pen)"
      >
        v1
      </text>
      <text
        x="274"
        y="268"
        fontFamily="var(--font-plex-mono), monospace"
        fontSize="10"
        fill="var(--verm)"
      >
        v2
      </text>

      {/* scale bar */}
      <path d="M296 284h56" stroke="var(--ink-soft)" strokeWidth="1" />
      <path d="M296 280v8M352 280v8" stroke="var(--ink-soft)" strokeWidth="1" />
      <text
        x="304"
        y="278"
        fontFamily="var(--font-plex-mono), monospace"
        fontSize="9"
        fill="var(--ink-soft)"
      >
        2 km
      </text>
    </svg>
  );
}
