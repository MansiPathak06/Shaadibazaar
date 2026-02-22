// "use client";
// import { useState, useRef, useCallback, useEffect } from "react";

// /* ─── Google Fonts + global styles ─────────────────────────────────────── */
// const GlobalStyles = () => (
//   <style>{`
//     @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Jost:wght@200;300;400;500&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Nunito:wght@200;300;400;600&family=Raleway:ital,wght@0,100;0,300;0,400;0,600;1,300&family=Cinzel:wght@400;600&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Josefin+Sans:ital,wght@0,100;0,300;0,400;1,100&family=Sacramento&family=Great+Vibes&family=Alex+Brush&family=Lora:ital,wght@0,400;0,600;1,400;1,600&display=swap');
//     *{box-sizing:border-box;margin:0;padding:0;}
//     body{margin:0;}
    
//     .ef{cursor:text;outline:none;border-radius:3px;transition:background .15s,box-shadow .15s;min-width:20px;display:inline-block;}
//     .ef:hover{background:rgba(255,255,255,.22);box-shadow:0 0 0 2px rgba(255,255,255,.45);}
//     .ef:focus{background:rgba(255,255,255,.3);box-shadow:0 0 0 2px rgba(255,255,255,.75);}
//     .ef-dark:hover{background:rgba(0,0,0,.06);box-shadow:0 0 0 2px rgba(0,0,0,.15);}
//     .ef-dark:focus{background:rgba(0,0,0,.09);box-shadow:0 0 0 2px rgba(0,0,0,.22);}

//     .ps{position:relative;overflow:hidden;cursor:pointer;}
//     .ps:hover .po{opacity:1;}
//     .po{position:absolute;inset:0;background:rgba(0,0,0,.42);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .2s;color:#fff;font-size:12px;font-family:'Jost',sans-serif;flex-direction:column;gap:5px;}
//     .ps-empty{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;color:#b8afa4;font-family:'Jost',sans-serif;font-size:12px;}

//     @keyframes fu{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:none;}}
//     @keyframes fs{from{opacity:0;transform:scale(.94);}to{opacity:1;transform:none;}}
//     @keyframes spin{to{transform:rotate(360deg);}}
//     .fu{animation:fu .65s ease both;}
//     .fu2{animation:fu .65s .15s ease both;}
//     .fu3{animation:fu .65s .3s ease both;}
//     .fu4{animation:fu .65s .45s ease both;}
//     .fs{animation:fs .5s ease both;}

//     .sidebar::-webkit-scrollbar{width:4px;}
//     .sidebar::-webkit-scrollbar-track{background:transparent;}
//     .sidebar::-webkit-scrollbar-thumb{background:#d4ccc4;border-radius:99px;}
//     .preview-area::-webkit-scrollbar{width:6px;}
//     .preview-area::-webkit-scrollbar-track{background:#e8e2d8;}
//     .preview-area::-webkit-scrollbar-thumb{background:#c4b8ac;border-radius:99px;}

//     @keyframes gradShift{0%,100%{background-position:0% 50%;}50%{background-position:100% 50%;}}
//     .grad-anim{background-size:200% 200%;animation:gradShift 6s ease infinite;}

//     .pulsedot{animation:pulse 2s cubic-bezier(0.4,0,0.6,1) infinite;}
//     @keyframes pulse{0%,100%{opacity:1;}50%{opacity:.4;}}
//   `}</style>
// );

// /* ─── Editable field ────────────────────────────────────────────────────── */
// const E = ({ d, k, tag: Tag = "span", style, className, dark, placeholder }) => (
//   <Tag
//     contentEditable suppressContentEditableWarning
//     className={`ef ${dark ? "ef-dark" : ""} ${className || ""}`}
//     style={style}
//     data-placeholder={placeholder}
//     onBlur={e => d.set(k, e.currentTarget.innerText)}
//     dangerouslySetInnerHTML={{ __html: d.data[k] || "" }}
//   />
// );

// /* ─── Photo slot ────────────────────────────────────────────────────────── */
// const PhotoSlot = ({ src, onUpload, style, className, label, small }) => {
//   const ref = useRef();
//   return (
//     <div className={`ps ${className || ""}`} style={style} onClick={() => ref.current.click()}>
//       {src
//         ? <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
//         : <div className="ps-empty" style={{ width: "100%", height: "100%", background: "#f2ede8" }}>
//             <span style={{ fontSize: small ? 20 : 28, opacity: .35 }}>+</span>
//             {!small && <span style={{ opacity: .5 }}>{label || "Add Photo"}</span>}
//           </div>}
//       <div className="po">
//         <span style={{ fontSize: small ? 16 : 22 }}>📷</span>
//         {!small && <span>{src ? "Change" : "Upload"}</span>}
//       </div>
//       <input ref={ref} type="file" accept="image/*,video/*" style={{ display: "none" }}
//         onChange={e => {
//           const f = e.target.files[0]; if (!f) return;
//           const r = new FileReader(); r.onload = ev => onUpload(ev.target.result); r.readAsDataURL(f);
//         }} />
//     </div>
//   );
// };

// /* ─── Default data ───────────────────────────────────────────────────────── */
// const defaultData = {
//   coupleName: "Sarah & James", date: "September 14, 2025",
//   venueName: "The Grand Rosewood Estate", venueCity: "Tuscany, Italy",
//   story: "We met on a rainy Tuesday at a bookshop neither of us meant to walk into. He reached for the same book, I dropped my coffee — and somehow that became our favourite story to tell. Five years later, we're still reaching for the same things.",
//   welcomeMessage: "With joyful hearts we invite you to celebrate with us",
//   ceremony: "4:30 PM — Garden Chapel", reception: "7:00 PM — The Grand Hall",
//   dresscode: "Black Tie Optional", rsvpDeadline: "August 1, 2025",
//   footerNote: "We can't wait to celebrate with you ♡",
//   photos: new Array(20).fill(null),
//   coverPhoto: null,
//   accentColor: "#b5867a", secondaryColor: "#e8d5cc",
//   bgColor: "#fffaf8", textColor: "#3d2c2c",
//   template: 0,
// };

// /* ═══════════════════════════════════════════════════════════════════════════
//    TEMPLATE DEFINITIONS
// ════════════════════════════════════════════════════════════════════════════ */
// const TEMPLATES = [
//   { name: "Romantic Rose",    emoji: "🌹", desc: "Warm serif elegance",     font: "'Cormorant Garamond', serif" },
//   { name: "Modern Minimal",   emoji: "◻",  desc: "Clean & architectural",   font: "'DM Sans', sans-serif" },
//   { name: "Garden Boho",      emoji: "🌿", desc: "Earthy & organic",        font: "'Libre Baskerville', serif" },
//   { name: "Midnight Luxe",    emoji: "🌙", desc: "Dark & dramatic",         font: "'Cinzel', serif" },
//   { name: "Golden Classic",   emoji: "✨", desc: "Art deco opulence",       font: "'Playfair Display', serif" },
//   { name: "Coastal Blue",     emoji: "🌊", desc: "Fresh & airy nautical",   font: "'Raleway', sans-serif" },
//   { name: "Floral Script",    emoji: "🌸", desc: "Soft & dreamy",           font: "'Great Vibes', cursive" },
//   { name: "Rustic Charm",     emoji: "🍂", desc: "Warm & woodsy",           font: "'Lora', serif" },
//   { name: "Vibrant Fiesta",   emoji: "🎊", desc: "Bold & colorful",         font: "'Josefin Sans', sans-serif" },
//   { name: "Pastel Dream",     emoji: "🦋", desc: "Soft pastel fairytale",   font: "'EB Garamond', serif" },
//   { name: "Royal Purple",     emoji: "👑", desc: "Regal & luxurious",       font: "'Cinzel', serif" },
//   { name: "Desert Sunset",    emoji: "🌅", desc: "Warm terracotta & gold",  font: "'Raleway', sans-serif" },
// ];

// /* ─────────────────────────────────────────────────────────────────────────
//    T0 — Romantic Rose
// ───────────────────────────────────────────────────────────────────────── */
// const T0 = ({ d }) => {
//   const ac = d.data.accentColor;
//   const photos = d.data.photos;
//   return (
//     <div style={{ fontFamily: "'Cormorant Garamond', serif", color: "#3d2c2c", background: "#fffaf8" }}>
//       {/* Hero */}
//       <div style={{ position: "relative", minHeight: 560, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center", overflow: "hidden", background: `linear-gradient(160deg,#fff5f2,#fde8e2)` }}>
//         <PhotoSlot src={d.data.coverPhoto} onUpload={v => d.set("coverPhoto", v)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: d.data.coverPhoto ? 1 : 0 }} label="Cover Photo" />
//         <div style={{ position: "absolute", inset: 0, background: d.data.coverPhoto ? "linear-gradient(to bottom, rgba(0,0,0,.25), rgba(0,0,0,.5))" : "none" }} />
//         <div style={{ position: "relative", zIndex: 2, padding: "80px 40px" }}>
//           <div className="fu" style={{ fontSize: 13, letterSpacing: ".38em", textTransform: "uppercase", color: d.data.coverPhoto ? "rgba(255,255,255,.8)" : ac, marginBottom: 22, fontFamily: "Jost, sans-serif", fontWeight: 300 }}>We're getting married</div>
//           <E d={d} k="coupleName" tag="h1" className="fu2" style={{ fontSize: "clamp(2.8rem,9vw,5.5rem)", fontWeight: 300, margin: "0 0 20px", lineHeight: 1.08, color: d.data.coverPhoto ? "white" : "#3d2c2c", textShadow: d.data.coverPhoto ? "0 2px 24px rgba(0,0,0,.4)" : "none", letterSpacing: "-.01em" }} />
//           <div style={{ width: 60, height: 1, background: d.data.coverPhoto ? "rgba(255,255,255,.6)" : ac, margin: "0 auto 22px" }} />
//           <E d={d} k="date" className="fu3" style={{ fontSize: "1.4rem", color: d.data.coverPhoto ? "rgba(255,255,255,.85)" : "#8a6255", fontStyle: "italic", textShadow: d.data.coverPhoto ? "0 1px 8px rgba(0,0,0,.3)" : "none", display: "block", marginBottom: 10 }} />
//           <E d={d} k="venueName" style={{ fontSize: "1rem", color: d.data.coverPhoto ? "rgba(255,255,255,.7)" : "#8a6255", fontFamily: "Jost,sans-serif", fontWeight: 300 }} />
//         </div>
//       </div>
//       {/* Welcome */}
//       <div style={{ padding: "50px 40px 20px", textAlign: "center" }}>
//         <E d={d} k="welcomeMessage" tag="p" dark style={{ fontSize: "1.15rem", color: ac, fontStyle: "italic", fontWeight: 300, maxWidth: 560, margin: "0 auto" }} />
//       </div>
//       {/* Story */}
//       <div style={{ padding: "40px 40px 70px", maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
//         <h2 style={{ fontSize: "2.1rem", fontWeight: 400, color: ac, marginBottom: 12, fontStyle: "italic" }}>Our Story</h2>
//         <div style={{ width: 40, height: 1, background: "#e8cec8", margin: "0 auto 28px" }} />
//         <E d={d} k="story" tag="p" dark style={{ fontSize: "1.1rem", lineHeight: 1.9, color: "#5a3f3f", fontStyle: "italic", fontWeight: 300 }} />
//       </div>
//       {/* Gallery 20 photos */}
//       <div style={{ padding: "10px 24px 70px", maxWidth: 960, margin: "0 auto" }}>
//         <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 400, color: ac, marginBottom: 26, fontStyle: "italic" }}>Our Moments</h2>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
//           {photos.slice(0, 20).map((p, i) => (
//             <PhotoSlot key={i} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i] = v; d.set("photos", ph); }}
//               style={{ aspectRatio: i === 0 || i === 7 ? "2/1" : "4/3", gridColumn: i === 0 || i === 7 ? "span 2" : "span 1", borderRadius: 6 }} />
//           ))}
//         </div>
//       </div>
//       {/* Details */}
//       <div style={{ background: `linear-gradient(135deg,#fff5f2,#fde8e2)`, padding: "70px 40px" }}>
//         <div style={{ maxWidth: 820, margin: "0 auto" }}>
//           <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 400, color: ac, marginBottom: 36, fontStyle: "italic" }}>The Details</h2>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
//             {[["📍","Venue","venueName"],["🏙","City","venueCity"],["💒","Ceremony","ceremony"],["🥂","Reception","reception"],["👗","Dress Code","dresscode"],["📮","RSVP By","rsvpDeadline"]].map(([ico, lbl, key]) => (
//               <div key={key} style={{ textAlign: "center", padding: "24px 16px", background: "white", borderRadius: 12, boxShadow: "0 2px 20px rgba(181,134,122,.1)" }}>
//                 <div style={{ fontSize: 24, marginBottom: 8 }}>{ico}</div>
//                 <div style={{ fontSize: 10, letterSpacing: ".25em", textTransform: "uppercase", color: "#b09090", marginBottom: 8, fontFamily: "Jost,sans-serif" }}>{lbl}</div>
//                 <E d={d} k={key} dark style={{ fontWeight: 400, fontSize: ".95rem", color: "#3d2c2c" }} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer d={d} ac={ac} />
//     </div>
//   );
// };

// /* ─────────────────────────────────────────────────────────────────────────
//    T1 — Modern Minimal
// ───────────────────────────────────────────────────────────────────────── */
// const T1 = ({ d }) => {
//   const ac = d.data.accentColor;
//   const photos = d.data.photos;
//   return (
//     <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#111", background: "#fafafa" }}>
//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 500 }}>
//         <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "60px 50px" }}>
//           <div style={{ fontSize: 10, letterSpacing: ".5em", color: ac, marginBottom: 20, textTransform: "uppercase" }}>Wedding Invitation</div>
//           <E d={d} k="coupleName" tag="h1" dark style={{ fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 300, margin: "0 0 20px", lineHeight: 1.05, letterSpacing: "-.03em" }} />
//           <div style={{ width: 50, height: 2, background: ac, marginBottom: 20 }} />
//           <E d={d} k="date" dark style={{ fontSize: "1.1rem", color: "#666", fontWeight: 300, display: "block", marginBottom: 6 }} />
//           <E d={d} k="venueName" dark style={{ fontSize: "1rem", color: "#999", fontWeight: 300, display: "block", marginBottom: 4 }} />
//           <E d={d} k="venueCity" dark style={{ fontSize: ".9rem", color: "#aaa", fontWeight: 300, display: "block" }} />
//         </div>
//         <PhotoSlot src={d.data.coverPhoto} onUpload={v => d.set("coverPhoto", v)} style={{ minHeight: 400 }} label="Cover Photo" />
//       </div>
//       <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", borderTop: "1px solid #eee" }}>
//         <div style={{ background: ac, padding: "60px 40px", display: "flex", alignItems: "center" }}>
//           <div style={{ color: "white", fontSize: "1.4rem", fontWeight: 300, lineHeight: 1.5 }}>Our<br /><em>story</em></div>
//         </div>
//         <div style={{ padding: "60px 50px" }}>
//           <E d={d} k="story" tag="p" dark style={{ fontSize: "1.06rem", lineHeight: 1.9, color: "#444", fontWeight: 300, margin: 0 }} />
//         </div>
//       </div>
//       {/* 4-across strip gallery */}
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 4, background: "#f0f0f0" }}>
//         {photos.slice(0, 20).map((p, i) => (
//           <PhotoSlot key={i} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i] = v; d.set("photos", ph); }}
//             style={{ aspectRatio: i < 5 ? "1" : i < 10 ? "3/4" : "4/3" }} small />
//         ))}
//       </div>
//       <div style={{ padding: "70px 40px", maxWidth: 820, margin: "0 auto" }}>
//         <div style={{ fontSize: 10, letterSpacing: ".5em", color: ac, marginBottom: 30, textTransform: "uppercase", textAlign: "center" }}>Event Details</div>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: "1px solid #eee" }}>
//           {[["Venue","venueName"],["City","venueCity"],["Ceremony","ceremony"],["Reception","reception"],["Dress Code","dresscode"],["RSVP By","rsvpDeadline"]].map(([lbl, key], i) => (
//             <div key={key} style={{ padding: "28px 24px", borderRight: (i+1) % 3 !== 0 ? "1px solid #eee" : "none", borderBottom: i < 3 ? "1px solid #eee" : "none" }}>
//               <div style={{ fontSize: 9, letterSpacing: ".3em", color: "#aaa", textTransform: "uppercase", marginBottom: 8 }}>{lbl}</div>
//               <E d={d} k={key} dark style={{ fontSize: ".93rem", fontWeight: 500, color: "#111" }} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer d={d} ac={ac} dark />
//     </div>
//   );
// };

// /* ─────────────────────────────────────────────────────────────────────────
//    T2 — Garden Boho
// ───────────────────────────────────────────────────────────────────────── */
// const T2 = ({ d }) => {
//   const ac = d.data.accentColor;
//   const photos = d.data.photos;
//   return (
//     <div style={{ fontFamily: "'Libre Baskerville', serif", color: "#3b3227", background: "#f9f5ee" }}>
//       <div style={{ position: "relative", textAlign: "center", padding: "90px 40px 70px", overflow: "hidden", background: "linear-gradient(180deg,#f0e9d6,#f9f5ee)" }}>
//         <PhotoSlot src={d.data.coverPhoto} onUpload={v => d.set("coverPhoto", v)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: d.data.coverPhoto ? 0.55 : 0 }} label="Cover Photo" />
//         <div style={{ position: "relative", zIndex: 2 }}>
//           <div style={{ fontSize: 44, marginBottom: 14, opacity: .5 }}>🌿</div>
//           <E d={d} k="welcomeMessage" tag="p" style={{ fontSize: ".9rem", letterSpacing: ".4em", color: ac, marginBottom: 18, textTransform: "uppercase", fontFamily: "Nunito,sans-serif", fontWeight: 300 }} />
//           <E d={d} k="coupleName" tag="h1" className="fu" style={{ fontSize: "clamp(2.4rem,7vw,4.8rem)", fontWeight: 400, margin: "0 0 16px", fontStyle: "italic", color: ac, lineHeight: 1.05 }} />
//           <div style={{ fontSize: 22, color: "#c8b89a", margin: "0 0 16px" }}>✦</div>
//           <E d={d} k="date" style={{ fontSize: "1.2rem", color: "#6b5744", fontStyle: "italic", display: "block", marginBottom: 8 }} />
//           <E d={d} k="venueName" style={{ fontSize: "1rem", color: "#8c7b6b", fontFamily: "Nunito,sans-serif", fontWeight: 300, display: "block" }} />
//         </div>
//       </div>
//       <div style={{ padding: "60px 40px", maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
//         <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 28 }}>
//           <div style={{ flex: 1, height: 1, background: "#d4c5b0" }} /><span style={{ color: ac, fontSize: "1.3rem" }}>♡</span><div style={{ flex: 1, height: 1, background: "#d4c5b0" }} />
//         </div>
//         <E d={d} k="story" tag="p" dark style={{ fontSize: "1.1rem", lineHeight: 2, color: "#5c4a36", fontStyle: "italic" }} />
//       </div>
//       {/* Organic gallery grid */}
//       <div style={{ padding: "10px 24px 70px", maxWidth: 880, margin: "0 auto" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
//           {photos.slice(0, 20).map((p, i) => (
//             <PhotoSlot key={i} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i] = v; d.set("photos", ph); }}
//               style={{ aspectRatio: [1,3,6,11,16].includes(i) ? "3/4" : "4/3", borderRadius: 10, border: "3px solid white", boxShadow: "0 3px 16px rgba(0,0,0,.07)", gridColumn: [0,9].includes(i) ? "span 2" : "span 1" }} />
//           ))}
//         </div>
//       </div>
//       <div style={{ background: ac, padding: "70px 40px" }}>
//         <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 400, color: "white", marginBottom: 36, fontStyle: "italic" }}>Celebration Details</h2>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, maxWidth: 820, margin: "0 auto" }}>
//           {[["🌿","Venue","venueName"],["🍃","Location","venueCity"],["🕊","Ceremony","ceremony"],["🌸","Reception","reception"],["✨","Dress Code","dresscode"],["📜","RSVP By","rsvpDeadline"]].map(([ico, lbl, key]) => (
//             <div key={key} style={{ background: "rgba(255,255,255,.15)", borderRadius: 14, padding: "22px 18px", textAlign: "center", border: "1px solid rgba(255,255,255,.28)" }}>
//               <div style={{ fontSize: 20, marginBottom: 6 }}>{ico}</div>
//               <div style={{ fontSize: 9, letterSpacing: ".25em", color: "rgba(255,255,255,.7)", textTransform: "uppercase", fontFamily: "Nunito,sans-serif", marginBottom: 6 }}>{lbl}</div>
//               <E d={d} k={key} style={{ color: "white", fontSize: ".9rem" }} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer d={d} ac={ac} />
//     </div>
//   );
// };

// /* ─────────────────────────────────────────────────────────────────────────
//    T3 — Midnight Luxe (dark dramatic)
// ───────────────────────────────────────────────────────────────────────── */
// const T3 = ({ d }) => {
//   const ac = d.data.accentColor || "#c9a96e";
//   const photos = d.data.photos;
//   return (
//     <div style={{ fontFamily: "'Cinzel', serif", color: "#f0e8d8", background: "#0d0a07" }}>
//       <div style={{ position: "relative", minHeight: 600, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center", overflow: "hidden" }}>
//         <PhotoSlot src={d.data.coverPhoto} onUpload={v => d.set("coverPhoto", v)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .35 }} label="Cover Photo" />
//         <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(201,169,110,.08) 0%, rgba(0,0,0,.7) 80%)" }} />
//         <div style={{ position: "relative", zIndex: 2, padding: "80px 40px" }}>
//           <div className="fu" style={{ fontSize: 10, letterSpacing: ".6em", color: ac, marginBottom: 28, textTransform: "uppercase", fontFamily: "Jost,sans-serif", fontWeight: 200 }}>an invitation to celebrate</div>
//           <E d={d} k="coupleName" tag="h1" className="fu2" style={{ fontSize: "clamp(2.5rem,7vw,5rem)", fontWeight: 400, margin: "0 0 28px", lineHeight: 1.1, color: "#f8f0e0", letterSpacing: ".1em" }} />
//           <div style={{ width: 80, height: 1, background: `linear-gradient(to right, transparent, ${ac}, transparent)`, margin: "0 auto 28px" }} />
//           <E d={d} k="date" className="fu3" style={{ fontSize: "1.2rem", color: ac, letterSpacing: ".3em", display: "block", marginBottom: 14, textTransform: "uppercase", fontFamily: "Jost,sans-serif", fontWeight: 300 }} />
//           <E d={d} k="venueName" style={{ fontSize: ".95rem", color: "rgba(240,232,216,.6)", letterSpacing: ".2em", fontFamily: "Jost,sans-serif", fontWeight: 200 }} />
//         </div>
//       </div>
//       {/* Story on dark */}
//       <div style={{ padding: "80px 40px", maxWidth: 680, margin: "0 auto", textAlign: "center", borderBottom: `1px solid rgba(201,169,110,.2)` }}>
//         <div style={{ fontSize: 10, letterSpacing: ".5em", color: ac, marginBottom: 24, textTransform: "uppercase", fontFamily: "Jost,sans-serif" }}>Our Story</div>
//         <E d={d} k="story" tag="p" style={{ fontSize: "1.05rem", lineHeight: 2, color: "rgba(240,232,216,.7)", fontFamily: "'EB Garamond', serif", fontStyle: "italic", fontWeight: 300 }} />
//       </div>
//       {/* Dark gallery */}
//       <div style={{ padding: "50px 20px 70px" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 3 }}>
//           {photos.slice(0, 20).map((p, i) => (
//             <PhotoSlot key={i} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i] = v; d.set("photos", ph); }}
//               style={{ aspectRatio: i === 0 ? "2/1" : "1", gridColumn: i === 0 ? "span 2" : "span 1", filter: "grayscale(20%) contrast(1.08)" }} small />
//           ))}
//         </div>
//       </div>
//       {/* Details gold on dark */}
//       <div style={{ padding: "70px 40px", background: "#110e09" }}>
//         <div style={{ fontSize: 10, letterSpacing: ".6em", color: ac, marginBottom: 36, textTransform: "uppercase", textAlign: "center", fontFamily: "Jost,sans-serif" }}>The Occasion</div>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 1, maxWidth: 820, margin: "0 auto", border: `1px solid rgba(201,169,110,.2)` }}>
//           {[["Venue","venueName"],["City","venueCity"],["Ceremony","ceremony"],["Reception","reception"],["Dress Code","dresscode"],["RSVP By","rsvpDeadline"]].map(([lbl, key]) => (
//             <div key={key} style={{ padding: "28px 22px", borderRight: `1px solid rgba(201,169,110,.15)`, borderBottom: `1px solid rgba(201,169,110,.15)` }}>
//               <div style={{ fontSize: 9, letterSpacing: ".4em", color: ac, textTransform: "uppercase", marginBottom: 10, fontFamily: "Jost,sans-serif" }}>{lbl}</div>
//               <E d={d} k={key} style={{ fontSize: ".9rem", color: "#f0e8d8", letterSpacing: ".05em" }} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div style={{ background: "#0d0a07", padding: "40px", textAlign: "center", borderTop: `1px solid rgba(201,169,110,.15)` }}>
//         <E d={d} k="footerNote" style={{ fontSize: ".9rem", color: ac, letterSpacing: ".2em", fontFamily: "Jost,sans-serif", fontWeight: 200 }} />
//       </div>
//     </div>
//   );
// };

// /* ─────────────────────────────────────────────────────────────────────────
//    T4 — Golden Classic (Art Deco)
// ───────────────────────────────────────────────────────────────────────── */
// const T4 = ({ d }) => {
//   const ac = d.data.accentColor || "#c9a330";
//   const photos = d.data.photos;
//   return (
//     <div style={{ fontFamily: "'Playfair Display', serif", color: "#2a1f0e", background: "#fdfbf4" }}>
//       {/* Hero with art deco border */}
//       <div style={{ position: "relative", minHeight: 560, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center", background: `linear-gradient(135deg, #fdfbf4, #f8f0d4)` }}>
//         <PhotoSlot src={d.data.coverPhoto} onUpload={v => d.set("coverPhoto", v)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: d.data.coverPhoto ? .45 : 0 }} label="Cover Photo" />
//         {/* Art deco frame */}
//         <div style={{ position: "absolute", inset: 20, border: `1px solid ${ac}`, opacity: .4 }} />
//         <div style={{ position: "absolute", inset: 28, border: `2px solid ${ac}`, opacity: .2 }} />
//         <div style={{ position: "relative", zIndex: 2, padding: "60px 60px" }}>
//           <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 24 }}>
//             <div style={{ height: 1, width: 50, background: ac }} />
//             <span style={{ color: ac, fontSize: 18 }}>◆</span>
//             <div style={{ height: 1, width: 50, background: ac }} />
//           </div>
//           <div className="fu" style={{ fontSize: 11, letterSpacing: ".5em", color: ac, marginBottom: 22, textTransform: "uppercase", fontFamily: "Jost,sans-serif", fontWeight: 300 }}>Marriage Celebration</div>
//           <E d={d} k="coupleName" tag="h1" className="fu2" style={{ fontSize: "clamp(2.4rem,7vw,5rem)", fontWeight: 700, margin: "0 0 20px", lineHeight: 1.1, color: "#2a1f0e" }} />
//           <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", margin: "0 0 20px" }}>
//             <div style={{ height: 1, width: 30, background: ac, opacity: .5 }} />
//             <E d={d} k="date" style={{ fontSize: "1.1rem", color: ac, fontStyle: "italic", letterSpacing: ".05em" }} />
//             <div style={{ height: 1, width: 30, background: ac, opacity: .5 }} />
//           </div>
//           <E d={d} k="venueName" style={{ fontSize: ".95rem", color: "#7a6a4a", fontFamily: "Jost,sans-serif", fontWeight: 300, letterSpacing: ".15em" }} />
//         </div>
//       </div>
//       {/* Story */}
//       <div style={{ padding: "70px 40px", background: "#f8f0d4" }}>
//         <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
//           <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 32 }}>
//             <div style={{ height: 1, flex: 1, background: ac, opacity: .3 }} />
//             <span style={{ color: ac, fontSize: 20 }}>◆ ◆ ◆</span>
//             <div style={{ height: 1, flex: 1, background: ac, opacity: .3 }} />
//           </div>
//           <E d={d} k="story" tag="p" dark style={{ fontSize: "1.12rem", lineHeight: 1.95, color: "#5a4a2a", fontStyle: "italic" }} />
//         </div>
//       </div>
//       {/* Gallery — golden frames */}
//       <div style={{ padding: "50px 24px 70px", maxWidth: 900, margin: "0 auto" }}>
//         <div style={{ textAlign: "center", marginBottom: 30, fontSize: 10, letterSpacing: ".5em", color: ac, textTransform: "uppercase", fontFamily: "Jost,sans-serif" }}>Our Gallery</div>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
//           {photos.slice(0, 20).map((p, i) => (
//             <PhotoSlot key={i} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i] = v; d.set("photos", ph); }}
//               style={{ aspectRatio: "4/3", outline: `2px solid ${ac}`, outlineOffset: "3px" }} />
//           ))}
//         </div>
//       </div>
//       {/* Details */}
//       <div style={{ background: "#2a1f0e", padding: "70px 40px" }}>
//         <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 700, color: ac, marginBottom: 36, letterSpacing: ".1em" }}>THE DETAILS</h2>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, maxWidth: 820, margin: "0 auto" }}>
//           {[["Venue","venueName"],["City","venueCity"],["Ceremony","ceremony"],["Reception","reception"],["Dress Code","dresscode"],["RSVP By","rsvpDeadline"]].map(([lbl, key]) => (
//             <div key={key} style={{ textAlign: "center", padding: "24px 16px", border: `1px solid rgba(201,163,48,.3)` }}>
//               <div style={{ fontSize: 9, letterSpacing: ".4em", color: ac, textTransform: "uppercase", marginBottom: 10, fontFamily: "Jost,sans-serif" }}>{lbl}</div>
//               <E d={d} k={key} style={{ fontSize: ".93rem", color: "#f8f0d4" }} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer d={d} ac={ac} gold />
//     </div>
//   );
// };

// /* ─────────────────────────────────────────────────────────────────────────
//    T5 — Coastal Blue
// ───────────────────────────────────────────────────────────────────────── */
// const T5 = ({ d }) => {
//   const ac = d.data.accentColor || "#2e7eb8";
//   const photos = d.data.photos;
//   return (
//     <div style={{ fontFamily: "'Raleway', sans-serif", color: "#1a3a52", background: "#f0f7fc" }}>
//       <div style={{ position: "relative", minHeight: 540, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center", overflow: "hidden", background: `linear-gradient(165deg, #e8f4fd, #c8e6f8, #a8d4ef)` }}>
//         <PhotoSlot src={d.data.coverPhoto} onUpload={v => d.set("coverPhoto", v)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .5 }} label="Cover Photo" />
//         <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(14,56,84,.1), rgba(14,56,84,.5))" }} />
//         <div style={{ position: "relative", zIndex: 2, padding: "80px 40px" }}>
//           <div className="fu" style={{ fontSize: 11, letterSpacing: ".5em", color: "rgba(255,255,255,.85)", textTransform: "uppercase", marginBottom: 22, fontWeight: 300 }}>You're Invited</div>
//           <E d={d} k="coupleName" tag="h1" className="fu2" style={{ fontSize: "clamp(2.5rem,8vw,5rem)", fontWeight: 100, margin: "0 0 20px", lineHeight: 1.1, color: "white", letterSpacing: ".05em" }} />
//           <div style={{ width: 50, height: 2, background: "white", margin: "0 auto 20px", opacity: .7 }} />
//           <E d={d} k="date" className="fu3" style={{ fontSize: "1.2rem", color: "rgba(255,255,255,.9)", display: "block", marginBottom: 10, letterSpacing: ".1em" }} />
//           <E d={d} k="venueName" style={{ fontSize: ".95rem", color: "rgba(255,255,255,.7)", letterSpacing: ".08em" }} />
//         </div>
//         <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 60'%3E%3Cpath d='M0,30 Q300,60 600,30 Q900,0 1200,30 L1200,60 L0,60 Z' fill='%23f0f7fc'/%3E%3C/svg%3E\") no-repeat bottom / cover" }} />
//       </div>
//       <div style={{ padding: "60px 40px", maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
//         <div style={{ width: 50, height: 3, background: ac, margin: "0 auto 30px", borderRadius: 2 }} />
//         <E d={d} k="story" tag="p" dark style={{ fontSize: "1.1rem", lineHeight: 1.9, color: "#2a4a62", fontWeight: 300 }} />
//       </div>
//       {/* Wave gallery */}
//       <div style={{ padding: "10px 16px 60px", background: "white" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6, maxWidth: 960, margin: "0 auto" }}>
//           {photos.slice(0, 20).map((p, i) => (
//             <PhotoSlot key={i} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i] = v; d.set("photos", ph); }}
//               style={{ aspectRatio: "1", borderRadius: "50%", border: `3px solid #e8f4fd`, boxShadow: "0 3px 16px rgba(46,126,184,.12)" }} small />
//           ))}
//         </div>
//       </div>
//       <div style={{ padding: "70px 40px", background: ac }}>
//         <h2 style={{ textAlign: "center", fontSize: "1.8rem", fontWeight: 300, color: "white", marginBottom: 36, letterSpacing: ".2em", textTransform: "uppercase" }}>Event Details</h2>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, maxWidth: 820, margin: "0 auto" }}>
//           {[["🌊","Venue","venueName"],["📍","City","venueCity"],["💍","Ceremony","ceremony"],["🥂","Reception","reception"],["👗","Dress Code","dresscode"],["📮","RSVP By","rsvpDeadline"]].map(([ico, lbl, key]) => (
//             <div key={key} style={{ background: "rgba(255,255,255,.15)", borderRadius: 12, padding: "22px 16px", textAlign: "center" }}>
//               <div style={{ fontSize: 22, marginBottom: 6 }}>{ico}</div>
//               <div style={{ fontSize: 9, letterSpacing: ".3em", color: "rgba(255,255,255,.7)", textTransform: "uppercase", marginBottom: 6, fontFamily: "Jost,sans-serif" }}>{lbl}</div>
//               <E d={d} k={key} style={{ color: "white", fontSize: ".88rem" }} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer d={d} ac={ac} />
//     </div>
//   );
// };

// /* ─────────────────────────────────────────────────────────────────────────
//    T6 — Floral Script (dreamy script)
// ───────────────────────────────────────────────────────────────────────── */
// const T6 = ({ d }) => {
//   const ac = d.data.accentColor || "#d4647a";
//   const photos = d.data.photos;
//   return (
//     <div style={{ fontFamily: "'Great Vibes', cursive", color: "#4a2a35", background: "#fff8f9" }}>
//       <div style={{ position: "relative", minHeight: 580, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center", overflow: "hidden", background: "linear-gradient(135deg, #fff0f3, #ffe8f0, #f8e0ea)" }}>
//         <PhotoSlot src={d.data.coverPhoto} onUpload={v => d.set("coverPhoto", v)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .4 }} label="Cover Photo" />
//         <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse, rgba(255,255,255,.3) 30%, rgba(212,100,122,.1) 100%)" }} />
//         <div style={{ position: "relative", zIndex: 2, padding: "80px 40px" }}>
//           <div style={{ fontSize: 11, letterSpacing: ".5em", color: ac, marginBottom: 16, textTransform: "uppercase", fontFamily: "Jost,sans-serif", fontWeight: 300 }}>♥ The Wedding Of ♥</div>
//           <E d={d} k="coupleName" tag="h1" style={{ fontSize: "clamp(3rem,10vw,6.5rem)", fontWeight: 400, margin: "0 0 16px", lineHeight: 1, color: ac }} />
//           <E d={d} k="date" style={{ fontSize: "2.2rem", color: "#8a4a55", display: "block", marginBottom: 12 }} />
//           <E d={d} k="venueName" style={{ fontSize: "1.4rem", color: "rgba(74,42,53,.6)", fontFamily: "Lora,serif", fontStyle: "italic", fontWeight: 400 }} />
//         </div>
//       </div>
//       <div style={{ padding: "60px 40px", maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
//         <div style={{ fontSize: "2.5rem", color: ac, marginBottom: 20 }}>✿ ✿ ✿</div>
//         <E d={d} k="story" tag="p" dark style={{ fontSize: "1.15rem", lineHeight: 1.95, color: "#6a4a55", fontFamily: "Lora,serif", fontStyle: "italic" }} />
//       </div>
//       {/* Floral gallery */}
//       <div style={{ padding: "10px 20px 70px", maxWidth: 880, margin: "0 auto" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
//           {photos.slice(0, 20).map((p, i) => (
//             <PhotoSlot key={i} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i] = v; d.set("photos", ph); }}
//               style={{ aspectRatio: "1", borderRadius: "50% 10% 50% 10%", border: `3px solid ${ac}30`, boxShadow: `0 4px 20px ${ac}20` }} small />
//           ))}
//         </div>
//       </div>
//       <div style={{ background: `linear-gradient(135deg, #fff0f3, #ffe8f0)`, padding: "70px 40px" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, maxWidth: 820, margin: "0 auto" }}>
//           {[["💐","Venue","venueName"],["🌷","City","venueCity"],["💒","Ceremony","ceremony"],["🍾","Reception","reception"],["✨","Dress","dresscode"],["💌","RSVP By","rsvpDeadline"]].map(([ico, lbl, key]) => (
//             <div key={key} style={{ textAlign: "center", padding: "22px 14px", background: "white", borderRadius: "50% 10% 50% 10%/10% 50% 10% 50%", boxShadow: "0 4px 20px rgba(212,100,122,.12)" }}>
//               <div style={{ fontSize: 22, marginBottom: 8 }}>{ico}</div>
//               <div style={{ fontSize: 9, letterSpacing: ".2em", textTransform: "uppercase", color: "#c08090", marginBottom: 6, fontFamily: "Jost,sans-serif" }}>{lbl}</div>
//               <E d={d} k={key} dark style={{ fontSize: ".85rem", fontFamily: "Lora,serif", color: "#5a3a45" }} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer d={d} ac={ac} />
//     </div>
//   );
// };

// /* ─────────────────────────────────────────────────────────────────────────
//    T7 — Rustic Charm
// ───────────────────────────────────────────────────────────────────────── */
// const T7 = ({ d }) => {
//   const ac = d.data.accentColor || "#8b5e3c";
//   const photos = d.data.photos;
//   return (
//     <div style={{ fontFamily: "'Lora', serif", color: "#3a2a1a", background: "#faf6ef" }}>
//       <div style={{ position: "relative", minHeight: 540, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center", overflow: "hidden" }}>
//         <PhotoSlot src={d.data.coverPhoto} onUpload={v => d.set("coverPhoto", v)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .6 }} label="Cover Photo" />
//         <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(58,42,26,.6), rgba(58,42,26,.85))" }} />
//         <div style={{ position: "relative", zIndex: 2, padding: "80px 40px" }}>
//           <div style={{ fontSize: 28, marginBottom: 16, filter: "brightness(1.5)" }}>🍂</div>
//           <E d={d} k="coupleName" tag="h1" style={{ fontSize: "clamp(2.8rem,8vw,5rem)", fontWeight: 400, margin: "0 0 20px", lineHeight: 1.1, color: "#f8f0e0", fontStyle: "italic" }} />
//           <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 18 }}>
//             <div style={{ flex: 1, maxWidth: 60, height: 1, background: "rgba(248,240,224,.5)" }} />
//             <span style={{ color: ac === "#8b5e3c" ? "#d4a072" : ac, fontSize: 14 }}>✦ ✦ ✦</span>
//             <div style={{ flex: 1, maxWidth: 60, height: 1, background: "rgba(248,240,224,.5)" }} />
//           </div>
//           <E d={d} k="date" style={{ fontSize: "1.15rem", color: "#e8d8b8", display: "block", marginBottom: 10 }} />
//           <E d={d} k="venueName" style={{ fontSize: ".95rem", color: "rgba(232,216,184,.7)", fontFamily: "Jost,sans-serif", fontWeight: 300 }} />
//         </div>
//       </div>
//       <div style={{ padding: "70px 40px", maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
//         <h2 style={{ fontSize: "1.9rem", color: ac, marginBottom: 20, fontStyle: "italic" }}>Our Story</h2>
//         <div style={{ width: 50, height: 2, background: ac, margin: "0 auto 28px", opacity: .5 }} />
//         <E d={d} k="story" tag="p" dark style={{ fontSize: "1.08rem", lineHeight: 1.9, color: "#5a4030", fontStyle: "italic" }} />
//       </div>
//       {/* Barnwood gallery */}
//       <div style={{ padding: "10px 16px 60px", background: "#f0e8dc" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6, maxWidth: 900, margin: "0 auto" }}>
//           {photos.slice(0, 20).map((p, i) => (
//             <PhotoSlot key={i} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i] = v; d.set("photos", ph); }}
//               style={{ aspectRatio: "4/3", border: "4px solid white", boxShadow: "2px 2px 8px rgba(0,0,0,.15)", transform: `rotate(${[-.8,1.2,-.5,.9,-.7,1.1,-.4,.8,-.6,1.0,-.9,.7,-.3,.5,-.8,.6,-.4,1.2,-.7,.9][i] || 0}deg)` }} />
//           ))}
//         </div>
//       </div>
//       <div style={{ padding: "70px 40px", background: "#3a2a1a" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, maxWidth: 820, margin: "0 auto" }}>
//           {[["🍂","Venue","venueName"],["📍","Location","venueCity"],["🕊","Ceremony","ceremony"],["🍷","Reception","reception"],["👔","Dress Code","dresscode"],["📜","RSVP By","rsvpDeadline"]].map(([ico, lbl, key]) => (
//             <div key={key} style={{ textAlign: "center", padding: "22px 14px", borderBottom: `2px solid ${ac}40` }}>
//               <div style={{ fontSize: 20, marginBottom: 8 }}>{ico}</div>
//               <div style={{ fontSize: 9, letterSpacing: ".25em", color: "#d4a072", textTransform: "uppercase", marginBottom: 6, fontFamily: "Jost,sans-serif" }}>{lbl}</div>
//               <E d={d} k={key} style={{ fontSize: ".88rem", color: "#f8f0e0" }} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer d={d} ac={ac} dark />
//     </div>
//   );
// };

// /* ─────────────────────────────────────────────────────────────────────────
//    T8 — Vibrant Fiesta
// ───────────────────────────────────────────────────────────────────────── */
// const T8 = ({ d }) => {
//   const ac = d.data.accentColor || "#e63946";
//   const photos = d.data.photos;
//   return (
//     <div style={{ fontFamily: "'Josefin Sans', sans-serif", color: "#1a1a2e", background: "#fffef8" }}>
//       <div style={{ position: "relative", minHeight: 560, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center", overflow: "hidden", background: "linear-gradient(135deg, #fff700, #ff6b35, #e63946, #b5179e)" }} className="grad-anim">
//         <PhotoSlot src={d.data.coverPhoto} onUpload={v => d.set("coverPhoto", v)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .25 }} label="Cover Photo" />
//         <div style={{ position: "relative", zIndex: 2, padding: "80px 40px" }}>
//           <div className="fu" style={{ fontSize: 48, marginBottom: 14 }}>🎊</div>
//           <E d={d} k="coupleName" tag="h1" className="fu2" style={{ fontSize: "clamp(2.5rem,8vw,5.5rem)", fontWeight: 700, margin: "0 0 16px", lineHeight: 1.05, color: "white", textTransform: "uppercase", letterSpacing: ".06em", textShadow: "2px 2px 0px rgba(0,0,0,.2)" }} />
//           <E d={d} k="date" style={{ fontSize: "1.3rem", color: "rgba(255,255,255,.9)", display: "block", marginBottom: 10, fontWeight: 300, letterSpacing: ".3em" }} />
//           <E d={d} k="venueName" style={{ fontSize: "1rem", color: "rgba(255,255,255,.8)", letterSpacing: ".15em", fontWeight: 300 }} />
//         </div>
//       </div>
//       {/* Colorful story section */}
//       <div style={{ padding: "70px 40px", background: "#1a1a2e" }}>
//         <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
//           <div style={{ fontSize: 11, letterSpacing: ".5em", color: "#ffd700", marginBottom: 24, textTransform: "uppercase" }}>Our Love Story</div>
//           <E d={d} k="story" tag="p" style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "rgba(255,255,255,.75)", fontWeight: 300 }} />
//         </div>
//       </div>
//       {/* Colorful gallery */}
//       <div style={{ padding: "30px 16px 60px" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6, maxWidth: 960, margin: "0 auto" }}>
//           {photos.slice(0, 20).map((p, i) => (
//             <PhotoSlot key={i} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i] = v; d.set("photos", ph); }}
//               style={{ aspectRatio: "1", borderRadius: 8, border: `3px solid ${["#e63946","#ff6b35","#ffd700","#06d6a0","#4361ee","#b5179e"][i%6]}` }} small />
//           ))}
//         </div>
//       </div>
//       {/* Colorful details */}
//       <div style={{ padding: "60px 40px", background: "#fffef8" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14, maxWidth: 860, margin: "0 auto" }}>
//           {[["🎉","#e63946","Venue","venueName"],["🗺","#ff6b35","City","venueCity"],["💍","#ffd700","Ceremony","ceremony"],["🥂","#06d6a0","Reception","reception"],["👠","#4361ee","Dress Code","dresscode"],["📩","#b5179e","RSVP By","rsvpDeadline"]].map(([ico, col, lbl, key]) => (
//             <div key={key} style={{ textAlign: "center", padding: "22px 12px", borderRadius: 16, background: `${col}15`, borderTop: `4px solid ${col}` }}>
//               <div style={{ fontSize: 22, marginBottom: 8 }}>{ico}</div>
//               <div style={{ fontSize: 9, letterSpacing: ".25em", color: col, textTransform: "uppercase", marginBottom: 8, fontWeight: 600 }}>{lbl}</div>
//               <E d={d} k={key} dark style={{ fontSize: ".85rem", fontWeight: 400, color: "#1a1a2e" }} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer d={d} ac={ac} vibrant />
//     </div>
//   );
// };

// /* ─────────────────────────────────────────────────────────────────────────
//    T9 — Pastel Dream
// ───────────────────────────────────────────────────────────────────────── */
// const T9 = ({ d }) => {
//   const ac = d.data.accentColor || "#b088b4";
//   const photos = d.data.photos;
//   return (
//     <div style={{ fontFamily: "'EB Garamond', serif", color: "#3a2d44", background: "#fdf8ff" }}>
//       <div style={{ position: "relative", minHeight: 560, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center", overflow: "hidden", background: "linear-gradient(135deg, #fce4ff, #e8d5ff, #d4f0ff, #ffe8f4)" }} className="grad-anim">
//         <PhotoSlot src={d.data.coverPhoto} onUpload={v => d.set("coverPhoto", v)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .3 }} label="Cover Photo" />
//         <div style={{ position: "relative", zIndex: 2, padding: "80px 40px" }}>
//           <div style={{ fontSize: 36, marginBottom: 16 }}>🦋</div>
//           <div className="fu" style={{ fontSize: 10, letterSpacing: ".5em", textTransform: "uppercase", color: "#9c78a0", marginBottom: 20, fontFamily: "Jost,sans-serif", fontWeight: 300 }}>A Dreamy Celebration</div>
//           <E d={d} k="coupleName" tag="h1" className="fu2" style={{ fontSize: "clamp(2.4rem,8vw,5rem)", fontWeight: 400, margin: "0 0 20px", lineHeight: 1.08, color: "#5a3a6a", fontStyle: "italic" }} />
//           <E d={d} k="date" style={{ fontSize: "1.25rem", color: "#9c78a0", display: "block", marginBottom: 10, fontStyle: "italic" }} />
//           <E d={d} k="venueName" style={{ fontSize: ".95rem", color: "#b4a0b8", fontFamily: "Jost,sans-serif", fontWeight: 300 }} />
//         </div>
//       </div>
//       <div style={{ padding: "70px 40px", maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
//         <div style={{ fontSize: "1.8rem", color: ac, marginBottom: 20, letterSpacing: ".2em" }}>· · ·</div>
//         <E d={d} k="story" tag="p" dark style={{ fontSize: "1.12rem", lineHeight: 2, color: "#5a4870", fontStyle: "italic" }} />
//       </div>
//       {/* Pastel gallery */}
//       <div style={{ padding: "10px 20px 70px", background: "#f8f2ff" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, maxWidth: 900, margin: "0 auto" }}>
//           {photos.slice(0, 20).map((p, i) => (
//             <PhotoSlot key={i} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i] = v; d.set("photos", ph); }}
//               style={{ aspectRatio: "1", borderRadius: 999, border: `4px solid ${["#fce4ff","#e8d5ff","#d4f0ff","#ffe8f4"][i%4]}` }} small />
//           ))}
//         </div>
//       </div>
//       <div style={{ padding: "70px 40px", background: `linear-gradient(135deg, #5a3a6a, #3a4a7a)` }}>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 18, maxWidth: 820, margin: "0 auto" }}>
//           {[["🦋","Venue","venueName"],["🌸","City","venueCity"],["💒","Ceremony","ceremony"],["🥂","Reception","reception"],["✨","Dress Code","dresscode"],["💌","RSVP By","rsvpDeadline"]].map(([ico, lbl, key]) => (
//             <div key={key} style={{ textAlign: "center", padding: "22px 14px", background: "rgba(255,255,255,.1)", borderRadius: 999 }}>
//               <div style={{ fontSize: 20, marginBottom: 6 }}>{ico}</div>
//               <div style={{ fontSize: 9, letterSpacing: ".25em", color: "rgba(255,255,255,.5)", textTransform: "uppercase", marginBottom: 6, fontFamily: "Jost,sans-serif" }}>{lbl}</div>
//               <E d={d} k={key} style={{ color: "white", fontSize: ".88rem" }} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer d={d} ac={ac} />
//     </div>
//   );
// };

// /* ─────────────────────────────────────────────────────────────────────────
//    T10 — Royal Purple
// ───────────────────────────────────────────────────────────────────────── */
// const T10 = ({ d }) => {
//   const ac = d.data.accentColor || "#9b59b6";
//   const photos = d.data.photos;
//   return (
//     <div style={{ fontFamily: "'Cinzel', serif", color: "#1a0a2e", background: "#0f0020" }}>
//       <div style={{ position: "relative", minHeight: 580, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center", overflow: "hidden", background: "linear-gradient(135deg, #1a0a2e, #2e0a4e, #4e1a6e)" }}>
//         <PhotoSlot src={d.data.coverPhoto} onUpload={v => d.set("coverPhoto", v)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .3 }} label="Cover Photo" />
//         <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(155,89,182,.15) 0%, rgba(10,0,20,.5) 70%)" }} />
//         {/* Stars effect */}
//         <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,.8) 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: .08 }} />
//         <div style={{ position: "relative", zIndex: 2, padding: "80px 40px" }}>
//           <div style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "center", marginBottom: 28 }}>
//             <div style={{ height: 1, width: 60, background: `linear-gradient(to right, transparent, ${ac})` }} />
//             <span style={{ color: ac, fontSize: 16 }}>👑</span>
//             <div style={{ height: 1, width: 60, background: `linear-gradient(to left, transparent, ${ac})` }} />
//           </div>
//           <E d={d} k="coupleName" tag="h1" style={{ fontSize: "clamp(2rem,6vw,4.5rem)", fontWeight: 600, margin: "0 0 20px", lineHeight: 1.1, color: "#f0e0ff", letterSpacing: ".15em" }} />
//           <div style={{ height: 1, background: `linear-gradient(to right, transparent, ${ac}, transparent)`, marginBottom: 20 }} />
//           <E d={d} k="date" style={{ fontSize: "1rem", color: ac, letterSpacing: ".4em", display: "block", marginBottom: 12, textTransform: "uppercase" }} />
//           <E d={d} k="venueName" style={{ fontSize: ".85rem", color: "rgba(240,224,255,.5)", letterSpacing: ".2em", fontFamily: "Jost,sans-serif", fontWeight: 200 }} />
//         </div>
//       </div>
//       <div style={{ padding: "70px 40px", maxWidth: 680, margin: "0 auto", textAlign: "center", background: "#0f0020" }}>
//         <div style={{ fontSize: 9, letterSpacing: ".6em", color: ac, marginBottom: 24, textTransform: "uppercase", fontFamily: "Jost,sans-serif" }}>Our Story</div>
//         <E d={d} k="story" tag="p" style={{ fontSize: "1.05rem", lineHeight: 2, color: "rgba(240,224,255,.65)", fontFamily: "'EB Garamond',serif", fontStyle: "italic" }} />
//       </div>
//       <div style={{ padding: "10px 12px 60px", background: "#0a0018" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 3, maxWidth: 960, margin: "0 auto" }}>
//           {photos.slice(0, 20).map((p, i) => (
//             <PhotoSlot key={i} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i] = v; d.set("photos", ph); }}
//               style={{ aspectRatio: "1", filter: "contrast(1.1) brightness(.9)", border: `1px solid rgba(155,89,182,.2)` }} small />
//           ))}
//         </div>
//       </div>
//       <div style={{ padding: "70px 40px", background: "#16002e" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 1, maxWidth: 820, margin: "0 auto", border: `1px solid rgba(155,89,182,.25)` }}>
//           {[["Venue","venueName"],["City","venueCity"],["Ceremony","ceremony"],["Reception","reception"],["Dress","dresscode"],["RSVP","rsvpDeadline"]].map(([lbl, key]) => (
//             <div key={key} style={{ padding: "26px 20px", textAlign: "center", borderRight: `1px solid rgba(155,89,182,.2)`, borderBottom: `1px solid rgba(155,89,182,.2)` }}>
//               <div style={{ fontSize: 9, letterSpacing: ".4em", color: ac, textTransform: "uppercase", marginBottom: 10, fontFamily: "Jost,sans-serif" }}>{lbl}</div>
//               <E d={d} k={key} style={{ fontSize: ".88rem", color: "#e0d0f8", letterSpacing: ".08em" }} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div style={{ background: "#0a0018", padding: "36px", textAlign: "center", borderTop: `1px solid rgba(155,89,182,.15)` }}>
//         <E d={d} k="footerNote" style={{ fontSize: ".88rem", color: ac, letterSpacing: ".25em", fontFamily: "Jost,sans-serif", fontWeight: 200 }} />
//       </div>
//     </div>
//   );
// };

// /* ─────────────────────────────────────────────────────────────────────────
//    T11 — Desert Sunset
// ───────────────────────────────────────────────────────────────────────── */
// const T11 = ({ d }) => {
//   const ac = d.data.accentColor || "#e07b39";
//   const photos = d.data.photos;
//   return (
//     <div style={{ fontFamily: "'Raleway', sans-serif", color: "#2d1a0a", background: "#fdf6ee" }}>
//       <div style={{ position: "relative", minHeight: 560, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center", overflow: "hidden", background: "linear-gradient(170deg, #1a0a02, #3d1a06, #7a3010, #c85020, #e07b39, #f5c47a)" }}>
//         <PhotoSlot src={d.data.coverPhoto} onUpload={v => d.set("coverPhoto", v)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .35 }} label="Cover Photo" />
//         <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, rgba(26,10,2,.7))" }} />
//         <div style={{ position: "relative", zIndex: 2, padding: "80px 40px" }}>
//           <div className="fu" style={{ fontSize: 10, letterSpacing: ".6em", color: "#f5c47a", textTransform: "uppercase", marginBottom: 22, fontWeight: 200 }}>A Desert Wedding</div>
//           <E d={d} k="coupleName" tag="h1" className="fu2" style={{ fontSize: "clamp(2.5rem,8vw,5rem)", fontWeight: 100, margin: "0 0 20px", color: "white", letterSpacing: ".15em" }} />
//           <div style={{ width: 80, height: 1, background: `linear-gradient(to right, transparent, #f5c47a, transparent)`, margin: "0 auto 20px" }} />
//           <E d={d} k="date" className="fu3" style={{ fontSize: "1.1rem", color: "#f5c47a", letterSpacing: ".25em", display: "block", marginBottom: 12, textTransform: "uppercase" }} />
//           <E d={d} k="venueName" style={{ fontSize: ".9rem", color: "rgba(245,196,122,.65)", letterSpacing: ".15em" }} />
//         </div>
//       </div>
//       <div style={{ padding: "70px 40px", maxWidth: 680, margin: "0 auto", textAlign: "center", background: "#fdf6ee" }}>
//         <div style={{ width: 60, height: 3, background: `linear-gradient(to right, ${ac}, #f5c47a)`, margin: "0 auto 30px", borderRadius: 2 }} />
//         <E d={d} k="story" tag="p" dark style={{ fontSize: "1.1rem", lineHeight: 1.95, color: "#5a3a1a", fontStyle: "italic", fontWeight: 300 }} />
//       </div>
//       {/* Warm gallery */}
//       <div style={{ padding: "10px 16px 60px", background: "#f8ede0" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 5, maxWidth: 960, margin: "0 auto" }}>
//           {photos.slice(0, 20).map((p, i) => (
//             <PhotoSlot key={i} src={p} onUpload={v => { const ph = [...d.data.photos]; ph[i] = v; d.set("photos", ph); }}
//               style={{ aspectRatio: i % 5 === 2 ? "1/1.5" : "1", filter: "saturate(1.15) contrast(1.05)" }} small />
//           ))}
//         </div>
//       </div>
//       <div style={{ padding: "70px 40px", background: "linear-gradient(135deg, #3d1a06, #7a3010)" }}>
//         <h2 style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: 100, color: "#f5c47a", marginBottom: 36, letterSpacing: ".5em", textTransform: "uppercase" }}>The Details</h2>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, maxWidth: 820, margin: "0 auto" }}>
//           {[["🏜","Venue","venueName"],["🌵","Location","venueCity"],["🌅","Ceremony","ceremony"],["🔥","Reception","reception"],["👘","Dress","dresscode"],["📩","RSVP","rsvpDeadline"]].map(([ico, lbl, key]) => (
//             <div key={key} style={{ textAlign: "center", padding: "22px 14px", borderBottom: `1px solid rgba(245,196,122,.2)` }}>
//               <div style={{ fontSize: 22, marginBottom: 8 }}>{ico}</div>
//               <div style={{ fontSize: 9, letterSpacing: ".3em", color: "rgba(245,196,122,.6)", textTransform: "uppercase", marginBottom: 6, fontFamily: "Jost,sans-serif" }}>{lbl}</div>
//               <E d={d} k={key} style={{ color: "#f5c47a", fontSize: ".88rem" }} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div style={{ background: "#1a0a02", padding: "36px", textAlign: "center" }}>
//         <E d={d} k="footerNote" style={{ fontSize: ".88rem", color: "#f5c47a", letterSpacing: ".25em", fontWeight: 200 }} />
//       </div>
//     </div>
//   );
// };

// /* ─────────────────────────────────────────────────────────────────────────
//    Shared Footer
// ───────────────────────────────────────────────────────────────────────── */
// const Footer = ({ d, ac, dark, gold, vibrant }) => (
//   <div style={{
//     padding: "36px 40px", textAlign: "center",
//     background: dark ? "#1a1a2e" : gold ? "#2a1f0e" : vibrant ? "#1a1a2e" : "#faf6f2",
//     borderTop: `1px solid ${dark || gold || vibrant ? "rgba(255,255,255,.08)" : "#ece6e0"}`,
//   }}>
//     <E d={d} k="footerNote" style={{ fontSize: ".9rem", color: dark || gold || vibrant ? "rgba(255,255,255,.45)" : "#a09090", fontStyle: "italic" }} />
//   </div>
// );

// const TEMPLATE_COMPONENTS = [T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11];

// /* ═══════════════════════════════════════════════════════════════════════════
//    ACCENT COLOR PRESETS per template
// ════════════════════════════════════════════════════════════════════════════ */
// const ACCENT_PRESETS = [
//   ["#b5867a","#c9967e","#8b6a5e","#a0786a","#d4a090","#7a5848"],
//   ["#333","#4a4a4a","#1a5276","#2e7eb8","#922b21","#196f3d"],
//   ["#7a9b8a","#5d8a72","#8b7a5a","#a08060","#6a7a4a","#4a6a58"],
//   ["#c9a96e","#e8c96e","#8b7a4a","#c0a040","#a08030","#d4b86a"],
//   ["#c9a330","#b8860b","#d4af37","#c5942e","#a07820","#e0c060"],
//   ["#2e7eb8","#1a5276","#2e86c1","#1565c0","#0d47a1","#1976d2"],
//   ["#d4647a","#e0748a","#c0546a","#b44464","#a03454","#cc5070"],
//   ["#8b5e3c","#a06a44","#7a4e2e","#c47840","#6a4028","#b06830"],
//   ["#e63946","#ff6b35","#ffd700","#06d6a0","#4361ee","#b5179e"],
//   ["#b088b4","#9070a8","#a880c0","#c098d0","#8060a0","#d0a8e0"],
//   ["#9b59b6","#8e44ad","#7d3c98","#a569bd","#6c3483","#bb8fce"],
//   ["#e07b39","#d4603a","#f5c47a","#c84828","#b83818","#e8963a"],
// ];

// /* ═══════════════════════════════════════════════════════════════════════════
//    MAIN BUILDER
// ════════════════════════════════════════════════════════════════════════════ */
// export default function WeddingBuilder() {
//   const [data, setData] = useState(defaultData);
//   const [panel, setPanel] = useState("template");
//   const [saving, setSaving] = useState(false);
//   const [saved, setSaved] = useState(null); // { id, slug, share_token }
//   const [copied, setCopied] = useState(false);
//   const [viewMode, setViewMode] = useState("builder"); // builder | preview
//   const [activeSection, setActiveSection] = useState("text"); // text | photos | design

//   const set = useCallback((k, v) => setData(p => ({ ...p, [k]: v })), []);
//   const d = { data, set };

//   const TemplateComp = TEMPLATE_COMPONENTS[data.template];
//   const presets = ACCENT_PRESETS[data.template] || ACCENT_PRESETS[0];

//   /* ── Save to backend ── */
//   const handleSave = async () => {
//     setSaving(true);
//     try {
//       const body = {
//         couple_name: data.coupleName,
//         wedding_date: data.date,
//         venue_name: data.venueName,
//         venue_city: data.venueCity,
//         love_story: data.story,
//         ceremony_time: data.ceremony,
//         reception_time: data.reception,
//         dress_code: data.dresscode,
//         rsvp_deadline: data.rsvpDeadline,
//         welcome_message: data.welcomeMessage,
//         footer_note: data.footerNote,
//         template_id: data.template,
//         accent_color: data.accentColor,
//         secondary_color: data.secondaryColor,
//         bg_color: data.bgColor,
//         text_dark_color: data.textColor,
//         cover_photo: data.coverPhoto,
//         gallery_photos: data.photos.filter(Boolean),
//         rsvp_enabled: 1,
//       };
//       const res = await fetch("/api/wedding-website", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       });
//       const json = await res.json();
//       if (json.success) {
//         setSaved(json.data);
//         setPanel("share");
//       } else {
//         alert("Error: " + json.message);
//       }
//     } catch (err) {
//       alert("Network error — please try again.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   /* ── Update existing ── */
//   const handleUpdate = async () => {
//     if (!saved) return handleSave();
//     setSaving(true);
//     try {
//       const body = {
//         share_token: saved.share_token,
//         couple_name: data.coupleName, wedding_date: data.date,
//         venue_name: data.venueName, venue_city: data.venueCity,
//         love_story: data.story, ceremony_time: data.ceremony,
//         reception_time: data.reception, dress_code: data.dresscode,
//         rsvp_deadline: data.rsvpDeadline, welcome_message: data.welcomeMessage,
//         footer_note: data.footerNote, template_id: data.template,
//         accent_color: data.accentColor, cover_photo: data.coverPhoto,
//         gallery_photos: data.photos.filter(Boolean),
//       };
//       await fetch(`/api/wedding-website/${saved.id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       });
//       setPanel("share");
//     } catch { alert("Update failed"); }
//     finally { setSaving(false); }
//   };

//   const copyLink = () => {
//     navigator.clipboard.writeText(saved?.share_url || "");
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2500);
//   };

//   const photoCount = data.photos.filter(Boolean).length;

//   /* ── PREVIEW ── */
//   if (viewMode === "preview") {
//     return (
//       <div>
//         <GlobalStyles />
//         <div style={{ background: "#1a1412", color: "white", padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 13, fontFamily: "Jost,sans-serif", position: "sticky", top: 0, zIndex: 100 }}>
//           <span style={{ opacity: .6 }}>Preview Mode</span>
//           <button onClick={() => setViewMode("builder")} style={{ background: "#d4a090", color: "white", border: "none", borderRadius: 99, padding: "6px 18px", cursor: "pointer", fontFamily: "Jost,sans-serif", fontSize: 12 }}>← Back to Editor</button>
//         </div>
//         <TemplateComp d={d} />
//       </div>
//     );
//   }

//   /* ── BUILDER ── */
//   return (
//     <div style={{ minHeight: "100vh", background: "#f4f0eb", fontFamily: "Jost,sans-serif" }}>
//       <GlobalStyles />

//       {/* ── Top Bar ── */}
//       <div style={{ background: "#1a1412", padding: "0 20px", height: 52, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100, borderBottom: "1px solid #2a2018" }}>
//         <div style={{ color: "#d4a090", fontSize: 15, fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic" }}>💍 Wedding Website Builder</div>
//         <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
//           <div style={{ fontSize: 11, color: "rgba(255,255,255,.35)", fontFamily: "Jost,sans-serif" }}>{photoCount}/20 photos</div>
//           <button onClick={() => setViewMode("preview")} style={{ background: "transparent", color: "rgba(255,255,255,.7)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 99, padding: "6px 16px", cursor: "pointer", fontSize: 12, fontFamily: "Jost,sans-serif" }}>Preview</button>
//           <button onClick={saved ? handleUpdate : handleSave} disabled={saving}
//             style={{ background: saving ? "#888" : "#d4a090", color: "white", border: "none", borderRadius: 99, padding: "6px 18px", cursor: saving ? "default" : "pointer", fontSize: 12, fontFamily: "Jost,sans-serif", fontWeight: 500 }}>
//             {saving ? "Saving…" : saved ? "Update & Share" : "✨ Publish & Share"}
//           </button>
//         </div>
//       </div>

//       <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", height: "calc(100vh - 52px)" }}>

//         {/* ══ LEFT SIDEBAR ══ */}
//         <div className="sidebar" style={{ background: "white", borderRight: "1px solid #ece6de", overflowY: "auto", display: "flex", flexDirection: "column" }}>

//           {/* Panel nav */}
//           <div style={{ padding: "14px 14px 0", display: "flex", gap: 4, flexWrap: "wrap" }}>
//             {[["template","🎨 Template"],["design","✨ Design"],["text","✏️ Content"],["photos","📷 Photos"],["share","🔗 Share"]].map(([id, label]) => (
//               <button key={id} onClick={() => setPanel(id)}
//                 style={{ padding: "6px 12px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 11, fontWeight: panel === id ? 600 : 400, background: panel === id ? "#1a1412" : "#f4f0eb", color: panel === id ? "white" : "#666", fontFamily: "Jost,sans-serif", transition: "all .18s" }}>
//                 {label}
//               </button>
//             ))}
//           </div>

//           <div style={{ padding: 16, flex: 1 }}>

//             {/* ── TEMPLATE PANEL ── */}
//             {panel === "template" && (
//               <div>
//                 <div style={{ fontSize: 10, color: "#aaa", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 12 }}>Choose Template</div>
//                 <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
//                   {TEMPLATES.map((t, i) => (
//                     <button key={i} onClick={() => { set("template", i); set("accentColor", ACCENT_PRESETS[i][0]); }}
//                       style={{ border: `2px solid ${data.template === i ? "#1a1412" : "#ece6de"}`, borderRadius: 10, padding: "12px 14px", background: data.template === i ? "#faf6f2" : "white", textAlign: "left", display: "flex", alignItems: "center", gap: 10, cursor: "pointer", transition: "all .18s" }}>
//                       <span style={{ fontSize: 20 }}>{t.emoji}</span>
//                       <div style={{ flex: 1 }}>
//                         <div style={{ fontWeight: 500, fontSize: 13, color: "#222" }}>{t.name}</div>
//                         <div style={{ fontSize: 11, color: "#999", marginTop: 1 }}>{t.desc}</div>
//                       </div>
//                       {data.template === i && <span style={{ color: "#1a1412", fontSize: 12 }}>✓</span>}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* ── DESIGN PANEL ── */}
//             {panel === "design" && (
//               <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
//                 <div>
//                   <div style={{ fontSize: 10, color: "#aaa", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 10 }}>Accent Color</div>
//                   <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
//                     {presets.map(c => (
//                       <button key={c} onClick={() => set("accentColor", c)}
//                         style={{ width: 34, height: 34, borderRadius: "50%", background: c, border: `3px solid ${data.accentColor === c ? "#1a1412" : "transparent"}`, cursor: "pointer", transition: "transform .15s", transform: data.accentColor === c ? "scale(1.15)" : "scale(1)" }} />
//                     ))}
//                   </div>
//                   <input type="color" value={data.accentColor} onChange={e => set("accentColor", e.target.value)}
//                     style={{ width: "100%", height: 40, border: "1px solid #ece6de", borderRadius: 8, cursor: "pointer", padding: 2 }} />
//                 </div>

//                 <div>
//                   <div style={{ fontSize: 10, color: "#aaa", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 10 }}>Preview Swatch</div>
//                   <div style={{ height: 56, borderRadius: 10, background: data.accentColor, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant Garamond',serif", fontSize: "1.1rem", color: "white", fontStyle: "italic", boxShadow: "0 4px 16px rgba(0,0,0,.12)" }}>
//                     {data.coupleName}
//                   </div>
//                 </div>

//                 <div>
//                   <div style={{ fontSize: 10, color: "#aaa", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 10 }}>Current Template</div>
//                   <div style={{ padding: "12px 14px", background: "#faf6f2", borderRadius: 10, display: "flex", alignItems: "center", gap: 10, border: "1px solid #ece6de" }}>
//                     <span style={{ fontSize: 22 }}>{TEMPLATES[data.template].emoji}</span>
//                     <div>
//                       <div style={{ fontWeight: 500, fontSize: 13, color: "#222" }}>{TEMPLATES[data.template].name}</div>
//                       <div style={{ fontSize: 11, color: "#999" }}>{TEMPLATES[data.template].desc}</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* ── TEXT / CONTENT PANEL ── */}
//             {panel === "text" && (
//               <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
//                 <div style={{ fontSize: 10, color: "#aaa", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 4 }}>Edit Content Below</div>
//                 <div style={{ fontSize: 11, color: "#b0a8a0", background: "#faf6f2", padding: "8px 12px", borderRadius: 8, lineHeight: 1.6 }}>
//                   💡 You can also click any text directly in the preview to edit it inline.
//                 </div>
//                 {[
//                   ["Couple Names", "coupleName", "text"],
//                   ["Wedding Date", "date", "text"],
//                   ["Venue Name", "venueName", "text"],
//                   ["Venue City", "venueCity", "text"],
//                   ["Welcome Message", "welcomeMessage", "text"],
//                   ["Ceremony Time", "ceremony", "text"],
//                   ["Reception Time", "reception", "text"],
//                   ["Dress Code", "dresscode", "text"],
//                   ["RSVP Deadline", "rsvpDeadline", "text"],
//                   ["Footer Note", "footerNote", "text"],
//                   ["Our Love Story", "story", "textarea"],
//                 ].map(([label, key, type]) => (
//                   <div key={key}>
//                     <div style={{ fontSize: 11, color: "#888", marginBottom: 4, fontWeight: 500 }}>{label}</div>
//                     {type === "textarea"
//                       ? <textarea value={data[key] || ""} onChange={e => set(key, e.target.value)}
//                           style={{ width: "100%", padding: "8px 10px", border: "1px solid #ece6de", borderRadius: 8, fontSize: 12, fontFamily: "Jost,sans-serif", resize: "vertical", minHeight: 80, lineHeight: 1.6, color: "#333" }} />
//                       : <input type="text" value={data[key] || ""} onChange={e => set(key, e.target.value)}
//                           style={{ width: "100%", padding: "8px 10px", border: "1px solid #ece6de", borderRadius: 8, fontSize: 12, fontFamily: "Jost,sans-serif", color: "#333" }} />
//                     }
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* ── PHOTOS PANEL ── */}
//             {panel === "photos" && (
//               <div>
//                 <div style={{ fontSize: 10, color: "#aaa", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 4 }}>Photos ({photoCount}/20)</div>
//                 <div style={{ marginBottom: 14 }}>
//                   <div style={{ fontSize: 11, color: "#888", marginBottom: 6, fontWeight: 500 }}>Cover Photo</div>
//                   <PhotoSlot src={data.coverPhoto} onUpload={v => set("coverPhoto", v)}
//                     style={{ width: "100%", aspectRatio: "16/9", borderRadius: 10, border: "2px dashed #d4c8bc" }} label="Click to upload cover" />
//                   {data.coverPhoto && <button onClick={() => set("coverPhoto", null)} style={{ fontSize: 11, color: "#e07070", background: "none", border: "none", cursor: "pointer", marginTop: 4, padding: 0 }}>✕ Remove cover</button>}
//                 </div>
//                 <div style={{ fontSize: 11, color: "#888", marginBottom: 8, fontWeight: 500 }}>Gallery (up to 20 photos)</div>
//                 <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}>
//                   {data.photos.map((p, i) => (
//                     <div key={i} style={{ position: "relative" }}>
//                       <PhotoSlot src={p} onUpload={v => { const ph = [...data.photos]; ph[i] = v; set("photos", ph); }}
//                         style={{ aspectRatio: "1", borderRadius: 8, border: `1px dashed ${p ? "transparent" : "#d4c8bc"}` }} small label="#" />
//                       {p && <button onClick={() => { const ph = [...data.photos]; ph[i] = null; set("photos", ph); }}
//                         style={{ position: "absolute", top: 2, right: 2, background: "rgba(0,0,0,.6)", color: "white", border: "none", borderRadius: "50%", width: 18, height: 18, cursor: "pointer", fontSize: 9, display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1 }}>✕</button>}
//                     </div>
//                   ))}
//                 </div>
//                 <div style={{ marginTop: 10, fontSize: 11, color: "#b0a8a0", lineHeight: 1.6 }}>
//                   Photos appear in the gallery section. Click + to upload, or drag and drop. Supported: JPG, PNG, WebP, GIF, video.
//                 </div>
//               </div>
//             )}

//             {/* ── SHARE PANEL ── */}
//             {panel === "share" && (
//               <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
//                 {!saved ? (
//                   <div>
//                     <div style={{ fontSize: 10, color: "#aaa", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 14 }}>Publish Your Website</div>
//                     <p style={{ fontSize: 12, color: "#777", lineHeight: 1.7 }}>Click "Publish & Share" to save your wedding website and get a shareable link you can send to guests.</p>
//                     <button onClick={handleSave} disabled={saving}
//                       style={{ width: "100%", marginTop: 12, background: "#1a1412", color: "white", border: "none", borderRadius: 10, padding: "12px 0", cursor: "pointer", fontFamily: "Jost,sans-serif", fontSize: 13, fontWeight: 500 }}>
//                       {saving ? "Publishing…" : "✨ Publish & Share"}
//                     </button>
//                   </div>
//                 ) : (
//                   <div>
//                     <div style={{ background: "#f0faf4", border: "1px solid #a8d8b8", borderRadius: 12, padding: "16px", marginBottom: 14 }}>
//                       <div style={{ fontSize: 12, fontWeight: 600, color: "#22863a", marginBottom: 6 }}>✓ Your website is live!</div>
//                       <div style={{ fontSize: 11, color: "#4a8a62" }}>Share the link below with your guests.</div>
//                     </div>
//                     <div style={{ fontSize: 11, color: "#888", marginBottom: 6, fontWeight: 500 }}>Shareable Link</div>
//                     <div style={{ display: "flex", gap: 6 }}>
//                       <input readOnly value={saved.share_url} style={{ flex: 1, padding: "8px 10px", border: "1px solid #ece6de", borderRadius: 8, fontSize: 11, fontFamily: "monospace", background: "#faf6f2", color: "#555" }} />
//                       <button onClick={copyLink} style={{ background: "#1a1412", color: "white", border: "none", borderRadius: 8, padding: "8px 14px", cursor: "pointer", fontSize: 11, whiteSpace: "nowrap" }}>
//                         {copied ? "Copied!" : "Copy"}
//                       </button>
//                     </div>
//                     <div style={{ fontSize: 11, color: "#aaa", marginTop: 8, lineHeight: 1.6 }}>Anyone with this link can view your wedding website.</div>
//                     <button onClick={handleUpdate} disabled={saving} style={{ width: "100%", marginTop: 14, background: "#d4a090", color: "white", border: "none", borderRadius: 10, padding: "10px 0", cursor: "pointer", fontFamily: "Jost,sans-serif", fontSize: 12 }}>
//                       {saving ? "Saving…" : "💾 Save Changes"}
//                     </button>
//                     <div style={{ marginTop: 20, padding: "14px 16px", background: "#faf6f2", borderRadius: 10, border: "1px solid #ece6de" }}>
//                       <div style={{ fontSize: 10, color: "#aaa", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 10 }}>Share via</div>
//                       <div style={{ display: "flex", gap: 8 }}>
//                         {[
//                           ["📱 WhatsApp", `https://wa.me/?text=${encodeURIComponent("You're invited! View our wedding website: " + saved.share_url)}`],
//                           ["✉️ Email", `mailto:?subject=You're Invited!&body=${encodeURIComponent("View our wedding website: " + saved.share_url)}`],
//                         ].map(([label, href]) => (
//                           <a key={label} href={href} target="_blank" rel="noopener noreferrer"
//                             style={{ flex: 1, display: "block", textAlign: "center", padding: "8px 0", background: "#1a1412", color: "white", borderRadius: 8, fontSize: 11, textDecoration: "none" }}>
//                             {label}
//                           </a>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}

//           </div>
//         </div>

//         {/* ══ LIVE PREVIEW ══ */}
//         <div className="preview-area" style={{ overflowY: "auto", background: "#e8e2d8", padding: "14px" }}>
//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
//             <div style={{ fontSize: 10, color: "#a0988e", letterSpacing: ".15em", textTransform: "uppercase" }}>
//               Live Preview — click text/photos to edit directly
//             </div>
//             <div style={{ fontSize: 11, color: "#a0988e" }}>
//               Template {data.template + 1}/12 · {TEMPLATES[data.template].name}
//             </div>
//           </div>
//           <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 8px 48px rgba(0,0,0,.16)", background: "white" }}>
//             <TemplateComp d={d} />
//           </div>
//           <div style={{ height: 40 }} />
//         </div>

//       </div>
//     </div>
//   );
// }
import WeddingBuilder from "./WeddingBuilder";

export default function WeddingWebsitePage() {
  
  return <WeddingBuilder />;
}