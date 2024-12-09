import { FaCheckCircle } from "react-icons/fa";
import { BulletCard } from "./BulletCard";

export function AboutGrid() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 w-11/12 xl:w-9/12 mt-16 mb-20 gap-5'>
      <BulletCard cardTitle='Experiencia' imgUrl='/enri-at-desk.jpg'>
        <div className='flex flex-grow flex-col gap-y-5'>
          <div className='flex items-start gap-x-3'>
            <FaCheckCircle className='min-w-8 min-h-8 fill-primaryBlue rounded-full' />
            <div className='text-balance'>
              <p>Android Developer</p>
              <strong>Digital Geko 🇬🇹</strong>
              <p>2021-2024</p>
            </div>
          </div>
        </div>
      </BulletCard>
      <BulletCard cardTitle='Educación' imgUrl='/enrique-graduation.jpg'>
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
      </BulletCard>
    </div>
  )
}