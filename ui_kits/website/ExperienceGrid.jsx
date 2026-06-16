// Arena Play — experience categories grid
const { Card: ExCard, SectionHeading: ExHeading } = window.ArenaPlayDesignSystem_492f49;

function ExperienceGrid() {
  const { EXPERIENCES } = window.APData;
  const toneColor = { primary: 'var(--ap-primary)', secondary: 'var(--ap-secondary-300)', accent: 'var(--ap-accent)' };
  return (
    <section style={{ paddingBlock: 'var(--ap-section-y)' }}>
      <Container>
        <Reveal><ExHeading eyebrow="Experiențe imersive" title="Șase moduri de a juca" align="center"
          lead="De la free-roam wireless la simulatoare cu cockpit dedicat — alege-ți portalul." /></Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginTop: 48 }}>
          {EXPERIENCES.map((e, i) => (
            <Reveal key={e.title} delay={i * 70}>
              <ExCard style={{ height: '100%' }}>
                <span style={{ display: 'inline-flex', width: 52, height: 52, borderRadius: 'var(--ap-radius-md)', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--ap-border)', color: toneColor[e.tone], marginBottom: 16 }}>
                  <Icon name={e.icon} size={26} />
                </span>
                <h3 style={{ fontFamily: 'var(--ap-font-display)', fontSize: 'var(--ap-text-h4)', fontWeight: 600, marginBottom: 8 }}>{e.title}</h3>
                <p style={{ fontSize: 'var(--ap-text-sm)', color: 'var(--ap-text-secondary)', lineHeight: 1.6 }}>{e.text}</p>
              </ExCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
window.ExperienceGrid = ExperienceGrid;
