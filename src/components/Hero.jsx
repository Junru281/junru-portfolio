import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { GalaxTeaCanvas } from './canvas';


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] 
      max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi all, I'm <span className='text-[#915eff]'>Junru</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A passionate CS senior <br className='sm:block hidden' /> Looking for a Full Time/Intern positions <br className='sm:block hidden' /> having experience of frontend and backend development.
          </p>
        </div>
      </div>

      {/* <div className={`${styles.paddingX} mt-10 w-full flex flex-col justify-center`}>
          <GalaxTeaCanvas className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]" />
      </div> */}
    
      <GalaxTeaCanvas/>
      
      

      <div className='absolute xs:bottom-3 bottom-20 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero