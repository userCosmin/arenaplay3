import React from 'react';

/**
 * Arena Play — Card
 * The standard dark glass panel. Hover lifts surface + cyan hairline + glow.
 * Use `glow` to feature a card permanently; `as="a"` for clickable cards.
 */
export function Card({ children, glow = 'none', interactive = true, padded = true, as = 'div', style, ...props }) {
  const [hover, setHover] = React.useState(false);
  const lift = interactive && hover;

  const glowShadow = {
    none: lift ? 'var(--ap-glow-primary-sm), var(--ap-inset-top)' : 'var(--ap-inset-top)',
    primary: 'var(--ap-glow-primary-md), var(--ap-inset-top)',
    secondary: 'var(--ap-glow-secondary-md), var(--ap-inset-top)',
    accent: 'var(--ap-glow-accent-md), var(--ap-inset-top)',
  }[glow];

  const border = glow !== 'none'
    ? `1px solid var(--ap-border-${glow === 'secondary' ? 'secondary' : 'primary'})`
    : `1px solid ${lift ? 'var(--ap-border-primary)' : 'var(--ap-border)'}`;

  const Tag = as;
  return (
    <Tag
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: lift ? 'var(--ap-surface-2)' : 'var(--ap-surface-1)',
        border,
        borderRadius: 'var(--ap-radius-lg)',
        boxShadow: glowShadow,
        padding: padded ? 'var(--ap-space-5)' : 0,
        transform: lift ? 'translateY(-3px)' : 'none',
        transition: 'transform var(--ap-dur) var(--ap-ease-out), box-shadow var(--ap-dur) var(--ap-ease-out), background var(--ap-dur) var(--ap-ease-out), border-color var(--ap-dur) var(--ap-ease-out)',
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
