import { ExperienceCard } from "./cards/ExperienceCard";
import { CardPicture } from "./cards/CardPicture";
import { EducationCard } from "./cards/EducationCard";

export function About () {
  return (
    <section id='About me' className='flex flex-col w-full bg-darkPurple text-white items-center'>
      <h1 className='font-extrabold text-balance text-3xl md:text-4xl lg:text-5xl mt-10'>
        About me
      </h1>
      
      <div className='w-[90%] lg:w-[70%] grid gap-7 sm:grid-cols-5 mt-16 mb-20'>
        <ExperienceCard />
        <CardPicture 
          className='object-center'
          imgLink='/enri-at-desk.jpg'
          imgAlt='Minimalist illustration of people working at an office.' 
        />
        <CardPicture 
          className='object-top'
          imgLink='/enrique-graduation.jpg'
          imgAlt='Enrique in his graduation wearing a toga and holding his diploma.' 
        />
        <EducationCard />
      </div>
    </section>
  )
}
