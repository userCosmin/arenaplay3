import React from 'react';

/**
 * Arena Play — SectionHeading
 * Eyebrow + title (+ optional lead). The canonical section opener.
 * align center or left; title can carry a gradient run.
 */
export function SectionHeading({ eyebrow, title, lead, align = 'left', gradient = false, style, ...props }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--ap-space-3)',
        textAlign: align,
        alignItems: align === 'center' ? 'center' : 'flex-start',
        maxWidth: lead ? '52ch' : undefined,
        marginInline: align === 'center' ? 'auto' : undefined,
        ...style,
      }}
      {...props}
    >
      {eyebrow && (
        <span style={{
          fontFamily: 'var(--ap-font-mono)',
          fontSize: 'var(--ap-text-eyebrow)',
          letterSpacing: 'var(--ap-ls-eyebrow)',
          textTransform: 'uppercase',
          color: 'var(--ap-primary)',
        }}>{eyebrow}</span>
      )}
      <h2 style={{
        fontFamily: 'var(--ap-font-display)',
        fontSize: 'var(--ap-text-h2)',
        fontWeight: 700,
        letterSpacing: 'var(--ap-ls-tight)',
        lineHeight: 'var(--ap-lh-snug)',
        margin: 0,
        ...(gradient ? {
          background: 'var(--ap-gradient-brand)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        } : { color: 'var(--ap-text-primary)' }),
      }}>{title}</h2>
      {lead && (
        <p style={{
          fontSize: 'var(--ap-text-lg)',
          lineHeight: 'var(--ap-lh-relaxed)',
          color: 'var(--ap-text-secondary)',
          margin: 0,
        }}>{lead}</p>
      )}
    </div>
  );
}
