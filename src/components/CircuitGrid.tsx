'use client';

/**
 * CircuitGrid
 * -------------------------------------------------------------------------
 * A low-opacity SVG grid of right-angle "traces". Each path has a dashed
 * stroke that animates via `stroke-dashoffset`, so light appears to travel
 * along the circuit lines. `active` speeds the animation up and raises
 * opacity/glow on hover.
 */

interface CircuitGridProps {
  active: boolean;
  color?: string; // hex, used for stroke + glow
}

// A handful of hand-placed right-angle paths so the grid reads as
// deliberate circuitry rather than a random scribble.
const PATHS = [
  'M 20 40 H 180 V 140 H 320',
  'M 40 220 H 140 V 320 H 260 V 260',
  'M 300 30 V 120 H 380 V 200',
  'M 60 380 H 220 V 300',
  'M 340 260 H 260 V 340 H 180',
  'M 100 100 V 60 H 260',
];

export default function CircuitGrid({ active, color = '#7B2CBF' }: CircuitGridProps) {
  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      width="100%"
      height="100%"
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      style={{ opacity: active ? 0.9 : 0.25, transition: 'opacity 0.6s ease' }}
    >
      <defs>
        <filter id="circuit-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation={active ? 2.5 : 0.5} result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* static faint base grid, always visible at very low opacity */}
      {PATHS.map((d, i) => (
        <path
          key={`base-${i}`}
          d={d}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={1}
        />
      ))}

      {/* animated glowing traces, only meaningfully visible on hover */}
      {PATHS.map((d, i) => (
        <path
          key={`trace-${i}`}
          d={d}
          fill="none"
          stroke={color}
          strokeWidth={1.4}
          strokeLinecap="round"
          strokeDasharray="12 220"
          filter="url(#circuit-glow)"
          style={{
            animation: `circuit-travel ${active ? 2.2 : 6}s linear infinite`,
            animationDelay: `${i * 0.35}s`,
          }}
        />
      ))}

      <style>{`
        @keyframes circuit-travel {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -600; }
        }
      `}</style>
    </svg>
  );
}
