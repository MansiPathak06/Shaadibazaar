"use client";
import { useState, useCallback } from "react";
import GlobalStyles from "./components/GlobalStyles";
import Sidebar from "./components/Sidebar";
 // ← YOUR REAL NAVBAR ADDED
import { TEMPLATE_COMPONENTS } from "./components/templates/index";
import { TEMPLATES } from "./constants/templates";
import defaultData from "./constants/defaultData";

export default function WeddingBuilder() {
  const [data, setData] = useState(defaultData);
  const [panel, setPanel] = useState("template");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(null); // { id, slug, share_token, share_url }
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState("builder"); // builder | preview

  const set = useCallback((k, v) => setData(p => ({ ...p, [k]: v })), []);
  const d = { data, set };

  const TemplateComp = TEMPLATE_COMPONENTS[data.template];
  const photoCount = data.photos.filter(Boolean).length;

  /* ── Save to backend ── */
  const handleSave = async () => {
    setSaving(true);
    try {
      const body = {
        couple_name: data.coupleName,
        wedding_date: data.date,
        venue_name: data.venueName,
        venue_city: data.venueCity,
        love_story: [data.story, data.storyChapter2, data.storyChapter3].filter(Boolean).join("\n\n"),
        ceremony_time: data.ceremony,
        reception_time: data.reception,
        dress_code: data.dresscode,
        rsvp_deadline: data.rsvpDeadline,
        welcome_message: data.welcomeMessage,
        footer_note: data.footerNote,
        extra_details: [
          { key: "groom", value: data.groom },
          { key: "bride", value: data.bride },
          { key: "groomBio", value: data.groomBio },
          { key: "brideBio", value: data.brideBio },
          { key: "howWeMet", value: data.howWeMet },
          { key: "proposal", value: data.proposal },
          { key: "storyChapter2", value: data.storyChapter2 },
          { key: "storyChapter3", value: data.storyChapter3 },
        ],
        template_id: data.template,
        accent_color: data.accentColor,
        secondary_color: data.secondaryColor,
        bg_color: data.bgColor,
        text_dark_color: data.textColor,
        cover_photo: data.coverPhoto,
        gallery_photos: data.photos.filter(Boolean),
        rsvp_enabled: 1,
      };
      const res = await fetch("http://localhost:5000/api/wedding-website", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = await res.json();
      if (json.success) {
        setSaved(json.data);
        setPanel("share");
      } else {
        alert("Error: " + json.message);
      }
    } catch (err) {
      alert("Network error — please try again.");
    } finally {
      setSaving(false);
    }
  };

  /* ── Update existing ── */
  const handleUpdate = async () => {
    if (!saved) return handleSave();
    setSaving(true);
    try {
      const body = {
        share_token: saved.share_token,
        couple_name: data.coupleName,
        wedding_date: data.date,
        venue_name: data.venueName,
        venue_city: data.venueCity,
        love_story: [data.story, data.storyChapter2, data.storyChapter3].filter(Boolean).join("\n\n"),
        ceremony_time: data.ceremony,
        reception_time: data.reception,
        dress_code: data.dresscode,
        rsvp_deadline: data.rsvpDeadline,
        welcome_message: data.welcomeMessage,
        footer_note: data.footerNote,
        extra_details: [
          { key: "groom", value: data.groom },
          { key: "bride", value: data.bride },
          { key: "groomBio", value: data.groomBio },
          { key: "brideBio", value: data.brideBio },
          { key: "howWeMet", value: data.howWeMet },
          { key: "proposal", value: data.proposal },
          { key: "storyChapter2", value: data.storyChapter2 },
          { key: "storyChapter3", value: data.storyChapter3 },
        ],
        template_id: data.template,
        accent_color: data.accentColor,
        cover_photo: data.coverPhoto,
        gallery_photos: data.photos.filter(Boolean),
      };
      const res = await fetch(`http://localhost:5000/api/wedding-website/${saved.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = await res.json();
      if (json.success) setPanel("share");
      else alert("Update failed: " + json.message);
    } catch {
      alert("Update failed — please try again.");
    } finally {
      setSaving(false);
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(saved?.share_url || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  /* ── PREVIEW MODE ── */
  if (viewMode === "preview") {
    return (
      <div>
        <GlobalStyles />
        <div style={{ background: "#1a1412", color: "white", padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 13, fontFamily: "Jost,sans-serif", position: "sticky", top: 0, zIndex: 100 }}>
          <span style={{ opacity: .6 }}>Preview Mode — {TEMPLATES[data.template].name}</span>
          <button onClick={() => setViewMode("builder")} style={{ background: "#d4a090", color: "white", border: "none", borderRadius: 99, padding: "6px 18px", cursor: "pointer", fontFamily: "Jost,sans-serif", fontSize: 12 }}>← Back to Editor</button>
        </div>
        <TemplateComp d={d} />
      </div>
    );
  }

  /* ── BUILDER MODE ── */
  return (
    <div style={{ position: "relative", background: "#f4f0eb", fontFamily: "Jost,sans-serif", minHeight: "100vh" }}>
      <GlobalStyles />

   

      {/* Builder Grid - Pushes down to make space for navbar */}
      <div style={{ 
        paddingTop: "0px",  // Space for navbar height
        display: "grid", 
        gridTemplateColumns: "320px 1fr", 
        height: "calc(100vh - 120px)",
        maxHeight: "calc(100vh - 120px)"
      }}>
        {/* Sidebar */}
        <Sidebar
          data={data}
          set={set}
          panel={panel}
          setPanel={setPanel}
          saving={saving}
          saved={saved}
          handleSave={handleSave}
          handleUpdate={handleUpdate}
          copyLink={copyLink}
          copied={copied}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />

        {/* Live Preview */}
        <div className="preview-area" style={{ overflowY: "auto", background: "#e8e2d8", padding: "14px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <div style={{ fontSize: 10, color: "#a0988e", letterSpacing: ".15em", textTransform: "uppercase" }}>
              Live Preview — click text/photos to edit directly
            </div>
            <div style={{ fontSize: 11, color: "#a0988e" }}>
              Template {data.template + 1}/12 · {TEMPLATES[data.template].name}
            </div>
          </div>
          <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 8px 48px rgba(0,0,0,.16)", background: "white" }}>
            <TemplateComp d={d} />
          </div>
          <div style={{ height: 40 }} />
        </div>
      </div>
    </div>
  );
}
