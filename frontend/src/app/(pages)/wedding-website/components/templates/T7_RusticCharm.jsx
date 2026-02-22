import EditableField from "../EditableField";
import PhotoSlot from "../PhotoSlot";
import SharedFooter from "../SharedFooter";

const E = EditableField;

const T7_RusticCharm = ({ d }) => {
  const ac = d.data.accentColor || "#8b5e3c";
  const photos = d.data.photos;
  const warmGold = ac === "#8b5e3c" ? "#d4a072" : ac;

  return (
    <div style={{ fontFamily: "'Lora', serif", color: "#3a2a1a", background: "#faf6ef" }}>
      <div style={{ position: "relative", minHeight: 580, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center", overflow: "hidden" }}>
        <PhotoSlot src={d.data.coverPhoto} onUpload={v => d.set("coverPhoto", v)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .6 }} label="Cover Photo" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(58,42,26,.6), rgba(58,42,26,.88))" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "100px 40px" }}>
          <div style={{ fontSize: 30, marginBottom: 18, filter: "brightness(1.4)" }}>🍂</div>
          <E d={d} k="coupleName" tag="h1" style={{ fontSize: "clamp(2.8rem,8vw,5rem)", fontWeight: 400, margin: "0 0 22px", lineHeight: 1.1, color: "#f8f0e0", fontStyle: "italic" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 20 }}>
            <div style={{ flex: 1, maxWidth: 60, height: 1, background: "rgba(248,240,224,.5)" }} />
            <span style={{ color: warmGold, fontSize: 14 }}>✦ ✦ ✦</span>
            <div style={{ flex: 1, maxWidth: 60, height: 1, background: "rgba(248,240,224,.5)" }} />
          </div>
          <E d={d} k="date" style={{ fontSize: "1.15rem", color: "#e8d8b8", display: "block", marginBottom: 12 }} />
          <E d={d} k="venueName" style={{ fontSize: ".95rem", color: "rgba(232,216,184,.75)", fontFamily: "Jost,sans-serif", fontWeight: 300, display: "block", marginBottom: 6 }} />
          <E d={d} k="venueCity" style={{ fontSize: ".85rem", color: "rgba(232,216,184,.55)", fontFamily: "Jost,sans-serif", fontWeight: 300 }} />
        </div>
      </div>

      <div style={{ padding: "50px 40px 20px", textAlign: "center" }}>
        <E d={d} k="welcomeMessage" tag="p" dark style={{ fontSize: "1.1rem", color: ac, fontStyle: "italic", maxWidth: 560, margin: "0 auto" }} />
      </div>

      {/* Story */}
      <div style={{ padding: "60px 40px 70px", maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", color: ac, marginBottom: 20, fontStyle: "italic" }}>Our Story</h2>
        <div style={{ width: 50, height: 2, background: ac, margin: "0 auto 28px", opacity: .5 }} />
        <E d={d} k="story" tag="p" dark style={{ fontSize: "1.08rem", lineHeight: 1.9, color: "#5a4030", fontStyle: "italic", marginBottom: 22 }} />
        <E d={d} k="storyChapter2" tag="p" dark style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#6a5040", fontStyle: "italic", marginBottom: 22 }} />
        <E d={d} k="storyChapter3" tag="p" dark style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#6a5040", fontStyle: "italic" }} />
      </div>

      {/* Milestones */}
      <div style={{ padding: "0 40px 70px", maxWidth: 820, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {[["🍂 How We Met", "howWeMet"], ["💍 The Proposal", "proposal"]].map(([title, key]) => (
            <div key={key} style={{ padding: "32px 26px", background: "#f0e8dc", borderRadius: 12, borderBottom: `3px solid ${ac}` }}>
              <div style={{ fontSize: 10, letterSpacing: ".25em", textTransform: "uppercase", color: "#d4a072", marginBottom: 12, fontFamily: "Jost,sans-serif" }}>{title}</div>
              <E d={d} k={key} tag="p" dark style={{ fontSize: ".95rem", lineHeight: 1.85, color: "#5a4030", fontStyle: "italic" }} />
            </div>
          ))}
        </div>
      </div>

      {/* Meet the couple */}
      <div style={{ padding: "60px 40px 70px", background: "#f0e8dc" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.9rem", color: ac, fontStyle: "italic", marginBottom: 40 }}>The Happy Couple</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            {[{ nameKey: "groom", bioKey: "groomBio", photoIdx: 0 }, { nameKey: "bride", bioKey: "brideBio", photoIdx: 1 }].map(({ nameKey, bioKey, photoIdx }) => (
              <div key={nameKey}>
                <PhotoSlot src={photos[photoIdx]} onUpload={v => { const ph = [...d.data.photos]; ph[photoIdx] = v; d.set("photos", ph); }}
                  style={{ width: 150, height: 150, borderRadius: "50%", margin: "0 auto 18px", border: `4px solid ${ac}30` }} label="Portrait" />
                <E d={d} k={nameKey} tag="h3" dark style={{ fontSize: "1.7rem", fontWeight: 400, color: ac, fontStyle: "italic", display: "block", marginBottom: 12 }} />
                <E d={d} k={bioKey} tag="p" dark style={{ fontSize: ".9rem", lineHeight: 1.85, color: "#6a5040", fontStyle: "italic" }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Barnwood gallery */}
      <div style={{ padding: "50px 16px 60px", background: "#faf6ef" }}>
        <div style={{ fontSize: 10, letterSpacing: ".25em", textTransform: "uppercase", color: warmGold, fontFamily: "Jost,sans-serif", textAlign: "center", marginBottom: 28 }}>Our Memories</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, maxWidth: 940, margin: "0 auto" }}>
          {photos.slice(2, 14).map((p, i) => (
            <PhotoSlot key={i+2} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i+2] = v; d.set("photos", ph); }}
              style={{ aspectRatio: "4/3", border: "4px solid white", boxShadow: "2px 2px 8px rgba(0,0,0,.15)", transform: `rotate(${[-.8,1.2,-.5,.9,-.7,1.1,-.4,.8,-.6,1.0,-.9,.7][i] || 0}deg)` }} />
          ))}
        </div>
      </div>

      {/* Details */}
      <div style={{ padding: "70px 40px", background: "#3a2a1a" }}>
        <h2 style={{ textAlign: "center", fontSize: "1.9rem", fontStyle: "italic", color: warmGold, marginBottom: 40 }}>The Day's Details</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, maxWidth: 860, margin: "0 auto" }}>
          {[["🍂","Venue","venueName"],["📍","Location","venueCity"],["🕊","Ceremony","ceremony"],["🍷","Reception","reception"],["👔","Dress Code","dresscode"],["📜","RSVP By","rsvpDeadline"]].map(([ico, lbl, key]) => (
            <div key={key} style={{ textAlign: "center", padding: "22px 14px", borderBottom: `2px solid ${ac}40` }}>
              <div style={{ fontSize: 20, marginBottom: 8 }}>{ico}</div>
              <div style={{ fontSize: 9, letterSpacing: ".25em", color: "#d4a072", textTransform: "uppercase", marginBottom: 8, fontFamily: "Jost,sans-serif" }}>{lbl}</div>
              <E d={d} k={key} style={{ fontSize: ".88rem", color: "#f8f0e0" }} />
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div style={{ padding: "80px 40px", maxWidth: 680, margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.9rem", color: ac, fontStyle: "italic", marginBottom: 40, textAlign: "center" }}>Day of Schedule</h2>
        {[["3:00 PM","Welcome","Guests arrive to a warm barnyard reception."],["4:30 PM","Ceremony","Vows under the open sky."],["5:30 PM","Cocktail Hour","Cider, craft cocktails, and country bites."],["7:00 PM","Dinner","A hearty family-style feast."],["9:00 PM","Dancing","Boot-scootin' on the dance floor."],["11:30 PM","Farewell","Lanterns, laughter, and fond goodbyes."]].map(([time, title, desc], i) => (
          <div key={i} style={{ display: "flex", gap: 20, marginBottom: 26, alignItems: "flex-start" }}>
            <div style={{ width: 90, textAlign: "right", flexShrink: 0 }}><span style={{ fontSize: ".85rem", color: ac, fontStyle: "italic" }}>{time}</span></div>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: ac, marginTop: 6, flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: ".95rem", color: "#3a2a1a", marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: ".85rem", color: "#8a6040", lineHeight: 1.7 }}>{desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom strip */}
      <div style={{ padding: "0 16px 60px", maxWidth: 940, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 6 }}>
          {photos.slice(14, 20).map((p, i) => (
            <PhotoSlot key={i+14} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i+14] = v; d.set("photos", ph); }}
              style={{ aspectRatio: "1", border: "3px solid white", boxShadow: "1px 1px 4px rgba(0,0,0,.1)" }} small />
          ))}
        </div>
      </div>

      <SharedFooter d={d} ac={ac} dark />
    </div>
  );
};

export default T7_RusticCharm;