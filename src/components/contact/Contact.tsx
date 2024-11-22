import { ContactButtons } from "./buttons/ContactButtons";
import { ContactPicture } from "./picture/ContactPicture";

export function Contact () {
  return (
    <section id='Contact' className='flex flex-col w-full bg-darkBlue items-center text-white gap-y-5'>
      <h1 className='font-extrabold text-balance text-3xl md:text-4xl lg:text-5xl mt-10 pb-16'>
        Contact
      </h1>
      <div className='w-[90%] lg:w-[70%] gap-14 grid grid-cols-1 md:grid-cols-2 mb-20'>
        <ContactPicture />
        <ContactButtons />
      </div>
    </section>
  )
}
