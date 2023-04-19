import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from "../utils/motion";
import {WaterfallsCanvas} from "./canvas" 
import { SectionWrapper } from "../hoc";


const MyStory = () => {
  return (
    <div className="x">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Here's a little of my</p>
        <h2 className={styles.sectionHeadText}>Story</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I was born in Venezuela, a place with beautifull landscape, who has the record of the longest waterfall in the world, and is one of the most spectacular things that i ever seen, when I was 21yo I became a Mechanical Engenieer, and I work several years in that field, I became a general manager in the company that i used to work, but when I start coding for fun i really fell in love with that, so i decide i will seek for another field in my carrer
      </motion.p>
      <div className='y'>
      <WaterfallsCanvas/> 
      </div>
    </div>
  );
};


export default SectionWrapper(MyStory, "My Story");
