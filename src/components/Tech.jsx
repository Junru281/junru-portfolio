import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const groupedTechnologies = technologies.reduce((acc, tech) => {
  if (!acc[tech.category]) {
    acc[tech.category] = [];
  }
  acc[tech.category].push(tech);
  return acc;
}, {});

const Tech = () => {
  return (
    <div className="flex flex-col gap-10">
      {Object.entries(groupedTechnologies).map(([category, techs]) => (
        <div key={category} className="text-center">
          <h2 className="text-xl font-bold mb-5">{category}</h2>
          <div className="flex flex-row flex-wrap justify-center gap-10">
            {techs.map((technology) => (
              <div className="w-28 h-28" key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")