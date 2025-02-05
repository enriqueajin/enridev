import { FaAndroid } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";


export function Hero () {
  return (
    <section className ={`flex flex-col h-[calc(100vh-96px)] items-center 
    justify-center w-full text-center text-white
    `}>
      <div className="absolute inset-0 -z-10 w-full bg-darkBlue 
      bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),
      linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:60px_24px]">
        <div className="absolute left-0 right-0 top-40 -z-10 m-auto h-full w-full lg:h-[810px] lg:w-[810px] 
        rounded-full bg-secondaryBlue opacity-40 blur-[100px]">
        </div>
      </div>
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


          <div className='flex flex-col sm:flex-row gap-5 font-normal text-2xl mb-5 items-center'>
            <div className='flex gap-2'>
              <FaAndroid className='w-6 h-6 text-green-500' />
              <p>Android</p>
            </div>
            <div className='flex gap-2'>
              <FaReact className='w-6 h-6 text-cyan-500' />
              <p>React</p>
            </div>
            <div className='flex gap-2'>
              <SiSpringboot className='w-6 h-6 text-green-500' />
              <p>Spring Boot</p>
            </div>
          </div>

          <a href="#Contact">
            <button className='font-normal text-2xl border border-white rounded-lg px-8 py-3 
             hover:cursor-pointer duration-300 hover:scale-110 mb-15'>
              Contact me
            </button>
          </a>
      </div>
    </section>
  )
}