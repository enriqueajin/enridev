export function FilterItem ({ 
  text, 
  icon, 
  setActiveChip,
  className
}: {
  text: string, 
  icon: React.ComponentType<{ className?: string }>
  setActiveChip: () => void,
  className: string
}) {
  const Icon = icon;
  return (
    <button onClick={setActiveChip} className={`w-32 h-10 rounded-xl ${className}
     
    `}>
      <div className={`flex gap-x-2 items-center justify-center`}>
        <Icon className='min-w-5 min-h-5' />
        <p>{text}</p>
      </div>
    </button>
  )
}