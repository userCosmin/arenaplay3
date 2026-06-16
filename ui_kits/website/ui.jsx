// Arena Play UI kit — shared helpers (Icon via Lucide, layout primitives)
const { useState, useEffect, useRef } = React;

function Icon({ name, size = 22, color = 'currentColor', strokeWidth = 2, style }) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: { width: size, height: size, 'stroke-width': strokeWidth },
        nameAttr: 'data-lucide',
      });
    }
  }, [name, size, strokeWidth]);
  return <span ref={ref} style={{ display: 'inline-flex', color, lineHeight: 0, ...style }} />;
}

// Soft blurred color orb for hero/section backgrounds
function Orb({ color = 'var(--ap-primary)', size = 480, style }) {
  return (
    <div style={{
      position: 'absolute', width: size, height: size, borderRadius: '50%',
      background: color, filter: 'blur(120px)', opacity: 0.4, pointerEvents: 'none',
      ...style,
    }} />
  );
}

// Scroll/mount reveal wrapper (fade + rise)
function Reveal({ children, delay = 0, style }) {
  const [shown, setShown] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { setTimeout(() => setShown(true), delay); io.disconnect(); }
    }), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <div ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? 'translateY(0)' : 'translateY(24px)',
      transition: 'opacity .6s var(--ap-ease-out), transform .6s var(--ap-ease-out)',
      ...style,
    }}>{children}</div>
  );
}

const Container = ({ children, wide, style }) => (
  <div style={{ width: '100%', maxWidth: wide ? 'var(--ap-container-wide)' : 'var(--ap-container)', marginInline: 'auto', paddingInline: 'var(--ap-gutter)', ...style }}>{children}</div>
);

Object.assign(window, { Icon, Orb, Reveal, Container });
