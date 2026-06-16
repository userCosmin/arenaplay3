// Arena Play — sticky translucent top nav
const { Button: APButton } = window.ArenaPlayDesignSystem_492f49;

function Nav({ current, onNav }) {
  const { IMG } = window.APData;
  const links = [
    { id: 'home', label: 'Acasă' },
    { id: 'games', label: 'Jocuri' },
    { id: 'party', label: 'Petreceri' },
    { id: 'edu', label: 'Arena Edu' },
    { id: 'book', label: 'Rezervare' },
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'var(--ap-glass)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)',
      borderBottom: '1px solid var(--ap-glass-border)',
    }}>
      <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72, gap: 24 }}>
        <a onClick={() => onNav('home')} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', textDecoration: 'none' }}>
          <img src={IMG.logo} alt="Arena Play" style={{ height: 34, width: 'auto', filter: 'drop-shadow(0 0 10px rgba(0,229,255,.5))' }} />
          <span style={{ fontFamily: 'var(--ap-font-display)', fontWeight: 700, letterSpacing: '.06em', fontSize: 18, color: '#fff' }}>ARENA PLAY</span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {links.map((l) => (
            <a key={l.id} onClick={() => onNav(l.id)} style={{
              padding: '8px 14px', cursor: 'pointer', fontSize: 14, fontWeight: 500,
              fontFamily: 'var(--ap-font-body)', borderRadius: 'var(--ap-radius-pill)',
              color: current === l.id ? 'var(--ap-primary)' : 'var(--ap-text-secondary)',
              background: current === l.id ? 'rgba(0,229,255,0.1)' : 'transparent',
              transition: 'color .2s, background .2s',
            }}>{l.label}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <APButton variant="ghost" size="sm" onClick={() => onNav('home')}>Card fidelitate</APButton>
          <APButton variant="primary" size="sm" iconRight={<Icon name="arrow-right" size={16} />} onClick={() => onNav('book')}>Rezervă</APButton>
        </div>
      </Container>
    </header>
  );
}
window.Nav = Nav;
