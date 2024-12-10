export function Skill ({
  name,
  icon
}: {
  name: string,
  icon: React.ComponentType<{ className?: string }>;
}) {
  const Icon = icon
  return (
    <div className='flex flex-col w-36 h-36 justify-center items-center 
    bg-primaryPurple text-balance text-center rounded-lg text-gray-100 text-opacity-50 
    hover:text-white transition duration-500'>
      <Icon className='w-3/6 h-5/6' />
      <p className='font-semibold'>{name}</p>
    </div>
  )
}