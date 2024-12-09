import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";

export interface FilterOptions {
  name: string,
  icon: React.ComponentType<{ className?: string }>;
  isActive: boolean
}

export const filterOptions: FilterOptions[] = [
  {
    name: 'Mobile',
    icon: FaMobileAlt,
    isActive: false
  },
  {
    name: 'Web',
    icon: MdOutlineWeb,
    isActive: false
  }
];