import EditableField from "../EditableField";
import PhotoSlot from "../PhotoSlot";
import SharedFooter from "../SharedFooter";

const E = EditableField;

const T9_PastelDream = ({ d }) => {
  const ac = d.data.accentColor || "#b088b4";
  const photos = d.data.photos;
  const pastelCols = ["#fce4ff","#e8d5ff","#d4f0ff","#ffe8f4"];

  return (
    <div style={{ fontFamily: "'EB Garamond', serif", color: "#3a2d44", background: "#fdf8ff" }}>
      <div style={{ position: "relative", minHeight: 600, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center", overflow: "hidden", background: "linear-gradient(135deg, #fce4ff, #e8d5ff, #d4f0ff, #ffe8f4)" }} className="grad-anim">
        <PhotoSlot src={d.data.coverPhoto} onUpload={v => d.set("coverPhoto", v)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .3 }} label="Cover Photo" />
        <div style={{ position: "relative", zIndex: 2, padding: "100px 40px" }}>
          <div style={{ fontSize: 38, marginBottom: 18 }}>🦋</div>
          <div className="fu" style={{ fontSize: 10, letterSpacing: ".5em", textTransform: "uppercase", color: "#9c78a0", marginBottom: 22, fontFamily: "Jost,sans-serif", fontWeight: 300 }}>A Dreamy Celebration</div>
          <E d={d} k="coupleName" tag="h1" className="fu2" style={{ fontSize: "clamp(2.4rem,8vw,5rem)", fontWeight: 400, margin: "0 0 22px", lineHeight: 1.08, color: "#5a3a6a", fontStyle: "italic" }} />
          <div style={{ width: 50, height: 1, background: "#9c78a0", margin: "0 auto 22px", opacity: .5 }} />
          <E d={d} k="date" style={{ fontSize: "1.25rem", color: "#9c78a0", display: "block", marginBottom: 12, fontStyle: "italic" }} />
          <E d={d} k="venueName" style={{ fontSize: ".95rem", color: "#b4a0b8", fontFamily: "Jost,sans-serif", fontWeight: 300, display: "block", marginBottom: 6 }} />
          <E d={d} k="venueCity" style={{ fontSize: ".85rem", color: "#c8b8cc", fontFamily: "Jost,sans-serif", fontWeight: 300 }} />
        </div>
      </div>

      <div style={{ padding: "50px 40px 20px", textAlign: "center" }}>
        <E d={d} k="welcomeMessage" tag="p" dark style={{ fontSize: "1.15rem", color: ac, fontStyle: "italic", maxWidth: 560, margin: "0 auto" }} />
      </div>

      {/* Story */}
      <div style={{ padding: "60px 40px 60px", maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: "1.8rem", color: ac, marginBottom: 22, letterSpacing: ".2em" }}>· · ·</div>
        <div style={{ fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: "#9c78a0", marginBottom: 18, fontFamily: "Jost,sans-serif" }}>Our Love Story</div>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 400, color: "#5a3a6a", fontStyle: "italic", marginBottom: 28 }}>A Fairytale Beginning</h2>
        <E d={d} k="story" tag="p" dark style={{ fontSize: "1.12rem", lineHeight: 2, color: "#5a4870", fontStyle: "italic", marginBottom: 22 }} />
        <E d={d} k="storyChapter2" tag="p" dark style={{ fontSize: "1.08rem", lineHeight: 2, color: "#6a5880", fontStyle: "italic", marginBottom: 22 }} />
        <E d={d} k="storyChapter3" tag="p" dark style={{ fontSize: "1.08rem", lineHeight: 2, color: "#6a5880", fontStyle: "italic" }} />
      </div>

      {/* Milestones */}
      <div style={{ padding: "0 40px 60px", maxWidth: 820, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {[["🦋 How We Met", "howWeMet", "#fce4ff"], ["💜 The Proposal", "proposal", "#e8d5ff"]].map(([title, key, col]) => (
            <div key={key} style={{ padding: "32px 24px", background: col, borderRadius: 24, boxShadow: "0 4px 20px rgba(176,136,180,.15)" }}>
              <div style={{ fontSize: 10, letterSpacing: ".3em", textTransform: "uppercase", color: ac, marginBottom: 12, fontFamily: "Jost,sans-serif" }}>{title}</div>
              <E d={d} k={key} tag="p" dark style={{ fontSize: ".95rem", lineHeight: 1.85, color: "#5a4870", fontStyle: "italic" }} />
            </div>
          ))}
        </div>
      </div>

      {/* Meet the couple */}
      <div style={{ padding: "60px 40px 70px", background: "#f8f2ff" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: ac, marginBottom: 36, fontFamily: "Jost,sans-serif" }}>The Happy Couple</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            {[{ nameKey: "groom", bioKey: "groomBio", photoIdx: 0 }, { nameKey: "bride", bioKey: "brideBio", photoIdx: 1 }].map(({ nameKey, bioKey, photoIdx }, idx) => (
              <div key={nameKey}>
                <PhotoSlot src={photos[photoIdx]} onUpload={v => { const ph = [...d.data.photos]; ph[photoIdx] = v; d.set("photos", ph); }}
                  style={{ width: 150, height: 150, borderRadius: "50%", margin: "0 auto 18px", border: `4px solid ${pastelCols[idx]}` }} label="Portrait" />
                <E d={d} k={nameKey} tag="h3" dark style={{ fontSize: "1.8rem", fontWeight: 400, color: "#5a3a6a", fontStyle: "italic", display: "block", marginBottom: 12 }} />
                <E d={d} k={bioKey} tag="p" dark style={{ fontSize: ".9rem", lineHeight: 1.85, color: "#6a5880", fontStyle: "italic" }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div style={{ padding: "50px 20px 70px", background: "#fdf8ff" }}>
        <div style={{ fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: ac, marginBottom: 28, fontFamily: "Jost,sans-serif", textAlign: "center" }}>Our Beautiful Memories</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, maxWidth: 940, margin: "0 auto" }}>
          {photos.slice(2, 14).map((p, i) => (
            <PhotoSlot key={i+2} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i+2] = v; d.set("photos", ph); }}
              style={{ aspectRatio: "1", borderRadius: 999, border: `4px solid ${pastelCols[i%4]}` }} small />
          ))}
        </div>
      </div>

      {/* Details */}
      <div style={{ padding: "70px 40px", background: `linear-gradient(135deg, #5a3a6a, #3a4a7a)` }}>
        <div style={{ fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: "rgba(255,255,255,.6)", marginBottom: 36, textAlign: "center", fontFamily: "Jost,sans-serif" }}>Celebration Details</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 18, maxWidth: 860, margin: "0 auto" }}>
          {[["🦋","Venue","venueName"],["🌸","City","venueCity"],["💒","Ceremony","ceremony"],["🥂","Reception","reception"],["✨","Dress Code","dresscode"],["💌","RSVP By","rsvpDeadline"]].map(([ico, lbl, key]) => (
            <div key={key} style={{ textAlign: "center", padding: "24px 14px", background: "rgba(255,255,255,.1)", borderRadius: 999 }}>
              <div style={{ fontSize: 20, marginBottom: 8 }}>{ico}</div>
              <div style={{ fontSize: 9, letterSpacing: ".25em", color: "rgba(255,255,255,.5)", textTransform: "uppercase", marginBottom: 8, fontFamily: "Jost,sans-serif" }}>{lbl}</div>
              <E d={d} k={key} style={{ color: "white", fontSize: ".88rem" }} />
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div style={{ padding: "80px 40px", maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: "1.8rem", color: ac, marginBottom: 24, letterSpacing: ".2em" }}>· · ·</div>
        <div style={{ fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: ac, marginBottom: 36, fontFamily: "Jost,sans-serif" }}>Day of Schedule</div>
        {[["3:00 PM","Arrival","Welcome with pastel cocktails and soft music."],["4:30 PM","Ceremony","A dreamy exchange of vows and rings."],["5:30 PM","Cocktail Hour","Garden strolls and celebration drinks."],["7:00 PM","Dinner","A romantic dinner under fairy lights."],["9:00 PM","Dancing","Dance the night away in a dream."],["11:30 PM","Farewell","Butterfly releases and farewell wishes."]].map(([time, title, desc], i) => (
          <div key={i} style={{ padding: "20px 28px", marginBottom: 12, background: pastelCols[i%4], borderRadius: 24 }}>
            <div style={{ fontSize: ".85rem", color: ac, fontFamily: "Jost,sans-serif", marginBottom: 4 }}>{time}</div>
            <div style={{ fontWeight: 600, fontSize: "1rem", color: "#5a3a6a", marginBottom: 4, fontStyle: "italic" }}>{title}</div>
            <div style={{ fontSize: ".85rem", color: "#7a6090", lineHeight: 1.6 }}>{desc}</div>
          </div>
        ))}
      </div>

      {/* Bottom strip */}
      <div style={{ padding: "0 20px 60px", maxWidth: 940, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8 }}>
          {photos.slice(14, 20).map((p, i) => (
            <PhotoSlot key={i+14} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i+14] = v; d.set("photos", ph); }}
              style={{ aspectRatio: "1", borderRadius: 999, border: `3px solid ${pastelCols[i%4]}` }} small />
          ))}
        </div>
      </div>

      <SharedFooter d={d} ac={ac} />
    </div>
  );
};

export default T9_PastelDream;