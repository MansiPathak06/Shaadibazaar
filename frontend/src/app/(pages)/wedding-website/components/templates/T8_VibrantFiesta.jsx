import EditableField from "../EditableField";
import PhotoSlot from "../PhotoSlot";
import SharedFooter from "../SharedFooter";

const E = EditableField;

const T8_VibrantFiesta = ({ d }) => {
  const ac = d.data.accentColor || "#e63946";
  const photos = d.data.photos;
  const colors = ["#e63946","#ff6b35","#ffd700","#06d6a0","#4361ee","#b5179e"];

  return (
    <div style={{ fontFamily: "'Josefin Sans', sans-serif", color: "#1a1a2e", background: "#fffef8" }}>
      <div style={{ position: "relative", minHeight: 600, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center", overflow: "hidden", background: "linear-gradient(135deg, #fff700, #ff6b35, #e63946, #b5179e)" }} className="grad-anim">
        <PhotoSlot src={d.data.coverPhoto} onUpload={v => d.set("coverPhoto", v)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .25 }} label="Cover Photo" />
        <div style={{ position: "relative", zIndex: 2, padding: "100px 40px" }}>
          <div className="fu" style={{ fontSize: 52, marginBottom: 16 }}>🎊</div>
          <E d={d} k="coupleName" tag="h1" className="fu2" style={{ fontSize: "clamp(2.5rem,8vw,5.5rem)", fontWeight: 700, margin: "0 0 18px", lineHeight: 1.05, color: "white", textTransform: "uppercase", letterSpacing: ".06em", textShadow: "2px 2px 0px rgba(0,0,0,.2)" }} />
          <E d={d} k="welcomeMessage" style={{ fontSize: "1rem", color: "rgba(255,255,255,.85)", display: "block", marginBottom: 18, fontWeight: 300, letterSpacing: ".2em" }} />
          <E d={d} k="date" style={{ fontSize: "1.3rem", color: "rgba(255,255,255,.95)", display: "block", marginBottom: 12, fontWeight: 300, letterSpacing: ".3em" }} />
          <E d={d} k="venueName" style={{ fontSize: "1rem", color: "rgba(255,255,255,.8)", letterSpacing: ".15em", fontWeight: 300, display: "block", marginBottom: 6 }} />
          <E d={d} k="venueCity" style={{ fontSize: ".9rem", color: "rgba(255,255,255,.6)", letterSpacing: ".1em", fontWeight: 300 }} />
        </div>
      </div>

      {/* Colorful story section */}
      <div style={{ padding: "80px 40px", background: "#1a1a2e" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11, letterSpacing: ".5em", color: "#ffd700", marginBottom: 24, textTransform: "uppercase" }}>Our Love Story</div>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "white", marginBottom: 28, letterSpacing: ".05em" }}>HOW WE FOUND EACH OTHER</h2>
          <E d={d} k="story" tag="p" style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "rgba(255,255,255,.75)", fontWeight: 300, marginBottom: 22 }} />
          <E d={d} k="storyChapter2" tag="p" style={{ fontSize: "1.02rem", lineHeight: 1.9, color: "rgba(255,255,255,.6)", fontWeight: 300, marginBottom: 22 }} />
          <E d={d} k="storyChapter3" tag="p" style={{ fontSize: "1.02rem", lineHeight: 1.9, color: "rgba(255,255,255,.6)", fontWeight: 300 }} />
        </div>
      </div>

      {/* Milestones */}
      <div style={{ padding: "60px 40px", background: "#fffef8" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[["🎉 How We Met", "howWeMet", "#e63946"], ["💍 The Proposal", "proposal", "#4361ee"]].map(([title, key, col]) => (
              <div key={key} style={{ padding: "32px 24px", borderRadius: 16, background: `${col}10`, borderTop: `4px solid ${col}` }}>
                <div style={{ fontSize: 10, letterSpacing: ".3em", color: col, textTransform: "uppercase", marginBottom: 12, fontWeight: 600 }}>{title}</div>
                <E d={d} k={key} tag="p" dark style={{ fontSize: ".95rem", lineHeight: 1.85, color: "#1a1a2e", fontWeight: 300 }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meet the couple */}
      <div style={{ padding: "60px 40px 70px", background: "#1a1a2e" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11, letterSpacing: ".5em", color: "#ffd700", marginBottom: 36, textTransform: "uppercase" }}>The Happy Couple</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            {[{ nameKey: "groom", bioKey: "groomBio", photoIdx: 0, col: "#e63946" }, { nameKey: "bride", bioKey: "brideBio", photoIdx: 1, col: "#b5179e" }].map(({ nameKey, bioKey, photoIdx, col }) => (
              <div key={nameKey}>
                <PhotoSlot src={d.data.photos[photoIdx]} onUpload={v => { const ph = [...d.data.photos]; ph[photoIdx] = v; d.set("photos", ph); }}
                  style={{ width: 150, height: 150, borderRadius: "50%", margin: "0 auto 18px", border: `4px solid ${col}` }} label="Portrait" />
                <E d={d} k={nameKey} tag="h3" style={{ fontSize: "1.4rem", fontWeight: 700, color: col, display: "block", marginBottom: 10, textTransform: "uppercase", letterSpacing: ".05em" }} />
                <E d={d} k={bioKey} tag="p" style={{ fontSize: ".9rem", lineHeight: 1.85, color: "rgba(255,255,255,.6)", fontWeight: 300 }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Colorful gallery */}
      <div style={{ padding: "50px 16px 60px" }}>
        <div style={{ fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: ac, marginBottom: 24, textAlign: "center", fontWeight: 600 }}>Our Gallery</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6, maxWidth: 1000, margin: "0 auto" }}>
          {photos.slice(2, 12).map((p, i) => (
            <PhotoSlot key={i+2} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i+2] = v; d.set("photos", ph); }}
              style={{ aspectRatio: "1", borderRadius: 8, border: `3px solid ${colors[i%6]}` }} small />
          ))}
        </div>
      </div>

      {/* Colorful details */}
      <div style={{ padding: "60px 40px", background: "#fffef8" }}>
        <div style={{ fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: ac, marginBottom: 32, textAlign: "center", fontWeight: 600 }}>Celebration Details</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14, maxWidth: 900, margin: "0 auto" }}>
          {[["🎉","#e63946","Venue","venueName"],["🗺","#ff6b35","City","venueCity"],["💍","#ffd700","Ceremony","ceremony"],["🥂","#06d6a0","Reception","reception"],["👠","#4361ee","Dress Code","dresscode"],["📩","#b5179e","RSVP By","rsvpDeadline"]].map(([ico, col, lbl, key]) => (
            <div key={key} style={{ textAlign: "center", padding: "22px 12px", borderRadius: 16, background: `${col}15`, borderTop: `4px solid ${col}` }}>
              <div style={{ fontSize: 22, marginBottom: 8 }}>{ico}</div>
              <div style={{ fontSize: 9, letterSpacing: ".25em", color: col, textTransform: "uppercase", marginBottom: 8, fontWeight: 600 }}>{lbl}</div>
              <E d={d} k={key} dark style={{ fontSize: ".85rem", fontWeight: 400, color: "#1a1a2e" }} />
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div style={{ padding: "70px 40px", background: "#1a1a2e" }}>
        <div style={{ fontSize: 11, letterSpacing: ".5em", color: "#ffd700", marginBottom: 36, textTransform: "uppercase", textAlign: "center" }}>Day of Schedule</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, maxWidth: 860, margin: "0 auto" }}>
          {[["3:00 PM","🎊","Arrival","Welcome with festive cocktails!"],["4:30 PM","💍","Ceremony","The big moment has arrived."],["5:30 PM","🥂","Cocktails","Celebrate and mingle!"],["7:00 PM","🍽","Dinner","A feast fit for a fiesta."],["9:00 PM","💃","Dancing","Hit the dance floor!"],["11:30 PM","🎇","Farewell","One last dance and goodbye."]].map(([time, ico, title, desc], i) => (
            <div key={i} style={{ padding: "20px 16px", borderRadius: 12, background: `${colors[i]}15`, borderLeft: `3px solid ${colors[i]}` }}>
              <div style={{ fontSize: 20, marginBottom: 6 }}>{ico}</div>
              <div style={{ fontSize: 10, letterSpacing: ".25em", color: colors[i], textTransform: "uppercase", marginBottom: 6, fontWeight: 600 }}>{time}</div>
              <div style={{ fontWeight: 700, color: "white", marginBottom: 6, fontSize: ".9rem" }}>{title}</div>
              <div style={{ fontSize: ".8rem", color: "rgba(255,255,255,.5)", lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom strip */}
      <div style={{ padding: "40px 16px 60px", background: "#fffef8" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 6, maxWidth: 1000, margin: "0 auto" }}>
          {photos.slice(12, 20).map((p, i) => (
            <PhotoSlot key={i+12} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i+12] = v; d.set("photos", ph); }}
              style={{ aspectRatio: "1", borderRadius: 8, border: `2px solid ${colors[i%6]}30` }} small />
          ))}
        </div>
      </div>

      <SharedFooter d={d} ac={ac} vibrant />
    </div>
  );
};

export default T8_VibrantFiesta;