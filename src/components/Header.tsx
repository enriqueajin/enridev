import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { TbCodeDots } from "react-icons/tb";
import { BsPersonLinesFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { TfiClose } from "react-icons/tfi";

interface NavOptions {
  name: string,
  icon: React.ComponentType<{ className?: string }>;
}

export function Header () {
  const navOptions: NavOptions[] = [
    {
      name: 'Projects',
      icon: TbCodeDots
    }, 
    {
      name: 'About me',
      icon: BsPersonLinesFill
    },
    {
      name: 'Contact',
      icon: AiFillMessage
    },
  ];

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
              className='w-52'
              src='../public/enridev-logo.svg'
              alt="enridev logo"
            />
          </div>
          <div className={`${menuClassName} w-full lg:w-auto nav-links duration-200 lg:static absolute min-h-[40vh] lg:min-h-fit bg-primaryBlue lg:bg-darkBlue -z-10 lg:z-0 left-0 flex items-center justify-center`}>
            <ul className='flex lg:flex-row flex-col gap-x-10 items-center text-white justify-evenly gap-y-10'>
              {
                navOptions.map((option) => {
                  const Icon = option.icon
                  return (
                    <a href={`#${option.name}`}>
                      <li key={option.name} className="transition flex items-center gap-x-2 px-3 py-3 rounded-2xl hover:bg-blue-800 stroke-2 stroke-transparent">
                        <Icon className="w-6 h-6" />
                        <p  className='transition'>{option.name}</p>
                      </li>
                    </a>
                  )
                })
              }
            </ul>
          </div>
          <div className='w-52 items-center text-gray-300 gap-x-3 hidden lg:flex justify-end'>
            <a
            href='https://www.linkedin.com/in/kebyn-ajin'
            target='_blank'>
              <FaLinkedin className='w-8 h-8 transition ease-in-out cursor-pointer hover:text-white hover:-translate-y-1 duration-300 hover:scale-110' />
            </a>
            <a
            href='https://github.com/enriqueajin'
            target='_blank'>
              <FaGithubSquare className='w-8 h-8 transition ease-in-out cursor-pointer hover:text-white hover:-translate-y-1 duration-300 hover:scale-110' />
            </a>
          </div>
          <div className="items-center text-white lg:hidden">
            {
              isMenuOpen 
                ? <TfiClose className="w-8 h-8 lg:hidden" onClick={toggleMenu} />
                : <CiMenuBurger className="w-8 h-8 lg:hidden" onClick={toggleMenu} />
            }
          </div>
        </nav>
      </header>
    </>
  )
}