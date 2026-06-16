import React from 'react';

/**
 * Arena Play — Button
 * Pill button with neon glow. Primary = cyan fill, secondary = violet,
 * accent = green, outline = glowing hairline, ghost = bare.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  as = 'button',
  style,
  ...props
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const sizes = {
    sm: { padding: '0.5rem 1rem', font: '0.8125rem', gap: '0.4rem' },
    md: { padding: '0.75rem 1.5rem', font: '0.9375rem', gap: '0.5rem' },
    lg: { padding: '1rem 2rem', font: '1.0625rem', gap: '0.6rem' },
  }[size];

  const fills = {
    primary: {
      background: hover ? 'var(--ap-primary-300)' : 'var(--ap-primary)',
      color: 'var(--ap-text-on-bright)',
      boxShadow: hover ? 'var(--ap-glow-primary-md)' : 'var(--ap-glow-primary-sm)',
      border: '1px solid transparent',
    },
    secondary: {
      background: hover ? 'var(--ap-secondary-300)' : 'var(--ap-secondary)',
      color: '#fff',
      boxShadow: hover ? 'var(--ap-glow-secondary-md)' : '0 0 0 1px rgba(123,46,255,.35)',
      border: '1px solid transparent',
    },
    accent: {
      background: hover ? 'var(--ap-accent-300)' : 'var(--ap-accent)',
      color: 'var(--ap-text-on-bright)',
      boxShadow: hover ? 'var(--ap-glow-accent-md)' : '0 0 0 1px rgba(0,255,148,.3)',
      border: '1px solid transparent',
    },
    outline: {
      background: hover ? 'rgba(0,229,255,0.08)' : 'transparent',
      color: 'var(--ap-primary)',
      boxShadow: hover ? 'var(--ap-glow-primary-sm)' : 'none',
      border: '1px solid var(--ap-border-primary)',
    },
    ghost: {
      background: hover ? 'rgba(184,193,217,0.08)' : 'transparent',
      color: 'var(--ap-text-primary)',
      boxShadow: 'none',
      border: '1px solid transparent',
    },
  }[variant];

  const Tag = as;
  return (
    <Tag
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      disabled={Tag === 'button' ? disabled : undefined}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : undefined,
        alignItems: 'center',
        justifyContent: 'center',
        gap: sizes.gap,
        padding: sizes.padding,
        fontFamily: 'var(--ap-font-display)',
        fontSize: sizes.font,
        fontWeight: 600,
        letterSpacing: '0.01em',
        borderRadius: 'var(--ap-radius-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transform: active && !disabled ? 'scale(0.97)' : 'scale(1)',
        transition: 'transform var(--ap-dur-fast) var(--ap-ease-out), box-shadow var(--ap-dur) var(--ap-ease-out), background var(--ap-dur) var(--ap-ease-out)',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        ...fills,
        ...style,
      }}
      {...props}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
