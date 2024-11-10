import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SocialIcon } from "./SocialIcon";

export function Socials () {
  return (
    <div className='w-52 items-center text-gray-300 gap-x-3 hidden lg:flex justify-end'>
      <SocialIcon link='https://www.linkedin.com/in/kebyn-ajin' icon={FaLinkedin} />
      <SocialIcon link='https://github.com/enriqueajin' icon={FaGithubSquare} />
    </div>
  )
}