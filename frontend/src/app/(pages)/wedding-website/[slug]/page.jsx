"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { TEMPLATE_COMPONENTS } from "../components/templates/index";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function WeddingWebsitePage() {
  const { slug } = useParams();
  const [site, setSite] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API}/api/wedding-website/slug/${slug}`)
      .then(r => r.json())
      .then(json => {
        if (json.success) setSite(json.data);
        else setError("Website not found");
      })
      .catch(() => setError("Failed to load"));
  }, [slug]);

  if (error) return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", fontFamily: "Jost,sans-serif", color: "#888" }}>
      {error}
    </div>
  );

  if (!site) return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", fontFamily: "Jost,sans-serif", color: "#888" }}>
      Loading...
    </div>
  );

  // Map DB fields back to the shape templates expect
  const extras = Array.isArray(site.extra_details) ? site.extra_details : [];
  const getExtra = (key) => extras.find(e => e.key === key)?.value || "";

  const d = {
    data: {
      template: site.template_id ?? 0,
      coupleName: site.couple_name,
      date: site.wedding_date,
      venueName: site.venue_name,
      venueCity: site.venue_city,
      story: site.love_story,
      ceremony: site.ceremony_time,
      reception: site.reception_time,
      dresscode: site.dress_code,
      rsvpDeadline: site.rsvp_deadline,
      welcomeMessage: site.welcome_message,
      footerNote: site.footer_note,
      accentColor: site.accent_color,
      secondaryColor: site.secondary_color,
      bgColor: site.bg_color,
      textColor: site.text_dark_color,
      coverPhoto: site.cover_photo,
      photos: site.gallery_photos || [],
      groom: getExtra("groom"),
      bride: getExtra("bride"),
      groomBio: getExtra("groomBio"),
      brideBio: getExtra("brideBio"),
      howWeMet: getExtra("howWeMet"),
      proposal: getExtra("proposal"),
      storyChapter2: getExtra("storyChapter2"),
      storyChapter3: getExtra("storyChapter3"),
    },
    set: () => {}, // read-only on public page
  };

  const TemplateComp = TEMPLATE_COMPONENTS[d.data.template];

  return <TemplateComp d={d} websiteId={site.id} />;
}