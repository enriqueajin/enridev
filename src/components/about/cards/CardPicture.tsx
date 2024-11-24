export function CardPicture ({ imgLink, imgAlt }: { imgLink: string, imgAlt: string }) {
  return (
    <div className='col-span-2 hidden sm:block w-full max-h-96'>
      <img 
        className='w-full h-full rounded-xl object-cover object-top'
        src={imgLink}
        alt={imgAlt}
      />
    </div>
  )
}