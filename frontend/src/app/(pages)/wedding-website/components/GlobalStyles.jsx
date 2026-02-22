const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Jost:wght@200;300;400;500&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Nunito:wght@200;300;400;600&family=Raleway:ital,wght@0,100;0,300;0,400;0,600;1,300&family=Cinzel:wght@400;600&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Josefin+Sans:ital,wght@0,100;0,300;0,400;1,100&family=Sacramento&family=Great+Vibes&family=Alex+Brush&family=Lora:ital,wght@0,400;0,600;1,400;1,600&display=swap');

    /* ── Scoped reset — only affects wedding builder, NOT the navbar ── */
    .wb-root *, .wb-root *::before, .wb-root *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .ef{cursor:text;outline:none;border-radius:3px;transition:background .15s,box-shadow .15s;min-width:20px;display:inline-block;}
    .ef:hover{background:rgba(255,255,255,.22);box-shadow:0 0 0 2px rgba(255,255,255,.45);}
    .ef:focus{background:rgba(255,255,255,.3);box-shadow:0 0 0 2px rgba(255,255,255,.75);}
    .ef-dark:hover{background:rgba(0,0,0,.06);box-shadow:0 0 0 2px rgba(0,0,0,.15);}
    .ef-dark:focus{background:rgba(0,0,0,.09);box-shadow:0 0 0 2px rgba(0,0,0,.22);}

    .ps{position:relative;overflow:hidden;cursor:pointer;}
    .ps:hover .po{opacity:1;}
    .po{position:absolute;inset:0;background:rgba(0,0,0,.42);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .2s;color:#fff;font-size:12px;font-family:'Jost',sans-serif;flex-direction:column;gap:5px;}
    .ps-empty{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;color:#b8afa4;font-family:'Jost',sans-serif;font-size:12px;}

    @keyframes fu{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:none;}}
    @keyframes fs{from{opacity:0;transform:scale(.94);}to{opacity:1;transform:none;}}
    @keyframes spin{to{transform:rotate(360deg);}}
    .fu{animation:fu .65s ease both;}
    .fu2{animation:fu .65s .15s ease both;}
    .fu3{animation:fu .65s .3s ease both;}
    .fu4{animation:fu .65s .45s ease both;}
    .fs{animation:fs .5s ease both;}

    .sidebar::-webkit-scrollbar{width:4px;}
    .sidebar::-webkit-scrollbar-track{background:transparent;}
    .sidebar::-webkit-scrollbar-thumb{background:#d4ccc4;border-radius:99px;}
    .preview-area::-webkit-scrollbar{width:6px;}
    .preview-area::-webkit-scrollbar-track{background:#e8e2d8;}
    .preview-area::-webkit-scrollbar-thumb{background:#c4b8ac;border-radius:99px;}

    @keyframes gradShift{0%,100%{background-position:0% 50%;}50%{background-position:100% 50%;}}
    .grad-anim{background-size:200% 200%;animation:gradShift 6s ease infinite;}

    .pulsedot{animation:pulse 2s cubic-bezier(0.4,0,0.6,1) infinite;}
    @keyframes pulse{0%,100%{opacity:1;}50%{opacity:.4;}}

    .divider-line{width:60px;height:1px;margin:0 auto;}
    .section-label{font-size:10px;letter-spacing:.4em;text-transform:uppercase;font-family:'Jost',sans-serif;font-weight:300;}
  `}</style>
);

export default GlobalStyles;