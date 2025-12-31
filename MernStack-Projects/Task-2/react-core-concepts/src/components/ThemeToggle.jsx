import { useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  return (
    <div style={{
      background: dark ? "#222" : "#eee",
      color: dark ? "#fff" : "#000",
      padding: "15px",
      marginTop: "20px"
    }}>
      <h2>Theme Toggle</h2>
      <button onClick={() => setDark(!dark)}>
        Switch to {dark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;
