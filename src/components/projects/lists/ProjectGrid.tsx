
import { useState } from "react"
import { ProjectList } from "./ProjectList"
import { Filters } from "../filters/Filters";

export function ProjectGrid () {
  const [activeChip, setActiveChip] = useState(0);

  return (
    <div>
      <div>
        <Filters activeChip={activeChip} setActiveChip={setActiveChip} />
      </div>
      <div className='animate-slide-in'>
        {
          activeChip == 0
            ? <ProjectList filterBy='Mobile' />
            : <ProjectList filterBy='Web' />
        }
      </div>
    </div>
  )
}