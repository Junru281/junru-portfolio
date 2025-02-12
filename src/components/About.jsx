import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'; // Updated Twitter Icon
import { MdDescription } from 'react-icons/md'; // Document Icon
import { FaGoogle } from 'react-icons/fa'; // Google Icon

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
        className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]">
        I'm an <span className='text-[#915eff] font-semibold'>upcoming CS graduate</span> from the <span className='text-[#915eff] font-semibold'>University of Wisconsin-Madison</span> ,
        with a passion for software development and a strong foundation in
        computer science principles. 
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]">
        My experience includes both <span className='text-[#915eff] font-semibold'>frontend</span> and <span className='text-[#915eff] font-semibold'>backend</span> development, and I am eager to contribute my skills to innovative projects and collaborate with talented teams.
      </motion.p>
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-lg text-yellow-100 max-w-4xl leading-[30px] ">
        I am actively seeking <span className='underline'>full-time</span> or <span className='underline'>internship</span> opportunities! 🥰
        <br/>
        OPT/CPT Available, Love to Relocate!
        <br/>
        Feel free to send a quick message with me!  
        <a href="#contact" className="inline-block ml-2 px-2 py-1 text-secondary rounded-lg hover:bg-[#915eff] hover:text-white transition">
          📬 Message Me
        </a>
      </motion.p>

      {/* Contact Section */}
      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className="flex flex-col gap-4"
      >
        <div className="flex space-x-6 mt-4">
          <a href="https://drive.google.com/file/d/1SzDiH5AmAyConwQacdU2QigCBzdAOXQh/view" target="_blank" rel="noopener noreferrer" title='Resume'>
            <MdDescription className="text-white text-3xl hover:text-gray-600" />
          </a>

          <a href="mailto:junrujiang281@gmail.com" title='Email'>
            <FaEnvelope className="text-white text-3xl hover:text-gray-600" />
          </a>

          <a
            href="https://github.com/Junru281"
            target="_blank"
            rel="noopener noreferrer"
            title='Github'
          >
            <FaGithub className="text-white text-3xl hover:text-gray-600" />
          </a>

          <a
            href="https://www.linkedin.com/in/junru-jiang-726260289/"
            target="_blank"
            rel="noopener noreferrer"
            title='LinkedIn'
          >
            <FaLinkedin className="text-white text-3xl hover:text-gray-600" />
          </a>

        </div>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service) => (
          <Tilt className="xs:w-[250px] w-full" key={service.title}>
            <motion.div
              variants={fadeIn("right", "spring", 0.5, 0.75)}
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, "about")
