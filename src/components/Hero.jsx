import {motion} from 'framer-motion';

import {styles} from '../styles'
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className = "relative w-full h-screen mx-auto">
      <div className = {`${styles.paddingX} absolute inset-0 top-[120px] flex flex-row items-start gap-5`}>
        <div className = "flex flex-col justify-center items-center mt-5">
          <div className = "w-5 h-5 rounded-full bg-[#915eff]" />
          <div className = "w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <div>
          <h1 className ={`${styles.heroHeadText} text-white`}>Hi, I'm <span className= "text-[#915eff]"> Sarthak</span></h1>
          <p className = {`${styles.heroSubText} mt-2 text-white-100`}>
            I design and build full-stack web apps powered by AI and data <br className="sm:block hidden" /> analytics  to bridge technology with business and financial systems.
          </p>
        </div>
      </div>
    </section> 

  )
}

export default Hero