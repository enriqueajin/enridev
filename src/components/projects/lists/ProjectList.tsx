import { projectsData } from "../../../utils/projectsData"
import { ProjectItem } from "./ProjectItem"

export function ProjectList ({ filterBy }: { filterBy: string }) {
  console.log('rendering webprojects')
  const projects = projectsData.filter((project) => project.type === filterBy)
  return (
    <div className='px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-7 mt-8 mb-20 animate-slide-in'>
      {
        projects.map((project) => {
        const { title, imageUrl, siteUrl, sourceCodeUrl } = project
        return (
            <ProjectItem 
              key={imageUrl}
              title={title}
              imageUrl={imageUrl}
              siteUrl={siteUrl}
              sourceCodeUrl={sourceCodeUrl}
            />
        )
        })
      }
    </div>
  )
}