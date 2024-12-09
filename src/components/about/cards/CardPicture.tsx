export function CardPicture ({
  className,
  imgLink, 
  imgAlt 
}: { 
  className: string,
  imgLink: string, 
  imgAlt: string 
}) {
  return (
    <div className='relative col-span-2 hidden sm:block w-full max-h-96'>
      <img 
        className={`w-full h-full rounded-xl object-cover ${className}`}
        src={imgLink}
        alt={imgAlt}
      />
    </div>
  )
}