import { AboutGrid } from "./cards/AboutGrid";

export function About () {
  return (
    <section
      id='About me'
      className='flex flex-col w-full bg-darkPurple text-white items-center'
    >
      <h1 className='font-extrabold text-balance text-3xl md:text-4xl lg:text-5xl mt-10'>
        About me
      </h1>
      <AboutGrid />
    </section>
  )
}
