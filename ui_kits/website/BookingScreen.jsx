// Arena Play — Rezervare (booking) screen with form
const { Input, Button: BBtn, SectionHeading: BHeading, Card: BCard, Badge: BBadge } = window.ArenaPlayDesignSystem_492f49;

function BookingScreen() {
  const { EXPERIENCES } = window.APData;
  const [exp, setExp] = useState('VR Dinamic · Free-Roam');
  const [people, setPeople] = useState(4);
  const [sent, setSent] = useState(false);
  const options = EXPERIENCES.map((e) => e.title);

  if (sent) {
    return (
      <section style={{ paddingBlock: 'var(--ap-section-y)', minHeight: '70vh', display: 'grid', placeItems: 'center' }}>
        <BCard glow="accent" interactive={false} style={{ textAlign: 'center', maxWidth: 460, padding: 'var(--ap-space-7)' }}>
          <span style={{ color: 'var(--ap-accent)', display: 'inline-flex' }}><Icon name="check-circle-2" size={48} /></span>
          <h2 style={{ fontFamily: 'var(--ap-font-display)', fontSize: 'var(--ap-text-h3)', margin: '16px 0 8px' }}>Cerere trimisă!</h2>
          <p style={{ color: 'var(--ap-text-secondary)', marginBottom: 24 }}>Te contactăm în cel mai scurt timp pentru confirmarea rezervării.</p>
          <BBtn variant="outline" onClick={() => setSent(false)}>Trimite altă cerere</BBtn>
        </BCard>
      </section>
    );
  }

  return (
    <section style={{ paddingBlock: 'var(--ap-section-y)' }}>
      <Container>
        <BHeading eyebrow="Rezervare" title="Rezervă-ți portalul" align="center"
          lead="Alege experiența, data și numărul de participanți. Confirmăm rapid prin telefon sau WhatsApp." />
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: 28, marginTop: 44, alignItems: 'start' }}>
          <BCard interactive={false}>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div>
                <label style={{ fontFamily: 'var(--ap-font-mono)', fontSize: 'var(--ap-text-xs)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ap-text-secondary)' }}>Experiența</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                  {options.map((o) => {
                    const a = exp === o;
                    return <button type="button" key={o} onClick={() => setExp(o)} style={{ padding: '8px 14px', borderRadius: 'var(--ap-radius-pill)', cursor: 'pointer', fontSize: 13, background: a ? 'rgba(0,229,255,.12)' : 'transparent', color: a ? 'var(--ap-primary)' : 'var(--ap-text-secondary)', border: `1px solid ${a ? 'var(--ap-border-primary)' : 'var(--ap-border-strong)'}` }}>{o}</button>;
                  })}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <Input label="Nume complet" placeholder="Numele tău" required />
                <Input label="Telefon" type="tel" placeholder="07xx xxx xxx" required />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
                <Input label="Data" type="date" required />
                <Input label="Ora" type="time" required />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontFamily: 'var(--ap-font-mono)', fontSize: 'var(--ap-text-xs)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ap-text-secondary)' }}>Participanți</label>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--ap-surface-3)', border: '1px solid var(--ap-border-strong)', borderRadius: 'var(--ap-radius-md)', padding: '4px 8px' }}>
                    <button type="button" onClick={() => setPeople(Math.max(1, people - 1))} style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid var(--ap-border)', background: 'transparent', color: '#fff', cursor: 'pointer', fontSize: 18 }}>−</button>
                    <span style={{ fontFamily: 'var(--ap-font-display)', fontWeight: 700, fontSize: 18 }}>{people}</span>
                    <button type="button" onClick={() => setPeople(Math.min(16, people + 1))} style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid var(--ap-border)', background: 'transparent', color: '#fff', cursor: 'pointer', fontSize: 18 }}>+</button>
                  </div>
                </div>
              </div>
              <Input label="Mesaj (opțional)" type="textarea" placeholder="Petrecere, team building, grup școlar...?" />
              <BBtn variant="primary" size="lg" fullWidth iconRight={<Icon name="arrow-right" size={18} />}>Trimite cererea de rezervare</BBtn>
            </form>
          </BCard>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <BCard interactive={false}>
              <h3 style={{ fontFamily: 'var(--ap-font-display)', fontSize: 16, marginBottom: 14 }}>Program</h3>
              {[['Luni – Joi', 'Închis'], ['Vineri', '16:30 – 21:30'], ['Sâmbătă – Duminică', '11:30 – 21:30']].map(([d, h]) => (
                <div key={d} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderTop: '1px solid var(--ap-border)', fontSize: 14 }}>
                  <span style={{ color: 'var(--ap-text-secondary)' }}>{d}</span>
                  <span style={{ fontFamily: 'var(--ap-font-mono)', color: h === 'Închis' ? 'var(--ap-text-tertiary)' : 'var(--ap-accent)' }}>{h}</span>
                </div>
              ))}
            </BCard>
            <BCard interactive={false}>
              <h3 style={{ fontFamily: 'var(--ap-font-display)', fontSize: 16, marginBottom: 12 }}>Contact direct</h3>
              {[['phone', '076 849 1858', 'tel:+40768491858'], ['message-circle', 'WhatsApp', 'https://wa.me/40768491858'], ['map-pin', 'Alba Mall, Alba Iulia', '#']].map(([ic, t, href]) => (
                <a key={t} href={href} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', color: 'var(--ap-text-secondary)', fontSize: 14 }}>
                  <span style={{ color: 'var(--ap-primary)' }}><Icon name={ic} size={18} /></span>{t}
                </a>
              ))}
            </BCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
window.BookingScreen = BookingScreen;
