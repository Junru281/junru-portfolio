import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I'm a upcoming CS graduate from the University of Wisconsin Madison, 
        with a passion for software development and a strong foundation in computer science principles. 
        I am actively seeking full-time or internship opportunities for the summer. 
        My experience includes both frontend and backend development, and I am eager to contribute my skills to innovative projects and collaborate with talented teams.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service) => (
          <Tilt className='xs:w-[250px] w-full' key={service.title}>
            <motion.div
              variants={fadeIn("right", "spring", 0.5 , 0.75)}
              className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className='w-16 h-16 object-contain'
                />
                <h3 className='text-white text-[20px] font-bold text-center'>
                  {service.title}
                </h3>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </>
    
  )
}

export default SectionWrapper(About, "about")