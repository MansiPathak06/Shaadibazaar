import EditableField from "../EditableField";
import PhotoSlot from "../PhotoSlot";
import SharedFooter from "../SharedFooter";

const E = EditableField;

const T2_GardenBoho = ({ d }) => {
  const ac = d.data.accentColor;
  const photos = d.data.photos;

  return (
    <div style={{ fontFamily: "'Libre Baskerville', serif", color: "#3b3227", background: "#f9f5ee" }}>

      {/* ── Hero ── */}
      <div style={{ position: "relative", textAlign: "center", padding: "100px 40px 80px", overflow: "hidden", background: "linear-gradient(180deg,#f0e9d6,#f9f5ee)" }}>
        <PhotoSlot src={d.data.coverPhoto} onUpload={v => d.set("coverPhoto", v)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: d.data.coverPhoto ? 0.55 : 0 }} label="Cover Photo" />
        <div style={{ position: "relative", zIndex: 2 }}>
          <div style={{ fontSize: 48, marginBottom: 16, opacity: .5 }}>🌿</div>
          <E d={d} k="welcomeMessage" tag="p" style={{ fontSize: ".9rem", letterSpacing: ".4em", color: ac, marginBottom: 20, textTransform: "uppercase", fontFamily: "Nunito,sans-serif", fontWeight: 300 }} />
          <E d={d} k="coupleName" tag="h1" className="fu" style={{ fontSize: "clamp(2.4rem,7vw,4.8rem)", fontWeight: 400, margin: "0 0 18px", fontStyle: "italic", color: ac, lineHeight: 1.05 }} />
          <div style={{ fontSize: 22, color: "#c8b89a", margin: "0 0 18px" }}>✦</div>
          <E d={d} k="date" style={{ fontSize: "1.2rem", color: "#6b5744", fontStyle: "italic", display: "block", marginBottom: 10 }} />
          <E d={d} k="venueName" style={{ fontSize: "1rem", color: "#8c7b6b", fontFamily: "Nunito,sans-serif", fontWeight: 300, display: "block", marginBottom: 6 }} />
          <E d={d} k="venueCity" style={{ fontSize: ".9rem", color: "#aa9980", fontFamily: "Nunito,sans-serif", fontWeight: 300, display: "block" }} />
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, padding: "0 40px 16px" }}>
        <div style={{ flex: 1, height: 1, background: "#d4c5b0" }} />
        <span style={{ color: ac, fontSize: "1.3rem" }}>🌿 ♡ 🌿</span>
        <div style={{ flex: 1, height: 1, background: "#d4c5b0" }} />
      </div>

      {/* ── Story ── */}
      <div style={{ padding: "60px 40px 30px", maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 11, letterSpacing: ".3em", textTransform: "uppercase", color: ac, fontFamily: "Nunito,sans-serif", marginBottom: 16 }}>Our Love Story</div>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 400, color: ac, fontStyle: "italic", marginBottom: 28 }}>How It All Began</h2>
        <E d={d} k="story" tag="p" dark style={{ fontSize: "1.1rem", lineHeight: 2, color: "#5c4a36", fontStyle: "italic", marginBottom: 24 }} />
        <E d={d} k="storyChapter2" tag="p" dark style={{ fontSize: "1.05rem", lineHeight: 2, color: "#6b5744", fontStyle: "italic", marginBottom: 24 }} />
        <E d={d} k="storyChapter3" tag="p" dark style={{ fontSize: "1.05rem", lineHeight: 2, color: "#6b5744", fontStyle: "italic" }} />
      </div>

      {/* ── How We Met + Proposal ── */}
      <div style={{ padding: "40px 40px 70px", maxWidth: 820, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[
            { icon: "🌿", title: "How We Met", key: "howWeMet" },
            { icon: "💍", title: "The Proposal", key: "proposal" },
          ].map(({ icon, title, key }) => (
            <div key={key} style={{ padding: "36px 28px", background: "white", borderRadius: 16, border: "1px solid #e8ddd0", textAlign: "center" }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
              <div style={{ fontSize: 11, letterSpacing: ".3em", textTransform: "uppercase", color: ac, fontFamily: "Nunito,sans-serif", marginBottom: 14 }}>{title}</div>
              <E d={d} k={key} tag="p" dark style={{ fontSize: "1rem", lineHeight: 1.85, color: "#5c4a36", fontStyle: "italic" }} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Meet the Couple ── */}
      <div style={{ padding: "0 40px 80px", maxWidth: 820, margin: "0 auto", background: "#f9f5ee" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 11, letterSpacing: ".3em", textTransform: "uppercase", color: ac, fontFamily: "Nunito,sans-serif", marginBottom: 16 }}>The Happy Couple</div>
          <div style={{ fontSize: 28, color: "#c8b89a" }}>✦</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, textAlign: "center" }}>
          {[
            { nameKey: "groom", bioKey: "groomBio", photoIdx: 0 },
            { nameKey: "bride", bioKey: "brideBio", photoIdx: 1 },
          ].map(({ nameKey, bioKey, photoIdx }) => (
            <div key={nameKey}>
              <PhotoSlot src={photos[photoIdx]} onUpload={v => { const ph = [...d.data.photos]; ph[photoIdx] = v; d.set("photos", ph); }}
                style={{ width: 160, height: 160, borderRadius: "50%", margin: "0 auto 20px", border: `4px solid ${ac}40` }} label="Portrait" />
              <E d={d} k={nameKey} tag="h3" dark style={{ fontSize: "1.9rem", fontWeight: 400, color: ac, fontStyle: "italic", display: "block", marginBottom: 12 }} />
              <E d={d} k={bioKey} tag="p" dark style={{ fontSize: ".95rem", lineHeight: 1.9, color: "#6b5744", fontStyle: "italic" }} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Gallery ── */}
      <div style={{ padding: "10px 24px 80px", maxWidth: 920, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <div style={{ fontSize: 11, letterSpacing: ".3em", textTransform: "uppercase", color: ac, fontFamily: "Nunito,sans-serif", marginBottom: 14 }}>Our Favourite Moments</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
          {photos.slice(2, 14).map((p, i) => (
            <PhotoSlot key={i+2} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i+2] = v; d.set("photos", ph); }}
              style={{ aspectRatio: [1,3,6].includes(i) ? "3/4" : "4/3", borderRadius: 10, border: "3px solid white", boxShadow: "0 3px 16px rgba(0,0,0,.07)", gridColumn: [0,9].includes(i) ? "span 2" : "span 1" }} />
          ))}
        </div>
      </div>

      {/* ── Details ── */}
      <div style={{ background: ac, padding: "80px 40px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2.2rem", fontWeight: 400, color: "white", marginBottom: 46, fontStyle: "italic" }}>Celebration Details</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {[["🌿","Venue","venueName"],["🍃","Location","venueCity"],["🕊","Ceremony","ceremony"],["🌸","Reception","reception"],["✨","Dress Code","dresscode"],["📜","RSVP By","rsvpDeadline"]].map(([ico, lbl, key]) => (
              <div key={key} style={{ background: "rgba(255,255,255,.15)", borderRadius: 14, padding: "26px 20px", textAlign: "center", border: "1px solid rgba(255,255,255,.28)" }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>{ico}</div>
                <div style={{ fontSize: 9, letterSpacing: ".25em", color: "rgba(255,255,255,.7)", textTransform: "uppercase", fontFamily: "Nunito,sans-serif", marginBottom: 8 }}>{lbl}</div>
                <E d={d} k={key} style={{ color: "white", fontSize: ".92rem" }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Timeline ── */}
      <div style={{ padding: "80px 40px", maxWidth: 680, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 11, letterSpacing: ".3em", textTransform: "uppercase", color: ac, fontFamily: "Nunito,sans-serif", marginBottom: 14 }}>The Day's Schedule</div>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 400, color: ac, fontStyle: "italic" }}>Day Of Timeline</h2>
        </div>
        {[
          ["3:00 PM", "Guests Arrive", "Welcome drinks and garden strolls await you."],
          ["4:30 PM", "Ceremony", "We exchange our vows under the open sky."],
          ["5:30 PM", "Cocktail Hour", "Mingle, celebrate, and enjoy seasonal bites."],
          ["7:00 PM", "Dinner", "A feast shared with those we love most."],
          ["9:00 PM", "Dancing", "Let's dance under the stars until midnight."],
          ["11:30 PM", "Farewell", "A sparkling send-off and fond goodbyes."],
        ].map(([time, title, desc], i) => (
          <div key={i} style={{ display: "flex", gap: 20, marginBottom: 28, alignItems: "flex-start" }}>
            <div style={{ width: 80, textAlign: "right", flexShrink: 0, paddingTop: 2 }}>
              <span style={{ fontSize: ".85rem", color: ac, fontStyle: "italic" }}>{time}</span>
            </div>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: ac, marginTop: 5, flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: "1rem", color: "#3b3227", marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: ".9rem", color: "#8c7b6b", lineHeight: 1.7 }}>{desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Bottom gallery strip ── */}
      <div style={{ padding: "0 20px 60px", maxWidth: 920, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 6 }}>
          {photos.slice(14, 20).map((p, i) => (
            <PhotoSlot key={i+14} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i+14] = v; d.set("photos", ph); }}
              style={{ aspectRatio: "1", borderRadius: 8, border: "2px solid white" }} small />
          ))}
        </div>
      </div>

      <SharedFooter d={d} ac={ac} />
    </div>
  );
};

export default T2_GardenBoho;