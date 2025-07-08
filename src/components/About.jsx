import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import {styles} from "../styles"
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc'
const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring",0.5*index)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-20 h-20 object-cover" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants = {textVariant()}>
        <p className={styles.sectionSubText}
        >Introduction</p>
        <h2 className={styles.sectionHeadText}
        >Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1,1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
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