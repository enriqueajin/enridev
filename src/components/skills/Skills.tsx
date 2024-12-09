import { skillList } from "../../utils/skillList";
import { Skill } from "./Skill";

export function Skills () {
  return (
    <section className='flex flex-col items-center bg-cyan-950 text-white'>
      <h1 className='font-extrabold text-balance text-3xl md:text-4xl lg:text-5xl my-10'>
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