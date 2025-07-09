import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import {styles} from "../styles"
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc'
import { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeContext';




const ServiceCard = ({ index, title, icon }) => {
  const { pokeMode } = useContext(ThemeContext);

  const commonTiltOptions = {
    max: 45,
    scale: 1,
    speed: 450,
  };

return (
  <Tilt className="xs:w-[250px] w-full relative">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index)}
      className={`w-full ${
        pokeMode
          ? "bg-poke_red border-[3px] border-black rounded-[16px] shadow-md"
          : "green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      }`}
    >
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className={`${
          pokeMode
            ? "bg-[#e6f2ff] rounded-md px-4 pt-6 pb-8 border-t-[6px] border-b-[6px] border-black flex flex-col justify-between items-center h-[280px]"
            : "bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        }`}
      >

        <div className="flex-1 flex flex-col items-center justify-center">

            {pokeMode ? (
              <div className="bg-white border-[3px] border-white shadow-inner rounded-md p-2 w-[90px] h-[90px] flex items-center justify-center">
                <img src={icon} alt={title} className="w-[60px] h-[60px] object-contain" />
              </div>
            ) : (
              <img src={icon} alt={title} className="w-[60px] h-[60px] object-contain" />
            )}
          <h3 className={`${pokeMode ? "text-poke_red" : "text-white"} text-[18px] font-extrabold text-center mt-4`}>
            {title}
          </h3>
        </div>


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
      </div>

      {pokeMode && (
        <>
          <div className="absolute top-2 left-2 flex items-center space-x-1">
            <div className="w-5 h-5 rounded-full bg-cyan-400 border-[2.5px] border-black" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-300 border-[1.5px] border-black" />
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 border-[1.5px] border-black" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400 border-[1.5px] border-black" />
          </div>

          <div className="absolute bottom-2 w-full flex justify-center">
            <div className="w-[40px] h-[6px] bg-black rounded-md" />
          </div>
        </>
      )}
    </motion.div>
  </Tilt>
);


};


const About = () => {
  const { pokeMode } = useContext(ThemeContext)
  return (
    <>
      <motion.div variants = {textVariant()}>
        <p className={`${styles.sectionSubText} ${pokeMode ? "!text-[#8c82fc]": "text-secondary"}`}
        >Introduction</p>
        <h2 className={`${styles.sectionHeadText} ${pokeMode ? "text-poke_red": "text-white"}`}
        >Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1,1)}
        className={`mt-4 text-[17px] max-w-3xl leading-[30px] ${pokeMode ? "text-[#8c82fc]": "text-white"}`}
      >
        I’m a Computer Science & Mathematics major who loves turning everyday problems 
        into working software. My toolkit ranges from Python, Java, C/C++, SQL and Swift to HTML, 
        JavaScript, and the React/Node stack, and I’m comfortable reaching for TensorFlow, AWS,
        or Azure when the project calls for it. I’ve shipped chatbots, JavaFX apps, and real-time
        dashboards, always aiming for code that’s as clean for tomorrow’s developer (often future me) as it is fast 
        for today’s user. Whether I’m building a MERN-style web app or training a model, I focus 
        on choosing the right tools and delivering a product that feels smooth to use and easy to
        maintain. 
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} 
          index={index}
          {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")