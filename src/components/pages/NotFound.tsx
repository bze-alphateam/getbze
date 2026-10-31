import Link from 'next/link';
export function NotFoundBody() {
  return (
    <>
    <section style={{ position: "relative", padding: "96px 0", minHeight: "680px", display: "flex", alignItems: "center" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "radial-gradient(60% 70% at 50% 0%,rgba(51,195,224,0.14),rgba(10,12,16,0) 70%)", pointerEvents: "none" }} />
      <div className="wrap" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "18px" }}>
        <svg viewBox="0 0 200 220" width="200" height="220" aria-hidden="true">
          <defs>
            <linearGradient id="g404" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#33C3E0" />
              <stop offset="1" stopColor="#0094C5" />
            </linearGradient>
          </defs>
          <path d="M100 8l84 48v108l-84 48-84-48V56z" fill="#12151B" stroke="url(#g404)" strokeWidth="2.5" strokeDasharray="10 8" />
          <text x="100" y="128" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="52" fontWeight="800" fill="#E8ECF2" letterSpacing="-2">404</text>
        </svg>
        <h1 className="h1" style={{ margin: "0", fontSize: "36px", fontWeight: "800", letterSpacing: "-0.02em", lineHeight: "1.1" }}>{"This block doesn't exist"}</h1>
        <p style={{ margin: "0", fontSize: "18px", color: "var(--muted)", lineHeight: "1.55", maxWidth: "520px" }}>{"The page you're looking for isn't on the chain. It may have moved, or the link is wrong."}</p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
          <Link className="btn btn-p" href="/">Back to home</Link>
          <Link className="btn btn-s" href="/apps">Open the apps</Link>
        </div>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center", marginTop: "8px" }}>
          <Link className="chip" href="/apps" style={{ textDecoration: "none" }}>Apps</Link>
          <Link className="chip" href="/bze" style={{ textDecoration: "none" }}>BZE coin</Link>
          <Link className="chip" href="/roadmap" style={{ textDecoration: "none" }}>Roadmap</Link>
          <Link className="chip" href="/news" style={{ textDecoration: "none" }}>News</Link>
        </div>
      </div>
    </section>
    </>
  );
}
