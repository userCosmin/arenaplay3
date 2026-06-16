// Arena Play — Hero + animated stat strip
const { Button: HBtn, Badge: HBadge, StatCounter } = window.ArenaPlayDesignSystem_492f49;

function Hero({ onNav }) {
  const { IMG } = window.APData;
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--ap-gradient-void)' }}>
      <Orb color="var(--ap-primary)" size={520} style={{ top: -120, left: -100 }} />
      <Orb color="var(--ap-secondary)" size={560} style={{ top: 40, right: -160 }} />
      <Container style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 48, alignItems: 'center', paddingBlock: 'clamp(3rem, 7vw, 6rem)' }}>
        <div>
          <Reveal>
            <HBadge tone="primary">Next level party · Alba Iulia</HBadge>
          </Reveal>
          <Reveal delay={80}>
            <h1 style={{ fontFamily: 'var(--ap-font-display)', fontSize: 'var(--ap-text-display)', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-.02em', margin: '18px 0 0' }}>
              Intră în viitorul<br />
              <span style={{ background: 'var(--ap-gradient-aurora)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>distracției</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontSize: 'var(--ap-text-lg)', color: 'var(--ap-text-secondary)', lineHeight: 1.7, maxWidth: '46ch', marginTop: 20 }}>
              Arena VR dinamică, wireless și fără limite. Trăiește acțiunea cu tot corpul — nu doar cu privirea — în cea mai modernă destinație de divertisment din Alba Iulia.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div style={{ display: 'flex', gap: 14, marginTop: 30, flexWrap: 'wrap' }}>
              <HBtn variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />} onClick={() => onNav('book')}>Rezervă acum</HBtn>
              <HBtn variant="outline" size="lg" iconLeft={<Icon name="gamepad-2" size={18} />} onClick={() => onNav('games')}>Vezi jocurile</HBtn>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div style={{ position: 'relative', borderRadius: 'var(--ap-radius-xl)', overflow: 'hidden', border: '1px solid var(--ap-border-primary)', boxShadow: 'var(--ap-glow-primary-md)', aspectRatio: '4/3' }}>
            <img src={IMG.interior} alt="Arena Play interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(0,229,255,.08), rgba(123,46,255,.18))' }} />
            <button onClick={() => onNav('games')} style={{
              position: 'absolute', left: 20, bottom: 20, display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '10px 16px 10px 12px', borderRadius: 'var(--ap-radius-pill)', cursor: 'pointer',
              background: 'var(--ap-glass)', backdropFilter: 'blur(12px)', border: '1px solid var(--ap-glass-border)', color: '#fff',
            }}>
              <span style={{ display: 'inline-flex', width: 34, height: 34, borderRadius: '50%', background: 'var(--ap-primary)', color: 'var(--ap-text-on-bright)', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="play" size={16} />
              </span>
              <span style={{ fontFamily: 'var(--ap-font-mono)', fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase' }}>Tur virtual</span>
            </button>
          </div>
        </Reveal>
      </Container>
      <Container style={{ position: 'relative', paddingBottom: 'clamp(2.5rem,5vw,4rem)' }}>
        <div style={{ display: 'flex', gap: 'clamp(28px,6vw,72px)', flexWrap: 'wrap', borderTop: '1px solid var(--ap-border)', paddingTop: 32 }}>
          <StatCounter value={16} label="Jucători simultan" tone="accent" />
          <StatCounter value={50} suffix="+" label="Jocuri & experiențe" />
          <StatCounter value={6} label="Tipuri de experiențe" tone="secondary" />
          <StatCounter value={2024} label="Echipamente gen. nouă" tone="white" />
        </div>
      </Container>
    </section>
  );
}
window.Hero = Hero;
