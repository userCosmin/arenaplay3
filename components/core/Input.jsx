import React from 'react';

/**
 * Arena Play — Input
 * Dark form field. Supports label, icon, error. Focus = cyan ring + glow.
 * Use type="textarea" to render a multiline field.
 */
export function Input({ label, icon, error, hint, type = 'text', id, style, ...props }) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || `ap-${Math.random().toString(36).slice(2, 8)}`;
  const isArea = type === 'textarea';
  const Field = isArea ? 'textarea' : 'input';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{
          fontFamily: 'var(--ap-font-mono)', fontSize: 'var(--ap-text-xs)',
          letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ap-text-secondary)',
        }}>{label}</label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: isArea ? 'flex-start' : 'center' }}>
        {icon && (
          <span style={{ position: 'absolute', left: '0.85rem', top: isArea ? '0.85rem' : '50%', transform: isArea ? 'none' : 'translateY(-50%)', color: focus ? 'var(--ap-primary)' : 'var(--ap-text-tertiary)', display: 'inline-flex', pointerEvents: 'none' }}>{icon}</span>
        )}
        <Field
          id={fieldId}
          type={isArea ? undefined : type}
          rows={isArea ? 4 : undefined}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            width: '100%',
            fontFamily: 'var(--ap-font-body)',
            fontSize: 'var(--ap-text-body)',
            color: 'var(--ap-text-primary)',
            background: 'var(--ap-surface-3)',
            border: `1px solid ${error ? 'var(--ap-danger)' : (focus ? 'var(--ap-primary)' : 'var(--ap-border-strong)')}`,
            borderRadius: 'var(--ap-radius-md)',
            padding: icon ? '0.8rem 1rem 0.8rem 2.6rem' : '0.8rem 1rem',
            outline: 'none',
            resize: isArea ? 'vertical' : undefined,
            boxShadow: focus ? '0 0 0 3px rgba(0,229,255,0.18)' : 'none',
            transition: 'border-color var(--ap-dur) var(--ap-ease-out), box-shadow var(--ap-dur) var(--ap-ease-out)',
            boxSizing: 'border-box',
          }}
          {...props}
        />
      </div>
      {(error || hint) && (
        <span style={{ fontSize: 'var(--ap-text-xs)', color: error ? 'var(--ap-danger)' : 'var(--ap-text-tertiary)' }}>{error || hint}</span>
      )}
    </div>
  );
}
