// T5 — Coastal Blue
import EditableField from "../EditableField";
import PhotoSlot from "../PhotoSlot";
import SharedFooter from "../SharedFooter";

const E = EditableField;

export const T5_CoastalBlue = ({ d }) => {
  const ac = d.data.accentColor || "#2e7eb8";
  const photos = d.data.photos;
  return (
    <div style={{ fontFamily: "'Raleway', sans-serif", color: "#1a3a52", background: "#f0f7fc" }}>
      <div style={{ position: "relative", minHeight: 580, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center", overflow: "hidden", background: `linear-gradient(165deg, #e8f4fd, #c8e6f8, #a8d4ef)` }}>
        <PhotoSlot src={d.data.coverPhoto} onUpload={v => d.set("coverPhoto", v)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .5 }} label="Cover Photo" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(14,56,84,.1), rgba(14,56,84,.55))" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "100px 40px" }}>
          <div className="fu" style={{ fontSize: 11, letterSpacing: ".5em", color: "rgba(255,255,255,.85)", textTransform: "uppercase", marginBottom: 24, fontWeight: 300 }}>You're Invited</div>
          <E d={d} k="coupleName" tag="h1" className="fu2" style={{ fontSize: "clamp(2.5rem,8vw,5rem)", fontWeight: 100, margin: "0 0 22px", lineHeight: 1.1, color: "white", letterSpacing: ".05em" }} />
          <div style={{ width: 50, height: 2, background: "white", margin: "0 auto 22px", opacity: .7 }} />
          <E d={d} k="date" className="fu3" style={{ fontSize: "1.2rem", color: "rgba(255,255,255,.9)", display: "block", marginBottom: 12, letterSpacing: ".1em" }} />
          <E d={d} k="venueName" style={{ fontSize: ".95rem", color: "rgba(255,255,255,.75)", letterSpacing: ".08em", display: "block", marginBottom: 6 }} />
          <E d={d} k="venueCity" style={{ fontSize: ".85rem", color: "rgba(255,255,255,.55)", letterSpacing: ".08em" }} />
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 60'%3E%3Cpath d='M0,30 Q300,60 600,30 Q900,0 1200,30 L1200,60 L0,60 Z' fill='%23f0f7fc'/%3E%3C/svg%3E\") no-repeat bottom / cover" }} />
      </div>

      <div style={{ padding: "60px 40px 30px", textAlign: "center" }}>
        <E d={d} k="welcomeMessage" tag="p" dark style={{ fontSize: "1.1rem", color: ac, fontStyle: "italic", maxWidth: 560, margin: "0 auto" }} />
      </div>

      <div style={{ padding: "50px 40px 70px", maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <div style={{ width: 50, height: 3, background: ac, margin: "0 auto 30px", borderRadius: 2 }} />
        <div style={{ fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: "#5a9abf", marginBottom: 18, fontFamily: "Jost,sans-serif" }}>Our Love Story</div>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 300, color: "#1a3a52", marginBottom: 28 }}>How It All Began</h2>
        <E d={d} k="story" tag="p" dark style={{ fontSize: "1.08rem", lineHeight: 1.95, color: "#2a4a62", fontWeight: 300, marginBottom: 22 }} />
        <E d={d} k="storyChapter2" tag="p" dark style={{ fontSize: "1.05rem", lineHeight: 1.95, color: "#3a5a72", fontWeight: 300, marginBottom: 22 }} />
        <E d={d} k="storyChapter3" tag="p" dark style={{ fontSize: "1.05rem", lineHeight: 1.95, color: "#3a5a72", fontWeight: 300 }} />
      </div>

      {/* Milestones */}
      <div style={{ padding: "0 40px 70px", maxWidth: 820, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {[["🌊 How We Met", "howWeMet"], ["💍 The Proposal", "proposal"]].map(([title, key]) => (
            <div key={key} style={{ padding: "32px 24px", background: "white", borderRadius: 12, borderTop: `3px solid ${ac}`, boxShadow: "0 2px 16px rgba(46,126,184,.08)" }}>
              <div style={{ fontSize: 11, letterSpacing: ".3em", color: ac, textTransform: "uppercase", marginBottom: 14, fontFamily: "Jost,sans-serif" }}>{title}</div>
              <E d={d} k={key} tag="p" dark style={{ fontSize: ".95rem", lineHeight: 1.85, color: "#2a4a62", fontWeight: 300 }} />
            </div>
          ))}
        </div>
      </div>

      {/* Meet the couple */}
      <div style={{ padding: "60px 40px 70px", background: "#e8f4fd" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: ac, marginBottom: 36, fontFamily: "Jost,sans-serif" }}>The Happy Couple</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            {[{ nameKey: "groom", bioKey: "groomBio", photoIdx: 0 }, { nameKey: "bride", bioKey: "brideBio", photoIdx: 1 }].map(({ nameKey, bioKey, photoIdx }) => (
              <div key={nameKey}>
                <PhotoSlot src={photos[photoIdx]} onUpload={v => { const ph = [...d.data.photos]; ph[photoIdx] = v; d.set("photos", ph); }}
                  style={{ width: 150, height: 150, borderRadius: "50%", margin: "0 auto 18px", border: `4px solid ${ac}30` }} label="Portrait" />
                <E d={d} k={nameKey} tag="h3" dark style={{ fontSize: "1.5rem", fontWeight: 300, color: "#1a3a52", display: "block", marginBottom: 10, letterSpacing: ".05em" }} />
                <E d={d} k={bioKey} tag="p" dark style={{ fontSize: ".9rem", lineHeight: 1.85, color: "#3a5a72", fontWeight: 300 }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div style={{ padding: "50px 16px 30px", background: "white" }}>
        <div style={{ fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: ac, marginBottom: 28, fontFamily: "Jost,sans-serif", textAlign: "center" }}>Our Gallery</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8, maxWidth: 1000, margin: "0 auto" }}>
          {photos.slice(2, 12).map((p, i) => (
            <PhotoSlot key={i+2} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i+2] = v; d.set("photos", ph); }}
              style={{ aspectRatio: "1", borderRadius: "50%", border: `3px solid #e8f4fd`, boxShadow: "0 3px 16px rgba(46,126,184,.12)" }} small />
          ))}
        </div>
      </div>

      {/* Details */}
      <div style={{ padding: "70px 40px", background: ac }}>
        <h2 style={{ textAlign: "center", fontSize: "1.8rem", fontWeight: 300, color: "white", marginBottom: 40, letterSpacing: ".2em", textTransform: "uppercase" }}>Event Details</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, maxWidth: 860, margin: "0 auto" }}>
          {[["🌊","Venue","venueName"],["📍","City","venueCity"],["💍","Ceremony","ceremony"],["🥂","Reception","reception"],["👗","Dress Code","dresscode"],["📮","RSVP By","rsvpDeadline"]].map(([ico, lbl, key]) => (
            <div key={key} style={{ background: "rgba(255,255,255,.15)", borderRadius: 12, padding: "24px 16px", textAlign: "center" }}>
              <div style={{ fontSize: 22, marginBottom: 8 }}>{ico}</div>
              <div style={{ fontSize: 9, letterSpacing: ".3em", color: "rgba(255,255,255,.7)", textTransform: "uppercase", marginBottom: 8, fontFamily: "Jost,sans-serif" }}>{lbl}</div>
              <E d={d} k={key} style={{ color: "white", fontSize: ".88rem" }} />
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div style={{ padding: "80px 40px", maxWidth: 680, margin: "0 auto" }}>
        <div style={{ fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: ac, marginBottom: 36, fontFamily: "Jost,sans-serif", textAlign: "center" }}>Day Schedule</div>
        {[["3:00 PM","Arrival","Welcome drinks on the waterfront terrace."],["4:30 PM","Ceremony","Vows exchanged with the sea breeze as witness."],["5:30 PM","Cocktails","Sip and celebrate with ocean views."],["7:00 PM","Dinner","A feast of fresh flavours by the shore."],["9:00 PM","Dancing","Dance the night away under the stars."],["11:30 PM","Farewell","A seaside send-off to remember."]].map(([time, title, desc], i) => (
          <div key={i} style={{ display: "flex", gap: 20, marginBottom: 24, alignItems: "flex-start" }}>
            <div style={{ width: 90, textAlign: "right", flexShrink: 0 }}><span style={{ fontSize: ".85rem", color: ac, letterSpacing: ".1em" }}>{time}</span></div>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: ac, marginTop: 5, flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: ".95rem", color: "#1a3a52", marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: ".85rem", color: "#5a8aaa", lineHeight: 1.7 }}>{desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom gallery strip */}
      <div style={{ padding: "0 16px 60px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 6 }}>
          {photos.slice(12, 20).map((p, i) => (
            <PhotoSlot key={i+12} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i+12] = v; d.set("photos", ph); }}
              style={{ aspectRatio: "1", borderRadius: 8 }} small />
          ))}
        </div>
      </div>

      <SharedFooter d={d} ac={ac} />
    </div>
  );
};