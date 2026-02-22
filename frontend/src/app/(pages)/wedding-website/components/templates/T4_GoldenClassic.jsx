import EditableField from "../EditableField";
import PhotoSlot from "../PhotoSlot";
import SharedFooter from "../SharedFooter";

const E = EditableField;

const T4_GoldenClassic = ({ d }) => {
  const ac = d.data.accentColor || "#c9a330";
  const photos = d.data.photos;

  return (
    <div style={{ fontFamily: "'Playfair Display', serif", color: "#2a1f0e", background: "#fdfbf4" }}>

      {/* ── Hero ── */}
      <div style={{ position: "relative", minHeight: 600, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center", background: `linear-gradient(135deg, #fdfbf4, #f8f0d4)` }}>
        <PhotoSlot src={d.data.coverPhoto} onUpload={v => d.set("coverPhoto", v)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: d.data.coverPhoto ? .45 : 0 }} label="Cover Photo" />
        <div style={{ position: "absolute", inset: 20, border: `1px solid ${ac}`, opacity: .35 }} />
        <div style={{ position: "absolute", inset: 28, border: `2px solid ${ac}`, opacity: .15 }} />
        <div style={{ position: "relative", zIndex: 2, padding: "80px 70px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 26 }}>
            <div style={{ height: 1, width: 60, background: ac }} />
            <span style={{ color: ac, fontSize: 20 }}>◆</span>
            <div style={{ height: 1, width: 60, background: ac }} />
          </div>
          <div className="fu" style={{ fontSize: 11, letterSpacing: ".5em", color: ac, marginBottom: 24, textTransform: "uppercase", fontFamily: "Jost,sans-serif", fontWeight: 300 }}>Marriage Celebration</div>
          <E d={d} k="coupleName" tag="h1" className="fu2" style={{ fontSize: "clamp(2.4rem,7vw,5rem)", fontWeight: 700, margin: "0 0 22px", lineHeight: 1.1, color: "#2a1f0e" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", margin: "0 0 22px" }}>
            <div style={{ height: 1, width: 30, background: ac, opacity: .5 }} />
            <E d={d} k="date" style={{ fontSize: "1.1rem", color: ac, fontStyle: "italic", letterSpacing: ".05em" }} />
            <div style={{ height: 1, width: 30, background: ac, opacity: .5 }} />
          </div>
          <E d={d} k="venueName" style={{ fontSize: ".95rem", color: "#7a6a4a", fontFamily: "Jost,sans-serif", fontWeight: 300, letterSpacing: ".15em", display: "block", marginBottom: 6 }} />
          <E d={d} k="venueCity" style={{ fontSize: ".85rem", color: "#9a8a6a", fontFamily: "Jost,sans-serif", fontWeight: 300, letterSpacing: ".1em" }} />
        </div>
      </div>

      {/* ── Welcome ── */}
      <div style={{ background: "#f8f0d4", padding: "50px 40px 10px", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 24 }}>
          <div style={{ height: 1, flex: 1, background: ac, opacity: .3 }} />
          <span style={{ color: ac, fontSize: 20 }}>◆ ◆ ◆</span>
          <div style={{ height: 1, flex: 1, background: ac, opacity: .3 }} />
        </div>
        <E d={d} k="welcomeMessage" tag="p" dark style={{ fontSize: "1.15rem", color: "#7a5a2a", fontStyle: "italic", maxWidth: 560, margin: "0 auto", lineHeight: 1.8 }} />
      </div>

      {/* ── Story ── */}
      <div style={{ padding: "70px 40px", background: "#f8f0d4", maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 11, letterSpacing: ".5em", textTransform: "uppercase", color: ac, marginBottom: 20, fontFamily: "Jost,sans-serif" }}>Our Love Story</div>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 700, color: "#2a1f0e", marginBottom: 28 }}>A Story Worth Telling</h2>
        <E d={d} k="story" tag="p" dark style={{ fontSize: "1.1rem", lineHeight: 1.95, color: "#5a4a2a", fontStyle: "italic", marginBottom: 22 }} />
        <E d={d} k="storyChapter2" tag="p" dark style={{ fontSize: "1.05rem", lineHeight: 1.95, color: "#6a5a3a", fontStyle: "italic", marginBottom: 22 }} />
        <E d={d} k="storyChapter3" tag="p" dark style={{ fontSize: "1.05rem", lineHeight: 1.95, color: "#6a5a3a", fontStyle: "italic" }} />
      </div>

      {/* ── Milestones ── */}
      <div style={{ padding: "30px 40px 70px", maxWidth: 820, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {[
            { title: "How We Met", key: "howWeMet" },
            { title: "The Proposal", key: "proposal" },
          ].map(({ title, key }) => (
            <div key={key} style={{ padding: "34px 28px", background: "#fdfbf4", border: `1px solid ${ac}30`, outline: `2px solid ${ac}`, outlineOffset: "5px" }}>
              <div style={{ fontSize: 10, letterSpacing: ".4em", color: ac, textTransform: "uppercase", marginBottom: 14, fontFamily: "Jost,sans-serif" }}>{title}</div>
              <E d={d} k={key} tag="p" dark style={{ fontSize: ".95rem", lineHeight: 1.85, color: "#5a4a2a", fontStyle: "italic" }} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Meet the Couple ── */}
      <div style={{ background: "#2a1f0e", padding: "80px 40px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 10, letterSpacing: ".5em", color: ac, textTransform: "uppercase", marginBottom: 14, fontFamily: "Jost,sans-serif" }}>The Happy Couple</div>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, color: ac, letterSpacing: ".1em" }}>MEET THE TWO OF US</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, textAlign: "center" }}>
            {[
              { nameKey: "groom", bioKey: "groomBio", photoIdx: 0 },
              { nameKey: "bride", bioKey: "brideBio", photoIdx: 1 },
            ].map(({ nameKey, bioKey, photoIdx }) => (
              <div key={nameKey}>
                <PhotoSlot src={photos[photoIdx]} onUpload={v => { const ph = [...d.data.photos]; ph[photoIdx] = v; d.set("photos", ph); }}
                  style={{ width: 160, height: 160, margin: "0 auto 20px", outline: `3px solid ${ac}`, outlineOffset: "5px" }} label="Portrait" />
                <E d={d} k={nameKey} tag="h3" style={{ fontSize: "1.6rem", fontWeight: 700, color: ac, display: "block", marginBottom: 12, letterSpacing: ".1em" }} />
                <E d={d} k={bioKey} tag="p" style={{ fontSize: ".9rem", lineHeight: 1.85, color: "#f8f0d4", fontStyle: "italic", opacity: .75 }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Gallery ── */}
      <div style={{ padding: "70px 24px", maxWidth: 940, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <div style={{ fontSize: 10, letterSpacing: ".5em", color: ac, textTransform: "uppercase", fontFamily: "Jost,sans-serif" }}>Our Gallery</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
          {photos.slice(2, 14).map((p, i) => (
            <PhotoSlot key={i+2} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i+2] = v; d.set("photos", ph); }}
              style={{ aspectRatio: "4/3", outline: `2px solid ${ac}`, outlineOffset: "3px" }} />
          ))}
        </div>
      </div>

      {/* ── Details ── */}
      <div style={{ background: "#2a1f0e", padding: "80px 40px" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 700, color: ac, marginBottom: 40, letterSpacing: ".15em" }}>THE DETAILS</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, maxWidth: 860, margin: "0 auto" }}>
          {[["Venue","venueName"],["City","venueCity"],["Ceremony","ceremony"],["Reception","reception"],["Dress Code","dresscode"],["RSVP By","rsvpDeadline"]].map(([lbl, key]) => (
            <div key={key} style={{ textAlign: "center", padding: "28px 18px", border: `1px solid rgba(201,163,48,.3)` }}>
              <div style={{ fontSize: 9, letterSpacing: ".4em", color: ac, textTransform: "uppercase", marginBottom: 12, fontFamily: "Jost,sans-serif" }}>{lbl}</div>
              <E d={d} k={key} style={{ fontSize: ".93rem", color: "#f8f0d4" }} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Timeline ── */}
      <div style={{ padding: "80px 40px", maxWidth: 680, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "1.8rem", fontWeight: 700, color: "#2a1f0e", marginBottom: 40, letterSpacing: ".05em" }}>Day of Schedule</h2>
        {[
          ["3:00 PM", "Guest Arrival", "Welcome champagne and canapés in the foyer."],
          ["4:30 PM", "The Ceremony", "Exchange of vows and rings in the chapel."],
          ["5:30 PM", "Cocktail Hour", "Music, drinks, and celebration."],
          ["7:00 PM", "Dinner Service", "A grand five-course dinner."],
          ["9:00 PM", "First Dance", "Dancing and merriment until late."],
          ["11:30 PM", "Grand Finale", "Champagne toast and farewell."],
        ].map(([time, title, desc], i) => (
          <div key={i} style={{ display: "flex", gap: 20, marginBottom: 26, paddingBottom: 26, borderBottom: i < 5 ? `1px solid ${ac}20` : "none" }}>
            <div style={{ width: 90, textAlign: "right", flexShrink: 0 }}>
              <span style={{ fontSize: ".85rem", color: ac, fontStyle: "italic" }}>{time}</span>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: ".95rem", color: "#2a1f0e", marginBottom: 4 }}>{title}</div>
              <div style={{ fontSize: ".85rem", color: "#7a6a4a", lineHeight: 1.7 }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Bottom gallery ── */}
      <div style={{ padding: "0 20px 60px", maxWidth: 940, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8 }}>
          {photos.slice(14, 20).map((p, i) => (
            <PhotoSlot key={i+14} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i+14] = v; d.set("photos", ph); }}
              style={{ aspectRatio: "1", outline: `2px solid ${ac}20`, outlineOffset: "2px" }} small />
          ))}
        </div>
      </div>

      <SharedFooter d={d} ac={ac} gold />
    </div>
  );
};

export default T4_GoldenClassic;    