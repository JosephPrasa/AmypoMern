import { useState } from "react";

function ToggleTheme() {
  const [isDark, setIsDark] = useState(false);

  const toggleWD = () => {
    setIsDark(!isDark);
  };

  const themeStyle = {
    backgroundColor: isDark ? "#333" : "#fff",
    color: isDark ? "#fff" : "#333",
    minHeight: "100vh",
    padding: "20px",
  };

  const buttonStyle = {
    backgroundColor: isDark ? "#ff0000" : "#0d00ff",
    color: isDark ? "#00ffc8" : "#f703ff",
    padding: "20px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
  };

  return (
    <div style={themeStyle}>
      <h1>{isDark ? "Dark" : "Light"} Theme</h1>
      <button style={buttonStyle} onClick={toggleWD}>
        Switch to {isDark ? "Light" : "Dark"} Theme
      </button>
    </div>
  );
}

export default ToggleTheme;
