import { TbCodeDots } from "react-icons/tb";
import { BsPersonLinesFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";

export interface NavOptions {
  name: string,
  icon: React.ComponentType<{ className?: string }>;
}

export const navOptions: NavOptions[] = [
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