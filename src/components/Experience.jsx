import { useContext } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { ThemeContext } from '../theme/ThemeContext';

const ExperienceCard = ({ experience }) => {
  const { pokeMode } = useContext(ThemeContext);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: pokeMode ? '#fff8ee' : '#1d1836',
        color: pokeMode ? '#f73322' : '#fff',
        border: pokeMode ? '2px solid #f73322' : 'none',
        boxShadow: pokeMode ? '0px 4px 15px rgba(0,0,0,0.2)' : undefined,
      }}
      contentArrowStyle={{
        borderRight: pokeMode ? '7px solid #f73322' : '7px solid #232631',
      }}
      date={experience.date}
      iconStyle={{
        background: 'transparent', // remove inner circle bg
        boxShadow: 'none',
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <div
            className="rounded-full p-[3px]"
            style={{
              background: pokeMode ? '#f73322' : '#232631',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              className="rounded-full w-[90%] h-[90%] flex items-center justify-center"
              style={{
                background: experience.iconBg,
              }}
            >
              <img
                src={experience.icon}
                alt={experience.company_name}
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          </div>
        </div>
      }
    >
      <div>
        <h3 className={`text-[24px] font-bold ${pokeMode ? "text-poke_red" : "text-white"}`}>
          {experience.title}
        </h3>
        <p className={`text-[16px] font-semibold ${pokeMode ? "text-[#8c82fc]" : "text-secondary"}`} style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className={`${pokeMode ? "text-black" : "text-white-100"} text-[14px] pl-1 tracking-wider`}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { pokeMode } = useContext(ThemeContext);

  const timelineLineColor = pokeMode ? '#f73322' : '#232631';

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} ${pokeMode ? "!text-[#8c82fc]" : "text-secondary"}`}>
          What I Have Done So Far
        </p>
        <h2 className={`${styles.sectionHeadText} ${pokeMode ? "text-poke_red" : "text-white"}`}>
          Work Experience
        </h2>
      </motion.div>

      <div
        className="mt-20 flex flex-col"
        style={{
          '--line-color': timelineLineColor,
        }}
      >
        <style>
          {`
            .vertical-timeline::before {
              background: var(--line-color);
            }
          `}
        </style>

        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
