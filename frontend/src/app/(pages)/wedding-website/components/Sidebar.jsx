"use client";
import PhotoSlot from "./PhotoSlot";
import { TEMPLATES } from "../constants/templates";
import { ACCENT_PRESETS } from "../constants/accentPresets";

const Sidebar = ({ data, set, panel, setPanel, saving, saved, handleSave, handleUpdate, copyLink, copied, viewMode, setViewMode }) => {
  const presets = ACCENT_PRESETS[data.template] || ACCENT_PRESETS[0];

  return (
    <div className="sidebar" style={{ background: "white", borderRight: "1px solid #ece6de", overflowY: "auto", display: "flex", flexDirection: "column" }}>
      {/* Panel nav */}
      <div style={{ padding: "14px 14px 0", display: "flex", gap: 4, flexWrap: "wrap" }}>
        {[["template","🎨 Template"],["design","✨ Design"],["text","✏️ Content"],["photos","📷 Photos"],["share","🔗 Share"]].map(([id, label]) => (
          <button key={id} onClick={() => setPanel(id)}
            style={{ padding: "6px 12px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 11, fontWeight: panel === id ? 600 : 400, background: panel === id ? "#1a1412" : "#f4f0eb", color: panel === id ? "white" : "#666", fontFamily: "Jost,sans-serif", transition: "all .18s" }}>
            {label}
          </button>
        ))}
      </div>

      <div style={{ padding: 16, flex: 1 }}>

        {/* ── TEMPLATE PANEL ── */}
        {panel === "template" && (
          <div>
            <div style={{ fontSize: 10, color: "#aaa", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 12 }}>Choose Template</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {TEMPLATES.map((t, i) => (
                <button key={i} onClick={() => { set("template", i); set("accentColor", ACCENT_PRESETS[i][0]); }}
                  style={{ border: `2px solid ${data.template === i ? "#1a1412" : "#ece6de"}`, borderRadius: 10, padding: "12px 14px", background: data.template === i ? "#faf6f2" : "white", textAlign: "left", display: "flex", alignItems: "center", gap: 10, cursor: "pointer", transition: "all .18s" }}>
                  <span style={{ fontSize: 20 }}>{t.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 500, fontSize: 13, color: "#222" }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: "#999", marginTop: 1 }}>{t.desc}</div>
                  </div>
                  {data.template === i && <span style={{ color: "#1a1412", fontSize: 12 }}>✓</span>}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── DESIGN PANEL ── */}
        {panel === "design" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <div style={{ fontSize: 10, color: "#aaa", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 10 }}>Accent Color</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                {presets.map(c => (
                  <button key={c} onClick={() => set("accentColor", c)}
                    style={{ width: 34, height: 34, borderRadius: "50%", background: c, border: `3px solid ${data.accentColor === c ? "#1a1412" : "transparent"}`, cursor: "pointer", transition: "transform .15s", transform: data.accentColor === c ? "scale(1.15)" : "scale(1)" }} />
                ))}
              </div>
              <input type="color" value={data.accentColor} onChange={e => set("accentColor", e.target.value)}
                style={{ width: "100%", height: 40, border: "1px solid #ece6de", borderRadius: 8, cursor: "pointer", padding: 2 }} />
            </div>
            <div>
              <div style={{ fontSize: 10, color: "#aaa", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 10 }}>Preview Swatch</div>
              <div style={{ height: 56, borderRadius: 10, background: data.accentColor, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant Garamond',serif", fontSize: "1.1rem", color: "white", fontStyle: "italic", boxShadow: "0 4px 16px rgba(0,0,0,.12)" }}>
                {data.coupleName}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: "#aaa", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 10 }}>Current Template</div>
              <div style={{ padding: "12px 14px", background: "#faf6f2", borderRadius: 10, display: "flex", alignItems: "center", gap: 10, border: "1px solid #ece6de" }}>
                <span style={{ fontSize: 22 }}>{TEMPLATES[data.template].emoji}</span>
                <div>
                  <div style={{ fontWeight: 500, fontSize: 13, color: "#222" }}>{TEMPLATES[data.template].name}</div>
                  <div style={{ fontSize: 11, color: "#999" }}>{TEMPLATES[data.template].desc}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── TEXT / CONTENT PANEL ── */}
        {panel === "text" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontSize: 10, color: "#aaa", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 4 }}>Edit Content</div>
            <div style={{ fontSize: 11, color: "#b0a8a0", background: "#faf6f2", padding: "8px 12px", borderRadius: 8, lineHeight: 1.6 }}>
              💡 You can also click any text directly in the preview to edit it inline.
            </div>
            {[
              ["Couple Names", "coupleName", "text"],
              ["Wedding Date", "date", "text"],
              ["Venue Name", "venueName", "text"],
              ["Venue City", "venueCity", "text"],
              ["Groom's Name", "groom", "text"],
              ["Bride's Name", "bride", "text"],
              ["Welcome Message", "welcomeMessage", "text"],
              ["Ceremony Time", "ceremony", "text"],
              ["Reception Time", "reception", "text"],
              ["Dress Code", "dresscode", "text"],
              ["RSVP Deadline", "rsvpDeadline", "text"],
              ["Footer Note", "footerNote", "text"],
              ["Groom's Bio", "groomBio", "textarea"],
              ["Bride's Bio", "brideBio", "textarea"],
              ["How We Met", "howWeMet", "textarea"],
              ["The Proposal", "proposal", "textarea"],
              ["Our Love Story (Part 1)", "story", "textarea"],
              ["Our Love Story (Part 2)", "storyChapter2", "textarea"],
              ["Our Love Story (Part 3)", "storyChapter3", "textarea"],
            ].map(([label, key, type]) => (
              <div key={key}>
                <div style={{ fontSize: 11, color: "#888", marginBottom: 4, fontWeight: 500 }}>{label}</div>
                {type === "textarea"
                  ? <textarea value={data[key] || ""} onChange={e => set(key, e.target.value)}
                      style={{ width: "100%", padding: "8px 10px", border: "1px solid #ece6de", borderRadius: 8, fontSize: 12, fontFamily: "Jost,sans-serif", resize: "vertical", minHeight: 80, lineHeight: 1.6, color: "#333" }} />
                  : <input type="text" value={data[key] || ""} onChange={e => set(key, e.target.value)}
                      style={{ width: "100%", padding: "8px 10px", border: "1px solid #ece6de", borderRadius: 8, fontSize: 12, fontFamily: "Jost,sans-serif", color: "#333" }} />
                }
              </div>
            ))}
          </div>
        )}

        {/* ── PHOTOS PANEL ── */}
        {panel === "photos" && (
          <div>
            <div style={{ fontSize: 10, color: "#aaa", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 4 }}>
              Photos ({data.photos.filter(Boolean).length}/20)
            </div>
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 11, color: "#888", marginBottom: 6, fontWeight: 500 }}>Cover Photo</div>
              <PhotoSlot src={data.coverPhoto} onUpload={v => set("coverPhoto", v)}
                style={{ width: "100%", aspectRatio: "16/9", borderRadius: 10, border: "2px dashed #d4c8bc" }} label="Click to upload cover" />
              {data.coverPhoto && <button onClick={() => set("coverPhoto", null)} style={{ fontSize: 11, color: "#e07070", background: "none", border: "none", cursor: "pointer", marginTop: 4, padding: 0 }}>✕ Remove cover</button>}
            </div>
            <div style={{ fontSize: 11, color: "#888", marginBottom: 4, fontWeight: 500 }}>Portrait Photos (slots 1–2)</div>
            <div style={{ fontSize: 10, color: "#b0a8a0", marginBottom: 8, lineHeight: 1.5 }}>Slots 1 & 2 are used as the groom & bride portraits in the "Meet the Couple" section.</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6, marginBottom: 14 }}>
              {data.photos.slice(0, 2).map((p, i) => (
                <div key={i} style={{ position: "relative", gridColumn: "span 2" }}>
                  <PhotoSlot src={p} onUpload={v => { const ph = [...data.photos]; ph[i] = v; set("photos", ph); }}
                    style={{ aspectRatio: "1", borderRadius: 8, border: `2px dashed ${p ? "transparent" : "#d4c8bc"}` }} small label={i === 0 ? "Groom" : "Bride"} />
                  {p && <button onClick={() => { const ph = [...data.photos]; ph[i] = null; set("photos", ph); }}
                    style={{ position: "absolute", top: 2, right: 2, background: "rgba(0,0,0,.6)", color: "white", border: "none", borderRadius: "50%", width: 18, height: 18, cursor: "pointer", fontSize: 9, display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>}
                </div>
              ))}
            </div>
            <div style={{ fontSize: 11, color: "#888", marginBottom: 6, fontWeight: 500 }}>Gallery Photos (slots 3–20)</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}>
              {data.photos.slice(2).map((p, i) => (
                <div key={i+2} style={{ position: "relative" }}>
                  <PhotoSlot src={p} onUpload={v => { const ph = [...data.photos]; ph[i+2] = v; set("photos", ph); }}
                    style={{ aspectRatio: "1", borderRadius: 8, border: `1px dashed ${p ? "transparent" : "#d4c8bc"}` }} small />
                  {p && <button onClick={() => { const ph = [...data.photos]; ph[i+2] = null; set("photos", ph); }}
                    style={{ position: "absolute", top: 2, right: 2, background: "rgba(0,0,0,.6)", color: "white", border: "none", borderRadius: "50%", width: 18, height: 18, cursor: "pointer", fontSize: 9, display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1 }}>✕</button>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── SHARE PANEL ── */}
        {panel === "share" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {!saved ? (
              <div>
                <div style={{ fontSize: 10, color: "#aaa", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 14 }}>Publish Your Website</div>
                <p style={{ fontSize: 12, color: "#777", lineHeight: 1.7 }}>Click "Publish & Share" to save your wedding website and get a shareable link you can send to guests.</p>
                <button onClick={handleSave} disabled={saving}
                  style={{ width: "100%", marginTop: 12, background: "#1a1412", color: "white", border: "none", borderRadius: 10, padding: "12px 0", cursor: "pointer", fontFamily: "Jost,sans-serif", fontSize: 13, fontWeight: 500 }}>
                  {saving ? "Publishing…" : "✨ Publish & Share"}
                </button>
              </div>
            ) : (
              <div>
                <div style={{ background: "#f0faf4", border: "1px solid #a8d8b8", borderRadius: 12, padding: "16px", marginBottom: 14 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#22863a", marginBottom: 6 }}>✓ Your website is live!</div>
                  <div style={{ fontSize: 11, color: "#4a8a62" }}>Share the link below with your guests.</div>
                </div>
                <div style={{ fontSize: 11, color: "#888", marginBottom: 6, fontWeight: 500 }}>Shareable Link</div>
                <div style={{ display: "flex", gap: 6 }}>
                  <input readOnly value={saved.share_url} style={{ flex: 1, padding: "8px 10px", border: "1px solid #ece6de", borderRadius: 8, fontSize: 11, fontFamily: "monospace", background: "#faf6f2", color: "#555" }} />
                  <button onClick={copyLink} style={{ background: "#1a1412", color: "white", border: "none", borderRadius: 8, padding: "8px 14px", cursor: "pointer", fontSize: 11, whiteSpace: "nowrap" }}>
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
                <div style={{ fontSize: 11, color: "#aaa", marginTop: 8, lineHeight: 1.6 }}>Anyone with this link can view your wedding website.</div>
                <button onClick={handleUpdate} disabled={saving} style={{ width: "100%", marginTop: 14, background: "#d4a090", color: "white", border: "none", borderRadius: 10, padding: "10px 0", cursor: "pointer", fontFamily: "Jost,sans-serif", fontSize: 12 }}>
                  {saving ? "Saving…" : "💾 Save Changes"}
                </button>
                <div style={{ marginTop: 20, padding: "14px 16px", background: "#faf6f2", borderRadius: 10, border: "1px solid #ece6de" }}>
                  <div style={{ fontSize: 10, color: "#aaa", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 10 }}>Share via</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {[
                      ["📱 WhatsApp", `https://wa.me/?text=${encodeURIComponent("You're invited! View our wedding website: " + saved.share_url)}`],
                      ["✉️ Email", `mailto:?subject=You're Invited!&body=${encodeURIComponent("View our wedding website: " + saved.share_url)}`],
                    ].map(([label, href]) => (
                      <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                        style={{ flex: 1, display: "block", textAlign: "center", padding: "8px 0", background: "#1a1412", color: "white", borderRadius: 8, fontSize: 11, textDecoration: "none" }}>
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        
<div style={{ padding: "14px 16px", borderTop: "1px solid #ece6de", borderBottom: "1px solid #ece6de", margin: "14px 0" }}>
  <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
    <div style={{ fontSize: 11, color: "rgba(26,20,18,.6)" }}>
      {data.photos.filter(Boolean).length}/20 photos
    </div>
  </div>
  <div style={{ display: "flex", gap: 8 }}>
    <button onClick={() => setViewMode("preview")} 
      style={{ flex: 1, background: "transparent", color: "#1a1412", border: "1px solid #1a1412", borderRadius: 99, padding: "8px 16px", cursor: "pointer", fontSize: 12, fontFamily: "Jost,sans-serif" }}>
      Preview
    </button>
    <button onClick={saved ? handleUpdate : handleSave} disabled={saving}
      style={{ flex: 1, background: saving ? "#888" : "#d4a090", color: "white", border: "none", borderRadius: 99, padding: "8px 16px", cursor: saving ? "default" : "pointer", fontSize: 12, fontFamily: "Jost,sans-serif", fontWeight: 500 }}>
      {saving ? "Saving…" : saved ? "Update & Share" : "✨ Publish & Share"}
    </button>
  </div>
</div>


      </div>
    </div>
  );
};

export default Sidebar;