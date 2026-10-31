import Link from 'next/link';

import { PROGRAM_LINK } from '@/data/links';
import { programShown } from '@/lib/program';

/** The site footer, the same on every page. */
export function Footer() {
  return (
    <>
    <footer id="footer" style={{ borderTop: "1px solid var(--div)" }}>
      <div className="wrap" style={{ paddingTop: "48px", paddingBottom: "40px", display: "flex", flexDirection: "column", gap: "32px" }}>
        <div className="fgrid" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.3fr) repeat(4,minmax(0,1fr))", gap: "24px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <img src="/brand/beezee-light.svg" alt="BeeZee" style={{ height: "28px", width: "auto", display: "block", alignSelf: "flex-start" }} />
            <span style={{ fontSize: "14px", color: "var(--faint)", maxWidth: "260px" }}>A fast, low-cost blockchain, ready for your project.</span>
          </div>
          <nav aria-label="Product" style={{ display: "flex", flexDirection: "column" }}>
            <strong style={{ fontSize: "13px", color: "var(--faint)", marginBottom: "8px" }}>Product</strong>
            <Link className="fl" href="/apps">Apps</Link>
            <Link className="fl" href="/#how">How it works</Link>
            {programShown(PROGRAM_LINK) && <Link className="fl" href="/founding-program">Founding Program</Link>}
          </nav>
          <nav aria-label="BZE" style={{ display: "flex", flexDirection: "column" }}>
            <strong style={{ fontSize: "13px", color: "var(--faint)", marginBottom: "8px" }}>BZE</strong>
            <Link className="fl" href="/bze">BZE coin</Link>
            <Link className="fl" href="/bze#get">Get BZE</Link>
            <Link className="fl" href="/bze#earn">Earn with BZE</Link>
            <Link className="fl" href="/bze#wallets">Wallet</Link>
          </nav>
          <nav aria-label="Learn" style={{ display: "flex", flexDirection: "column" }}>
            <strong style={{ fontSize: "13px", color: "var(--faint)", marginBottom: "8px" }}>Learn</strong>
            <Link className="fl" href="/under-the-hood">Under the hood</Link>
            <Link className="fl" href="/under-the-hood#security">Security</Link>
            <Link className="fl" href="/roadmap">Roadmap</Link>
            <a className="fl" href="https://docs.getbze.com" target="_blank" rel="noopener">Docs ↗</a>
          </nav>
          <nav aria-label="Community" style={{ display: "flex", flexDirection: "column" }}>
            <strong style={{ fontSize: "13px", color: "var(--faint)", marginBottom: "8px" }}>Community</strong>
            <Link className="fl" href="/news">{"News & community"}</Link>
            <a className="fl" href="https://discord.gg/wb68JV3QhZ" target="_blank" rel="noopener">Discord ↗</a>
            <a className="fl" href="https://t.me/BZEdgeOfficial" target="_blank" rel="noopener">Telegram ↗</a>
            <a className="fl" href="https://x.com/BZEdgeCoin" target="_blank" rel="noopener">X ↗</a>
            <a className="fl" href="https://github.com/bze-alphateam/Official-BZEdge-Graphics" target="_blank" rel="noopener">Press kit ↗</a>
          </nav>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "24px", flexWrap: "wrap", alignItems: "center", paddingTop: "24px", borderTop: "1px solid var(--div)" }}>
          <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--faint)" }}>Partners</span>
          <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "24px 48px" }}>
            <li><a href="https://chaintools.tech/" target="_blank" rel="noopener" style={{ display: "block" }}><img src="/brand/chaintools.png" alt="Chain Tools" style={{ height: "40px", width: "auto", display: "block", borderRadius: "10px" }} /></a></li>
            <li><a href="https://cointrunk.io/" target="_blank" rel="noopener" style={{ display: "block" }}><img src="/brand/cointrunk-light.svg" alt="CoinTrunk" style={{ height: "28px", width: "auto", display: "block" }} /></a></li>
            <li><a href="https://vibast.ro/" target="_blank" rel="noopener" style={{ display: "block" }}><img src="/brand/vibast-light.svg" alt="Vibast Labs" style={{ height: "24px", width: "auto", display: "block" }} /></a></li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  );
}
