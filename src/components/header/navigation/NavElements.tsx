import { navOptions } from '../../../navOptions';
import { NavItem } from "./NavItem";

export function NavElements ({ isMobileMenuOpen }: { isMobileMenuOpen: boolean }) {
  const menuClassName = isMobileMenuOpen ? 'top-24' : 'top-[-100%]';
  return(
    <div className={`${menuClassName} w-full lg:w-auto nav-links duration-200 lg:static absolute min-h-[40vh] lg:min-h-fit bg-primaryBlue lg:bg-darkBlue -z-10 lg:z-0 left-0 flex items-center justify-center`}>
      <ul className='flex lg:flex-row flex-col gap-x-10 items-center text-gray-300 justify-evenly gap-y-10'>
        {
          navOptions.map((option) => {
            return (
              <NavItem key={option.name} option={option} />
            )
          })
        }
      </ul>
    </div>
  )
}