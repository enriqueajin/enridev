import { projectsData } from "../../utils/projectsData"
import { ProjectItem } from "./ProjectItem"

export function Projects () {
  return (
    <section className='flex flex-col w-full bg-darkGray text-white items-center'>
      <h1 id='Projects' className='font-extrabold text-balance text-3xl md:text-4xl lg:text-5xl leading-tight mt-20'>
        My projects
      </h1>
      {/* Projects grid */}
      <div className='px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-7 my-16'>
        {
          projectsData.map((project) => {
          const { title, imageUrl, siteUrl, sourceCodeUrl } = project
          return (
              <ProjectItem 
                title={title}
                imageUrl={imageUrl}
                siteUrl={siteUrl}
                sourceCodeUrl={sourceCodeUrl}
              />
          )
          })
        }
      </div>
    </section>
  )
}