import Link from 'next/link';
import { HomeArticles } from '@/components/live/articles';
import { RoadmapStrip } from '@/components/roadmap';
import { PROGRAM_LINK } from '@/data/links';
import { programShown } from '@/lib/program';

export function HomeBody() {
  return (
    <>
    <section id="top" style={{ position: "relative", padding: "64px 0 72px" }}>
      <div className="wrap hero" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)", gap: "48px", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <span className="eyebrow">The BeeZee blockchain</span>
          <h1 className="h1" style={{ margin: "0", fontSize: "52px", lineHeight: "1.05", fontWeight: "800", letterSpacing: "-0.03em" }}>{"A blockchain that's "}<span className="word">yours</span> to use.</h1>
          <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.55", color: "var(--muted)", maxWidth: "500px" }}>{"Fast, low-cost and secure. Our apps work together on a flexible blockchain that does the heavy lifting, so once you're set up you can forget about the tech underneath."}</p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "4px" }}>
            <Link className="btn btn-p" href="/apps">Open the apps</Link>
            <a className="btn btn-s" href="#how">See how it works</a>
          </div>
          <ul style={{ listStyle: "none", margin: "6px 0 0", padding: "0", display: "flex", gap: "8px 20px", flexWrap: "wrap", fontSize: "14px", color: "var(--faint)" }}>
            <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M5 12.5l4.5 4.5L19 7.5" />
</svg>Tiny fees</li>
            <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M5 12.5l4.5 4.5L19 7.5" />
</svg>Confirmed in seconds</li>
            <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M5 12.5l4.5 4.5L19 7.5" />
</svg>{"Audited & maintained"}</li>
          </ul>
        </div>
        <nav aria-label="The BeeZee apps" className="hexes">
          <div aria-hidden="true" style={{ position: "absolute", left: "50%", top: "50%", width: "420px", height: "420px", transform: "translate(-50%,-50%)", background: "radial-gradient(50% 50% at 50% 50%,rgba(51,195,224,0.18),rgba(10,12,16,0) 70%)" }} />
          <span className="hx-ring" style={{ left: "159px", top: "130px" }} />
          <span className="hx mid" style={{ left: "160px", top: "131px" }}><img src="/brand/beezee-light.svg" alt="" style={{ width: "84px", height: "auto", display: "block" }} /><span style={{ fontSize: "11px", fontWeight: "600", color: "var(--faint)" }}>one chain</span></span>
          <Link className="hx" href="/apps#dex" style={{ left: "288px", top: "131px", background: "var(--dex)" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#04131C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M4 8h15l-4-4M20 16H5l4 4" />
</svg>DEX</Link>
          <Link className="hx" href="/apps#communities" style={{ left: "32px", top: "131px", background: "var(--com)" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#03170B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <circle cx="9" cy="8" r="3" />
  <circle cx="17" cy="9.5" r="2.4" />
  <path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5M14.5 14.3c2.6-.4 5 1 5.8 4.2" />
</svg><span style={{ color: "#03170B" }}>Communities</span></Link>
          <Link className="hx" href="/apps#staking" style={{ left: "224px", top: "242px", background: "var(--stk)", color: "#fff" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M12 4l8 4-8 4-8-4z" />
  <path d="M4 12l8 4 8-4M4 16l8 4 8-4" />
</svg>Staking</Link>
          <Link className="hx" href="/apps#burner" style={{ left: "96px", top: "242px", background: "var(--brn)" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A0A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2.2 1-3.6 2.2-4.6.2 1.6.9 2.6 2 3.1C10.6 9 11 5.8 12 3z" />
</svg><span style={{ color: "#1A0A00" }}>Burner</span></Link>
          <Link className="hx" href="/apps#factory" style={{ left: "224px", top: "20px", background: "var(--fct)" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
  <path d="M4 7.5l8 4.5 8-4.5M12 12v9" />
</svg><span style={{ color: "#1A1200" }}>Factory</span></Link>
          <Link className="hx" href="/apps#explorer" style={{ left: "96px", top: "20px", background: "var(--exp)" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A0C10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <circle cx="10.5" cy="10.5" r="6" />
  <path d="M15 15l5 5" />
</svg>Explorer</Link>
        </nav>
      </div>
    </section>
    <section id="how" className="sec">
      <div className="wrap need3" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.6fr)", gap: "40px", alignItems: "center" }}>
        <div>
          <span className="eyebrow">How it works</span>
          <h2 className="h2" style={{ marginTop: "12px" }}>No code. Just a few setup steps.</h2>
          <p className="lead">{"Most projects start with a token, but that's only the beginning. Set these up once and every app opens up for you."}</p>
        </div>
        <div className="need3" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "12px" }}>
          <div className="need">
            <span className="ck"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M5 12.5l4.5 4.5L19 7.5" />
</svg></span>
            <span><strong style={{ fontSize: "15px" }}>A token</strong><br /><span style={{ fontSize: "13px", color: "var(--muted)" }}>Create one, or bring the one you have.</span></span>
          </div>
          <div className="need">
            <span className="ck"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M5 12.5l4.5 4.5L19 7.5" />
</svg></span>
            <span><strong style={{ fontSize: "15px" }}>A pool</strong><br /><span style={{ fontSize: "13px", color: "var(--muted)" }}>So people can buy and sell it.</span></span>
          </div>
          <div className="need">
            <span className="ck"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M5 12.5l4.5 4.5L19 7.5" />
</svg></span>
            <span><strong style={{ fontSize: "15px" }}>A brand</strong><br /><span style={{ fontSize: "13px", color: "var(--muted)" }}>Logo and colours, so it looks like yours.</span></span>
          </div>
        </div>
      </div>
    </section>
    <section className="sec">
      <div className="wrap jr">
        <div>
          <span className="eyebrow">Journey 1</span>
          <h2 className="h2" style={{ marginTop: "12px", fontSize: "30px" }}>Launch your token</h2>
          <p className="lead" style={{ fontSize: "16px" }}>Harbor Club wants a coin for its members. In minutes it has a token, a brand and a page to share. Nobody wrote a line of code.</p>
        </div>
        <div className="map">
          <div className="stops">
            <span className="track" aria-hidden="true" />
            <div className="stop">
              <span className="pin" style={{ background: "var(--fct)" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
  <path d="M4 7.5l8 4.5 8-4.5M12 12v9" />
</svg></span>
              <span className="n">01</span>
              <strong>Create HRB</strong>
              <span className="d">Name, symbol, supply.</span>
              <a className="in-app" href="https://factory.getbze.com" target="_blank" rel="noopener" style={{ color: "#FFD970" }}>Factory ↗</a>
            </div>
            <div className="stop">
              <span className="pin" style={{ background: "var(--fct)" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <rect x="4" y="4" width="10" height="10" rx="2.5" />
  <rect x="10" y="10" width="10" height="10" rx="2.5" />
</svg></span>
              <span className="n">02</span>
              <strong>Brand it</strong>
              <span className="d">Logo, colours, font.</span>
              <a className="in-app" href="https://factory.getbze.com" target="_blank" rel="noopener" style={{ color: "#FFD970" }}>Factory ↗</a>
            </div>
            <div className="stop">
              <span className="pin" style={{ background: "var(--fct)" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M4 8h15l-4-4M20 16H5l4 4" />
</svg></span>
              <span className="n">03</span>
              <strong>Add a pool</strong>
              <span className="d">HRB can be traded.</span>
              <a className="in-app" href="https://factory.getbze.com" target="_blank" rel="noopener" style={{ color: "#FFD970" }}>Factory ↗</a>
            </div>
            <div className="stop">
              <span className="pin" style={{ background: "var(--com)" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#03170B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <rect x="3" y="4" width="18" height="16" rx="2.5" />
  <path d="M3 8.5h18" />
</svg></span>
              <span className="n">04</span>
              <strong>Share the page</strong>
              <span className="d">One link for members.</span>
              <a className="in-app" href="https://communities.getbze.com" target="_blank" rel="noopener" style={{ color: "#7FE3A8" }}>Communities ↗</a>
            </div>
            <div className="goal">
              <span className="t">Goal</span>
              <strong style={{ fontSize: "15px", lineHeight: "1.35" }}>HRB is live and tradable</strong>
              <span style={{ fontSize: "13px", color: "var(--muted)" }}>From about $5.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="sec">
      <div className="wrap jr">
        <div>
          <span className="eyebrow">Journey 2</span>
          <h2 className="h2" style={{ marginTop: "12px", fontSize: "30px" }}>Grow your community</h2>
          <p className="lead" style={{ fontSize: "16px" }}>Now the club rewards the people who stay. Holders earn every day, traders win prizes and new members get an airdrop.</p>
        </div>
        <div className="map">
          <div className="stops">
            <span className="track" aria-hidden="true" />
            <div className="stop">
              <span className="pin" style={{ background: "var(--fct)" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M12 4l8 4-8 4-8-4z" />
  <path d="M4 12l8 4 8-4M4 16l8 4 8-4" />
</svg></span>
              <span className="n">01</span>
              <strong>Staking rewards</strong>
              <span className="d">Holders stake HRB and earn daily.</span>
              <a className="in-app" href="https://factory.getbze.com" target="_blank" rel="noopener" style={{ color: "#FFD970" }}>Factory ↗</a>
            </div>
            <div className="stop">
              <span className="pin" style={{ background: "var(--fct)" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z" />
  <path d="M7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4" />
</svg></span>
              <span className="n">02</span>
              <strong>Trading prizes</strong>
              <span className="d">The most active traders win.</span>
              <a className="in-app" href="https://factory.getbze.com" target="_blank" rel="noopener" style={{ color: "#FFD970" }}>Factory ↗</a>
            </div>
            <div className="stop">
              <span className="pin" style={{ background: "var(--fct)" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M3 10a9 7 0 0 1 18 0z" />
  <path d="M4 10l6 5.5M20 10l-6 5.5M12 10v5.5" />
  <rect x="9.5" y="15.5" width="5" height="5" rx="1" />
</svg></span>
              <span className="n">03</span>
              <strong>Airdrops</strong>
              <span className="d">Send HRB to every holder.</span>
              <a className="in-app" href="https://factory.getbze.com" target="_blank" rel="noopener" style={{ color: "#FFD970" }}>Factory ↗</a>
            </div>
            <div className="stop soon">
              <span className="pin" style={{ background: "var(--inset)", border: "1px solid var(--line)", boxSizing: "border-box" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3ACB9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M4 12h16v8H4z" />
  <path d="M8.5 3.5h7v8h-7z" />
  <path d="M10.2 7.6l1.3 1.3 2.4-2.6" />
</svg></span>
              <span className="n">04</span>
              <strong>Vote together</strong>
              <span className="d">A DAO with a shared treasury.</span>
              <span className="chip">Coming soon</span>
            </div>
            <div className="goal">
              <span className="t">Goal</span>
              <strong style={{ fontSize: "15px", lineHeight: "1.35" }}>Members earn and stay</strong>
              <span style={{ fontSize: "13px", color: "var(--muted)" }}>Rewards in any token.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="sec">
      <div className="wrap jr">
        <div>
          <span className="eyebrow">Journey 3</span>
          <h2 className="h2" style={{ marginTop: "12px", fontSize: "30px" }}>Bring your community home</h2>
          <p className="lead" style={{ fontSize: "16px" }}>{"Already have a token on another chain? Move it over and give it what it never had. If it isn't connected yet, we'll find a way together."}</p>
        </div>
        <div className="map">
          <div className="stops">
            <span className="track" aria-hidden="true" />
            <div className="stop">
              <span className="pin" style={{ background: "var(--grad)" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#04131C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M4 12h13M13 6l6 6-6 6" />
</svg></span>
              <span className="n">01</span>
              <strong>Send it over</strong>
              <span className="d">One transfer from a connected chain.</span>
            </div>
            <div className="stop">
              <span className="pin" style={{ background: "var(--fct)" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M4 8h15l-4-4M20 16H5l4 4" />
</svg></span>
              <span className="n">02</span>
              <strong>Add a pool</strong>
              <span className="d">Tradable right away.</span>
              <a className="in-app" href="https://factory.getbze.com" target="_blank" rel="noopener" style={{ color: "#FFD970" }}>Factory ↗</a>
            </div>
            <div className="stop">
              <span className="pin" style={{ background: "var(--dex)" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#04131C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v8a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2z" />
  <circle cx="12" cy="12" r="2.6" />
</svg></span>
              <span className="n">03</span>
              <strong>Fees in your token</strong>
              <span className="d">No other coin needed.</span>
            </div>
            <div className="stop">
              <span className="pin" style={{ background: "var(--fct)" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M12 4l8 4-8 4-8-4z" />
  <path d="M4 12l8 4 8-4M4 16l8 4 8-4" />
</svg></span>
              <span className="n">04</span>
              <strong>{"Rewards & staking"}</strong>
              <span className="d">What it never had before.</span>
              <a className="in-app" href="https://factory.getbze.com" target="_blank" rel="noopener" style={{ color: "#FFD970" }}>Factory ↗</a>
            </div>
            <div className="goal">
              <span className="t">Goal</span>
              <strong style={{ fontSize: "15px", lineHeight: "1.35" }}>A new home for your community</strong>
              <a href="#talk" style={{ fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>Not connected? Talk to us →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="sec" style={{ position: "relative" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", flexWrap: "wrap", marginBottom: "32px" }}>
          <div style={{ maxWidth: "640px" }}>
            <span className="eyebrow">The suite</span>
            <h2 className="h2" style={{ marginTop: "12px" }}>One home for your token. A tool for everyone else.</h2>
            <p className="lead">Communities brings everything about your token together in one place. The other apps are pieces built on the same blockchain, each made for a different kind of user.</p>
          </div>
          <Link className="btn btn-s" href="/apps" style={{ height: "44px" }}>Explore the apps →</Link>
        </div>
        <div className="suite">
          <div className="card home">
            <div className="hglow" />
            <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "12px" }}>
              <span className="ai" style={{ background: "var(--com)" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#03170B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <circle cx="9" cy="8" r="3" />
  <circle cx="17" cy="9.5" r="2.4" />
  <path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5M14.5 14.3c2.6-.4 5 1 5.8 4.2" />
</svg></span>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span className="who">For your token</span>
                <strong style={{ fontSize: "20px" }}>Communities</strong>
              </div>
            </div>
            <p style={{ position: "relative", margin: "0", fontSize: "16px", lineHeight: "1.55", color: "var(--muted)" }}>{"Your token's own place, in its own colours. Everything people do with it, side by side."}</p>
            <div className="tok" style={{ position: "relative" }}>
              <i />
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <strong style={{ fontSize: "15px" }}>Harbor Club</strong>
                <span style={{ fontSize: "13px", color: "var(--muted)" }}>HRB · harborclub page</span>
              </div>
            </div>
            <div className="blend" style={{ position: "relative" }}>
              <span>Trade HRB</span>
              <span>Stake HRB</span>
              <span>Pay fees in HRB</span>
              <span>{"Rewards & prizes"}</span>
              <span>{"Airdrops & raffles"}</span>
              <span>{"Holders & activity"}</span>
              <span className="later">Governance<em>Coming soon</em></span>
            </div>
            <a className="in-app" href="https://communities.getbze.com" target="_blank" rel="noopener" style={{ position: "relative", color: "#7FE3A8", marginTop: "auto" }}>Open Communities ↗</a>
          </div>
          <div className="tools">
            <div className="card tool">
              <span className="who">For builders</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span className="ai" style={{ background: "var(--fct)" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A1200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
  <path d="M4 7.5l8 4.5 8-4.5M12 12v9" />
</svg></span>
                <strong style={{ fontSize: "17px" }}>Factory</strong>
              </div>
              <span style={{ fontSize: "14px", color: "var(--muted)" }}>Where everything is made: tokens, pools, rewards and drops.</span>
              <a className="in-app" href="https://factory.getbze.com" target="_blank" rel="noopener" style={{ color: "#FFD970", marginTop: "auto" }}>Open Factory ↗</a>
            </div>
            <div className="card tool">
              <span className="who">For every trade</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span className="ai" style={{ background: "var(--dex)" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#04131C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M4 8h15l-4-4M20 16H5l4 4" />
</svg></span>
                <strong style={{ fontSize: "17px" }}>DEX</strong>
              </div>
              <span style={{ fontSize: "14px", color: "var(--muted)" }}>For anyone who wants to buy, sell or trade the tokens living on BeeZee. Swap instantly from pools or set your own price with limit orders.</span>
              <a className="in-app" href="https://dex.getbze.com" target="_blank" rel="noopener" style={{ color: "#7FD8EE", marginTop: "auto" }}>Open DEX ↗</a>
            </div>
            <div className="card tool">
              <span className="who">For the chain itself</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span className="ai" style={{ background: "var(--stk)" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M12 4l8 4-8 4-8-4z" />
  <path d="M4 12l8 4 8-4M4 16l8 4 8-4" />
</svg></span>
                <strong style={{ fontSize: "17px" }}>Staking</strong>
              </div>
              <span style={{ fontSize: "14px", color: "var(--muted)" }}>For anyone interested in the blockchain behind all this and its own coin, BZE. Stake it with the validators that run the chain, earn rewards and vote on its future.</span>
              <a className="in-app" href="https://staking.getbze.com" target="_blank" rel="noopener" style={{ color: "#D2AEEC", marginTop: "auto" }}>Open Staking ↗</a>
            </div>
            <div className="card tool">
              <span className="who">For every burn</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span className="ai" style={{ background: "var(--brn)" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A0A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2.2 1-3.6 2.2-4.6.2 1.6.9 2.6 2 3.1C10.6 9 11 5.8 12 3z" />
</svg></span>
                <strong style={{ fontSize: "17px" }}>Burner</strong>
              </div>
              <span style={{ fontSize: "14px", color: "var(--muted)" }}>For anyone who likes to see supply shrink, or fancies a lucky draw. Burn coins and join the raffles. Every burn is permanent, so what is left gets scarcer.</span>
              <a className="in-app" href="https://burner.getbze.com" target="_blank" rel="noopener" style={{ color: "#FFB27A", marginTop: "auto" }}>Open Burner ↗</a>
            </div>
          </div>
        </div>
        <div className="card" style={{ marginTop: "16px", padding: "16px 20px", display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
          <span className="ai" style={{ background: "var(--exp)", width: "32px", height: "32px" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A0C10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <circle cx="10.5" cy="10.5" r="6" />
  <path d="M15 15l5 5" />
</svg></span>
          <span style={{ fontSize: "14px", color: "var(--muted)", flex: "1", minWidth: "200px" }}><strong style={{ color: "var(--text)" }}>Explorer</strong> · for the curious. See every move on the chain, in plain words.</span>
          <a className="in-app" href="https://explorer.getbze.com" target="_blank" rel="noopener" style={{ color: "#C9D0DA" }}>Open Explorer ↗</a>
        </div>
      </div>
    </section>
    <section id="why" className="sec">
      <div className="wrap">
        <div style={{ maxWidth: "640px", marginBottom: "32px" }}>
          <span className="eyebrow">Why BeeZee</span>
          <h2 className="h2" style={{ marginTop: "12px" }}>Set it up once. We keep it running.</h2>
        </div>
        <div className="g3">
          <div className="card pil">
            <span className="ai" style={{ background: "var(--grad)" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#04131C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M8 8l-4 4 4 4M16 8l4 4-4 4" />
  <path d="M4 20L20 4" />
</svg></span>
            <strong style={{ fontSize: "20px" }}>No coding needed</strong>
            <p>Every step is a guided form in an app. If you can type a name and pick a colour, you can launch on BeeZee.</p>
            <ul>
              <li>No smart contracts to write</li>
              <li>No developer on call</li>
              <li>Wizards with a review before you sign</li>
            </ul>
            <Link href="/#how" style={{ fontSize: "14px", fontWeight: "600" }}>How it works →</Link>
          </div>
          <div className="card pil">
            <span className="ai" style={{ background: "var(--grad)" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#04131C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
  <path d="M13 7l-3 5h4l-3 5" />
</svg></span>
            <strong style={{ fontSize: "20px" }}>{"Fast & secure setup"}</strong>
            <p>Go from idea to a live, tradable token in minutes, on a chain that is audited and checked before every upgrade.</p>
            <ul>
              <li>Confirmed in seconds, tiny fees</li>
              <li>Fees payable in your own token</li>
              <li>{"Audited & secure"}</li>
            </ul>
            <Link href="/under-the-hood#security" style={{ fontSize: "14px", fontWeight: "600" }}>{"Security & audit →"}</Link>
          </div>
          <div className="card pil">
            <span className="ai" style={{ background: "var(--grad)" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#04131C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <rect x="4" y="4" width="16" height="6" rx="1.5" />
  <rect x="4" y="14" width="16" height="6" rx="1.5" />
  <path d="M8 7h.01M8 17h.01M12 7h4M12 17h4" />
</svg></span>
            <strong style={{ fontSize: "20px" }}>Infrastructure guaranteed</strong>
            <p>The tech is already running: we maintain the chain, its nodes and the apps. No servers needed, unless you want them.</p>
            <ul>
              <li>Upgrades reviewed and tested</li>
              <li>Public nodes and an explorer</li>
              <li>Your keys always stay yours</li>
            </ul>
            <Link href="/under-the-hood" style={{ fontSize: "14px", fontWeight: "600" }}>Under the hood →</Link>
          </div>
        </div>
      </div>
    </section>
    <section id="latest" className="sec" style={{ padding: "48px 0" }}>
      <div className="wrap">
        <div className="lat2">
          <div className="card" style={{ padding: "18px 20px", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px", marginBottom: "4px" }}>
              <span className="eyebrow">On the roadmap</span>
              <Link href="/roadmap" style={{ fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>See all →</Link>
            </div>
            <RoadmapStrip />
          </div>
          <div className="card" style={{ padding: "18px 20px", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px", marginBottom: "4px" }}>
              <span className="eyebrow">Latest articles</span>
              <Link href="/news" style={{ fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>All news →</Link>
            </div>
            <HomeArticles />
          </div>
        </div>
        <nav aria-label="Learn more" style={{ marginTop: "16px" }}>
          <div className="lmg">
            <Link className="lm" href="/roadmap"><span className="lmi"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8AD9EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M4 6l5-2 6 2 5-2v14l-5 2-6-2-5 2z" />
  <path d="M9 4v14M15 6v14" />
</svg></span><span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0", flex: "1" }}><strong>Roadmap</strong><span>{"What we're building next"}</span></span><span className="lma">→</span></Link>
            <Link className="lm" href="/news"><span className="lmi"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8AD9EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M4 5h12v14H6a2 2 0 0 1-2-2z" />
  <path d="M16 9h4v8a2 2 0 0 1-2 2" />
  <path d="M8 9h4M8 13h4" />
</svg></span><span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0", flex: "1" }}><strong>{"News & community"}</strong><span>Articles, channels, press kit</span></span><span className="lma">→</span></Link>
            <Link className="lm" href="/under-the-hood"><span className="lmi"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8AD9EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
  <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
</svg></span><span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0", flex: "1" }}><strong>Under the hood</strong><span>What the chain can do</span></span><span className="lma">→</span></Link>
            <Link className="lm" href="/under-the-hood#security"><span className="lmi"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8AD9EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
  <path d="M9 12l2 2 4-4" />
</svg></span><span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0", flex: "1" }}><strong>{"Security & audit"}</strong><span>How we keep it safe</span></span><span className="lma">→</span></Link>
            <Link className="lm" href="/bze"><span className="lmi"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8AD9EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <circle cx="12" cy="12" r="8" />
  <path d="M9.5 9h3.5a1.5 1.5 0 0 1 0 3H9.5h4a1.5 1.5 0 0 1 0 3H9.5z" />
</svg></span><span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0", flex: "1" }}><strong>BZE coin</strong><span>Get it, earn it, track it</span></span><span className="lma">→</span></Link>
          </div>
        </nav>
      </div>
    </section>
    {programShown(PROGRAM_LINK) && <section id="talk" className="sec">
      <div className="wrap">
        <div style={{ padding: "1px", borderRadius: "20px", background: "linear-gradient(160deg,rgba(51,195,224,0.75),rgba(0,148,197,0.18) 45%,rgba(255,255,255,0.06))", boxShadow: "0 30px 80px -40px rgba(51,195,224,0.5)" }}>
          <div className="hero" style={{ position: "relative", overflow: "hidden", background: "var(--card)", borderRadius: "19px", padding: "40px", display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr)", gap: "32px", alignItems: "center" }}>
            <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "radial-gradient(60% 120% at 0% 0%,rgba(51,195,224,0.14),rgba(0,148,197,0.04) 50%,rgba(0,0,0,0) 80%)", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <span className="eyebrow">Founding Program</span>
              <h2 className="h2" style={{ marginTop: "10px", fontSize: "30px" }}>Be one of the first ten.</h2>
              <p className="lead" style={{ fontSize: "16px" }}>We cover the costs of getting started and guide you through it. You tell us what to build next.</p>
            </div>
            <div className="fp-cta" style={{ position: "relative", display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
              <Link className="btn btn-p" href="/founding-program#apply">Apply</Link>
              <Link className="btn btn-s" href="/news">Talk to us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>}
    </>
  );
}
