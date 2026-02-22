import EditableField from "../EditableField";
import PhotoSlot from "../PhotoSlot";

const E = EditableField;

const T3_MidnightLuxe = ({ d }) => {
  const ac = d.data.accentColor || "#c9a96e";
  const photos = d.data.photos;

  return (
    <div style={{ fontFamily: "'Cinzel', serif", color: "#f0e8d8", background: "#0d0a07" }}>

      {/* ── Hero ── */}
      <div style={{ position: "relative", minHeight: 640, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center", overflow: "hidden" }}>
        <PhotoSlot src={d.data.coverPhoto} onUpload={v => d.set("coverPhoto", v)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .35 }} label="Cover Photo" />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(201,169,110,.08) 0%, rgba(0,0,0,.75) 80%)" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "100px 40px" }}>
          <div className="fu" style={{ fontSize: 10, letterSpacing: ".7em", color: ac, marginBottom: 30, textTransform: "uppercase", fontFamily: "Jost,sans-serif", fontWeight: 200 }}>an invitation to celebrate</div>
          <E d={d} k="coupleName" tag="h1" className="fu2" style={{ fontSize: "clamp(2.5rem,7vw,5rem)", fontWeight: 400, margin: "0 0 28px", lineHeight: 1.1, color: "#f8f0e0", letterSpacing: ".1em" }} />
          <div style={{ width: 80, height: 1, background: `linear-gradient(to right, transparent, ${ac}, transparent)`, margin: "0 auto 28px" }} />
          <E d={d} k="date" className="fu3" style={{ fontSize: "1.2rem", color: ac, letterSpacing: ".35em", display: "block", marginBottom: 16, textTransform: "uppercase", fontFamily: "Jost,sans-serif", fontWeight: 300 }} />
          <E d={d} k="venueName" style={{ fontSize: ".95rem", color: "rgba(240,232,216,.65)", letterSpacing: ".2em", fontFamily: "Jost,sans-serif", fontWeight: 200, display: "block", marginBottom: 6 }} />
          <E d={d} k="venueCity" style={{ fontSize: ".85rem", color: "rgba(240,232,216,.45)", letterSpacing: ".2em", fontFamily: "Jost,sans-serif", fontWeight: 200 }} />
        </div>
      </div>

      {/* ── Welcome ── */}
      <div style={{ padding: "50px 40px 0", textAlign: "center", borderBottom: `1px solid rgba(201,169,110,.15)` }}>
        <E d={d} k="welcomeMessage" tag="p" style={{ fontSize: "1.1rem", color: `${ac}cc`, fontStyle: "italic", letterSpacing: ".08em", fontFamily: "'EB Garamond',serif", paddingBottom: 50 }} />
      </div>

      {/* ── Story ── */}
      <div style={{ padding: "80px 40px", maxWidth: 720, margin: "0 auto", textAlign: "center", borderBottom: `1px solid rgba(201,169,110,.15)` }}>
        <div style={{ fontSize: 10, letterSpacing: ".6em", color: ac, marginBottom: 28, textTransform: "uppercase", fontFamily: "Jost,sans-serif" }}>Our Story</div>
        <h2 style={{ fontSize: "2rem", fontWeight: 400, color: "#f0e8d8", marginBottom: 32, letterSpacing: ".15em" }}>How We Found Each Other</h2>
        <E d={d} k="story" tag="p" style={{ fontSize: "1.08rem", lineHeight: 2, color: "rgba(240,232,216,.7)", fontFamily: "'EB Garamond', serif", fontStyle: "italic", fontWeight: 300, marginBottom: 24 }} />
        <E d={d} k="storyChapter2" tag="p" style={{ fontSize: "1.05rem", lineHeight: 2, color: "rgba(240,232,216,.6)", fontFamily: "'EB Garamond', serif", fontStyle: "italic", fontWeight: 300, marginBottom: 24 }} />
        <E d={d} k="storyChapter3" tag="p" style={{ fontSize: "1.05rem", lineHeight: 2, color: "rgba(240,232,216,.6)", fontFamily: "'EB Garamond', serif", fontStyle: "italic", fontWeight: 300 }} />
      </div>

      {/* ── Milestones ── */}
      <div style={{ padding: "80px 40px", maxWidth: 820, margin: "0 auto" }}>
        <div style={{ fontSize: 10, letterSpacing: ".6em", color: ac, marginBottom: 40, textTransform: "uppercase", textAlign: "center", fontFamily: "Jost,sans-serif" }}>Our Journey</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[
            { title: "How We Met", key: "howWeMet", icon: "✦" },
            { title: "The Proposal", key: "proposal", icon: "◆" },
          ].map(({ title, key, icon }) => (
            <div key={key} style={{ padding: "36px 28px", border: `1px solid rgba(201,169,110,.2)`, background: "rgba(201,169,110,.04)" }}>
              <div style={{ fontSize: 14, color: ac, marginBottom: 14 }}>{icon}</div>
              <div style={{ fontSize: 9, letterSpacing: ".5em", color: ac, textTransform: "uppercase", marginBottom: 16, fontFamily: "Jost,sans-serif" }}>{title}</div>
              <E d={d} k={key} tag="p" style={{ fontSize: ".95rem", lineHeight: 1.9, color: "rgba(240,232,216,.6)", fontFamily: "'EB Garamond',serif", fontStyle: "italic" }} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Meet the Couple ── */}
      <div style={{ padding: "0 40px 80px", maxWidth: 820, margin: "0 auto", borderTop: `1px solid rgba(201,169,110,.15)`, paddingTop: "80px" }}>
        <div style={{ fontSize: 10, letterSpacing: ".6em", color: ac, marginBottom: 40, textTransform: "uppercase", textAlign: "center", fontFamily: "Jost,sans-serif" }}>The Couple</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, textAlign: "center" }}>
          {[
            { nameKey: "groom", bioKey: "groomBio", photoIdx: 0 },
            { nameKey: "bride", bioKey: "brideBio", photoIdx: 1 },
          ].map(({ nameKey, bioKey, photoIdx }) => (
            <div key={nameKey}>
              <PhotoSlot src={photos[photoIdx]} onUpload={v => { const ph = [...d.data.photos]; ph[photoIdx] = v; d.set("photos", ph); }}
                style={{ width: 150, height: 150, borderRadius: "50%", margin: "0 auto 20px", border: `1px solid rgba(201,169,110,.35)`, filter: "grayscale(20%)" }} label="Portrait" />
              <E d={d} k={nameKey} tag="h3" style={{ fontSize: "1.6rem", fontWeight: 400, color: ac, display: "block", marginBottom: 12, letterSpacing: ".1em" }} />
              <E d={d} k={bioKey} tag="p" style={{ fontSize: ".9rem", lineHeight: 1.9, color: "rgba(240,232,216,.55)", fontFamily: "'EB Garamond',serif", fontStyle: "italic" }} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Gallery ── */}
      <div style={{ padding: "50px 20px 80px" }}>
        <div style={{ fontSize: 10, letterSpacing: ".6em", color: ac, marginBottom: 30, textTransform: "uppercase", textAlign: "center", fontFamily: "Jost,sans-serif" }}>Our Gallery</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 3 }}>
          {photos.slice(2, 14).map((p, i) => (
            <PhotoSlot key={i+2} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i+2] = v; d.set("photos", ph); }}
              style={{ aspectRatio: i === 0 ? "2/1" : "1", gridColumn: i === 0 ? "span 2" : "span 1", filter: "grayscale(20%) contrast(1.08)" }} small />
          ))}
        </div>
      </div>

      {/* ── Details ── */}
      <div style={{ padding: "80px 40px", background: "#110e09" }}>
        <div style={{ fontSize: 10, letterSpacing: ".7em", color: ac, marginBottom: 40, textTransform: "uppercase", textAlign: "center", fontFamily: "Jost,sans-serif" }}>The Occasion</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 1, maxWidth: 860, margin: "0 auto", border: `1px solid rgba(201,169,110,.2)` }}>
          {[["Venue","venueName"],["City","venueCity"],["Ceremony","ceremony"],["Reception","reception"],["Dress Code","dresscode"],["RSVP By","rsvpDeadline"]].map(([lbl, key]) => (
            <div key={key} style={{ padding: "32px 24px", borderRight: `1px solid rgba(201,169,110,.15)`, borderBottom: `1px solid rgba(201,169,110,.15)` }}>
              <div style={{ fontSize: 9, letterSpacing: ".4em", color: ac, textTransform: "uppercase", marginBottom: 12, fontFamily: "Jost,sans-serif" }}>{lbl}</div>
              <E d={d} k={key} style={{ fontSize: ".9rem", color: "#f0e8d8", letterSpacing: ".05em" }} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Day Timeline ── */}
      <div style={{ padding: "80px 40px", maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 10, letterSpacing: ".6em", color: ac, marginBottom: 40, textTransform: "uppercase", fontFamily: "Jost,sans-serif" }}>Day of Schedule</div>
        {[
          ["3:00 PM", "Arrival & Welcome Drinks"],
          ["4:30 PM", "Ceremony"],
          ["5:30 PM", "Cocktail Hour"],
          ["7:00 PM", "Dinner"],
          ["9:00 PM", "First Dance & Celebration"],
          ["11:30 PM", "Farewell"],
        ].map(([time, event], i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 18, justifyContent: "center" }}>
            <span style={{ fontSize: ".85rem", color: ac, letterSpacing: ".15em", fontFamily: "Jost,sans-serif", width: 90, textAlign: "right", flexShrink: 0 }}>{time}</span>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: ac, flexShrink: 0 }} />
            <span style={{ fontSize: ".9rem", color: "rgba(240,232,216,.65)", letterSpacing: ".08em", textAlign: "left" }}>{event}</span>
          </div>
        ))}
      </div>

      {/* ── Bottom gallery ── */}
      <div style={{ padding: "0 12px 60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 3 }}>
          {photos.slice(14, 20).map((p, i) => (
            <PhotoSlot key={i+14} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i+14] = v; d.set("photos", ph); }}
              style={{ aspectRatio: "1", filter: "grayscale(20%) contrast(1.05)" }} small />
          ))}
        </div>
      </div>

      <div style={{ background: "#0d0a07", padding: "40px", textAlign: "center", borderTop: `1px solid rgba(201,169,110,.15)` }}>
        <E d={d} k="footerNote" style={{ fontSize: ".9rem", color: ac, letterSpacing: ".2em", fontFamily: "Jost,sans-serif", fontWeight: 200 }} />
      </div>
    </div>
  );
};

export default T3_MidnightLuxe;