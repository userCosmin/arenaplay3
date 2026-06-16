// Arena Play — Arena Edu / After School XR screen
const { SectionHeading: EHeading, Card: ECard, Button: EBtn, Badge: EBadge } = window.ArenaPlayDesignSystem_492f49;

function EduScreen({ onNav }) {
  const { IMG } = window.APData;
  const benefits = [
    { icon: 'brain', t: 'Atenție & concentrare', d: 'Imersiunea elimină distragerile — copiii rămân în lecție.' },
    { icon: 'sparkles', t: 'Învățare prin experiență', d: 'Nu doar citesc despre concepte — le trăiesc direct.' },
    { icon: 'lightbulb', t: 'Gândire critică & creativitate', d: 'Rezolvă, explorează, întreabă — activ, nu pasiv.' },
    { icon: 'users', t: 'Spirit de echipă', d: 'Activități de grup sincronizate, ghidate de profesor.' },
    { icon: 'cpu', t: 'Competențe digitale', d: 'Familiaritate naturală cu tehnologia de mâine.' },
    { icon: 'heart', t: 'Motivație pentru școală', d: 'Învățare memorabilă care aprinde curiozitatea.' },
  ];
  const trips = ['Sistemul Solar în VR', 'Explorarea corpului uman', 'Oceanele lumii', 'Civilizații antice', 'Lumea animalelor sălbatice', 'Minunile create de om', 'Simulări științifice STEM', 'Simulator de zbor educațional'];
  const steps = ['Sosirea grupului', 'Introducere & instruire', 'Activități educaționale VR', 'Experiențe interactive de grup', 'Întrebări & concluzii'];
  return (
    <div>
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--ap-gradient-void)', paddingBlock: 'clamp(3rem,7vw,5.5rem)' }}>
        <Orb color="var(--ap-accent)" size={480} style={{ top: -100, left: -120 }} />
        <Orb color="var(--ap-primary)" size={460} style={{ bottom: -200, right: -120 }} />
        <Container style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44, alignItems: 'center' }}>
          <div>
            <EBadge tone="accent">Arena Edu · After School XR</EBadge>
            <h1 style={{ fontFamily: 'var(--ap-font-display)', fontSize: 'var(--ap-text-h1)', fontWeight: 700, letterSpacing: '-.02em', margin: '16px 0' }}>Transformăm învățarea într-o aventură</h1>
            <p style={{ fontSize: 'var(--ap-text-lg)', color: 'var(--ap-text-secondary)', lineHeight: 1.7, maxWidth: '46ch' }}>
              Prin tehnologia VR și XR, copiii nu doar învață — experimentează direct conceptele. Profesorul teleportează întreaga clasă, sincron, printre canioane uriașe, orașe legendare și vulcani activi.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
              <EBtn variant="accent" size="lg" onClick={() => onNav('book')}>Solicită ofertă After School</EBtn>
              <EBtn variant="outline" size="lg" as="a" href="https://wa.me/40768491858" target="_blank">Programează o vizită</EBtn>
            </div>
          </div>
          <div style={{ borderRadius: 'var(--ap-radius-xl)', overflow: 'hidden', border: '1px solid var(--ap-border-primary)', boxShadow: 'var(--ap-glow-accent-md)', aspectRatio: '4/3' }}>
            <img src={IMG.edu} alt="Edu XR" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </Container>
      </section>

      <section style={{ paddingBlock: 'var(--ap-section-y)' }}>
        <Container>
          <Reveal><EHeading eyebrow="Beneficii pentru copii" title="Mai mult decât un ecran" align="center"
            lead="Mai puțin timp pasiv în fața ecranelor. Mai multă explorare, învățare și experiențe memorabile." /></Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, marginTop: 44 }}>
            {benefits.map((b, i) => (
              <Reveal key={b.t} delay={(i % 3) * 70}>
                <ECard style={{ height: '100%' }}>
                  <span style={{ color: 'var(--ap-accent)' }}><Icon name={b.icon} size={26} /></span>
                  <h3 style={{ fontFamily: 'var(--ap-font-display)', fontWeight: 600, fontSize: 'var(--ap-text-h4)', margin: '12px 0 8px' }}>{b.t}</h3>
                  <p style={{ fontSize: 'var(--ap-text-sm)', color: 'var(--ap-text-secondary)', lineHeight: 1.6 }}>{b.d}</p>
                </ECard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section style={{ paddingBlock: 'var(--ap-section-y)', background: 'var(--ap-gradient-void)' }}>
        <Container style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div>
            <EHeading eyebrow="Excursii virtuale" title="Unde mergem azi?" />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 24 }}>
              {trips.map((t) => (
                <span key={t} style={{ padding: '10px 16px', borderRadius: 'var(--ap-radius-pill)', background: 'var(--ap-surface-1)', border: '1px solid var(--ap-border)', fontSize: 13.5, color: 'var(--ap-text-secondary)' }}>{t}</span>
              ))}
            </div>
          </div>
          <div>
            <EHeading eyebrow="Cum se desfășoară" title="O sesiune, pas cu pas" />
            <ol style={{ listStyle: 'none', padding: 0, margin: '24px 0 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {steps.map((s, i) => (
                <li key={s} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <span style={{ flex: 'none', width: 34, height: 34, borderRadius: '50%', background: 'rgba(0,229,255,.12)', border: '1px solid var(--ap-border-primary)', color: 'var(--ap-primary)', fontFamily: 'var(--ap-font-mono)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>{i + 1}</span>
                  <span style={{ fontSize: 15, color: 'var(--ap-text-primary)' }}>{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section style={{ paddingBlock: 'var(--ap-section-y)' }}>
        <Container>
          <ECard glow="accent" interactive={false} style={{ textAlign: 'center', padding: 'clamp(2rem,5vw,3.5rem)' }}>
            <EBadge tone="accent">Pentru școli & centre after school</EBadge>
            <h2 style={{ fontFamily: 'var(--ap-font-display)', fontSize: 'var(--ap-text-h2)', fontWeight: 700, margin: '16px 0 12px' }}>Partener pentru Școala Altfel & Școala Verde</h2>
            <p style={{ fontSize: 'var(--ap-text-lg)', color: 'var(--ap-text-secondary)', maxWidth: '54ch', margin: '0 auto 24px' }}>Grupuri organizate, conținut adaptat vârstei, siguranță și supraveghere permanentă. Activitate educațională inovatoare, complet diferită de cea clasică.</p>
            <EBtn variant="accent" size="lg" onClick={() => onNav('book')}>Solicită prezentare pentru școala ta</EBtn>
          </ECard>
        </Container>
      </section>
    </div>
  );
}
window.EduScreen = EduScreen;
