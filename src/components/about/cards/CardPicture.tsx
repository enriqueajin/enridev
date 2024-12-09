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
    <div className='min-w-48 h-48'>
      <img 
        className={`w-full h-full rounded-full object-cover ${className}`}
        src={imgLink}
        alt={imgAlt}
      />
    </div>
  )
}