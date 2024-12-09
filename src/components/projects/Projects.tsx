import { ProjectGrid } from "./lists/ProjectGrid";

export function Projects () {
  return (
    <section 
      id='Projects' 
      className='flex flex-col lg:h-screen bg-secondaryDarkBlue text-white items-center justify-center'
    >
      <h1 className='font-extrabold text-balance text-3xl md:text-4xl lg:text-5xl leading-tight mt-10'>
        My projects
      </h1>
      <ProjectGrid />
    </section>
  )
}