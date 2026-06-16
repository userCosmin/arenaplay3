// Arena Play — Footer + floating WhatsApp button
function Footer({ onNav }) {
  const { IMG } = window.APData;
  return (
    <footer style={{ borderTop: '1px solid var(--ap-border)', background: 'var(--ap-surface-1)', paddingTop: 'var(--ap-space-8)', paddingBottom: 'var(--ap-space-6)' }}>
      <Container style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 32 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <img src={IMG.logo} alt="Arena Play" style={{ height: 32 }} />
            <span style={{ fontFamily: 'var(--ap-font-display)', fontWeight: 700, letterSpacing: '.06em' }}>ARENA PLAY</span>
          </div>
          <p style={{ fontSize: 13.5, color: 'var(--ap-text-secondary)', lineHeight: 1.6, maxWidth: '34ch' }}>Intră în lumea realității virtuale la Arena Play Club. Jocuri, adrenalină și distracție pentru toate vârstele.</p>
          <p style={{ fontFamily: 'var(--ap-font-mono)', fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ap-primary)', marginTop: 16 }}>Join the game</p>
        </div>
        <div>
          <h4 style={{ fontFamily: 'var(--ap-font-mono)', fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ap-text-tertiary)', marginBottom: 14 }}>Navigare</h4>
          {[['games', 'Jocurile noastre'], ['party', 'Petreceri'], ['edu', 'Arena Edu'], ['book', 'Rezervare']].map(([id, l]) => (
            <a key={id} onClick={() => onNav(id)} style={{ display: 'block', padding: '5px 0', color: 'var(--ap-text-secondary)', fontSize: 14, cursor: 'pointer' }}>{l}</a>
          ))}
        </div>
        <div>
          <h4 style={{ fontFamily: 'var(--ap-font-mono)', fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ap-text-tertiary)', marginBottom: 14 }}>Program</h4>
          {['Luni – Joi: închis', 'Vineri: 16:30 – 21:30', 'Sâmbătă – Duminică: 11:30 – 21:30'].map((t) => (
            <p key={t} style={{ padding: '5px 0', color: 'var(--ap-text-secondary)', fontSize: 14 }}>{t}</p>
          ))}
        </div>
        <div>
          <h4 style={{ fontFamily: 'var(--ap-font-mono)', fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ap-text-tertiary)', marginBottom: 14 }}>Contact</h4>
          <a href="tel:+40768491858" style={{ display: 'flex', gap: 8, alignItems: 'center', padding: '5px 0', color: 'var(--ap-text-secondary)', fontSize: 14 }}><span style={{ color: 'var(--ap-primary)' }}><Icon name="phone" size={16} /></span>076 849 1858</a>
          <a href="mailto:arenaplayalbaiulia@gmail.com" style={{ display: 'flex', gap: 8, alignItems: 'center', padding: '5px 0', color: 'var(--ap-text-secondary)', fontSize: 14 }}><span style={{ color: 'var(--ap-primary)' }}><Icon name="mail" size={16} /></span>Email</a>
          <a href="#" style={{ display: 'flex', gap: 8, alignItems: 'flex-start', padding: '5px 0', color: 'var(--ap-text-secondary)', fontSize: 14 }}><span style={{ color: 'var(--ap-primary)' }}><Icon name="map-pin" size={16} /></span>Str. T. Vladimirescu 50A,<br />Alba Mall, Alba Iulia</a>
          <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
            {['instagram', 'facebook'].map((s) => (
              <a key={s} href="https://www.facebook.com/people/Arena-Play-Club-Alba-Iulia/61582612882075/" target="_blank" style={{ width: 38, height: 38, borderRadius: 'var(--ap-radius-md)', border: '1px solid var(--ap-border)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ap-text-secondary)' }}><Icon name={s} size={18} /></a>
            ))}
          </div>
        </div>
      </Container>
      <Container style={{ borderTop: '1px solid var(--ap-border)', marginTop: 32, paddingTop: 20, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontSize: 12.5, color: 'var(--ap-text-tertiary)' }}>© {new Date().getFullYear()} Arena Play Club · Alba Iulia. Toate drepturile rezervate.</span>
        <span style={{ fontSize: 12.5, color: 'var(--ap-text-tertiary)' }}>ANPC · SOL / SAL</span>
      </Container>
    </footer>
  );
}

function WhatsAppButton() {
  const [hover, setHover] = useState(false);
  return (
    <a href="https://wa.me/40768491858?text=Bun%C4%83!%20Doresc%20informa%C8%9Bii%20despre%20rezerv%C4%83rile%20Arena%20Play."
      target="_blank" rel="noopener"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ position: 'fixed', right: 24, bottom: 24, zIndex: 80, display: 'inline-flex', alignItems: 'center', gap: 10,
        padding: hover ? '14px 20px 14px 16px' : 14, borderRadius: 'var(--ap-radius-pill)',
        background: '#25D366', color: '#063d1c', fontFamily: 'var(--ap-font-display)', fontWeight: 700, fontSize: 14,
        boxShadow: '0 0 0 1px rgba(37,211,102,.5), 0 8px 30px rgba(37,211,102,.4)', transition: 'all .25s var(--ap-ease-out)', textDecoration: 'none' }}>
      <Icon name="message-circle" size={26} color="#063d1c" />
      {hover && <span style={{ whiteSpace: 'nowrap' }}>Scrie-ne</span>}
    </a>
  );
}
window.Footer = Footer;
window.WhatsAppButton = WhatsAppButton;
