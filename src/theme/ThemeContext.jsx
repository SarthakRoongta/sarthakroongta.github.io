// src/theme/ThemeContext.jsx  (or anywhere you like)
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [pokeMode, setPokeMode] = useState(false);

  // helper so consumers don’t repeat arrow functions
  const togglePokeMode = () => setPokeMode((prev) => !prev);

  /* ─ optional: add/remove a class on <html> for pure-CSS theming ─ */
  useEffect(() => {
    const root = document.documentElement;
    pokeMode ? root.classList.add("pokemon") : root.classList.remove("pokemon");
  }, [pokeMode]);

  return (
    <ThemeContext.Provider value={{ pokeMode, togglePokeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
