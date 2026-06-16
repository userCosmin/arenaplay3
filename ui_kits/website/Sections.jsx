// Arena Play — pricing strip (program & tarife) + final CTA band
const { PriceCard: PSPrice, SectionHeading: PSHeading, Button: PSBtn, Badge: PSBadge } = window.ArenaPlayDesignSystem_492f49;

function PricingStrip({ onNav }) {
  const sessions = [
    { title: 'PlayStation', icon: 'gamepad-2' },
    { title: 'VR static', icon: 'glasses' },
    { title: 'VR dinamic · XR', icon: 'orbit' },
    { title: 'Simulator racing', icon: 'car' },
    { title: 'Simulator zbor', icon: 'plane' },
  ];
  return (
    <section style={{ paddingBlock: 'var(--ap-section-y)', background: 'var(--ap-gradient-void)' }}>
      <Container>
        <Reveal><PSHeading eyebrow="Program & tarife" title="O sesiune, orice lume"
          lead="Sesiuni de 30 de minute (20 min joc + 10 min igienizare). Vineri 16:30–21:30 · Sâmbătă–Duminică 11:30–21:30 · Luni–Joi închis." /></Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14, marginTop: 40 }}>
          {sessions.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div style={{ background: 'var(--ap-surface-1)', border: '1px solid var(--ap-border)', borderRadius: 'var(--ap-radius-lg)', padding: 'var(--ap-space-5)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, height: '100%' }}>
                <span style={{ color: 'var(--ap-primary)' }}><Icon name={s.icon} size={28} /></span>
                <span style={{ fontFamily: 'var(--ap-font-display)', fontWeight: 600, fontSize: 15 }}>{s.title}</span>
                <span style={{ fontFamily: 'var(--ap-font-display)', fontWeight: 700, fontSize: 30, color: 'var(--ap-accent)', lineHeight: 1 }}>30<span style={{ fontFamily: 'var(--ap-font-mono)', fontSize: 12, color: 'var(--ap-text-secondary)', marginLeft: 4 }}>lei</span></span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCTA({ onNav }) {
  return (
    <section style={{ paddingBlock: 'var(--ap-section-y)' }}>
      <Container>
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--ap-radius-xl)', border: '1px solid var(--ap-border-secondary)', background: 'var(--ap-gradient-violet)', padding: 'clamp(2.5rem, 6vw, 5rem)', textAlign: 'center' }}>
          <Orb color="var(--ap-primary)" size={420} style={{ top: -160, left: '40%' }} />
          <div style={{ position: 'relative' }}>
            <h2 style={{ fontFamily: 'var(--ap-font-display)', fontSize: 'var(--ap-text-h1)', fontWeight: 700, letterSpacing: '-.02em', marginBottom: 14 }}>Gata pentru următorul nivel?</h2>
            <p style={{ fontSize: 'var(--ap-text-lg)', color: 'rgba(255,255,255,.82)', maxWidth: '48ch', margin: '0 auto 28px' }}>Rezervă o sesiune, o petrecere sau un team building. 16 persoane se pot juca simultan.</p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <PSBtn variant="primary" size="lg" iconRight={<Icon name="calendar" size={18} />} onClick={() => onNav('book')}>Rezervă acum</PSBtn>
              <PSBtn variant="ghost" size="lg" style={{ color: '#fff', border: '1px solid rgba(255,255,255,.3)' }} iconLeft={<Icon name="message-circle" size={18} />} as="a" href="https://wa.me/40768491858" target="_blank">WhatsApp</PSBtn>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
window.PricingStrip = PricingStrip;
window.FinalCTA = FinalCTA;
