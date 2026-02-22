import EditableField from "../EditableField";
import PhotoSlot from "../PhotoSlot";
import SharedFooter from "../SharedFooter";

const E = EditableField;

const T6_FloralScript = ({ d }) => {
  const ac = d.data.accentColor || "#d4647a";
  const photos = d.data.photos;
  return (
    <div style={{ fontFamily: "'Great Vibes', cursive", color: "#4a2a35", background: "#fff8f9" }}>
      <div style={{ position: "relative", minHeight: 620, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center", overflow: "hidden", background: "linear-gradient(135deg, #fff0f3, #ffe8f0, #f8e0ea)" }}>
        <PhotoSlot src={d.data.coverPhoto} onUpload={v => d.set("coverPhoto", v)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .4 }} label="Cover Photo" />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse, rgba(255,255,255,.3) 30%, rgba(212,100,122,.1) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "100px 40px" }}>
          <div style={{ fontSize: 11, letterSpacing: ".5em", color: ac, marginBottom: 18, textTransform: "uppercase", fontFamily: "Jost,sans-serif", fontWeight: 300 }}>♥ The Wedding Of ♥</div>
          <E d={d} k="coupleName" tag="h1" style={{ fontSize: "clamp(3rem,10vw,6.5rem)", fontWeight: 400, margin: "0 0 18px", lineHeight: 1, color: ac }} />
          <E d={d} k="date" style={{ fontSize: "2.2rem", color: "#8a4a55", display: "block", marginBottom: 14 }} />
          <E d={d} k="venueName" style={{ fontSize: "1.4rem", color: "rgba(74,42,53,.6)", fontFamily: "Lora,serif", fontStyle: "italic", fontWeight: 400, display: "block", marginBottom: 8 }} />
          <E d={d} k="venueCity" style={{ fontSize: "1.1rem", color: "rgba(74,42,53,.45)", fontFamily: "Jost,sans-serif", fontWeight: 300 }} />
        </div>
      </div>

      <div style={{ padding: "50px 40px 20px", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", color: ac, marginBottom: 14 }}>✿ ✿ ✿</div>
        <E d={d} k="welcomeMessage" tag="p" dark style={{ fontSize: "1.5rem", color: "#8a4a55", fontStyle: "italic", maxWidth: 560, margin: "0 auto" }} />
      </div>

      <div style={{ padding: "50px 40px 60px", maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 11, letterSpacing: ".3em", textTransform: "uppercase", color: ac, fontFamily: "Jost,sans-serif", marginBottom: 20 }}>Our Love Story</div>
        <E d={d} k="story" tag="p" dark style={{ fontSize: "1.15rem", lineHeight: 1.95, color: "#6a4a55", fontFamily: "Lora,serif", fontStyle: "italic", marginBottom: 22 }} />
        <E d={d} k="storyChapter2" tag="p" dark style={{ fontSize: "1.1rem", lineHeight: 1.95, color: "#7a5a65", fontFamily: "Lora,serif", fontStyle: "italic", marginBottom: 22 }} />
        <E d={d} k="storyChapter3" tag="p" dark style={{ fontSize: "1.1rem", lineHeight: 1.95, color: "#7a5a65", fontFamily: "Lora,serif", fontStyle: "italic" }} />
      </div>

      {/* Milestones */}
      <div style={{ padding: "0 40px 60px", maxWidth: 820, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {[["💐 How We Met", "howWeMet"], ["💍 The Proposal", "proposal"]].map(([title, key]) => (
            <div key={key} style={{ padding: "32px 24px", background: "white", borderRadius: "50% 10% 50% 10%/10% 50% 10% 50%", boxShadow: "0 4px 20px rgba(212,100,122,.12)", textAlign: "center" }}>
              <div style={{ fontSize: 10, letterSpacing: ".25em", textTransform: "uppercase", color: "#c08090", marginBottom: 12, fontFamily: "Jost,sans-serif" }}>{title}</div>
              <E d={d} k={key} tag="p" dark style={{ fontSize: ".95rem", fontFamily: "Lora,serif", color: "#5a3a45", lineHeight: 1.85, fontStyle: "italic" }} />
            </div>
          ))}
        </div>
      </div>

      {/* Meet the Couple */}
      <div style={{ padding: "60px 40px 70px", background: "linear-gradient(135deg, #fff0f3, #ffe8f0)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "2rem", color: ac, marginBottom: 20 }}>✿</div>
          <div style={{ fontSize: 11, letterSpacing: ".3em", textTransform: "uppercase", color: ac, fontFamily: "Jost,sans-serif", marginBottom: 36 }}>The Happy Couple</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            {[{ nameKey: "groom", bioKey: "groomBio", photoIdx: 0 }, { nameKey: "bride", bioKey: "brideBio", photoIdx: 1 }].map(({ nameKey, bioKey, photoIdx }) => (
              <div key={nameKey}>
                <PhotoSlot src={photos[photoIdx]} onUpload={v => { const ph = [...d.data.photos]; ph[photoIdx] = v; d.set("photos", ph); }}
                  style={{ width: 150, height: 150, borderRadius: "50%", margin: "0 auto 18px", border: `4px solid ${ac}40` }} label="Portrait" />
                <E d={d} k={nameKey} tag="h3" dark style={{ fontSize: "2.5rem", color: ac, display: "block", marginBottom: 12 }} />
                <E d={d} k={bioKey} tag="p" dark style={{ fontSize: ".95rem", fontFamily: "Lora,serif", color: "#6a4a55", lineHeight: 1.85, fontStyle: "italic" }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div style={{ padding: "60px 20px 70px", maxWidth: 920, margin: "0 auto" }}>
        <div style={{ fontSize: 11, letterSpacing: ".3em", textTransform: "uppercase", color: ac, fontFamily: "Jost,sans-serif", textAlign: "center", marginBottom: 28 }}>Our Moments Together</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {photos.slice(2, 14).map((p, i) => (
            <PhotoSlot key={i+2} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i+2] = v; d.set("photos", ph); }}
              style={{ aspectRatio: "1", borderRadius: "50% 10% 50% 10%", border: `3px solid ${ac}30`, boxShadow: `0 4px 20px ${ac}20` }} small />
          ))}
        </div>
      </div>

      {/* Details */}
      <div style={{ background: `linear-gradient(135deg, #fff0f3, #ffe8f0)`, padding: "70px 40px" }}>
        <h2 style={{ textAlign: "center", fontSize: "2.5rem", color: ac, marginBottom: 40 }}>Celebration Details</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, maxWidth: 860, margin: "0 auto" }}>
          {[["💐","Venue","venueName"],["🌷","City","venueCity"],["💒","Ceremony","ceremony"],["🍾","Reception","reception"],["✨","Dress","dresscode"],["💌","RSVP By","rsvpDeadline"]].map(([ico, lbl, key]) => (
            <div key={key} style={{ textAlign: "center", padding: "24px 14px", background: "white", borderRadius: "50% 10% 50% 10%/10% 50% 10% 50%", boxShadow: "0 4px 20px rgba(212,100,122,.12)" }}>
              <div style={{ fontSize: 22, marginBottom: 8 }}>{ico}</div>
              <div style={{ fontSize: 9, letterSpacing: ".2em", textTransform: "uppercase", color: "#c08090", marginBottom: 8, fontFamily: "Jost,sans-serif" }}>{lbl}</div>
              <E d={d} k={key} dark style={{ fontSize: ".85rem", fontFamily: "Lora,serif", color: "#5a3a45" }} />
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div style={{ padding: "80px 40px", maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: "2rem", color: ac, marginBottom: 24 }}>✿</div>
        <div style={{ fontSize: 11, letterSpacing: ".3em", textTransform: "uppercase", color: ac, fontFamily: "Jost,sans-serif", marginBottom: 36 }}>The Day's Schedule</div>
        {[["3:00 PM","Arrival","Welcome with a floral display and champagne."],["4:30 PM","Ceremony","We say 'I do' surrounded by blooms."],["5:30 PM","Cocktail Hour","Garden cocktails and sweet treats."],["7:00 PM","Dinner","A romantic candlelit dinner."],["9:00 PM","Dancing","Celebrate love on the dance floor."],["11:30 PM","Goodbye","Petals, sparklers, and fond farewells."]].map(([time, title, desc], i) => (
          <div key={i} style={{ marginBottom: 24, paddingBottom: 24, borderBottom: i < 5 ? `1px solid ${ac}20` : "none" }}>
            <div style={{ fontSize: "1.2rem", color: ac, marginBottom: 4 }}>{time}</div>
            <div style={{ fontSize: "1.1rem", fontFamily: "Lora,serif", color: "#4a2a35", fontStyle: "italic", marginBottom: 4 }}>{title}</div>
            <div style={{ fontSize: ".85rem", color: "#8a6a75", fontFamily: "Jost,sans-serif", fontWeight: 300 }}>{desc}</div>
          </div>
        ))}
      </div>

      {/* Bottom strip */}
      <div style={{ padding: "0 20px 60px", maxWidth: 920, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8 }}>
          {photos.slice(14, 20).map((p, i) => (
            <PhotoSlot key={i+14} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i+14] = v; d.set("photos", ph); }}
              style={{ aspectRatio: "1", borderRadius: "50% 10% 50% 10%", border: `2px solid ${ac}30` }} small />
          ))}
        </div>
      </div>

      <SharedFooter d={d} ac={ac} />
    </div>
  );
};

export default T6_FloralScript;