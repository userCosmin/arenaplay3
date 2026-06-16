import React from 'react';

/**
 * Arena Play — StatCounter
 * Animated count-up stat readout. Mono value in a brand color + label.
 * Counts up once when scrolled into view.
 */
export function StatCounter({ value = 0, suffix = '', prefix = '', label, tone = 'primary', duration = 1400, style, ...props }) {
  const [display, setDisplay] = React.useState(0);
  const ref = React.useRef(null);
  const started = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(Math.round(eased * value));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  const color = {
    primary: 'var(--ap-primary)',
    secondary: 'var(--ap-secondary-300)',
    accent: 'var(--ap-accent)',
    white: 'var(--ap-text-primary)',
  }[tone];

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', ...style }} {...props}>
      <span style={{
        fontFamily: 'var(--ap-font-display)',
        fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: '-0.02em',
        color,
      }}>{prefix}{display.toLocaleString('ro-RO')}{suffix}</span>
      <span style={{
        fontFamily: 'var(--ap-font-mono)',
        fontSize: 'var(--ap-text-xs)',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--ap-text-secondary)',
      }}>{label}</span>
    </div>
  );
}
