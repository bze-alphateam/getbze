import { DeliveredYears, UpNextGrid } from '@/components/roadmap';

export function RoadmapBody() {
  return (
    <>
    <section style={{ position: "relative", padding: "56px 0 48px" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <span className="eyebrow">Roadmap</span>
        <h1 className="h1" style={{ margin: "0", fontSize: "36px", fontWeight: "800", letterSpacing: "-0.02em", lineHeight: "1.1" }}>{"What we're building"}</h1>
        <p style={{ margin: "0", fontSize: "18px", color: "var(--muted)", lineHeight: "1.55", maxWidth: "600px" }}>{"What's next for BeeZee, and everything we've shipped so far."}</p>
      </div>
    </section>
    <section id="next" className="sec">
      <div className="wrap">
        <div className="shead">
          <div style={{ maxWidth: "640px" }}>
            <h2 className="h2" style={{ marginTop: "0px" }}>Up next</h2>
          </div>
        </div>
        <UpNextGrid />
      </div>
    </section>
    <section className="sec" style={{ paddingTop: "24px" }}>
      <div className="wrap">
        <div className="shead">
          <div style={{ maxWidth: "640px" }}>
            <h2 className="h2" style={{ marginTop: "0px" }}>Delivered</h2>
          </div>
          <span style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}><span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "600", color: "#34D399" }}><span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#34D399" }} />Done</span><span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "600", color: "#60A5FA" }}><span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#60A5FA" }} />In progress</span><span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "600", color: "#FBBF24" }}><span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FBBF24" }} />Testing</span><span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "600", color: "#8A94A3" }}><span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#8A94A3" }} />Planned</span></span>
        </div>
        <DeliveredYears />
      </div>
    </section>
    </>
  );
}
