import { useState } from "react";

export function useMobileNav () {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  }

  return {
    isMobileMenuOpen: isMobileMenuOpen,
    setMobileMenuOpen: toggleMenu
  }
}