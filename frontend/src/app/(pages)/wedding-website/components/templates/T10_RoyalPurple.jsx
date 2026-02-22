// T10 — Royal Purple
import EditableField from "../EditableField";
import PhotoSlot from "../PhotoSlot";
import SharedFooter from "../SharedFooter";

const E = EditableField;

export const T10_RoyalPurple = ({ d }) => {
  const ac = d.data.accentColor || "#9b59b6";
  const photos = d.data.photos;
  return (
    <div style={{ fontFamily: "'Cinzel', serif", color: "#1a0a2e", background: "#0f0020" }}>
      <div style={{ position: "relative", minHeight: 620, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center", overflow: "hidden", background: "linear-gradient(135deg, #1a0a2e, #2e0a4e, #4e1a6e)" }}>
        <PhotoSlot src={d.data.coverPhoto} onUpload={v => d.set("coverPhoto", v)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .3 }} label="Cover Photo" />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(155,89,182,.15) 0%, rgba(10,0,20,.5) 70%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,.8) 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: .06 }} />
        <div style={{ position: "relative", zIndex: 2, padding: "100px 40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "center", marginBottom: 30 }}>
            <div style={{ height: 1, width: 60, background: `linear-gradient(to right, transparent, ${ac})` }} />
            <span style={{ color: ac, fontSize: 18 }}>👑</span>
            <div style={{ height: 1, width: 60, background: `linear-gradient(to left, transparent, ${ac})` }} />
          </div>
          <div style={{ fontSize: 10, letterSpacing: ".6em", color: "rgba(240,224,255,.6)", marginBottom: 24, textTransform: "uppercase", fontFamily: "Jost,sans-serif", fontWeight: 200 }}>A Royal Celebration</div>
          <E d={d} k="coupleName" tag="h1" style={{ fontSize: "clamp(2rem,6vw,4.5rem)", fontWeight: 600, margin: "0 0 22px", lineHeight: 1.1, color: "#f0e0ff", letterSpacing: ".15em" }} />
          <div style={{ height: 1, background: `linear-gradient(to right, transparent, ${ac}, transparent)`, marginBottom: 22 }} />
          <E d={d} k="date" style={{ fontSize: "1rem", color: ac, letterSpacing: ".4em", display: "block", marginBottom: 14, textTransform: "uppercase" }} />
          <E d={d} k="venueName" style={{ fontSize: ".85rem", color: "rgba(240,224,255,.55)", letterSpacing: ".2em", fontFamily: "Jost,sans-serif", fontWeight: 200, display: "block", marginBottom: 6 }} />
          <E d={d} k="venueCity" style={{ fontSize: ".8rem", color: "rgba(240,224,255,.35)", letterSpacing: ".2em", fontFamily: "Jost,sans-serif", fontWeight: 200 }} />
        </div>
      </div>

      <div style={{ padding: "50px 40px 20px", textAlign: "center", background: "#0f0020" }}>
        <E d={d} k="welcomeMessage" tag="p" style={{ fontSize: "1.1rem", color: `${ac}bb`, fontStyle: "italic", letterSpacing: ".05em", fontFamily: "'EB Garamond',serif" }} />
      </div>

      <div style={{ padding: "60px 40px 70px", maxWidth: 720, margin: "0 auto", textAlign: "center", background: "#0f0020" }}>
        <div style={{ fontSize: 9, letterSpacing: ".7em", color: ac, marginBottom: 28, textTransform: "uppercase", fontFamily: "Jost,sans-serif" }}>Our Story</div>
        <h2 style={{ fontSize: "2rem", fontWeight: 600, color: "#f0e0ff", marginBottom: 30, letterSpacing: ".1em" }}>A Story Fit For Royalty</h2>
        <E d={d} k="story" tag="p" style={{ fontSize: "1.05rem", lineHeight: 2, color: "rgba(240,224,255,.65)", fontFamily: "'EB Garamond', serif", fontStyle: "italic", marginBottom: 22 }} />
        <E d={d} k="storyChapter2" tag="p" style={{ fontSize: "1.02rem", lineHeight: 2, color: "rgba(240,224,255,.55)", fontFamily: "'EB Garamond', serif", fontStyle: "italic", marginBottom: 22 }} />
        <E d={d} k="storyChapter3" tag="p" style={{ fontSize: "1.02rem", lineHeight: 2, color: "rgba(240,224,255,.55)", fontFamily: "'EB Garamond', serif", fontStyle: "italic" }} />
      </div>

      <div style={{ padding: "0 40px 70px", maxWidth: 820, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {[["👑 How We Met", "howWeMet"], ["💜 The Proposal", "proposal"]].map(([title, key]) => (
            <div key={key} style={{ padding: "32px 24px", background: "rgba(155,89,182,.08)", border: `1px solid rgba(155,89,182,.25)` }}>
              <div style={{ fontSize: 9, letterSpacing: ".5em", color: ac, textTransform: "uppercase", marginBottom: 14, fontFamily: "Jost,sans-serif" }}>{title}</div>
              <E d={d} k={key} tag="p" style={{ fontSize: ".95rem", lineHeight: 1.9, color: "rgba(240,224,255,.6)", fontFamily: "'EB Garamond',serif", fontStyle: "italic" }} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "60px 40px 70px", background: "#16002e" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 9, letterSpacing: ".6em", color: ac, marginBottom: 36, textTransform: "uppercase", fontFamily: "Jost,sans-serif" }}>The Royal Couple</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            {[{ nameKey: "groom", bioKey: "groomBio", photoIdx: 0 }, { nameKey: "bride", bioKey: "brideBio", photoIdx: 1 }].map(({ nameKey, bioKey, photoIdx }) => (
              <div key={nameKey}>
                <PhotoSlot src={photos[photoIdx]} onUpload={v => { const ph = [...d.data.photos]; ph[photoIdx] = v; d.set("photos", ph); }}
                  style={{ width: 140, height: 140, borderRadius: "50%", margin: "0 auto 18px", border: `2px solid rgba(155,89,182,.4)`, filter: "contrast(1.1) brightness(.95)" }} label="Portrait" />
                <E d={d} k={nameKey} tag="h3" style={{ fontSize: "1.5rem", fontWeight: 600, color: ac, display: "block", marginBottom: 12, letterSpacing: ".15em" }} />
                <E d={d} k={bioKey} tag="p" style={{ fontSize: ".88rem", lineHeight: 1.85, color: "rgba(240,224,255,.5)", fontFamily: "'EB Garamond',serif", fontStyle: "italic" }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: "50px 12px 70px", background: "#0a0018" }}>
        <div style={{ fontSize: 9, letterSpacing: ".6em", color: ac, marginBottom: 24, textTransform: "uppercase", textAlign: "center", fontFamily: "Jost,sans-serif" }}>Our Gallery</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 3, maxWidth: 1000, margin: "0 auto" }}>
          {photos.slice(2, 12).map((p, i) => (
            <PhotoSlot key={i+2} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i+2] = v; d.set("photos", ph); }}
              style={{ aspectRatio: "1", filter: "contrast(1.1) brightness(.9)", border: `1px solid rgba(155,89,182,.2)` }} small />
          ))}
        </div>
      </div>

      <div style={{ padding: "70px 40px", background: "#16002e" }}>
        <div style={{ fontSize: 9, letterSpacing: ".6em", color: ac, marginBottom: 36, textTransform: "uppercase", textAlign: "center", fontFamily: "Jost,sans-serif" }}>The Occasion</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 1, maxWidth: 860, margin: "0 auto", border: `1px solid rgba(155,89,182,.25)` }}>
          {[["Venue","venueName"],["City","venueCity"],["Ceremony","ceremony"],["Reception","reception"],["Dress","dresscode"],["RSVP","rsvpDeadline"]].map(([lbl, key]) => (
            <div key={key} style={{ padding: "28px 22px", textAlign: "center", borderRight: `1px solid rgba(155,89,182,.2)`, borderBottom: `1px solid rgba(155,89,182,.2)` }}>
              <div style={{ fontSize: 9, letterSpacing: ".4em", color: ac, textTransform: "uppercase", marginBottom: 10, fontFamily: "Jost,sans-serif" }}>{lbl}</div>
              <E d={d} k={key} style={{ fontSize: ".88rem", color: "#e0d0f8", letterSpacing: ".08em" }} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "80px 40px", maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 9, letterSpacing: ".6em", color: ac, marginBottom: 36, textTransform: "uppercase", fontFamily: "Jost,sans-serif" }}>Day of Schedule</div>
        {[["3:00 PM","Royal Arrival","Welcome reception with champagne."],["4:30 PM","The Ceremony","A regal exchange of vows."],["5:30 PM","Cocktail Hour","Mingling in the grand hall."],["7:00 PM","Royal Feast","A banquet befitting royalty."],["9:00 PM","First Dance","The night's grandest moment."],["11:30 PM","Farewell","A royal goodbye until we meet again."]].map(([time, title, desc], i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 20, justifyContent: "center" }}>
            <span style={{ fontSize: ".8rem", color: ac, letterSpacing: ".2em", fontFamily: "Jost,sans-serif", width: 90, textAlign: "right", flexShrink: 0 }}>{time}</span>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: ac, flexShrink: 0 }} />
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: ".88rem", color: "#f0e0ff", letterSpacing: ".1em", marginBottom: 2 }}>{title}</div>
              <div style={{ fontSize: ".78rem", color: "rgba(240,224,255,.4)", fontFamily: "Jost,sans-serif" }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: "0 12px 50px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 3 }}>
          {photos.slice(12, 20).map((p, i) => (
            <PhotoSlot key={i+12} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i+12] = v; d.set("photos", ph); }}
              style={{ aspectRatio: "1", filter: "grayscale(20%) contrast(1.05)" }} small />
          ))}
        </div>
      </div>

      <div style={{ background: "#0a0018", padding: "40px", textAlign: "center", borderTop: `1px solid rgba(155,89,182,.15)` }}>
        <E d={d} k="footerNote" style={{ fontSize: ".88rem", color: ac, letterSpacing: ".25em", fontFamily: "Jost,sans-serif", fontWeight: 200 }} />
      </div>
    </div>
  );
};