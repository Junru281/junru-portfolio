// import { useState } from "react";
// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// const groupedTechnologies = technologies.reduce((acc, tech) => {
//   if (!acc[tech.category]) {
//     acc[tech.category] = [];
//   }
//   acc[tech.category].push(tech);
//   return acc;
// }, {});

// const Tech = () => {
//   const [hoveredTech, setHoveredTech] = useState(null);

//   return (
//     <div className="flex flex-col gap-10">
//       {Object.entries(groupedTechnologies).map(([category, techs]) => (
//         <div key={category} className="text-center">
//           <h2 className="text-xl font-bold mb-5">{category}</h2>
//           <div className="flex flex-row flex-wrap justify-center gap-10">
//             {techs.map((technology) => (
//               <div
//                 key={technology.name}
//                 className="w-28 h-28 flex flex-col items-center justify-center relative"
//                 onMouseEnter={() => setHoveredTech(technology.name)}
//                 onMouseLeave={() => setHoveredTech(null)}
//               >
//                 <BallCanvas icon={technology.icon} />
//                 {/* Show tech name on hover */}
//                 {hoveredTech === technology.name && (
//                   <div className="absolute bottom-[-30px] bg-purple-700 text-white text-sm px-2 py-1 rounded">
//                     {technology.name}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default SectionWrapper(Tech, "")

// To Resolve the WeGL lost
import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
import { styles } from "../styles"

const groupedTechnologies = technologies.reduce((acc, tech) => {
  if (!acc[tech.category]) {
    acc[tech.category] = [];
  }
  acc[tech.category].push(tech);
  return acc;
}, {});

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="flex flex-col gap-8">
      {Object.entries(groupedTechnologies).map(([category, techs]) => (
        <div key={category} className="text-center">
          <h2 className="text-xl font-bold mt-3">{category}</h2>
          <div className="relative w-full h-[200px]">
            <BallCanvas techs={techs} onHover={setHoveredTech} />

            {techs.map((technology) => (
              hoveredTech === technology.name && (
                <div
                  key={technology.name}
                  className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500 text-white text-sm font-sans font-bold px-3 py-1  shadow-lg hover:scale-105 transition duration-200"
                  style={styles.tag}
                >
                  {technology.name}
                </div>
              )
            ))}

          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
