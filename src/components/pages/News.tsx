import { NewsArticles } from '@/components/live/articles';

export function NewsBody() {
  return (
    <>
    <section style={{ position: "relative", padding: "56px 0 48px" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <span className="eyebrow">Community</span>
        <h1 className="h1" style={{ margin: "0", fontSize: "36px", fontWeight: "800", letterSpacing: "-0.02em", lineHeight: "1.1" }}>{"News & community"}</h1>
        <p style={{ margin: "0", fontSize: "18px", color: "var(--muted)", lineHeight: "1.55", maxWidth: "600px" }}>Real people answer, from your first token to your tenth. Join us wherever you like to talk.</p>
      </div>
    </section>
    <section className="sec">
      <div className="wrap">
        <div className="shead">
          <div style={{ maxWidth: "640px" }}>
            <h2 className="h2" style={{ marginTop: "0px" }}>Latest news</h2>
            <p className="lead">Pulled from our Medium, newest first.</p>
          </div>
          <a className="btn btn-s" href="https://bzedge.medium.com" target="_blank" rel="noopener" style={{ height: "44px" }}>All articles ↗</a>
        </div>
        <NewsArticles />
      </div>
    </section>
    <section className="sec">
      <div className="wrap">
        <div className="shead">
          <div style={{ maxWidth: "640px" }}>
            <h2 className="h2" style={{ marginTop: "0px" }}>Where to find us</h2>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", gap: "16px" }} className="g4">
          <a className="card item" href="https://discord.gg/wb68JV3QhZ" target="_blank" rel="noopener" style={{ textDecoration: "none", color: "var(--text)" }}><div style={{ display: "flex", justifyContent: "space-between" }}>
  <strong>Discord</strong>
  <span style={{ color: "var(--faint)" }}>↗</span>
</div><span className="d">Chat with the team and the community.</span></a>
          <a className="card item" href="https://t.me/BZEdgeOfficial" target="_blank" rel="noopener" style={{ textDecoration: "none", color: "var(--text)" }}><div style={{ display: "flex", justifyContent: "space-between" }}>
  <strong>Telegram</strong>
  <span style={{ color: "var(--faint)" }}>↗</span>
</div><span className="d">News and quick questions.</span></a>
          <a className="card item" href="https://x.com/BZEdgeCoin" target="_blank" rel="noopener" style={{ textDecoration: "none", color: "var(--text)" }}><div style={{ display: "flex", justifyContent: "space-between" }}>
  <strong>X</strong>
  <span style={{ color: "var(--faint)" }}>↗</span>
</div><span className="d">Announcements and updates.</span></a>
          <a className="card item" href="https://bzedge.medium.com" target="_blank" rel="noopener" style={{ textDecoration: "none", color: "var(--text)" }}><div style={{ display: "flex", justifyContent: "space-between" }}>
  <strong>Medium</strong>
  <span style={{ color: "var(--faint)" }}>↗</span>
</div><span className="d">Articles, guides and status updates.</span></a>
          <a className="card item" href="https://github.com/bze-alphateam" target="_blank" rel="noopener" style={{ textDecoration: "none", color: "var(--text)" }}><div style={{ display: "flex", justifyContent: "space-between" }}>
  <strong>GitHub</strong>
  <span style={{ color: "var(--faint)" }}>↗</span>
</div><span className="d">All the code, in the open.</span></a>
        </div>
      </div>
    </section>
    <section className="sec">
      <div className="wrap split" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "40px", alignItems: "center" }}>
        <div>
          <div className="shead">
            <div style={{ maxWidth: "640px" }}>
              <h2 className="h2" style={{ marginTop: "0px" }}>Press kit</h2>
              <p className="lead">Logos, app icons and brand colours, ready to use.</p>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a className="btn btn-s" href="https://github.com/bze-alphateam/Official-BZEdge-Graphics" target="_blank" rel="noopener">Download the press kit ↗</a>
        </div>
      </div>
    </section>
    </>
  );
}
