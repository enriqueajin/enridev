import { CardPicture } from "./CardPicture"

export function BulletCard ({
  cardTitle,
  imgUrl,
  children
}: {
  cardTitle: string,
  imgUrl: string,
  children: React.ReactNode
}) {
  return (
    <div className=' flex flex-col bg-primaryPurple rounded-xl justify-evenly items-center p-5 gap-5'>
      <p className='font-bold text-2xl'>{cardTitle}</p>
      <div className='w-full flex flex-col lg:flex-row gap-5 items-center self-start'>
        <CardPicture
          className='object-top'
          imgLink={imgUrl}
          imgAlt='Enrique in his graduation wearing a toga and holding his diploma.'
        />
        {children}
      </div>
    </div>
  )
}