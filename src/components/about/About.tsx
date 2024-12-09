import { ExperienceCard } from "./cards/ExperienceCard";
import { EducationCard } from "./cards/EducationCard";

export function About () {
  return (
    <section id='About me' className='flex flex-col w-full bg-darkPurple text-white items-center'>
      <h1 className='font-extrabold text-balance text-3xl md:text-4xl lg:text-5xl mt-10'>
        About me
      </h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 w-11/12 xl:w-9/12 mt-16 mb-20 gap-5'>
        <ExperienceCard />
        <EducationCard />
      </div>
    </section>
  )
}
