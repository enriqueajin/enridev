import { FaCode } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export function ProjectItem (
  { 
    title, 
    imageUrl, 
    siteUrl, 
    sourceCodeUrl 
  }: {
    title: string,
    imageUrl: string,
    siteUrl?: string,
    sourceCodeUrl: string;
  }) {
  return (
    <div className='flex flex-col w-full  max-w-80 rounded-2xl bg-cardBlue border border-cardBorder items-center px-5 py-5 gap-y-4'>
      <p className='font-bold text-xl'>{title}</p>
      <div className=''>
        <img className='w-60 h-60 object-cover object-top'
          src={imageUrl}
        />
      </div>
      <div className={`w-full grid gap-x-3
        ${siteUrl ? 'grid-cols-2' : 'grid-cols-1'}
        `}>
        {
          siteUrl &&
          <div className=''>
            <a
              href={siteUrl} 
              target='_blank' 
              className='flex justify-center items-center gap-x-1 w-full bg-primaryBlue rounded-lg py-3 font-bold hover:-translate-y-1 duration-300 hover:scale-110'>
              <TbWorld className='w-5 h-5' />
              Website
            </a>
          </div>
        }
        <div className=''>
          <a 
            href={sourceCodeUrl} 
            target='_blank'
            className='flex justify-center items-center gap-x-1 w-full bg-secondaryBlue rounded-lg py-3 font-bold hover:-translate-y-1 duration-300 hover:scale-110'
          >
            <FaCode className='w-5 h-5'/>
            Code
          </a>
        </div>
      </div>
    </div>
  )
}
