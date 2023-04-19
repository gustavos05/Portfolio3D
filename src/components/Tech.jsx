import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from '../styles'

const Tech = () => {
  return (
    <div>
    <motion.div variants={textVariant()}>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] width:100%">Technologies</h2>
      </motion.div> 
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
