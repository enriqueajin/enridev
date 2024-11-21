export function Hero () {
  return (
    <section className ='flex justify-center w-full bg-gradient-to-b from-darkBlue from-5% via-gradientPurple via-40% to-gradientDarkPurple to-95%'>
      {/* Main container */}
      <div className="w-[80%] gap-y-12 flex flex-col md:flex-row items-center justify-center py-20">
      {/* Hero's text and contact button */}
        <div className='md:w-[65%] lg:w-2/4 flex flex-col gap-y-5 text-white items-start'>
          <p className='font-normal text-xl'>I am Enrique Ajin</p>
          <h1 className='font-extrabold  lg:w-auto text-balance text-3xl md:text-4xl lg:text-5xl leading-tight'>
            <span className='text-white'>I create innovative </span>
            <span className='text-primaryBlue'>software solutions</span>
          </h1>
          <a href="#contact">
            <button className='bg-primaryBlue rounded-lg px-8 py-3 font-bold hover:-translate-y-1 duration-300 hover:scale-110'>
              Contact me
            </button>
          </a>
        </div> 
      {/* Hero's picture */}
        <div className='md:w-[35%] lg:w-2/4 max-w-96'>
          <img 
            className='max-full rounded-2xl'
            src='../../public/enrique-ajin.jpg'
            alt='Photo of Enrique wearing a gray suit and a maroon shirt.'
          />
        </div>
      </div>
    </section>
  )
}