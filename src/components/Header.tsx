import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { TfiClose } from "react-icons/tfi";

export function Header () {
  const navOptions = ['Projects', 'About me', 'Contacts'];
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuClassName = isMenuOpen ? 'top-24' : 'top-[-100%]';

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header className=" bg-darkBlue">
        <nav className="w-[90%] h-24 flex items-center justify-between mx-auto">
          <div className=''>
            <img 
              className='w-60 lg:w-72'
              src='../public/enridev-logo.svg'
              alt="enridev logo"
            />
          </div>
          <div className={`${menuClassName} nav-links duration-200 lg:static absolute min-h-[32vh] lg:min-h-fit bg-primaryBlue lg:bg-darkBlue -z-10 lg:z-0 left-0 w-full flex items-center`}>
            <ul className='flex lg:flex-row flex-col flex-grow items-center text-white justify-evenly gap-y-10'>
              {
                navOptions.map((option: string) => (
                  <li key={option}>
                    <a href="#" className='hover:text-primaryBlue'>{option}</a>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='items-center text-white gap-x-3 hidden lg:flex'>
            <FaLinkedin className='w-8 h-8' />
            <FaGithubSquare className='w-8 h-8'/>
          </div>
          <div className="flex items-center text-white">
            {
              isMenuOpen 
                ?
                <TfiClose
                  className="w-10 h-10 lg:hidden"
                  onClick={toggleMenu}
                />
                :
                <CiMenuBurger 
                  className="w-10 h-10 lg:hidden"
                  onClick={toggleMenu}
                />
            }
          </div>
        </nav>
      </header>
    </>
  )
}