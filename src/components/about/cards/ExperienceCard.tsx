import { FaCheckCircle } from "react-icons/fa";

export function ExperienceCard () {
  return (
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
  )
}