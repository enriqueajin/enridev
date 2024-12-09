import { FaCheckCircle } from "react-icons/fa";
import { CardPicture } from "./CardPicture";

export function ExperienceCard () {
  return (
    <div className='lg:h-80 flex flex-col bg-primaryPurple rounded-xl justify-evenly items-center p-5 gap-3'>
      <p className='font-bold text-2xl'>Experience</p>
      <div className='w-full flex flex-col lg:flex-row gap-5 items-center self-start'>
        <CardPicture 
            className='object-center'
            imgLink='/enri-at-desk.jpg'
            imgAlt='Enrique at his Macbook at the office wearing a suit.' 
          />
        <div className='flex-grow gap-y-5'>
            <div className='flex items-start gap-x-3'>
              <FaCheckCircle className='min-w-8 h-8 fill-primaryBlue rounded-full' />
              <div className='flex flex-col'>
                <span>Android Developer</span>
                <strong>Digital Geko 🇬🇹</strong>
                <span>2021-2024</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}