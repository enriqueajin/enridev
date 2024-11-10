export function SocialIcon (
  { link, 
    icon
  }: { 
    link: string, 
    icon: React.ComponentType<{ className?: string }>;
  }) {
  const Icon = icon
  return (
    <a
      href={link}
      target='_blank'>
        <Icon className='w-8 h-8 transition ease-in-out cursor-pointer hover:text-white hover:-translate-y-1 duration-300 hover:scale-110' />
      </a>
  )
}