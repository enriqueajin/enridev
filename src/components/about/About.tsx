import { FaCheckCircle } from "react-icons/fa";

export function About () {
  return (
    <section id='About me' className='flex flex-col w-full bg-darkPurple text-white items-center'>
      <h1 className='font-extrabold text-balance text-3xl md:text-4xl lg:text-5xl mt-20'>
        About me
      </h1>
      {/* Grid cointainer */}
      <div className='w-[90%] lg:w-[70%] grid gap-7 sm:grid-cols-5 my-16'>
        {/* Experience text */}
        <div className='col-span-3 w-full min-h-96 flex flex-col px-5 py-12 bg-primaryPurple rounded-xl justify-evenly'>
          <p className='font-bold text-2xl'>Experience</p>
          <div className='flex flex-col gap-y-5'>
            <div className='flex items-start gap-x-3'>
              <FaCheckCircle className='min-w-8 h-8 fill-primaryBlue rounded-full' />
              <div className='flex flex-col'>
                <span>Android Developer</span>
                <strong>Digital Geko 🇬🇹</strong>
                <span>2021-2024</span>
              </div>
            </div>
            <div className='flex items-start gap-x-3'>
              <FaCheckCircle className='min-w-8 min-h-8 fill-primaryBlue rounded-full' />
              <div className='flex flex-col'>
                <span>Software Developer</span>
                <strong>Freelancer</strong>
                <span>present</span>
              </div>
            </div>
          </div>
        </div>
        {/* Experience picture */}
        <div className='col-span-2 hidden sm:block w-full max-h-96'>
          <img 
            className='w-full h-full rounded-xl object-cover'
            src='https://thumbs.dreamstime.com/b/horario-de-trabajo-ambiente-de-trabajo-79429894.jpg'
            alt='Illustration of people at a office.'
          />
        </div>
        {/* Education picture */}
        <div className='col-span-2 hidden sm:block w-full max-h-96'>
          <img 
            className='w-full h-full rounded-xl object-cover object-top'
            // src='https://static.vecteezy.com/system/resources/previews/002/245/412/non_2x/online-graduation-ceremony-in-mobile-phone-free-vector.jpg'
            src='../public/enrique-graduation.jpg'
            alt='Illustration of people at a office.'
          />
        </div>
        {/* Education */}
        <div className='col-span-3 w-full min-h-96 flex flex-col px-5 py-7 gap-y-3 bg-primaryPurple rounded-xl justify-evenly'>
          <p className='font-bold text-2xl'>Education</p>
          <div className='flex flex-col gap-y-5'>
            <div className='flex items-start gap-x-3'>
              <FaCheckCircle className='min-w-8 min-h-8 fill-primaryBlue rounded-full' />
              <div>
                <p>Master's in Data Analysis & Business Intelligence</p>
                <strong>Universidad Panamericana 🇬🇹</strong>
                <p>Ongoing</p>
              </div>
            </div>
            <div className='flex items-start gap-x-3'>
              <FaCheckCircle className='min-w-8 min-h-8 fill-primaryBlue rounded-full' />
              <div>
                <p>Bachelor's in Computer Science & IT</p>
                <strong>Universidad Panamericana 🇬🇹</strong>
                <p>2019-2023</p>
              </div>
            </div>
            <div className='flex items-start gap-x-3'>
              <FaCheckCircle className='min-w-8 min-h-8 fill-primaryBlue rounded-full' />
              <div>
                <p>University Technician in Systems & IT</p>
                <strong>Universidad Panamericana 🇬🇹</strong>
                <p>2019-2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
