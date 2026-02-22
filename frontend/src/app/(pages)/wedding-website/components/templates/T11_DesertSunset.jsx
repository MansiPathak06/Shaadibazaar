import EditableField from "../EditableField";
import PhotoSlot from "../PhotoSlot";

const E = EditableField;

const T11_DesertSunset = ({ d }) => {
  const ac = d.data.accentColor || "#e07b39";
  const photos = d.data.photos;

  return (
    <div style={{ fontFamily: "'Raleway', sans-serif", color: "#2d1a0a", background: "#fdf6ee" }}>
      <div style={{ position: "relative", minHeight: 600, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center", overflow: "hidden", background: "linear-gradient(170deg, #1a0a02, #3d1a06, #7a3010, #c85020, #e07b39, #f5c47a)" }}>
        <PhotoSlot src={d.data.coverPhoto} onUpload={v => d.set("coverPhoto", v)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .35 }} label="Cover Photo" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, rgba(26,10,2,.72))" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "100px 40px" }}>
          <div className="fu" style={{ fontSize: 10, letterSpacing: ".6em", color: "#f5c47a", textTransform: "uppercase", marginBottom: 24, fontWeight: 200 }}>A Desert Wedding</div>
          <E d={d} k="coupleName" tag="h1" className="fu2" style={{ fontSize: "clamp(2.5rem,8vw,5rem)", fontWeight: 100, margin: "0 0 22px", color: "white", letterSpacing: ".15em" }} />
          <div style={{ width: 80, height: 1, background: `linear-gradient(to right, transparent, #f5c47a, transparent)`, margin: "0 auto 22px" }} />
          <E d={d} k="date" className="fu3" style={{ fontSize: "1.1rem", color: "#f5c47a", letterSpacing: ".25em", display: "block", marginBottom: 14, textTransform: "uppercase" }} />
          <E d={d} k="venueName" style={{ fontSize: ".9rem", color: "rgba(245,196,122,.7)", letterSpacing: ".15em", display: "block", marginBottom: 6 }} />
          <E d={d} k="venueCity" style={{ fontSize: ".8rem", color: "rgba(245,196,122,.5)", letterSpacing: ".12em" }} />
        </div>
      </div>

      <div style={{ padding: "50px 40px 20px", textAlign: "center" }}>
        <E d={d} k="welcomeMessage" tag="p" dark style={{ fontSize: "1.1rem", color: ac, fontStyle: "italic", maxWidth: 560, margin: "0 auto", fontWeight: 300 }} />
      </div>

      {/* Story */}
      <div style={{ padding: "60px 40px 60px", maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <div style={{ width: 60, height: 3, background: `linear-gradient(to right, ${ac}, #f5c47a)`, margin: "0 auto 30px", borderRadius: 2 }} />
        <div style={{ fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: "#c84828", marginBottom: 18, fontWeight: 300 }}>Our Love Story</div>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 100, color: "#3d1a06", marginBottom: 28, letterSpacing: ".1em" }}>Written in the Sand</h2>
        <E d={d} k="story" tag="p" dark style={{ fontSize: "1.1rem", lineHeight: 1.95, color: "#5a3a1a", fontStyle: "italic", fontWeight: 300, marginBottom: 22 }} />
        <E d={d} k="storyChapter2" tag="p" dark style={{ fontSize: "1.05rem", lineHeight: 1.95, color: "#6a4a2a", fontStyle: "italic", fontWeight: 300, marginBottom: 22 }} />
        <E d={d} k="storyChapter3" tag="p" dark style={{ fontSize: "1.05rem", lineHeight: 1.95, color: "#6a4a2a", fontStyle: "italic", fontWeight: 300 }} />
      </div>

      {/* Milestones */}
      <div style={{ padding: "0 40px 60px", maxWidth: 820, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {[["🌵 How We Met", "howWeMet"], ["🌅 The Proposal", "proposal"]].map(([title, key]) => (
            <div key={key} style={{ padding: "32px 26px", background: "#f8ede0", borderBottom: `3px solid ${ac}` }}>
              <div style={{ fontSize: 10, letterSpacing: ".3em", textTransform: "uppercase", color: "#c84828", marginBottom: 12, fontWeight: 300 }}>{title}</div>
              <E d={d} k={key} tag="p" dark style={{ fontSize: ".95rem", lineHeight: 1.85, color: "#5a3a1a", fontStyle: "italic", fontWeight: 300 }} />
            </div>
          ))}
        </div>
      </div>

      {/* Meet the couple */}
      <div style={{ padding: "60px 40px 70px", background: "#f8ede0" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: "#c84828", marginBottom: 36, fontWeight: 300 }}>The Happy Couple</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            {[{ nameKey: "groom", bioKey: "groomBio", photoIdx: 0 }, { nameKey: "bride", bioKey: "brideBio", photoIdx: 1 }].map(({ nameKey, bioKey, photoIdx }) => (
              <div key={nameKey}>
                <PhotoSlot src={photos[photoIdx]} onUpload={v => { const ph = [...d.data.photos]; ph[photoIdx] = v; d.set("photos", ph); }}
                  style={{ width: 150, height: 150, borderRadius: "50%", margin: "0 auto 18px", border: `4px solid ${ac}40` }} label="Portrait" />
                <E d={d} k={nameKey} tag="h3" dark style={{ fontSize: "1.6rem", fontWeight: 100, color: "#3d1a06", display: "block", marginBottom: 12, letterSpacing: ".15em" }} />
                <E d={d} k={bioKey} tag="p" dark style={{ fontSize: ".9rem", lineHeight: 1.85, color: "#5a3a1a", fontStyle: "italic", fontWeight: 300 }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div style={{ padding: "50px 16px 60px", background: "#fdf6ee" }}>
        <div style={{ fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: "#c84828", marginBottom: 28, textAlign: "center", fontWeight: 300 }}>Our Gallery</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 5, maxWidth: 1000, margin: "0 auto" }}>
          {photos.slice(2, 12).map((p, i) => (
            <PhotoSlot key={i+2} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i+2] = v; d.set("photos", ph); }}
              style={{ aspectRatio: i % 5 === 2 ? "1/1.5" : "1", filter: "saturate(1.15) contrast(1.05)" }} small />
          ))}
        </div>
      </div>

      {/* Details */}
      <div style={{ padding: "70px 40px", background: "linear-gradient(135deg, #3d1a06, #7a3010)" }}>
        <h2 style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: 100, color: "#f5c47a", marginBottom: 40, letterSpacing: ".5em", textTransform: "uppercase" }}>The Details</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, maxWidth: 860, margin: "0 auto" }}>
          {[["🏜","Venue","venueName"],["🌵","Location","venueCity"],["🌅","Ceremony","ceremony"],["🔥","Reception","reception"],["👘","Dress","dresscode"],["📩","RSVP","rsvpDeadline"]].map(([ico, lbl, key]) => (
            <div key={key} style={{ textAlign: "center", padding: "22px 14px", borderBottom: `1px solid rgba(245,196,122,.2)` }}>
              <div style={{ fontSize: 22, marginBottom: 8 }}>{ico}</div>
              <div style={{ fontSize: 9, letterSpacing: ".3em", color: "rgba(245,196,122,.6)", textTransform: "uppercase", marginBottom: 8, fontFamily: "Jost,sans-serif" }}>{lbl}</div>
              <E d={d} k={key} style={{ color: "#f5c47a", fontSize: ".88rem" }} />
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div style={{ padding: "80px 40px", maxWidth: 680, margin: "0 auto" }}>
        <div style={{ fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: "#c84828", marginBottom: 36, textAlign: "center", fontWeight: 300 }}>Day of Schedule</div>
        {[["3:00 PM","Sunset Arrival","Welcome with agave cocktails and desert appetizers."],["4:30 PM","Ceremony","Vows exchanged as the sun begins to set."],["5:30 PM","Cocktail Hour","Golden hour drinks under the open sky."],["7:00 PM","Feast","A farm-to-table dinner under the stars."],["9:00 PM","Bonfire & Dancing","Dance around the fire until midnight."],["11:30 PM","Farewell","A warm desert goodbye with sparks flying."]].map(([time, title, desc], i) => (
          <div key={i} style={{ display: "flex", gap: 20, marginBottom: 26, alignItems: "flex-start" }}>
            <div style={{ width: 90, textAlign: "right", flexShrink: 0 }}><span style={{ fontSize: ".85rem", color: ac, fontWeight: 300 }}>{time}</span></div>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: ac, marginTop: 6, flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: ".95rem", color: "#3d1a06", marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: ".85rem", color: "#8a5a3a", lineHeight: 1.7, fontWeight: 300 }}>{desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom strip */}
      <div style={{ padding: "0 16px 50px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 4, maxWidth: 1000, margin: "0 auto" }}>
          {photos.slice(12, 20).map((p, i) => (
            <PhotoSlot key={i+12} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i+12] = v; d.set("photos", ph); }}
              style={{ aspectRatio: "1", filter: "saturate(1.1)" }} small />
          ))}
        </div>
      </div>
          
      <div style={{ background: "#1a0a02", padding: "38px", textAlign: "center" }}>
        <E d={d} k="footerNote" style={{ fontSize: ".88rem", color: "#f5c47a", letterSpacing: ".25em", fontWeight: 200 }} />
      </div>
    </div>
  );
};

export default T11_DesertSunset;