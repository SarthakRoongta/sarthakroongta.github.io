import React, { useContext } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { ThemeContext } from "../theme/ThemeContext";

const Tech = () => {
  const { pokeMode } = useContext(ThemeContext);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} pokeMode={pokeMode} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");