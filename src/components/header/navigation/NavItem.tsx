import { NavOptions } from "../../../navOptions";

export function NavItem ({ 
  option,
  setMobileMenuOpen
}: {
  option: NavOptions,
  setMobileMenuOpen: (isOpen: boolean) => void
}) {
  const Icon = option.icon
  return (
    <>
      <a href={`#${option.name}`} onClick={() => setMobileMenuOpen(false)}>
        <li key={option.name} className="transition flex items-center gap-x-2 px-3 py-3 rounded-2xl hover:bg-primaryBlue duration-500 hover:text-white stroke-transparent">
          <Icon className="w-6 h-6" />
          <p  className='transition'>{option.name}</p>
        </li>
      </a>
    </>
  )
}