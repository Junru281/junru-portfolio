import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { uw_madison, xjtlu } from '../assets'


const educationData = [
  {
    degree: "B.Sc. in Computer Science",
    school: "University of Wisconsin - Madison",
    year: "Sept 2022 – May 2025",
    location: "Madison, WI",
    gpa: "4.0/4.0 (Top 5%)",
    courses: [
      "Database Systems (A)", "Big Data Systems (A)", "User Interfaces (A)",
      "Artificial Intelligence (A)", "Mobile Applications (A)",
      "Algorithm Design (A)", "Data Structures (A)",
      "Data Science Modeling (A)"
    ],
    awards: [
      { title: "Dean's List", description: "Recognized for outstanding academic achievement (Top 5%)", date: "Fall 2022 - Fall 2024" },
      { title: "UW-Madison Undergraduate Scholarship for Summer Study", date: "April 2023" }
    ],
    icon: uw_madison, 
    iconBg: "#383E56"
  },
  {
    degree: "Information and Computer Science",
    school: "Xi'an Jiaotong Liverpool University",
    year: "Sept 2020 – May 2022",
    location: "Suzhou, China",
    gpa: "3.9/4.0",
    courses: [
      "Java Programming", "Operating Systems", "Data Structures",
      "Computer Systems", "Artificial Intelligence", "Algorithmic Foundations"
    ],
    awards: [
      { title: "University Academic Excellence Award", description: "Rank in the top 5% of the programme cohort", date: "2020-2021" },
    ],
    icon: xjtlu, 
    iconBg: "#383E56"
  },

];

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Where I have been to</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>

      <div className="mt-12 flex flex-col gap-10 ">
        {educationData.map((edu, index) => (
          <Tilt className="w-full" key={index}>
            <motion.div
              variants={fadeIn("up", "spring", 0.5, 2)}
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 250,
                }}
                className="bg-tertiary rounded-[20px] py-6 px-8 min-h-[360px] flex flex-row items-center"
              >
                
              <img src={edu.icon} alt={edu.school} className="w-[13%] h-[17%] min-w-[50px] min-h-[80px] object-contain rounded-md mr-6 shadow-lg bg-white" />

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white">{edu.school}</h3>
                <p className="text-lg text-gray-300 font-semibold">{edu.degree}</p>
                <p className="text-gray-400 text-sm">{edu.year} | {edu.location}</p>

                <p className="mt-2 text-[#915eff] font-bold">GPA: {edu.gpa}</p>

                <p className="mt-2 text-gray-300 text-sm">{edu.description}</p>

                <p className="mt-3 text-white font-semibold">Awards:</p>
                <ul className="list-disc list-inside text-gray-300 text-md">
                  {edu.awards.map((award, idx) => (
                    <li key={idx}>
                      <span className="text-yellow-300 font-bold">{award.title}:</span> {award.description} ({award.date})
                    </li>
                  ))}
                </ul>

                <p className="mt-3 text-white font-semibold">Related Courses:</p>
                <p className="text-gray-300 text-md">
                  {edu.courses.join(", ")}
                </p>
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>

      
    </>
  );
}

export default SectionWrapper(Education, "education")
