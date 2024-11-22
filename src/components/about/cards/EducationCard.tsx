import { FaCheckCircle } from "react-icons/fa";

export function EducationCard () {
  return (
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
  )
}