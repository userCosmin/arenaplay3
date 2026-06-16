// Arena Play — Games catalog screen with category filters
const { GameCard, Badge: GBadge, SectionHeading: GHeading } = window.ArenaPlayDesignSystem_492f49;

function GamesScreen() {
  const { GAMES, FILTERS } = window.APData;
  const [filter, setFilter] = useState('all');
  const list = filter === 'all' ? GAMES : GAMES.filter((g) => g.cat === filter);
  return (
    <section style={{ paddingBlock: 'var(--ap-section-y)', minHeight: '70vh' }}>
      <Container>
        <GHeading eyebrow="Jocurile noastre" title="Alege-ți aventura"
          lead="Peste 50 de titluri și experiențe — de la free-roam la simulatoare. Filtrează după platformă." />
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 32, marginBottom: 36 }}>
          {FILTERS.map((f) => {
            const active = filter === f.id;
            return (
              <button key={f.id} onClick={() => setFilter(f.id)} style={{
                padding: '8px 18px', borderRadius: 'var(--ap-radius-pill)', cursor: 'pointer',
                fontFamily: 'var(--ap-font-mono)', fontSize: 12, letterSpacing: '.06em', textTransform: 'uppercase',
                background: active ? 'var(--ap-primary)' : 'transparent',
                color: active ? 'var(--ap-text-on-bright)' : 'var(--ap-text-secondary)',
                border: `1px solid ${active ? 'transparent' : 'var(--ap-border-strong)'}`,
                boxShadow: active ? 'var(--ap-glow-primary-sm)' : 'none',
                transition: 'all .2s var(--ap-ease-out)',
              }}>{f.label}</button>
            );
          })}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {list.map((g, i) => (
            <Reveal key={g.title + i} delay={(i % 4) * 60}>
              <GameCard {...g} onClick={() => {}} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
window.GamesScreen = GamesScreen;
