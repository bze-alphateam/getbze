import { PROGRAM_APPLY_URL } from '@/data/links';

export function FoundingProgramBody() {
  return (
    <>
    <section style={{ position: "relative", padding: "56px 0 48px" }}>
      <div className="wrap split" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1fr)", gap: "48px", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <span className="eyebrow">Founding Program · 10 places</span>
          <h1 className="h1" style={{ margin: "0", fontSize: "36px", fontWeight: "800", letterSpacing: "-0.02em", lineHeight: "1.1" }}>{"We'll launch the first ten with you."}</h1>
          <p style={{ margin: "0", fontSize: "18px", color: "var(--muted)", lineHeight: "1.55", maxWidth: "540px" }}>{"We're hand-picking ten communities and projects. We cover the costs, a guide from our team is with you at every step, and your feedback shapes what we build next."}</p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a className="btn btn-p" href="#apply">Apply now</a>
            <a className="btn btn-s" href="#steps">How it works</a>
          </div>
        </div>
        <div className="feat">
          <div className="in" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "radial-gradient(70% 80% at 30% 0%,rgba(51,195,224,0.16),rgba(10,12,16,0) 70%)", pointerEvents: "none" }} />
            <strong style={{ position: "relative", fontSize: "17px" }}>What you get</strong>
            <div style={{ position: "relative", display: "flex", gap: "12px", alignItems: "flex-start", padding: "12px 14px", borderRadius: "12px", background: "var(--inset)" }}>
              <span style={{ marginTop: "2px" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M5 12.5l4.5 4.5L19 7.5" />
</svg></span>
              <span><strong style={{ fontSize: "15px" }}>All costs covered</strong><br /><span style={{ fontSize: "13px", color: "var(--muted)" }}>Your token, its market and your first rewards.</span></span>
            </div>
            <div style={{ position: "relative", display: "flex", gap: "12px", alignItems: "flex-start", padding: "12px 14px", borderRadius: "12px", background: "var(--inset)" }}>
              <span style={{ marginTop: "2px" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M5 12.5l4.5 4.5L19 7.5" />
</svg></span>
              <span><strong style={{ fontSize: "15px" }}>A guide from our team</strong><br /><span style={{ fontSize: "13px", color: "var(--muted)" }}>One person with you from day one to launch.</span></span>
            </div>
            <div style={{ position: "relative", display: "flex", gap: "12px", alignItems: "flex-start", padding: "12px 14px", borderRadius: "12px", background: "var(--inset)" }}>
              <span style={{ marginTop: "2px" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M5 12.5l4.5 4.5L19 7.5" />
</svg></span>
              <span><strong style={{ fontSize: "15px" }}>{"First to try what's new"}</strong><br /><span style={{ fontSize: "13px", color: "var(--muted)" }}>{"Use new features early and tell us what's next."}</span></span>
            </div>
            <div style={{ position: "relative", display: "flex", gap: "12px", alignItems: "flex-start", padding: "12px 14px", borderRadius: "12px", background: "var(--inset)" }}>
              <span style={{ marginTop: "2px" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M5 12.5l4.5 4.5L19 7.5" />
</svg></span>
              <span><strong style={{ fontSize: "15px" }}>In the spotlight</strong><br /><span style={{ fontSize: "13px", color: "var(--muted)" }}>{"Your launch featured across BeeZee's channels."}</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="sec">
      <div className="wrap split" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "16px" }}>
        <div className="card item" style={{ padding: "24px" }}>
          <span className="eyebrow">{"Who we're looking for"}</span>
          <strong style={{ fontSize: "19px", marginTop: "4px" }}>No crypto experience needed</strong>
          <span className="d">Just something worth building.</span>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "6px" }}>
            <span className="chip">Communities</span>
            <span className="chip">{"Brands & creators"}</span>
            <span className="chip">Games</span>
            <span className="chip">Projects with a token</span>
          </div>
        </div>
        <div className="card item" style={{ padding: "24px" }}>
          <span className="eyebrow">What we ask</span>
          <ul style={{ margin: "6px 0 0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px", color: "var(--text-2)" }}>
            <li style={{ display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M5 12.5l4.5 4.5L19 7.5" />
</svg>A real group of people behind your project</li>
            <li style={{ display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M5 12.5l4.5 4.5L19 7.5" />
</svg>A clear idea of what your token will do</li>
            <li style={{ display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M5 12.5l4.5 4.5L19 7.5" />
</svg>Honest feedback along the way</li>
            <li style={{ display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M5 12.5l4.5 4.5L19 7.5" />
</svg>Permission to share your story</li>
          </ul>
        </div>
      </div>
    </section>
    <section id="steps" className="sec">
      <div className="wrap">
        <div className="shead">
          <div style={{ maxWidth: "640px" }}>
            <h2 className="h2" style={{ marginTop: "0px" }}>How it works</h2>
          </div>
        </div>
        <div className="g4">
          <div className="card item">
            <span className="mono" style={{ fontSize: "13px", color: "#33C3E0" }}>01</span>
            <strong>Apply</strong>
            <span className="d">Tell us about your project in a short form.</span>
          </div>
          <div className="card item">
            <span className="mono" style={{ fontSize: "13px", color: "#33C3E0" }}>02</span>
            <strong>Chat with us</strong>
            <span className="d">A short call so we understand what you want.</span>
          </div>
          <div className="card item">
            <span className="mono" style={{ fontSize: "13px", color: "#33C3E0" }}>03</span>
            <strong>Get selected</strong>
            <span className="d">We pick ten and let every applicant know.</span>
          </div>
          <div className="card item">
            <span className="mono" style={{ fontSize: "13px", color: "#33C3E0" }}>04</span>
            <strong>Launch together</strong>
            <span className="d">{"Your guide walks you through until you're live."}</span>
          </div>
        </div>
      </div>
    </section>
    <section className="sec">
      <div className="wrap split" style={{ display: "grid", gridTemplateColumns: "minmax(0,0.8fr) minmax(0,1.6fr)", gap: "40px", alignItems: "start" }}>
        <div>
          <div className="shead">
            <div style={{ maxWidth: "640px" }}>
              <h2 className="h2" style={{ marginTop: "0px" }}>Questions</h2>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <details className="card" style={{ padding: "0 18px" }} open>
            <summary style={{ cursor: "pointer", padding: "16px 0", fontWeight: "600", fontSize: "15px" }}>Do I need to know anything about crypto?</summary>
            <p style={{ margin: "0 0 16px", fontSize: "14px", color: "var(--muted)", lineHeight: "1.55" }}>{"No. That's what your guide is for. If you can use a website, you can do this."}</p>
          </details>
          <details className="card" style={{ padding: "0 18px" }}>
            <summary style={{ cursor: "pointer", padding: "16px 0", fontWeight: "600", fontSize: "15px" }}>Do I need to buy BZE or anything else?</summary>
            <p style={{ margin: "0 0 16px", fontSize: "14px", color: "var(--muted)", lineHeight: "1.55" }}>No. We cover the costs of getting your token set up.</p>
          </details>
          <details className="card" style={{ padding: "0 18px" }}>
            <summary style={{ cursor: "pointer", padding: "16px 0", fontWeight: "600", fontSize: "15px" }}>We already have a token on another chain. Can we apply?</summary>
            <p style={{ margin: "0 0 16px", fontSize: "14px", color: "var(--muted)", lineHeight: "1.55" }}>{"Yes. We'll help you bring it over, and your community with it."}</p>
          </details>
          <details className="card" style={{ padding: "0 18px" }}>
            <summary style={{ cursor: "pointer", padding: "16px 0", fontWeight: "600", fontSize: "15px" }}>Who owns the token?</summary>
            <p style={{ margin: "0 0 16px", fontSize: "14px", color: "var(--muted)", lineHeight: "1.55" }}>You do. It stays in your wallet and under your control, during the program and after it.</p>
          </details>
        </div>
      </div>
    </section>
    <section id="apply" className="sec" style={{ textAlign: "center", position: "relative" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "radial-gradient(50% 90% at 50% 100%,rgba(51,195,224,0.13),rgba(10,12,16,0) 75%)", pointerEvents: "none" }} />
      <div className="wrap" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
        <h2 className="h2" style={{ fontSize: "32px" }}>Ready to be one of the ten?</h2>
        <a className="btn btn-p" href={PROGRAM_APPLY_URL} target="_blank" rel="noopener">Apply now ↗</a>
        <span style={{ fontSize: "14px", color: "var(--faint)" }}>Opens a short form. Takes about five minutes.</span>
      </div>
    </section>
    </>
  );
}
