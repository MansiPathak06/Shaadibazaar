import EditableField from "./EditableField";

const SharedFooter = ({ d, ac, dark, gold, vibrant }) => (
  <div style={{
    padding: "36px 40px",
    textAlign: "center",
    background: dark ? "#1a1a2e" : gold ? "#2a1f0e" : vibrant ? "#1a1a2e" : "#faf6f2",
    borderTop: `1px solid ${dark || gold || vibrant ? "rgba(255,255,255,.08)" : "#ece6e0"}`,
  }}>
    <EditableField d={d} k="footerNote" style={{ fontSize: ".9rem", color: dark || gold || vibrant ? "rgba(255,255,255,.45)" : "#a09090", fontStyle: "italic" }} />
  </div>
);

export default SharedFooter;