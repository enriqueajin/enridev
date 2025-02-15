import { FaAndroid } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";


export function Hero () {
  return (
    <section className ={`flex flex-col h-[calc(100vh-96px)] items-center 
    justify-center w-full text-center text-white 
    size-18 bg-radial-[at_50%_35%] from-secondaryBlue via-blue-850 to-darkPurple to-90%
    `}>
      <div className={`flex flex-col w-11/12 gap-5 items-center
        sm:w-10/12
        md:w-9/12
        lg:w-8/12
        xl:w-7/12
        2xl:w-6/12] `}>
          <p className='font-medium text-2xl'>I am Enrique Ajin</p>
          <div className='w-48 h-48'>
            <img 
              className='w-full h-full rounded-full object-cover'
              src='/enri-sideway.webp'
              alt='Photo of Enrique wearing a gray suit and a maroon shirt.'
            />
          </div>
          <p className='font-extrabold leading-snug lg:w-auto text-balance 
          text-4xl md:5xl lg:text-6xl 2xl:text-7xl'>
            Software Developer
          </p>


          <div className='flex flex-col sm:flex-row gap-5 font-normal text-xl md:text-2xl mb-5 items-center'>
            <div className='flex items-center gap-2'>
              <FaAndroid className='w-6 h-6 text-green-500' />
              <p>Android</p>
            </div>
            <div className='flex items-center gap-2'>
              <FaReact className='w-6 h-6 text-cyan-500' />
              <p>React</p>
            </div>
            <div className='flex items-center gap-2'>
              <SiSpringboot className='w-6 h-6 text-green-500' />
              <p>Spring Boot</p>
            </div>
          </div>

          <a href="#Contact">
            <button className='font-normal text-xl md:text-2xl border border-white 
            rounded-lg px-6 py-2 hover:cursor-pointer duration-300 hover:scale-110'>
              Contact me
            </button>
          </a>
      </div>
    </section>
  )
}