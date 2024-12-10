import { useMobileNav } from "../../../hooks/useMobileNav";
import { MobileMenuIcon } from "./MobileMenuIcon";
import { NavElements } from "./NavElements";
import { Socials } from "../socials/Socials";

export function Nav () {
  const { isMobileMenuOpen, setMobileMenuOpen } = useMobileNav();
  
  return (
    <nav className="w-[90%] h-24 flex items-center justify-between mx-auto">
      <img 
        className='w-52'
        src='/enridev-logo.svg'
        alt="enridev logo"
      />
      <NavElements isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Socials />
      <MobileMenuIcon isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </nav>
  )
}