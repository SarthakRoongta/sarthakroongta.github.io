// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { ThemeProvider, ThemeContext } from "./theme/ThemeContext";
import { useContext } from "react";

const AppContent = () => {
  // toggle value set in ThemeContext (true = Pokémon theme)
  const { pokeMode } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <div className={`relative z-0 ${pokeMode ? "bg-white" : "bg-primary"}`}>
        <div
          className={`relative bg-cover bg-no-repeat ${
            pokeMode
              ? "bg-poke11-pattern bg-[center_440px]"
              : "bg-hero-pattern bg-center"
          }`}
        >
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
