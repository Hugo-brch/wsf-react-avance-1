import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(
  localStorage.getItem("theme") || "light"
);

export default function ThemeProvider({ children }) {
  /**
   * Gestion du theme
   */
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    console.log("new theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
