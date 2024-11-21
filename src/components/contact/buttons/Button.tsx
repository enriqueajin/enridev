export function Button ({
  className,
  icon,
  linkTo,
  buttonText
 }: {
  className?: string,
  icon: React.ComponentType<{ className?: string }>,
  linkTo: string,
  buttonText: string
 }) {
  const ButtonIcon = icon
  return (
    <div>
      <a
        href={linkTo}
        target='_blank'
        className={`${className} flex justify-center items-center gap-x-1 w-full rounded-lg py-3 font-bold duration-300`}
      >
        <ButtonIcon className='w-6 h-6' />
        {buttonText}
      </a>
    </div>
  )
}