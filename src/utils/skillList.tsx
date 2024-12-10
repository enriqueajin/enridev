import { BiSolidInjection } from "react-icons/bi";
import { FaDatabase, FaGithub, FaJava, FaReact } from "react-icons/fa";
import { GiSplashyStream } from "react-icons/gi";
import { LuBoxes } from "react-icons/lu";
import { SiJetpackcompose, SiKotlin, SiKtor, SiReactiveresume } from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";

interface Skill {
  name: string,
  icon: React.ComponentType<{ className?: string }>;
}

export const skillList: Skill[] = [
  {
    name: 'Java',
    icon: FaJava,
  },
  {
    name: 'Kotlin',
    icon: TbBrandKotlin,
  },
  {
    name: 'J. Compose',
    icon: SiJetpackcompose,
  },
  {
    name: 'Room',
    icon: FaDatabase,
  },
  {
    name: 'Coroutines',
    icon: SiKotlin,
  },
  {
    name: 'Dependency Injection',
    icon: BiSolidInjection,
  },
  {
    name: 'LiveData',
    icon: SiReactiveresume,
  },
  {
    name: 'Kotlin Flows',
    icon: GiSplashyStream,
  },
  {
    name: 'MVVM',
    icon: LuBoxes,
  },
  {
    name: 'Retrofit/Ktor',
    icon: SiKtor,
  },
  {
    name: 'Git & GitHub',
    icon: FaGithub,
  },
  {
    name: 'React',
    icon: FaReact,
  },
]