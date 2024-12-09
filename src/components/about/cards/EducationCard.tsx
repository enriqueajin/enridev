import { FaCheckCircle } from "react-icons/fa";
import { CardPicture } from "./CardPicture";

export function EducationCard () {
  return (
    <div className='lg:h-80 flex flex-col bg-primaryPurple rounded-xl justify-evenly items-center p-5'>
      <p className='font-bold text-2xl'>Education</p>
      <div className='w-full flex flex-col lg:flex-row gap-5 items-center self-start'>
        <CardPicture
          className='object-top'
          imgLink='/enrique-graduation.jpg'
          imgAlt='Enrique in his graduation wearing a toga and holding his diploma.'
        />
        <div className='flex flex-grow flex-col gap-y-5'>
            <div className='flex items-start gap-x-3'>
              <FaCheckCircle className='min-w-8 min-h-8 fill-primaryBlue rounded-full' />
              <div className='text-balance'>
                <p>Master's in Data Analysis & Business Intelligence</p>
                <strong>Universidad Panamericana 🇬🇹</strong>
                <p>Ongoing</p>
              </div>
            </div>
            <div className='flex items-start gap-x-3'>
              <FaCheckCircle className='min-w-8 min-h-8 fill-primaryBlue rounded-full' />
              <div className='text-balance'>
                <p>Bachelor's in Computer Science & IT</p>
                <strong>Universidad Panamericana 🇬🇹</strong>
                <p>2019-2023</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}