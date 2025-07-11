import { motion } from "framer-motion";
import { useContext } from "react";
import { styles } from "../styles";
import { ThemeContext } from "../theme/ThemeContext";
import { ComputersCanvas, RoomCanvas } from "./canvas";
import { arrowWhite } from "../assets";
import { arrowRed } from "../assets";

const Hero = () => {
  const { pokeMode } = useContext(ThemeContext);

  const subText = pokeMode
    ? "I design and build full-stack web apps powered by AI and data analytics to bridge technology with business and financial systems (and I really like Pokémon)."
    : "I design and build full-stack web apps powered by AI and data analytics to bridge technology with business and financial systems.";

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute top-20 right-20 z-50 flex items-center space-x-2 bg-transparent">
        <span
          className={`px-3 py-1 rounded text-sm font-medium ${
            pokeMode ? "text-[#f73322]" : "text-white"
          }`}
        >
          Click to change theme!
        </span>
        <img
          src={pokeMode ? arrowRed : arrowWhite}
          alt="arrow"
          className="w-12 h-12 bg-transparent"
        />
      </div>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div
            className={`w-5 h-5 rounded-full ${
              pokeMode ? "bg-[#e3350d]" : "bg-[#915eff]"
            }`}
          />
          <div
            className={`w-1 sm:h-80 h-40 ${
              pokeMode ? "red-gradient" : "violet-gradient"
            }`}
          />
        </div>
        <div>
          <h1
            className={`${
              pokeMode ? "text-black" : "text-white"
            } ${styles.heroHeadText}`}
          >
            Hi, I’m{" "}
            <span className={pokeMode ? "text-[#f73322]" : "text-[#915eff]"}>
              Sarthak
            </span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 ${
              pokeMode ? "text-primary" : "text-white"
            }`}
          >
            {subText}
          </p>
        </div>
      </div>
      {pokeMode ? <RoomCanvas /> : <ComputersCanvas />}
      <div className="absolute xs:bottom-4 sm:bottom-6 bottom-16 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
