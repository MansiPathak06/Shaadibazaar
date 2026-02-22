import EditableField from "../EditableField";
import PhotoSlot from "../PhotoSlot";
import SharedFooter from "../SharedFooter";

const E = EditableField;

const T1_ModernMinimal = ({ d }) => {
  const ac = d.data.accentColor;
  const photos = d.data.photos;

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#111", background: "#fafafa" }}>

      {/* ── Hero split ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 560 }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "70px 54px" }}>
          <div style={{ fontSize: 10, letterSpacing: ".5em", color: ac, marginBottom: 22, textTransform: "uppercase" }}>Wedding Invitation</div>
          <E d={d} k="coupleName" tag="h1" dark style={{ fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 300, margin: "0 0 22px", lineHeight: 1.05, letterSpacing: "-.03em" }} />
          <div style={{ width: 50, height: 2, background: ac, marginBottom: 22 }} />
          <E d={d} k="date" dark style={{ fontSize: "1.1rem", color: "#666", fontWeight: 300, display: "block", marginBottom: 8 }} />
          <E d={d} k="venueName" dark style={{ fontSize: "1rem", color: "#999", fontWeight: 300, display: "block", marginBottom: 4 }} />
          <E d={d} k="venueCity" dark style={{ fontSize: ".9rem", color: "#aaa", fontWeight: 300, display: "block", marginBottom: 28 }} />
          <E d={d} k="welcomeMessage" tag="p" dark style={{ fontSize: ".95rem", color: ac, lineHeight: 1.7, fontStyle: "italic", maxWidth: 320, fontWeight: 300 }} />
        </div>
        <PhotoSlot src={d.data.coverPhoto} onUpload={v => d.set("coverPhoto", v)} style={{ minHeight: 400 }} label="Cover Photo" />
      </div>

      {/* ── Story block ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", borderTop: "1px solid #eee" }}>
        <div style={{ background: ac, padding: "70px 44px", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", gap: 16 }}>
          <div style={{ color: "white", fontSize: "1.6rem", fontWeight: 300, lineHeight: 1.5, textAlign: "center" }}>Our<br /><em>story</em></div>
          <div style={{ width: 30, height: 1, background: "rgba(255,255,255,.5)" }} />
          <div style={{ fontSize: 10, letterSpacing: ".4em", color: "rgba(255,255,255,.7)", textTransform: "uppercase" }}>Chapter One</div>
        </div>
        <div style={{ padding: "70px 54px" }}>
          <E d={d} k="story" tag="p" dark style={{ fontSize: "1.1rem", lineHeight: 1.95, color: "#333", fontWeight: 300, marginBottom: 24 }} />
          <E d={d} k="storyChapter2" tag="p" dark style={{ fontSize: "1.05rem", lineHeight: 1.95, color: "#555", fontWeight: 300, marginBottom: 24 }} />
          <E d={d} k="storyChapter3" tag="p" dark style={{ fontSize: "1.05rem", lineHeight: 1.95, color: "#555", fontWeight: 300 }} />
        </div>
      </div>

      {/* ── Meet the couple ── */}
      <div style={{ padding: "80px 54px", background: "#f5f5f5" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ fontSize: 10, letterSpacing: ".5em", color: ac, marginBottom: 36, textTransform: "uppercase", textAlign: "center" }}>The Two of Us</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            {[
              { nameKey: "groom", bioKey: "groomBio", photoIdx: 0 },
              { nameKey: "bride", bioKey: "brideBio", photoIdx: 1 },
            ].map(({ nameKey, bioKey, photoIdx }) => (
              <div key={nameKey} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <PhotoSlot src={photos[photoIdx]} onUpload={v => { const ph = [...d.data.photos]; ph[photoIdx] = v; d.set("photos", ph); }}
                  style={{ width: 80, height: 80, borderRadius: "50%", flexShrink: 0 }} label="" small />
                <div>
                  <E d={d} k={nameKey} tag="h3" dark style={{ fontSize: "1.3rem", fontWeight: 400, color: "#111", marginBottom: 8, display: "block" }} />
                  <div style={{ width: 24, height: 2, background: ac, marginBottom: 10 }} />
                  <E d={d} k={bioKey} tag="p" dark style={{ fontSize: ".9rem", lineHeight: 1.8, color: "#555", fontWeight: 300 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Gallery strip ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 3, background: "#f0f0f0" }}>
        {photos.slice(2, 12).map((p, i) => (
          <PhotoSlot key={i+2} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i+2] = v; d.set("photos", ph); }}
            style={{ aspectRatio: i < 5 ? "1" : "3/4" }} small />
        ))}
      </div>

      {/* ── Event details ── */}
      <div style={{ padding: "80px 54px", maxWidth: 860, margin: "0 auto" }}>
        <div style={{ fontSize: 10, letterSpacing: ".5em", color: ac, marginBottom: 36, textTransform: "uppercase", textAlign: "center" }}>Event Details</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: "1px solid #eee" }}>
          {[["Venue","venueName"],["City","venueCity"],["Ceremony","ceremony"],["Reception","reception"],["Dress Code","dresscode"],["RSVP By","rsvpDeadline"]].map(([lbl, key], i) => (
            <div key={key} style={{ padding: "32px 26px", borderRight: (i+1) % 3 !== 0 ? "1px solid #eee" : "none", borderBottom: i < 3 ? "1px solid #eee" : "none" }}>
              <div style={{ fontSize: 9, letterSpacing: ".3em", color: "#aaa", textTransform: "uppercase", marginBottom: 10 }}>{lbl}</div>
              <E d={d} k={key} dark style={{ fontSize: ".95rem", fontWeight: 500, color: "#111" }} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Day Timeline ── */}
      <div style={{ padding: "0 54px 80px", maxWidth: 860, margin: "0 auto" }}>
        <div style={{ fontSize: 10, letterSpacing: ".5em", color: ac, marginBottom: 36, textTransform: "uppercase" }}>Day Schedule</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {[
            { time: "3:00 PM", label: "Arrival", desc: "Guests welcomed with drinks and canapés in the garden." },
            { time: "4:30 PM", label: "Ceremony", desc: "The exchange of vows in the garden chapel." },
            { time: "5:30 PM", label: "Cocktails", desc: "Cocktail hour with music and seasonal bites." },
            { time: "7:00 PM", label: "Dinner", desc: "A seated dinner in the grand hall with toasts." },
            { time: "9:00 PM", label: "Dancing", desc: "First dance followed by an evening of celebration." },
            { time: "11:30 PM", label: "Farewell", desc: "Last song, sparkler send-off and fond goodbyes." },
          ].map((item, i) => (
            <div key={i} style={{ padding: "22px 20px", borderTop: `2px solid ${i % 3 === 0 ? ac : "#eee"}` }}>
              <div style={{ fontSize: 10, letterSpacing: ".3em", color: ac, textTransform: "uppercase", marginBottom: 6 }}>{item.time}</div>
              <div style={{ fontWeight: 600, fontSize: ".95rem", color: "#111", marginBottom: 8 }}>{item.label}</div>
              <div style={{ fontSize: ".85rem", color: "#777", lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Second gallery ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 3, background: "#f0f0f0" }}>
        {photos.slice(12, 20).map((p, i) => (
          <PhotoSlot key={i+12} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i+12] = v; d.set("photos", ph); }}
            style={{ aspectRatio: "4/3" }} small />
        ))}
      </div>

      {/* ── RSVP band ── */}
      <div style={{ padding: "70px 54px", background: ac, textAlign: "center" }}>
        <div style={{ fontSize: 10, letterSpacing: ".5em", textTransform: "uppercase", color: "rgba(255,255,255,.6)", marginBottom: 16 }}>We'd Love to See You</div>
        <div style={{ fontSize: "2rem", fontWeight: 300, color: "white", marginBottom: 12 }}>Please RSVP by <strong>{d.data.rsvpDeadline || "the deadline"}</strong></div>
        <div style={{ fontSize: ".9rem", color: "rgba(255,255,255,.7)", fontWeight: 300 }}>Let us know if you'll be joining us for this special celebration.</div>
      </div>

      <SharedFooter d={d} ac={ac} dark />
    </div>
  );
};

export default T1_ModernMinimal;