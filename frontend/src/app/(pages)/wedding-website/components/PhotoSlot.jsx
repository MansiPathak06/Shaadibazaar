"use client";
import { useRef } from "react";

const PhotoSlot = ({ src, onUpload, style, className, label, small }) => {
  const ref = useRef();
  return (
    <div className={`ps ${className || ""}`} style={style} onClick={() => ref.current.click()}>
      {src
        ? <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        : <div className="ps-empty" style={{ width: "100%", height: "100%", background: "#f2ede8" }}>
            <span style={{ fontSize: small ? 20 : 28, opacity: .35 }}>+</span>
            {!small && <span style={{ opacity: .5 }}>{label || "Add Photo"}</span>}
          </div>}
      <div className="po">
        <span style={{ fontSize: small ? 16 : 22 }}>📷</span>
        {!small && <span>{src ? "Change" : "Upload"}</span>}
      </div>
      <input ref={ref} type="file" accept="image/*,video/*" style={{ display: "none" }}
        onChange={e => {
          const f = e.target.files[0]; if (!f) return;
          const r = new FileReader(); r.onload = ev => onUpload(ev.target.result); r.readAsDataURL(f);
        }} />
    </div>
  );
};

export default PhotoSlot;