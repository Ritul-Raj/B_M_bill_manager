

import "./TextInput.css";

function TextInput({ label, type, name, placeholder, value, onChange }) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default TextInput;

