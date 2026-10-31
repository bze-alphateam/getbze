import { AUDIT_REPORTS_URL, SECURITY_EMAIL } from '@/data/links';

export function UnderTheHoodBody() {
  return (
    <>
    <section style={{ position: "relative", padding: "56px 0 48px" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <span className="eyebrow">Under the hood</span>
        <h1 className="h1" style={{ margin: "0", fontSize: "36px", fontWeight: "800", letterSpacing: "-0.02em", lineHeight: "1.1" }}>How BeeZee works</h1>
        <p style={{ margin: "0", fontSize: "18px", color: "var(--muted)", lineHeight: "1.55", maxWidth: "600px" }}>For the curious. All of this runs for you, so you never have to touch it.</p>
      </div>
    </section>
    <section id="can" className="sec">
      <div className="wrap">
        <div className="shead">
          <div style={{ maxWidth: "640px" }}>
            <h2 className="h2" style={{ marginTop: "0px" }}>What the chain can do</h2>
            <p className="lead">Every feature is built into BeeZee itself, so the apps simply switch them on for you.</p>
          </div>
        </div>
        <div className="g4">
          <div className="card item">
            <strong>Token factory</strong>
            <span className="d">Create tokens, set their brand, mint or lock the supply.</span>
          </div>
          <div className="card item">
            <strong>{"Swap & order book"}</strong>
            <span className="d">Instant swaps from pools and limit orders, side by side.</span>
          </div>
          <div className="card item">
            <strong>Rewards</strong>
            <span className="d">Daily staking rewards and trading prizes for any token.</span>
          </div>
          <div className="card item">
            <strong>{"Burns & raffles"}</strong>
            <span className="d">Public burns, and raffles that turn burns into prizes.</span>
          </div>
          <div className="card item">
            <strong>Fees in any token</strong>
            <span className="d">Pay network fees in the token you hold.</span>
          </div>
          <div className="card item">
            <strong>Connected chains</strong>
            <span className="d">Move tokens to and from other blockchains in one transfer.</span>
          </div>
          <div className="card item">
            <strong>CoinTrunk news</strong>
            <span className="d">Publish and pay for articles, stored on the chain.</span>
          </div>
          <div className="card item">
            <strong>Governance</strong>
            <span className="d">BZE holders vote on every change to the chain.</span>
          </div>
        </div>
        <p style={{ margin: "20px 0 0", fontSize: "14px", color: "var(--faint)" }}>Built on the Cosmos SDK, CometBFT and IBC, the same foundations as many of the largest proof-of-stake chains.</p>
      </div>
    </section>
    <section id="chains" className="sec">
      <div className="wrap split" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.3fr)", gap: "40px", alignItems: "center" }}>
        <div>
          <div className="shead">
            <div style={{ maxWidth: "640px" }}>
              <h2 className="h2" style={{ marginTop: "0px" }}>Connected chains</h2>
              <p className="lead">Tokens move between BeeZee and these chains in one transfer. Not on the list? Talk to us.</p>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <span className="chip" style={{ height: "34px", padding: "0 14px", fontSize: "14px", color: "var(--text-2)" }}>Osmosis</span>
          <span className="chip" style={{ height: "34px", padding: "0 14px", fontSize: "14px", color: "var(--text-2)" }}>Cosmos Hub</span>
          <span className="chip" style={{ height: "34px", padding: "0 14px", fontSize: "14px", color: "var(--text-2)" }}>Injective</span>
          <span className="chip" style={{ height: "34px", padding: "0 14px", fontSize: "14px", color: "var(--text-2)" }}>Archway</span>
          <span className="chip" style={{ height: "34px", padding: "0 14px", fontSize: "14px", color: "var(--text-2)" }}>AtomOne</span>
        </div>
      </div>
    </section>
    <section id="security" className="sec">
      <div className="wrap">
        <div className="shead">
          <div style={{ maxWidth: "640px" }}>
            <span className="eyebrow">Security</span>
            <h2 className="h2" style={{ marginTop: "10px" }}>Security comes first</h2>
            <p className="lead">{"Every token on BeeZee relies on the chain underneath. Here's how we protect it."}</p>
          </div>
        </div>
        <div className="split" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)", gap: "16px" }}>
          <div className="feat">
            <div className="in" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span className="eyebrow" style={{ color: "#8AD9EC" }}>Independent audit</span>
              <strong style={{ fontSize: "20px" }}>Audited by Oak Security</strong>
              <span style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.55" }}>Two phases covering the core of the chain and its features. Every fix is live on mainnet.</span>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "8px" }}>
                <div style={{ background: "var(--inset)", borderRadius: "12px", padding: "10px 12px" }}>
                  <div style={{ fontSize: "12px", color: "var(--faint)" }}>Scope</div>
                  <div style={{ fontWeight: "700", marginTop: "2px" }}>2 phases</div>
                </div>
                <div style={{ background: "var(--inset)", borderRadius: "12px", padding: "10px 12px" }}>
                  <div style={{ fontSize: "12px", color: "var(--faint)" }}>Reports</div>
                  <div style={{ fontWeight: "700", marginTop: "2px" }}>Public</div>
                </div>
              </div>
              <a className="go" href={AUDIT_REPORTS_URL} target="_blank" rel="noopener">Read the reports ↗</a>
            </div>
          </div>
          <div className="g2">
            <div className="card item">
              <strong>Every change reviewed</strong>
              <span className="d">Nothing is merged without review, and the code is audited on an ongoing basis.</span>
            </div>
            <div className="card item">
              <strong>Tested before every upgrade</strong>
              <span className="d">Each upgrade runs end to end on the real chain software first.</span>
            </div>
            <div className="card item">
              <strong>Open source</strong>
              <span className="d">All the code is public on GitHub for anyone to verify.</span>
            </div>
            <div className="card item">
              <strong>Your keys, your tokens</strong>
              <span className="d">BeeZee never holds your tokens. Only you control your wallet.</span>
            </div>
          </div>
        </div>
        <div className="notice" style={{ marginTop: "16px" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v5M12 16.5v.5" />
          </svg>
          <span><strong style={{ color: "var(--text)" }}>Found a vulnerability?</strong> Please report it privately to <a href={`mailto:${SECURITY_EMAIL}`}>{SECURITY_EMAIL}</a> so we can fix it first. We reply to every report.</span>
        </div>
      </div>
    </section>
    <section id="explorers" className="sec">
      <div className="wrap split" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.3fr)", gap: "40px", alignItems: "start" }}>
        <div>
          <div className="shead">
            <div style={{ maxWidth: "640px" }}>
              <h2 className="h2" style={{ marginTop: "0px" }}>Explorers</h2>
              <p className="lead">See every block and transaction. Ours explains them in plain words.</p>
            </div>
          </div>
        </div>
        <div className="g2" style={{ gap: "10px" }}>
          <a className="rowl" href="https://explorer.getbze.com" target="_blank" rel="noopener"><span style={{ display: "flex", alignItems: "center", gap: "10px" }}><span style={{ width: "20px", height: "20px", borderRadius: "6px", background: "var(--exp)" }} /><span style={{ fontWeight: "600" }}>BZE Explorer</span></span><span style={{ color: "var(--faint)" }}>↗</span></a>
          <a className="rowl" href="https://ping.pub/beezee" target="_blank" rel="noopener"><span style={{ fontWeight: "600" }}>Ping.pub</span><span style={{ color: "var(--faint)" }}>↗</span></a>
          <a className="rowl" href="https://explorer.chaintools.tech/beezee" target="_blank" rel="noopener"><span style={{ fontWeight: "600" }}>Chain Tools</span><span style={{ color: "var(--faint)" }}>↗</span></a>
          <a className="rowl" href="https://atomscan.com/beezee" target="_blank" rel="noopener"><span style={{ fontWeight: "600" }}>ATOMScan</span><span style={{ color: "var(--faint)" }}>↗</span></a>
          <a className="rowl" href="https://explorer.whenmoonwhenlambo.money/beezee" target="_blank" rel="noopener"><span style={{ fontWeight: "600" }}>When Moon When Lambo</span><span style={{ color: "var(--faint)" }}>↗</span></a>
        </div>
      </div>
    </section>
    <section id="build" className="sec">
      <div className="wrap split" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.3fr)", gap: "40px", alignItems: "start" }}>
        <div>
          <div className="shead">
            <div style={{ maxWidth: "640px" }}>
              <h2 className="h2" style={{ marginTop: "0px" }}>Build on BeeZee</h2>
              <p className="lead">For developers who want to go further than the apps.</p>
            </div>
          </div>
        </div>
        <div className="g3" style={{ gap: "10px" }}>
          <a className="rowl" href="https://github.com/bze-alphateam" target="_blank" rel="noopener"><span style={{ fontWeight: "600" }}>GitHub</span><span style={{ color: "var(--faint)" }}>↗</span></a>
          <a className="rowl" href="https://docs.getbze.com" target="_blank" rel="noopener"><span style={{ fontWeight: "600" }}>Docs</span><span style={{ color: "var(--faint)" }}>↗</span></a>
          <a className="rowl" href="https://github.com/bze-alphateam/Official-BZEdge-Graphics" target="_blank" rel="noopener"><span style={{ fontWeight: "600" }}>Press kit</span><span style={{ color: "var(--faint)" }}>↗</span></a>
        </div>
      </div>
    </section>
    </>
  );
}
