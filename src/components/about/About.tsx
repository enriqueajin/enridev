import { FaCheckCircle } from "react-icons/fa";

export function About () {
  return (
    <section id='About me' className='flex flex-col w-full bg-darkPurple text-white items-center'>
      <h1 className='font-extrabold text-balance text-3xl md:text-4xl lg:text-5xl mt-20'>
        About me
      </h1>
      {/* Grid cointainer */}
      <div className='w-[90%] lg:w-[70%] grid gap-7 sm:grid-cols-2 my-16'>
        {/* Experience text */}
        <div className='w-full min-h-64 flex flex-col px-5 py-7 gap-y-3 bg-primaryPurple rounded-xl justify-between'>
          <p className='font-bold text-2xl'>Experience</p>
          <div className='flex items-center gap-x-3'>
            <FaCheckCircle className='w-8 h-8 fill-primaryBlue rounded-full' />
            <div className='flex flex-col'>
              <span>Android Developer</span>
              <span>Digital Geko 🇬🇹</span>
              <span>2021-2024</span>
            </div>
          </div>
          <div className='flex items-center gap-x-3'>
            <FaCheckCircle className='min-w-8 min-h-8 fill-primaryBlue rounded-full' />
            <div className='flex flex-col'>
              <span>Software Developer</span>
              <span>Freelancer</span>
              <span>present</span>
            </div>
          </div>
        </div>
        {/* Experience picture */}
        <div className='hidden sm:block w-full max-h-64'>
          <img 
            className='w-full h-full rounded-xl object-cover'
            src='https://thumbs.dreamstime.com/b/horario-de-trabajo-ambiente-de-trabajo-79429894.jpg'
            alt='Illustration of people at a office.'
          />
        </div>
        {/* Education picture */}
        <div className='hidden sm:block w-full max-h-64'>
          <img 
            className='w-full h-full rounded-xl object-cover'
            src='https://static.vecteezy.com/system/resources/previews/002/245/412/non_2x/online-graduation-ceremony-in-mobile-phone-free-vector.jpg'
            alt='Illustration of people at a office.'
          />
        </div>
        {/* Education */}
        <div className='w-full min-h-64 flex flex-col px-5 py-7 gap-y-3 bg-primaryPurple rounded-xl justify-between'>
          <p className='font-bold text-2xl'>Education</p>
          <div className='flex items-center gap-x-3'>
            <FaCheckCircle className='min-w-8 min-h-8 fill-primaryBlue rounded-full' />
            <p>Studying a Master’s degree in Data Analysis</p>
          </div>
          <div className='flex items-center gap-x-3'>
            <FaCheckCircle className='min-w-8 min-h-8 fill-primaryBlue rounded-full' />
            <p>Studied Computer Science</p>
          </div>
          <div className='flex items-center gap-x-3'>
            <FaCheckCircle className='min-w-8 min-h-8 fill-primaryBlue rounded-full' />
            <p>Self-taught developer</p>
          </div>
        </div>
      </div>
    </section>
  )
}
