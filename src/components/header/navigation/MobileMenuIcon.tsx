import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

export function MobileMenuIcon ({ 
  isMobileMenuOpen, 
  setMobileMenuOpen 
}: { 
  isMobileMenuOpen: boolean, 
  setMobileMenuOpen: () => void;
}) {
  return (
    <div className="items-center text-white lg:hidden">
      {
        isMobileMenuOpen 
          ? <TfiClose className="w-8 h-8 lg:hidden" onClick={setMobileMenuOpen} />
          : <CiMenuBurger className="w-8 h-8 lg:hidden" onClick={setMobileMenuOpen} />
      }
    </div>
  )
}