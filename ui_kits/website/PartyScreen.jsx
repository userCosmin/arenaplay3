// Arena Play — Petreceri aniversare screen
const { PriceCard: PPrice, SectionHeading: PHeading, Card: PCard, Button: PBtn, Badge: PBadge } = window.ArenaPlayDesignSystem_492f49;

function PartyScreen({ onNav }) {
  const { IMG } = window.APData;
  const included = [
    { icon: 'clock', t: '3 ore acces exclusiv', d: '30 min pizza · 120 min joc · 30 min tort & ieșire' },
    { icon: 'users', t: '16 jucători simultan', d: 'Minim 10 persoane per eveniment' },
    { icon: 'mail', t: 'Invitație digitală', d: 'Una pentru fiecare invitat' },
    { icon: 'pizza', t: 'Pizza & băuturi', d: '1 pizza / 2 copii · apă la discreție · cafea adulți' },
  ];
  const audiences = [
    { icon: 'cake', t: 'Copii', d: 'Aventuri VR sigure, supravegheate, pe vârsta lor.' },
    { icon: 'gamepad-2', t: 'Adolescenți', d: 'Multiplayer competitiv și free-roam plin de adrenalină.' },
    { icon: 'party-popper', t: 'Adulți', d: 'Petreceri private, team nights și evenimente corporate.' },
  ];
  return (
    <div>
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--ap-gradient-void)', paddingBlock: 'clamp(3rem,7vw,5.5rem)' }}>
        <Orb color="var(--ap-secondary)" size={520} style={{ top: -120, right: -120 }} />
        <Container style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44, alignItems: 'center' }}>
          <div>
            <PBadge tone="secondary">Petreceri aniversare</PBadge>
            <h1 style={{ fontFamily: 'var(--ap-font-display)', fontSize: 'var(--ap-text-h1)', fontWeight: 700, letterSpacing: '-.02em', margin: '16px 0' }}>Petrecerea ta, în altă dimensiune</h1>
            <p style={{ fontSize: 'var(--ap-text-lg)', color: 'var(--ap-text-secondary)', lineHeight: 1.7, maxWidth: '46ch' }}>
              Arena Play este destinația ideală pentru evenimente de neuitat în realitatea virtuală. Acces exclusiv la toate echipamentele, într-un spațiu numai al vostru.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 28 }}>
              <PBtn variant="secondary" size="lg" onClick={() => onNav('book')}>Rezervă petrecere</PBtn>
              <PBtn variant="outline" size="lg" as="a" href="tel:+40768491858">076 849 1858</PBtn>
            </div>
          </div>
          <div style={{ borderRadius: 'var(--ap-radius-xl)', overflow: 'hidden', border: '1px solid var(--ap-border-secondary)', boxShadow: 'var(--ap-glow-secondary-md)', aspectRatio: '4/3' }}>
            <img src={IMG.gg2} alt="Petrecere VR" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </Container>
      </section>

      <section style={{ paddingBlock: 'var(--ap-section-y)' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
            {audiences.map((a, i) => (
              <Reveal key={a.t} delay={i * 70}>
                <PCard style={{ height: '100%' }}>
                  <span style={{ color: 'var(--ap-secondary-300)' }}><Icon name={a.icon} size={28} /></span>
                  <h3 style={{ fontFamily: 'var(--ap-font-display)', fontWeight: 600, fontSize: 'var(--ap-text-h4)', margin: '14px 0 8px' }}>{a.t}</h3>
                  <p style={{ fontSize: 'var(--ap-text-sm)', color: 'var(--ap-text-secondary)', lineHeight: 1.6 }}>{a.d}</p>
                </PCard>
              </Reveal>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 32, marginTop: 56, alignItems: 'center' }}>
            <div>
              <PHeading eyebrow="Ce include pachetul" title="Totul pregătit pentru voi" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginTop: 28 }}>
                {included.map((f) => (
                  <div key={f.t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ flex: 'none', width: 40, height: 40, borderRadius: 'var(--ap-radius-md)', background: 'rgba(0,255,148,.1)', color: 'var(--ap-accent)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={f.icon} size={20} /></span>
                    <div>
                      <div style={{ fontFamily: 'var(--ap-font-display)', fontWeight: 600, fontSize: 15 }}>{f.t}</div>
                      <div style={{ fontSize: 13, color: 'var(--ap-text-tertiary)', lineHeight: 1.5 }}>{f.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <PPrice title="Pachet eveniment" price={100} per="persoană" featured badge="Tot inclus"
              period="Minim 10 persoane · 16 se pot juca simultan"
              features={['3 ore acces exclusiv la toate echipamentele', 'Invitație digitală pentru fiecare invitat', 'Pizza (1 / 2 copii) · apă la discreție', 'Cafea pentru adulți', 'Discount Food Court Alba Mall']}
              cta="Rezervă petrecere" onCta={() => onNav('book')} />
          </div>
        </Container>
      </section>
    </div>
  );
}
window.PartyScreen = PartyScreen;
