import { useMobileNav } from "../../../hooks/useMobileNav";
import { MobileMenuIcon } from "./MobileMenuIcon";
import { NavElements } from "./NavElements";
import { Socials } from "../socials/Socials";

export function Nav () {
  const { isMobileMenuOpen, setMobileMenuOpen } = useMobileNav();
  
  return (
    <nav className="w-[90%] h-24 flex items-center justify-between mx-auto">
      {/* enridev logo */}
      <img 
        className='w-52'
        src='../public/enridev-logo.svg'
        alt="enridev logo"
      />
      {/* Navigation elements */}
      <NavElements isMobileMenuOpen={isMobileMenuOpen} />
      {/* Social media links */}
      <Socials />
      {/* Burguer navigation menu (mobile and tablet) */}
      <MobileMenuIcon isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </nav>
  )
}