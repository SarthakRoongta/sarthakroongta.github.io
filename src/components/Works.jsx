// src/components/Works.jsx

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useContext } from "react";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import { ThemeContext } from "../theme/ThemeContext";

const commonTiltOptions = {
  max: 45,
  scale: 1,
  speed: 450,
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const { pokeMode } = useContext(ThemeContext);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={commonTiltOptions}
        className="xs:w-[360px] w-full h-[580px] relative"
      >
        {/* Top-left GitHub + lights */}
        {pokeMode && (
          <div className="absolute top-2 left-2 flex items-center space-x-1 z-10">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="w-12 h-12 bg-blue-400 border-2 border-black rounded-full flex items-center justify-center cursor-pointer shadow-md"
            >
              <img
                src={github}
                alt="GitHub"
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
            <div className="w-3 h-3 bg-red-500 border border-black rounded-full" />
            <div className="w-3 h-3 bg-yellow-300 border border-black rounded-full" />
            <div className="w-3 h-3 bg-green-400 border border-black rounded-full" />
          </div>
        )}

        {/* Card body */}
        <div
          className={`flex flex-col h-full p-5 ${
            pokeMode
              ? "bg-[#e6f2ff] border-2 border-black rounded-[16px]"
              : "bg-tertiary rounded-2xl"
          }`}
        >
          {/* Screenshot, shifted downward */}
          <div className="w-full h-[230px] overflow-hidden rounded-md mt-8">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title & description */}
          <div className="mt-5 flex-1">
            <h3
              className={`font-bold text-[24px] ${
                pokeMode ? "text-black" : "text-white"
              }`}
            >
              {name}
            </h3>
            <p
              className={`mt-2 text-[14px] ${
                pokeMode ? "text-black/80" : "text-secondary"
              }`}
            >
              {description}
            </p>
          </div>

          {/* Colored hashtags */}
          <div className="mt-auto pt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom-right D-Pad */}
        {pokeMode && (
          <div className="absolute bottom-3 right-3 w-[40px] h-[40px] flex justify-center items-center">
            <div className="relative w-[30px] h-[30px]">
              <div className="absolute top-[10px] left-[10px] w-[10px] h-[10px] bg-black rounded-sm" />
              <div className="absolute top-0 left-[10px] w-[10px] h-[10px] bg-black rounded-sm" />
              <div className="absolute bottom-0 left-[10px] w-[10px] h-[10px] bg-black rounded-sm" />
              <div className="absolute top-[10px] left-0 w-[10px] h-[10px] bg-black rounded-sm" />
              <div className="absolute top-[10px] right-0 w-[10px] h-[10px] bg-black rounded-sm" />
            </div>
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const { pokeMode } = useContext(ThemeContext);

  return (
    <>
      <motion.div variants={textVariant}>
        <p
          className={`${styles.sectionSubText} ${
            pokeMode ? "!text-[#8c82fc]" : "text-secondary"
          }`}
        >
          My Work
        </p>
        <h2
          className={`${styles.sectionHeadText} ${
            pokeMode ? "text-poke_red" : "text-white"
          }`}
        >
          Projects
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[#8c82fc] text-[17px] max-w-3xl leading-[30px]"
        >
          These projects demonstrate my skills and experience through real-world
          work. Each one includes a concise overview and a link to the source
          code or in progress, highlighting my ability to tackle complex
          problems, master diverse technologies, and manage projects end-to-end.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
