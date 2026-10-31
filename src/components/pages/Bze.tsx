import { BzeStats } from '@/components/live/bze-stats';
import { EarnRow } from '@/components/live/earn-row';
import { FeeCoin } from '@/components/live/fee-coin';
import { StakeApr, UnbondingNote } from '@/components/live/staking';

export function BzeBody() {
  return (
    <>
    <section style={{ position: "relative", padding: "56px 0 48px" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <span className="eyebrow">BZE coin</span>
        <h1 className="h1" style={{ margin: "0", fontSize: "36px", fontWeight: "800", letterSpacing: "-0.02em", lineHeight: "1.1" }}>BZE, the coin behind BeeZee</h1>
        <p style={{ margin: "0", fontSize: "18px", color: "var(--muted)", lineHeight: "1.55", maxWidth: "600px" }}>BZE secures the network, pays for launches and is burned as the chain is used.</p>
      </div>
    </section>
    <div className="wrap" style={{ paddingBottom: "56px" }}>
      <BzeStats />
    </div>
    <section className="sec">
      <div className="wrap">
        <div className="shead">
          <div style={{ maxWidth: "640px" }}>
            <span className="eyebrow">What BZE does</span>
            <h2 className="h2" style={{ marginTop: "10px" }}>One coin. Every piece connects.</h2>
            <p className="lead">{"BZE isn't one feature. It's the part that links them all, and each piece feeds the next."}</p>
          </div>
        </div>
        <div className="web">
          <svg className="links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <g stroke="rgba(51,195,224,0.45)" strokeWidth="1.5" strokeDasharray="4 5" vectorEffect="non-scaling-stroke" fill="none">
              <path d="M50 50L36.3 23" vectorEffect="non-scaling-stroke" />
              <path d="M50 50L63.7 23" vectorEffect="non-scaling-stroke" />
              <path d="M50 50L63.7 77" vectorEffect="non-scaling-stroke" />
              <path d="M50 50L36.3 77" vectorEffect="non-scaling-stroke" />
              <path d="M36.3 23C45 6 55 6 63.7 23" stroke="rgba(255,255,255,0.10)" vectorEffect="non-scaling-stroke" />
              <path d="M63.7 77C55 94 45 94 36.3 77" stroke="rgba(255,255,255,0.10)" vectorEffect="non-scaling-stroke" />
            </g>
          </svg>
          <div className="card piece tl">
            <span className="tin"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#33C3E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
  <path d="M4 7.5l8 4.5 8-4.5" />
</svg></span>
            <strong>Fuels every launch</strong>
            <span className="d">Creating tokens, markets and reward programs is paid in BZE.</span>
            <span className="feeds">→ New tokens get a pool</span>
          </div>
          <div className="core" aria-hidden="false">
            <svg viewBox="0 0 200 220" width="200" height="220" role="img" aria-label="BZE at the centre">
              <defs>
                <linearGradient id="cg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#33C3E0" />
                  <stop offset="1" stopColor="#0094C5" />
                </linearGradient>
                <radialGradient id="cf" cx=".5" cy=".35" r=".7">
                  <stop offset="0" stopColor="rgba(51,195,224,0.28)" />
                  <stop offset="1" stopColor="rgba(18,21,27,1)" />
                </radialGradient>
              </defs>
              <path d="M100 8l84 48v108l-84 48-84-48V56z" fill="url(#cf)" stroke="url(#cg)" strokeWidth="2.5" />
              <path d="M100 34l61 35v80l-61 35-61-35V69z" fill="none" stroke="rgba(51,195,224,0.25)" strokeWidth="1" />
              <image href="/brand/bz-mark.svg" x="52" y="62" width="96" height="96" />
            </svg>
          </div>
          <div className="card piece tr">
            <span className="tin"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#33C3E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <circle cx="7" cy="12" r="4" />
  <circle cx="17" cy="12" r="4" />
  <path d="M11 12h2" />
</svg></span>
            <strong>Links every token</strong>
            <span className="d">Pools pair tokens with BZE, which is how they trade and pay fees.</span>
            <span className="feeds">→ Every trade pays a fee</span>
          </div>
          <div className="card piece bl">
            <span className="tin"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#33C3E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M12 3l7.5 3v6c0 4.5-3.2 7.6-7.5 9-4.3-1.4-7.5-4.5-7.5-9V6z" />
</svg></span>
            <strong>Secures the chain</strong>
            <span className="d">Holders stake with validators, earn rewards and vote on what comes next.</span>
            <span className="feeds">→ A safe chain to launch on</span>
          </div>
          <div className="card piece br">
            <span className="tin"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#33C3E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2.2 1-3.6 2.2-4.6.2 1.6.9 2.6 2 3.1C10.6 9 11 5.8 12 3z" />
</svg></span>
            <strong>Gets scarcer with use</strong>
            <span className="d">Trading and launch fees are burned or sent to the community pool.</span>
            <span className="feeds">→ A scarcer coin to stake</span>
          </div>
        </div>
      </div>
    </section>
    <section id="get" className="sec">
      <div className="wrap">
        <div className="shead">
          <div style={{ maxWidth: "640px" }}>
            <span className="eyebrow">Get BZE</span>
            <h2 className="h2" style={{ marginTop: "10px" }}>Four ways to get BZE</h2>
          </div>
        </div>
        <div className="g4">
          <div className="card item">
            <strong>BZE DEX</strong>
            <span className="d">{"Trade BZE on BeeZee's own exchange."}</span>
            <a className="go" href="https://dex.getbze.com" target="_blank" rel="noopener" style={{ color: "#7FD8EE" }}>Open DEX ↗</a>
          </div>
          <div className="card item">
            <strong>Osmosis</strong>
            <span className="d">Swap ATOM, OSMO, USDC and more for BZE.</span>
            <a className="go" href="https://app.osmosis.zone/pool/856" target="_blank" rel="noopener">Open ↗</a>
          </div>
          <div className="card item">
            <strong>Skip:Go</strong>
            <span className="d">Buy BZE with ETH, USDC and more from other chains.</span>
            <a className="go" href="https://go.skip.build" target="_blank" rel="noopener">Open ↗</a>
          </div>
          <div className="card item">
            <strong>NonKYC</strong>
            <span className="d">Buy BZE with USDT on a centralized exchange.</span>
            <a className="go" href="https://nonkyc.io/market/BZE_USDT" target="_blank" rel="noopener">Open ↗</a>
          </div>
        </div>
      </div>
    </section>
    <section id="earn" className="sec">
      <div className="wrap">
        <div className="shead">
          <div style={{ maxWidth: "640px" }}>
            <span className="eyebrow">Earn</span>
            <h2 className="h2" style={{ marginTop: "10px" }}>Put your BZE to work</h2>
          </div>
        </div>
        <EarnRow
          stake={
          <div className="card stake">
            <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "radial-gradient(70% 80% at 0% 0%,rgba(181,126,220,0.16),rgba(10,12,16,0) 70%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img className="ai" src="/apps/staking/icon-on-dark.svg" alt="" />
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <strong style={{ fontSize: "20px" }}>Stake BZE</strong>
                  <span style={{ fontSize: "14px", color: "var(--muted)" }}>Help secure the chain and earn for it.</span>
                </div>
              </div>
              <StakeApr />
            </div>
            <ol className="steps" style={{ position: "relative" }}>
              <li><span className="sn">1</span><span><strong>Pick a validator</strong><span className="d">Validators run the chain. Choose one, or spread your BZE across several.</span></span></li>
              <li><span className="sn">2</span><span><strong>Delegate your BZE</strong><span className="d">{"Your coins stay in your wallet's name. Nobody else can move them."}</span></span></li>
              <li><span className="sn">3</span><span><strong>Earn every block</strong><span className="d">Rewards in BZE add up all the time. Claim them, or stake them again.</span></span></li>
            </ol>
            <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", flexWrap: "wrap", paddingTop: "14px", borderTop: "1px solid var(--div)" }}>
              <span style={{ fontSize: "13px", color: "var(--faint)" }}><UnbondingNote /> Your stake also gives you a vote on proposals.</span>
              <a className="go" href="https://staking.getbze.com" target="_blank" rel="noopener" style={{ color: "#D2AEEC" }}>Open Staking ↗</a>
            </div>
          </div>
          }
        />
        <FeeCoin
          intro={<>
            <img className="ai" src="/apps/dex/icon-on-dark.svg" alt="" />
            <strong style={{ fontSize: "20px" }}>Pair BZE with your token, make it a fee coin</strong>
          </>}
          actions={
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "4px" }}>
              <a className="go" href="https://factory.getbze.com" target="_blank" rel="noopener" style={{ color: "#FFD970" }}>Create the pool in Factory ↗</a>
              <a className="go" href="https://dex.getbze.com" target="_blank" rel="noopener" style={{ color: "#7FD8EE" }}>Add liquidity on the DEX ↗</a>
            </div>
          }
        />
      </div>
    </section>
    <section id="wallets" className="sec">
      <div className="wrap split" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "40px", alignItems: "center" }}>
        <div>
          <div className="shead">
            <div style={{ maxWidth: "640px" }}>
              <span className="eyebrow">Wallet</span>
              <h2 className="h2" style={{ marginTop: "10px" }}>Use Keplr</h2>
              <p className="lead">Every BeeZee app connects with Keplr. Your keys stay with you.</p>
            </div>
          </div>
        </div>
        <a className="card kep" href="https://www.keplr.app/get" target="_blank" rel="noopener"><img src="/logos/keplr_logo_light.svg" alt="Keplr" width="126" height="43" style={{ height: "40px", width: "auto", display: "block" }} />{' '}<span style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.55" }}>{"A browser extension and phone app for the interchain. Add it, create or import a wallet, and you're ready to use every app."}</span>{' '}<span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "600", color: "#8AD9EC" }}>Get Keplr ↗</span>{' '}</a>
      </div>
    </section>
    <section id="track" className="sec">
      <div className="wrap split" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "40px", alignItems: "start" }}>
        <div>
          <div className="shead">
            <div style={{ maxWidth: "640px" }}>
              <span className="eyebrow">Track BZE</span>
              <h2 className="h2" style={{ marginTop: "10px" }}>Price and market data</h2>
            </div>
          </div>
        </div>
        <div className="g2" style={{ gap: "10px" }}>
          <a className="rowl trk" href="https://www.coingecko.com/en/coins/beezee" target="_blank" rel="noopener"><span style={{ display: "flex", alignItems: "center", gap: "12px" }}><img src="/logos/cg_logo.svg" alt="" width="28" height="28" style={{ width: "28px", height: "28px", objectFit: "contain" }} /><span style={{ fontWeight: "600" }}>CoinGecko</span></span><span style={{ color: "var(--faint)" }}>↗</span></a>
          <a className="rowl trk" href="https://www.livecoinwatch.com/price/BZEdge-BZE" target="_blank" rel="noopener"><span style={{ display: "flex", alignItems: "center", gap: "12px" }}><img src="/logos/lcw_logo.svg" alt="" width="28" height="28" style={{ width: "28px", height: "28px", objectFit: "contain" }} /><span style={{ fontWeight: "600" }}>LiveCoinWatch</span></span><span style={{ color: "var(--faint)" }}>↗</span></a>
          <a className="rowl trk" href="https://www.dextools.io/app/en/osmosis/pair-explorer/856" target="_blank" rel="noopener"><span style={{ display: "flex", alignItems: "center", gap: "12px" }}><img src="/logos/dextools_logo.png" alt="" width="28" height="28" style={{ width: "28px", height: "28px", objectFit: "contain" }} /><span style={{ fontWeight: "600" }}>DEXTools</span></span><span style={{ color: "var(--faint)" }}>↗</span></a>
          <a className="rowl trk" href="https://coincodex.com/crypto/bzedge/" target="_blank" rel="noopener"><span style={{ display: "flex", alignItems: "center", gap: "12px" }}><img src="/logos/coincodex-logo-dark.svg" alt="" width="28" height="28" style={{ width: "28px", height: "28px", objectFit: "contain" }} /><span style={{ fontWeight: "600" }}>CoinCodex</span></span><span style={{ color: "var(--faint)" }}>↗</span></a>
        </div>
      </div>
    </section>
    </>
  );
}
