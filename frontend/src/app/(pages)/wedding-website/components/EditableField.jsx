// Inline-editable field — click to edit directly in the preview
const EditableField = ({ d, k, tag: Tag = "span", style, className, dark, placeholder }) => (
  <Tag
    contentEditable
    suppressContentEditableWarning
    className={`ef ${dark ? "ef-dark" : ""} ${className || ""}`}
    style={style}
    data-placeholder={placeholder}
    onBlur={e => d.set(k, e.currentTarget.innerText)}
    dangerouslySetInnerHTML={{ __html: d.data[k] || "" }}
  />
);

export default EditableField;