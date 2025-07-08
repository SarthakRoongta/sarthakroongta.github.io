import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [pokeMode, setPokeMode] = useState(false);

  const togglePokeMode = () => setPokeMode((prev) => !prev);

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
