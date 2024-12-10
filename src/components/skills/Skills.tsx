import { skillList } from "../../utils/skillList";
import { Skill } from "./Skill";

export function Skills () {
  return (
    <section className='flex flex-col items-center text-white
    bg-gradient-to-b from-darkPurple from-5% via-gradientPurple via-40% 
    to-darkBlue to-95%'>
      <h1 className='font-extrabold text-balance text-3xl md:text-4xl lg:text-5xl mb-10'>
        Skills
      </h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
      lg:grid-cols-6 gap-5 mb-20'>
        {
          skillList.map((skill) => {
            return (
              <Skill 
                name={skill.name}
                icon={skill.icon}
              />
            )
          })
        }
      </div>
    </section>
  )
}