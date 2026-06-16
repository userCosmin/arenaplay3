import React from 'react';
import { Badge } from './Badge.jsx';

/**
 * Arena Play — GameCard
 * Catalog tile for a VR/PlayStation/simulator title. Full-bleed image with
 * dark scrim, category + multiplayer/age badges, hover zoom + glow.
 */
export function GameCard({
  title, category, image, players, age, multiplayer = false,
  description, onClick, style, ...props
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{
        position: 'relative',
        borderRadius: 'var(--ap-radius-lg)',
        overflow: 'hidden',
        border: `1px solid ${hover ? 'var(--ap-border-primary)' : 'var(--ap-border)'}`,
        background: 'var(--ap-surface-1)',
        cursor: onClick ? 'pointer' : 'default',
        boxShadow: hover ? 'var(--ap-glow-primary-sm)' : 'none',
        transform: hover ? 'translateY(-3px)' : 'none',
        transition: 'transform var(--ap-dur) var(--ap-ease-out), box-shadow var(--ap-dur) var(--ap-ease-out), border-color var(--ap-dur) var(--ap-ease-out)',
        ...style,
      }}
      {...props}
    >
      <div style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: hover ? 'scale(1.06)' : 'scale(1)',
          transition: 'transform var(--ap-dur-slow) var(--ap-ease-out)',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(5,8,22,0) 30%, rgba(5,8,22,0.92) 100%)' }} />
        <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          <Badge tone="primary" size="sm">{category}</Badge>
          {multiplayer && <Badge tone="accent" size="sm">Multiplayer</Badge>}
        </div>
        {age && (
          <span style={{ position: 'absolute', top: '0.75rem', right: '0.75rem' }}>
            <Badge tone="neutral" size="sm">{age}</Badge>
          </span>
        )}
      </div>
      <div style={{ padding: 'var(--ap-space-4)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h3 style={{ fontFamily: 'var(--ap-font-display)', fontSize: 'var(--ap-text-h4)', fontWeight: 600, lineHeight: 1.2 }}>{title}</h3>
        {description && (
          <p style={{ fontSize: 'var(--ap-text-sm)', color: 'var(--ap-text-secondary)', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{description}</p>
        )}
        {players && (
          <span style={{ fontFamily: 'var(--ap-font-mono)', fontSize: 'var(--ap-text-xs)', letterSpacing: '0.08em', color: 'var(--ap-text-tertiary)', textTransform: 'uppercase' }}>{players}</span>
        )}
      </div>
    </article>
  );
}
