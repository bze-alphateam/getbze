export function AppsBody() {
  return (
    <>
    <section style={{ position: "relative", padding: "56px 0 48px" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <span className="eyebrow">The suite</span>
        <h1 className="h1" style={{ margin: "0", fontSize: "36px", fontWeight: "800", letterSpacing: "-0.02em", lineHeight: "1.1" }}>The BeeZee apps</h1>
        <p style={{ margin: "0", fontSize: "18px", color: "var(--muted)", lineHeight: "1.55", maxWidth: "600px" }}>Apps that work together. Move between them freely, and your token looks like yours in every one.</p>
        <nav aria-label="Jump to an app" style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "8px" }}>
          <a className="jump" href="#communities"><img src="/apps/communities/icon-small-on-dark.svg" alt="" width={20} height={20} />Communities</a>
          <a className="jump" href="#factory"><img src="/apps/factory/icon-small-on-dark.svg" alt="" width={20} height={20} />Factory</a>
          <a className="jump" href="#dex"><img src="/apps/dex/icon-small-on-dark.svg" alt="" width={20} height={20} />DEX</a>
          <a className="jump" href="#burner"><img src="/apps/burner/icon-small-on-dark.svg" alt="" width={20} height={20} />Burner</a>
          <a className="jump" href="#staking"><img src="/apps/staking/icon-small-on-dark.svg" alt="" width={20} height={20} />Staking</a>
          <a className="jump" href="#explorer"><img src="/apps/explorer/icon-small-on-dark.svg" alt="" width={20} height={20} />Explorer</a>
        </nav>
      </div>
    </section>
    <div className="wrap">
      <section id="communities" className="app">
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <span className="who" style={{ marginBottom: "-8px" }}>For your token</span>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <img className="ai" src="/apps/communities/icon-on-dark.svg" alt="" />
            <h2>Communities</h2>
          </div>
          <p className="sub">{"Your token's own home, in its own colours. Everything people do with it, side by side, on one link you can share."}</p>
          <ul>
            <li><b style={{ background: "#3DD07A" }} />Trade it, stake it and pay fees in it, all in one place</li>
            <li><b style={{ background: "#3DD07A" }} />Rewards, prizes, airdrops and raffles for its members</li>
            <li><b style={{ background: "#3DD07A" }} />Holders and activity at a glance, governance coming soon</li>
          </ul>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <a className="go" href="https://communities.getbze.com" target="_blank" rel="noopener" style={{ color: "#7FE3A8" }}>Open Communities ↗</a>
            <span className="url">communities.getbze.com</span>
          </div>
        </div>
        <div className="pv">
          <div className="glow" style={{ background: "radial-gradient(80% 90% at 20% 0%,rgba(244,162,97,0.18),rgba(164,71,15,0.10) 50%,rgba(18,21,27,0) 80%)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg,#F4A261,#B77A49)", color: "#1A0E05", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800" }}>H</span>
            <div>
              <strong style={{ fontSize: "17px" }}>Harbor Club</strong>
              <div style={{ fontSize: "13px", color: "var(--faint)" }}>{"HRB · the club's own page"}</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            <span style={{ height: "30px", padding: "0 12px", borderRadius: "8px", background: "rgba(244,162,97,0.16)", color: "#F8C08F", fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center" }}>Overview</span>
            <span style={{ height: "30px", padding: "0 12px", borderRadius: "8px", color: "var(--muted)", fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center" }}>Stake</span>
            <span style={{ height: "30px", padding: "0 12px", borderRadius: "8px", color: "var(--muted)", fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center" }}>Swap</span>
            <span style={{ height: "30px", padding: "0 12px", borderRadius: "8px", color: "var(--muted)", fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center" }}>Airdrops</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "8px" }}>
            <div className="fld" style={{ flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
              <span style={{ fontSize: "12px" }}>Price</span>
              <strong>0.042 BZE</strong>
            </div>
            <div className="fld" style={{ flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
              <span style={{ fontSize: "12px" }}>Holders</span>
              <strong>1,284</strong>
            </div>
            <div className="fld" style={{ flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
              <span style={{ fontSize: "12px" }}>Staked</span>
              <strong>38%</strong>
            </div>
          </div>
          <a className="pbtn" href="https://communities.getbze.com" target="_blank" rel="noopener" aria-label="Join in Communities (opens communities.getbze.com)" style={{ background: "var(--com)", color: "#04170B" }}>Join</a>
        </div>
      </section>
      <section id="factory" className="app">
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <span className="who" style={{ marginBottom: "-8px" }}>For builders</span>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <img className="ai" src="/apps/factory/icon-on-dark.svg" alt="" />
            <h2>Factory</h2>
          </div>
          <p className="sub">The forge. Everything on BeeZee is made here: tokens, pools, rewards and drops, each with a guided wizard and no code.</p>
          <ul>
            <li><b style={{ background: "#FFC933" }} />Tokens with your name, logo and colours</li>
            <li><b style={{ background: "#FFC933" }} />Pools and order books, so people can trade</li>
            <li><b style={{ background: "#FFC933" }} />Staking rewards, trading prizes, airdrops and raffles</li>
          </ul>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <a className="go" href="https://factory.getbze.com" target="_blank" rel="noopener" style={{ color: "#FFD970" }}>Open Factory ↗</a>
            <span className="url">factory.getbze.com</span>
          </div>
        </div>
        <div className="pv">
          <div className="glow" style={{ background: "radial-gradient(70% 80% at 30% 0%,rgba(255,201,51,0.14),rgba(10,12,16,0) 70%)" }} />
          <strong style={{ fontSize: "15px" }}>What do you want to make?</strong>
          <div className="fld">
            <span>A token</span>
            <span>→</span>
          </div>
          <div className="fld">
            <span>A pool or order book</span>
            <span>→</span>
          </div>
          <div className="fld">
            <span>Staking rewards</span>
            <span>→</span>
          </div>
          <div className="fld">
            <span>An airdrop or raffle</span>
            <span>→</span>
          </div>
          <div className="fld" style={{ opacity: ".5" }}>
            <span>A DAO</span>
            <span>Soon</span>
          </div>
          <a className="pbtn" href="https://factory.getbze.com" target="_blank" rel="noopener" aria-label="Start in Factory (opens factory.getbze.com)" style={{ background: "var(--fct-btn)", color: "#1A1200" }}>Start</a>
        </div>
      </section>
      <section id="dex" className="app">
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <span className="who" style={{ marginBottom: "-8px" }}>For every trade</span>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <img className="ai" src="/apps/dex/icon-on-dark.svg" alt="" />
            <h2>DEX</h2>
          </div>
          <p className="sub">For anyone who wants to buy, sell or trade the tokens living on BeeZee.</p>
          <ul>
            <li><b style={{ background: "#12C1E1" }} />Swap instantly from pools</li>
            <li><b style={{ background: "#12C1E1" }} />Set your own price with limit orders</li>
            <li><b style={{ background: "#12C1E1" }} />Add liquidity and earn from every trade</li>
          </ul>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <a className="go" href="https://dex.getbze.com" target="_blank" rel="noopener" style={{ color: "#7FD8EE" }}>Open DEX ↗</a>
            <span className="url">dex.getbze.com</span>
          </div>
        </div>
        <div className="pv">
          <div className="glow" style={{ background: "radial-gradient(70% 80% at 30% 0%,rgba(18,193,225,0.16),rgba(10,12,16,0) 70%)" }} />
          <strong style={{ fontSize: "15px" }}>Swap</strong>
          <div className="fld">
            <span>You pay</span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><i style={{ width: "20px", height: "20px", borderRadius: "50%", background: "linear-gradient(135deg,#F4A261,#B77A49)", display: "block" }} />250 HRB</span>
          </div>
          <div className="fld">
            <span>You receive</span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><i style={{ width: "20px", height: "20px", borderRadius: "50%", background: "var(--grad)", display: "block" }} />10.5 BZE</span>
          </div>
          <a className="pbtn" href="https://dex.getbze.com" target="_blank" rel="noopener" aria-label="Swap in DEX (opens dex.getbze.com)" style={{ background: "var(--dex)", color: "#04131C" }}>Swap</a>
        </div>
      </section>
      <section id="burner" className="app">
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <span className="who" style={{ marginBottom: "-8px" }}>For every burn</span>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <img className="ai" src="/apps/burner/icon-on-dark.svg" alt="" />
            <h2>Burner</h2>
          </div>
          <p className="sub">For anyone who likes to see supply shrink, or fancies a lucky draw. Every burn is permanent, so what is left gets scarcer.</p>
          <ul>
            <li><b style={{ background: "#FF8A1F" }} />Burn coins for good, in public</li>
            <li><b style={{ background: "#FF8A1F" }} />Raffles where every burn is a ticket</li>
            <li><b style={{ background: "#FF8A1F" }} />{"Every burn shows on the token's page"}</li>
          </ul>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <a className="go" href="https://burner.getbze.com" target="_blank" rel="noopener" style={{ color: "#FFB27A" }}>Open Burner ↗</a>
            <span className="url">burner.getbze.com</span>
          </div>
        </div>
        <div className="pv">
          <div className="glow" style={{ background: "radial-gradient(70% 80% at 50% 0%,rgba(255,138,31,0.16),rgba(10,12,16,0) 70%)" }} />
          <strong style={{ fontSize: "15px" }}>Burn HRB</strong>
          <div className="fld">
            <span>Amount</span>
            <span>1,000 HRB</span>
          </div>
          <div className="fld">
            <span>Raffle prize</span>
            <span>5,000 HRB</span>
          </div>
          <a className="pbtn" href="https://burner.getbze.com" target="_blank" rel="noopener" aria-label="Burn in Burner (opens burner.getbze.com)" style={{ background: "var(--brn)", color: "#1A0A00" }}>Burn</a>
        </div>
      </section>
      <section id="staking" className="app">
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <span className="who" style={{ marginBottom: "-8px" }}>For the chain itself</span>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <img className="ai" src="/apps/staking/icon-on-dark.svg" alt="" />
            <h2>Staking</h2>
          </div>
          <p className="sub">For anyone interested in the blockchain behind all this and its own coin, BZE.</p>
          <ul>
            <li><b style={{ background: "#B57EDC" }} />Stake BZE with the validators that run the chain</li>
            <li><b style={{ background: "#B57EDC" }} />Earn staking rewards, paid in BZE</li>
            <li><b style={{ background: "#B57EDC" }} />{"Vote on proposals that shape BeeZee's future"}</li>
          </ul>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <a className="go" href="https://staking.getbze.com" target="_blank" rel="noopener" style={{ color: "#D2AEEC" }}>Open Staking ↗</a>
            <span className="url">staking.getbze.com</span>
          </div>
        </div>
        <div className="pv">
          <div className="glow" style={{ background: "radial-gradient(70% 80% at 30% 0%,rgba(181,126,220,0.16),rgba(10,12,16,0) 70%)" }} />
          <strong style={{ fontSize: "15px" }}>Stake BZE</strong>
          <div className="fld">
            <span>Validator</span>
            <span>Hive Node</span>
          </div>
          <div className="fld">
            <span>Your stake</span>
            <span>1,200 BZE</span>
          </div>
          <div className="fld">
            <span>Rewards</span>
            <span>Paid in BZE</span>
          </div>
          <div className="fld">
            <span>Open proposals</span>
            <span style={{ color: "#D2AEEC" }}>2 to vote on</span>
          </div>
          <a className="pbtn" href="https://staking.getbze.com" target="_blank" rel="noopener" aria-label="Stake in Staking (opens staking.getbze.com)" style={{ background: "var(--stk-btn)", color: "#fff" }}>Stake</a>
        </div>
      </section>
      <section id="explorer" className="app">
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <span className="who" style={{ marginBottom: "-8px" }}>For the curious</span>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <img className="ai" src="/apps/explorer/icon-on-dark.svg" alt="" />
            <h2>Explorer</h2>
          </div>
          <p className="sub">See every move on the chain, in plain words.</p>
          <ul>
            <li><b style={{ background: "#C9D0DA" }} />Every transfer, swap and reward</li>
            <li><b style={{ background: "#C9D0DA" }} />{"Your token's holders and activity"}</li>
            <li><b style={{ background: "#C9D0DA" }} />Proof anyone can check</li>
          </ul>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <a className="go" href="https://explorer.getbze.com" target="_blank" rel="noopener" style={{ color: "#C9D0DA" }}>Open Explorer ↗</a>
            <span className="url">explorer.getbze.com</span>
          </div>
        </div>
        <div className="pv">
          <strong style={{ fontSize: "15px" }}>Latest activity</strong>
          <div className="fld">
            <span style={{ color: "var(--text-2)" }}>Harbor Club sent an airdrop</span>
            <span style={{ color: "var(--faint)", fontSize: "13px" }}>2 min ago</span>
          </div>
          <div className="fld">
            <span style={{ color: "var(--text-2)" }}>A member staked HRB</span>
            <span style={{ color: "var(--faint)", fontSize: "13px" }}>8 min ago</span>
          </div>
          <div className="fld">
            <span style={{ color: "var(--text-2)" }}>HRB swapped for BZE</span>
            <span style={{ color: "var(--faint)", fontSize: "13px" }}>15 min ago</span>
          </div>
          <a className="pbtn" href="https://explorer.getbze.com" target="_blank" rel="noopener" aria-label="Search in Explorer (opens explorer.getbze.com)" style={{ background: "var(--exp)", color: "#0E1116" }}>Search</a>
        </div>
      </section>
      <section style={{ padding: "48px 0 72px", borderTop: "1px solid var(--div)", display: "flex", justifyContent: "space-between", gap: "24px", flexWrap: "wrap", alignItems: "center" }}>
        <div>
          <strong style={{ fontSize: "17px" }}>Also from BeeZee</strong>
          <div style={{ fontSize: "15px", color: "var(--muted)", marginTop: "4px" }}>CoinTrunk, the on-chain articles app, and the original BeeZee app.</div>
        </div>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <a className="go" href="https://app.cointrunk.io" target="_blank" rel="noopener">CoinTrunk ↗</a>
          <a className="go" href="https://app.getbze.com" target="_blank" rel="noopener">Classic app ↗</a>
        </div>
      </section>
    </div>
    </>
  );
}
