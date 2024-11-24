import { ProjectList } from "./ProjectList";

export function Projects () {
  return (
    <section id='Projects' className='flex flex-col w-full bg-secondaryDarkBlue text-white items-center'>
      <h1 className='font-extrabold text-balance text-3xl md:text-4xl lg:text-5xl leading-tight mt-10'>
        My projects
      </h1>
      <ProjectList />
    </section>
  )
}