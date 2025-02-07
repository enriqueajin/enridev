import { navOptions } from '../../../navOptions';
import { NavItem } from "./NavItem";

export function NavElements ({ 
  isMobileMenuOpen,
  setMobileMenuOpen
}: { 
  isMobileMenuOpen: boolean,
  setMobileMenuOpen: (isOpen: boolean) => void
}) {
  const menuClassName = isMobileMenuOpen ? 'top-24' : 'top-[-100%]';
  return(
    <div className={`${menuClassName} w-full lg:w-auto nav-links duration-200 lg:static absolute min-h-[45vh] lg:min-h-fit bg-blue-600 lg:bg-gray-900 z-10 lg:z-0 left-0 flex items-center justify-center`}>
      <ul className='flex lg:flex-row flex-col gap-x-10 items-center text-white font-bold justify-evenly gap-y-10'>
        {
          navOptions.map((option) => {
            return (
              <NavItem 
                key={option.name} 
                option={option} 
                setMobileMenuOpen={setMobileMenuOpen}
              />
            )
          })
        }
      </ul>
    </div>
  )
}