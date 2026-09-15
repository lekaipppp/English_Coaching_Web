const BAR_HEIGHTS = [28, 52, 20, 68, 40, 84, 30, 58, 22, 46, 66, 34];
const BAR_COLORS = [
  "var(--amber)",
  "var(--teal)",
  "var(--coral)",
  "var(--ink-soft)",
];

export default function VoiceBars({ className }: { className?: string }) {
  const barWidth = 14;
  const gap = 10;
  const height = 100;
  const width = BAR_HEIGHTS.length * (barWidth + gap) - gap;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="Abstract sound waveform in the Crosswire accent colors"
      className={className}
    >
      {BAR_HEIGHTS.map((h, i) => {
        const x = i * (barWidth + gap);
        const y = (height - h) / 2;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={barWidth}
            height={h}
            rx={barWidth / 2}
            fill={BAR_COLORS[i % BAR_COLORS.length]}
            opacity={0.9}
          />
        );
      })}
    </svg>
  );
}
