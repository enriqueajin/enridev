export function Hero () {
  return (
    <section className ={`flex flex-col h-[calc(100vh-96px)] items-center 
    justify-center w-full bg-gradient-to-b from-darkBlue from-5% via-gradientPurple via-40% 
    to-gradientDarkPurple to-95% text-center text-white pattern-zigzag-3d pattern-gray-500 pattern-bg-white 
  pattern-size-20 pattern-opacity-20`}>
      <div className={`flex flex-col w-11/12 gap-5
        sm:w-10/12
        md:w-9/12
        lg:w-8/12
        xl:w-7/12
        2xl:w-6/12] `}>
          <p className='font-normal text-xl'>I am Enrique Ajin</p>
          <div className='w-48 h-48 mx-auto'>
            <img 
              className='w-full h-full rounded-full object-cover'
              src='/enri-sideway.jpg'
              alt='Photo of Enrique wearing a gray suit and a maroon shirt.'
            />
          </div>
          <h1 className='font-extrabold leading-snug lg:w-auto text-balance text-4xl md:5xl lg:text-6xl 2xl:text-7xl'>
            <span className='text-white'>A passionate </span>
            <span className='text-primaryBlue'>Android Developer </span>
          </h1>
          <p className='font-normal text-xl'>Specializing in Kotlin Multiplatform</p>
          <a href="#Contact">
            <button className='bg-primaryBlue rounded-lg px-8 py-3 font-bold hover:-translate-y-1 duration-300 hover:scale-110'>
              Contact me
            </button>
          </a>
      </div>
        
    </section>
  )
}