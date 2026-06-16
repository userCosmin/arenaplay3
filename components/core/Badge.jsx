import React from 'react';

/**
 * Arena Play — Badge / Chip
 * Small status or tag pill. Use for game categories, "Multiplayer",
 * age ratings, availability. tone sets the color; solid fills it.
 */
export function Badge({ children, tone = 'primary', solid = false, size = 'md', style, ...props }) {
  const tones = {
    primary: { c: 'var(--ap-primary)', bg: 'rgba(0,229,255,0.12)', bd: 'rgba(0,229,255,0.4)' },
    secondary: { c: 'var(--ap-secondary-300)', bg: 'rgba(123,46,255,0.16)', bd: 'rgba(123,46,255,0.45)' },
    accent: { c: 'var(--ap-accent)', bg: 'rgba(0,255,148,0.12)', bd: 'rgba(0,255,148,0.4)' },
    neutral: { c: 'var(--ap-text-secondary)', bg: 'rgba(184,193,217,0.1)', bd: 'var(--ap-border-strong)' },
    warning: { c: 'var(--ap-warning)', bg: 'rgba(255,197,61,0.14)', bd: 'rgba(255,197,61,0.4)' },
  }[tone];

  const pad = size === 'sm' ? '0.2rem 0.55rem' : '0.32rem 0.75rem';
  const fs = size === 'sm' ? '0.6875rem' : '0.75rem';

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        padding: pad,
        fontFamily: 'var(--ap-font-mono)',
        fontSize: fs,
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        lineHeight: 1,
        borderRadius: 'var(--ap-radius-pill)',
        color: solid ? 'var(--ap-text-on-bright)' : tones.c,
        background: solid ? tones.c : tones.bg,
        border: `1px solid ${solid ? 'transparent' : tones.bd}`,
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
