import { FilterItem } from "../filters/FilterItem"
import { filterOptions } from "../../../utils/filterOptions"

export function Filters ({ 
  activeChip, 
  setActiveChip 
}: { 
  activeChip: number, 
  setActiveChip: (index: number) => void 
}) {
  return (
    <div className='flex gap-3 ml-5 mt-16'>
      {
        filterOptions.map((option, index) => {
          const { name, icon } = option;
          const Icon = icon;
          return (
            <FilterItem
              key={option.name}
              setActiveChip={() => setActiveChip(index)}
              text={name}
              icon={Icon}
              className={`
              ${
                activeChip === index
                  ? 'bg-white text-black font-bold border border-white'
                  : 'border border-white hover:bg-gray-700 transition'
              }
              `}
            />
          )
        })
      }
    </div>
  )
}