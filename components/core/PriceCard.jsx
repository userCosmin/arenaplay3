import React from 'react';
import { Button } from './Button.jsx';
import { Badge } from './Badge.jsx';

/**
 * Arena Play — PriceCard
 * Pricing tile for sessions (30 lei) and packages (100 lei/pers).
 * `featured` gives it the violet glow + ribbon; `features` lists inclusions.
 */
export function PriceCard({
  title, price, unit = 'lei', per, period, features = [],
  cta = 'Rezervă', onCta, featured = false, badge, icon, style, ...props
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--ap-space-4)',
        background: featured ? 'var(--ap-surface-2)' : 'var(--ap-surface-1)',
        border: featured ? '1px solid var(--ap-border-secondary)' : `1px solid ${hover ? 'var(--ap-border-primary)' : 'var(--ap-border)'}`,
        borderRadius: 'var(--ap-radius-xl)',
        padding: 'var(--ap-space-6)',
        boxShadow: featured ? 'var(--ap-glow-secondary-md), var(--ap-inset-top)' : (hover ? 'var(--ap-glow-primary-sm)' : 'var(--ap-inset-top)'),
        transform: hover && !featured ? 'translateY(-3px)' : 'none',
        transition: 'transform var(--ap-dur) var(--ap-ease-out), box-shadow var(--ap-dur) var(--ap-ease-out)',
        ...style,
      }}
      {...props}
    >
      {badge && (
        <span style={{ position: 'absolute', top: 'var(--ap-space-5)', right: 'var(--ap-space-5)' }}>
          <Badge tone={featured ? 'secondary' : 'accent'} solid={featured}>{badge}</Badge>
        </span>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        {icon && <span style={{ color: 'var(--ap-primary)', display: 'inline-flex' }}>{icon}</span>}
        <h3 style={{ fontFamily: 'var(--ap-font-display)', fontSize: 'var(--ap-text-h4)', fontWeight: 600 }}>{title}</h3>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
        <span style={{ fontFamily: 'var(--ap-font-display)', fontSize: '2.75rem', fontWeight: 700, lineHeight: 1, color: featured ? 'var(--ap-secondary-300)' : 'var(--ap-accent)' }}>{price}</span>
        <span style={{ fontFamily: 'var(--ap-font-mono)', fontSize: '0.8125rem', color: 'var(--ap-text-secondary)' }}>{unit}{per ? ` / ${per}` : ''}</span>
      </div>
      {period && <p style={{ fontSize: 'var(--ap-text-sm)', color: 'var(--ap-text-tertiary)', marginTop: '-0.5rem' }}>{period}</p>}
      {features.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {features.map((f, i) => (
            <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontSize: 'var(--ap-text-sm)', color: 'var(--ap-text-secondary)', lineHeight: 1.5 }}>
              <span style={{ color: 'var(--ap-accent)', flex: 'none', marginTop: '0.05rem' }}>✓</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}
      <Button variant={featured ? 'secondary' : 'primary'} fullWidth onClick={onCta} style={{ marginTop: 'auto' }}>{cta}</Button>
    </div>
  );
}
