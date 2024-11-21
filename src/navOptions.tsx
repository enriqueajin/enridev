import { BsPersonLinesFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { FaCube } from "react-icons/fa";

export interface NavOptions {
  name: string,
  icon: React.ComponentType<{ className?: string }>;
}

export const navOptions: NavOptions[] = [
  {
    name: 'Projects',
    icon: FaCube
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