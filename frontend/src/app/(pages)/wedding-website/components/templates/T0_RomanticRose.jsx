import EditableField from "../EditableField";
import PhotoSlot from "../PhotoSlot";
import SharedFooter from "../SharedFooter";

const E = EditableField;

const T0_RomanticRose = ({ d }) => {
  const ac = d.data.accentColor;
  const photos = d.data.photos;

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', serif", color: "#3d2c2c", background: "#fffaf8" }}>

      {/* ── Hero ── */}
      <div style={{ position: "relative", minHeight: 620, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center", overflow: "hidden", background: `linear-gradient(160deg,#fff5f2,#fde8e2)` }}>
        <PhotoSlot src={d.data.coverPhoto} onUpload={v => d.set("coverPhoto", v)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: d.data.coverPhoto ? 1 : 0 }} label="Cover Photo" />
        <div style={{ position: "absolute", inset: 0, background: d.data.coverPhoto ? "linear-gradient(to bottom, rgba(0,0,0,.25), rgba(0,0,0,.55))" : "none" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "100px 40px" }}>
          <div className="fu" style={{ fontSize: 13, letterSpacing: ".38em", textTransform: "uppercase", color: d.data.coverPhoto ? "rgba(255,255,255,.8)" : ac, marginBottom: 22, fontFamily: "Jost, sans-serif", fontWeight: 300 }}>We're getting married</div>
          <E d={d} k="coupleName" tag="h1" className="fu2" style={{ fontSize: "clamp(2.8rem,9vw,5.5rem)", fontWeight: 300, margin: "0 0 20px", lineHeight: 1.08, color: d.data.coverPhoto ? "white" : "#3d2c2c", textShadow: d.data.coverPhoto ? "0 2px 24px rgba(0,0,0,.4)" : "none", letterSpacing: "-.01em" }} />
          <div style={{ width: 60, height: 1, background: d.data.coverPhoto ? "rgba(255,255,255,.6)" : ac, margin: "0 auto 22px" }} />
          <E d={d} k="date" className="fu3" style={{ fontSize: "1.4rem", color: d.data.coverPhoto ? "rgba(255,255,255,.85)" : "#8a6255", fontStyle: "italic", textShadow: d.data.coverPhoto ? "0 1px 8px rgba(0,0,0,.3)" : "none", display: "block", marginBottom: 10 }} />
          <E d={d} k="venueName" style={{ fontSize: "1rem", color: d.data.coverPhoto ? "rgba(255,255,255,.7)" : "#8a6255", fontFamily: "Jost,sans-serif", fontWeight: 300, display: "block", marginBottom: 6 }} />
          <E d={d} k="venueCity" style={{ fontSize: ".9rem", color: d.data.coverPhoto ? "rgba(255,255,255,.55)" : "#b09090", fontFamily: "Jost,sans-serif", fontWeight: 300 }} />
        </div>
      </div>

      {/* ── Welcome message ── */}
      <div style={{ padding: "60px 40px 20px", textAlign: "center" }}>
        <E d={d} k="welcomeMessage" tag="p" dark style={{ fontSize: "1.2rem", color: ac, fontStyle: "italic", fontWeight: 300, maxWidth: 560, margin: "0 auto" }} />
      </div>

      {/* ── Save the Date band ── */}
      <div style={{ background: `linear-gradient(90deg, ${ac}18, ${ac}30, ${ac}18)`, padding: "28px 40px", textAlign: "center", margin: "32px 0 0" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
          {[["📅", "Date", d.data.date], ["📍", "Venue", d.data.venueName], ["🌍", "Location", d.data.venueCity]].map(([ico, lbl, val]) => (
            <div key={lbl} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 20, marginBottom: 4 }}>{ico}</div>
              <div style={{ fontSize: 9, letterSpacing: ".25em", textTransform: "uppercase", color: "#b09090", fontFamily: "Jost,sans-serif", marginBottom: 4 }}>{lbl}</div>
              <div style={{ fontWeight: 500, fontSize: ".9rem", color: "#3d2c2c" }}>{val || "—"}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Our Story ── */}
      <div style={{ padding: "80px 40px", maxWidth: 780, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: "#b09090", fontFamily: "Jost,sans-serif", marginBottom: 14 }}>Chapter One</div>
          <h2 style={{ fontSize: "2.6rem", fontWeight: 400, color: ac, marginBottom: 16, fontStyle: "italic" }}>Our Love Story</h2>
          <div style={{ width: 50, height: 1, background: "#e8cec8", margin: "0 auto" }} />
        </div>
        <E d={d} k="story" tag="p" dark style={{ fontSize: "1.15rem", lineHeight: 2, color: "#5a3f3f", fontStyle: "italic", fontWeight: 300, textAlign: "center", marginBottom: 36 }} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ padding: "32px 28px", background: `${ac}10`, borderRadius: 12, borderLeft: `3px solid ${ac}` }}>
            <div style={{ fontSize: 11, letterSpacing: ".3em", textTransform: "uppercase", color: ac, fontFamily: "Jost,sans-serif", marginBottom: 10 }}>How We Met</div>
            <E d={d} k="howWeMet" tag="p" dark style={{ fontSize: "1rem", lineHeight: 1.85, color: "#5a3f3f", fontStyle: "italic" }} />
          </div>
          <div style={{ padding: "32px 28px", background: `${ac}10`, borderRadius: 12, borderLeft: `3px solid ${ac}` }}>
            <div style={{ fontSize: 11, letterSpacing: ".3em", textTransform: "uppercase", color: ac, fontFamily: "Jost,sans-serif", marginBottom: 10 }}>The Proposal</div>
            <E d={d} k="proposal" tag="p" dark style={{ fontSize: "1rem", lineHeight: 1.85, color: "#5a3f3f", fontStyle: "italic" }} />
          </div>
        </div>
      </div>

      {/* ── Meet the Couple ── */}
      <div style={{ background: `linear-gradient(135deg, #fff5f2, #fde8e2)`, padding: "80px 40px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <div style={{ fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: "#b09090", fontFamily: "Jost,sans-serif", marginBottom: 14 }}>The Happy Couple</div>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 400, color: ac, fontStyle: "italic" }}>Meet the Two of Us</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            {[["groom", "bride"], ["groomBio", "brideBio"]].length && [
              { nameKey: "groom", bioKey: "groomBio", photoIdx: 0 },
              { nameKey: "bride", bioKey: "brideBio", photoIdx: 1 },
            ].map(({ nameKey, bioKey, photoIdx }) => (
              <div key={nameKey} style={{ textAlign: "center" }}>
                <PhotoSlot src={photos[photoIdx]} onUpload={v => { const ph = [...d.data.photos]; ph[photoIdx] = v; d.set("photos", ph); }}
                  style={{ width: 180, height: 180, borderRadius: "50%", margin: "0 auto 20px", border: `4px solid ${ac}30`, display: "block" }} label="Add Portrait" />
                <E d={d} k={nameKey} tag="h3" dark style={{ fontSize: "1.8rem", fontWeight: 400, color: "#3d2c2c", fontStyle: "italic", marginBottom: 12, display: "block" }} />
                <E d={d} k={bioKey} tag="p" dark style={{ fontSize: "1rem", lineHeight: 1.85, color: "#6a4a4a", fontWeight: 300 }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Gallery ── */}
      <div style={{ padding: "80px 24px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: "#b09090", fontFamily: "Jost,sans-serif", marginBottom: 14 }}>Our Journey Together</div>
          <h2 style={{ fontSize: "2.4rem", fontWeight: 400, color: ac, fontStyle: "italic" }}>Our Favourite Moments</h2>
          <div style={{ width: 50, height: 1, background: "#e8cec8", margin: "16px auto 0" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
          {photos.slice(2, 14).map((p, i) => (
            <PhotoSlot key={i+2} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i+2] = v; d.set("photos", ph); }}
              style={{ aspectRatio: i === 0 || i === 5 ? "2/1" : "4/3", gridColumn: i === 0 || i === 5 ? "span 2" : "span 1", borderRadius: 8 }} />
          ))}
        </div>
      </div>

      {/* ── Event Details ── */}
      <div style={{ background: `linear-gradient(135deg,#fff5f2,#fde8e2)`, padding: "80px 40px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 46 }}>
            <div style={{ fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: "#b09090", fontFamily: "Jost,sans-serif", marginBottom: 14 }}>Mark Your Calendar</div>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 400, color: ac, fontStyle: "italic" }}>The Details</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {[["📍","Venue","venueName"],["🏙","City","venueCity"],["💒","Ceremony","ceremony"],["🥂","Reception","reception"],["👗","Dress Code","dresscode"],["📮","RSVP By","rsvpDeadline"]].map(([ico, lbl, key]) => (
              <div key={key} style={{ textAlign: "center", padding: "30px 20px", background: "white", borderRadius: 14, boxShadow: "0 2px 20px rgba(181,134,122,.1)" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{ico}</div>
                <div style={{ fontSize: 10, letterSpacing: ".25em", textTransform: "uppercase", color: "#b09090", marginBottom: 10, fontFamily: "Jost,sans-serif" }}>{lbl}</div>
                <E d={d} k={key} dark style={{ fontWeight: 400, fontSize: ".95rem", color: "#3d2c2c" }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Timeline ── */}
      <div style={{ padding: "80px 40px", maxWidth: 680, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 46 }}>
          <div style={{ fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: "#b09090", fontFamily: "Jost,sans-serif", marginBottom: 14 }}>The Day's Schedule</div>
          <h2 style={{ fontSize: "2.4rem", fontWeight: 400, color: ac, fontStyle: "italic" }}>Day-of Timeline</h2>
        </div>
        {[
          { time: "3:00 PM", event: "Guests Arrive & Welcome Drinks" },
          { time: "4:30 PM", event: "Ceremony Begins" },
          { time: "5:30 PM", event: "Cocktail Hour & Canapés" },
          { time: "7:00 PM", event: "Dinner & Celebrations" },
          { time: "9:00 PM", event: "First Dance & Dancing" },
          { time: "11:30 PM", event: "Last Song & Farewell" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 24, marginBottom: 24, alignItems: "flex-start" }}>
            <div style={{ width: 90, textAlign: "right", flexShrink: 0 }}>
              <span style={{ fontSize: ".9rem", color: ac, fontStyle: "italic", fontWeight: 600 }}>{item.time}</span>
            </div>
            <div style={{ position: "relative", paddingTop: 3 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: ac, position: "absolute", left: -5, top: 5 }} />
              <div style={{ borderLeft: i < 5 ? `1px dashed ${ac}50` : "none", paddingLeft: 20, paddingBottom: 16 }}>
                <span style={{ fontSize: "1rem", color: "#5a3f3f", fontWeight: 300 }}>{item.event}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Second Gallery Strip ── */}
      <div style={{ padding: "0 24px 80px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 6 }}>
          {photos.slice(14, 20).map((p, i) => (
            <PhotoSlot key={i+14} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i+14] = v; d.set("photos", ph); }}
              style={{ aspectRatio: "1", borderRadius: 6 }} small />
          ))}
        </div>
      </div>

      {/* ── RSVP Section ── */}
      <div style={{ background: ac, padding: "80px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: "rgba(255,255,255,.7)", fontFamily: "Jost,sans-serif", marginBottom: 16 }}>Join Us</div>
          <h2 style={{ fontSize: "2.8rem", fontWeight: 300, color: "white", fontStyle: "italic", marginBottom: 20 }}>Kindly RSVP</h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,.8)", lineHeight: 1.8, marginBottom: 10, fontFamily: "Jost,sans-serif", fontWeight: 300 }}>
            We would be honoured to have you celebrate with us. Please RSVP by{" "}
            <strong style={{ color: "white" }}>{d.data.rsvpDeadline || "the deadline"}</strong>.
          </p>
          <p style={{ fontSize: ".9rem", color: "rgba(255,255,255,.65)", fontFamily: "Jost,sans-serif", fontWeight: 300 }}>Use the RSVP form at the top of the page or contact us directly.</p>
        </div>
      </div>

      <SharedFooter d={d} ac={ac} />
    </div>
  );
};

export default T0_RomanticRose;