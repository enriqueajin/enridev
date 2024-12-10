import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Form } from "../form/Form";
import { Divider } from "../divider/Divider";
import { Button } from "./Button";

export function ContactButtons () {
  return (
    <div>
      <p className='mb-3'>Contact me via:</p>
      <div className='w-full grid grid-cols-2 gap-x-3'>
        <Button 
          className='bg-[#29A71A] hover:bg-emerald-700'
          icon={FaWhatsapp}
          linkTo='https://api.whatsapp.com/send?phone=50236569181'
          buttonText='WhatsApp'
        />
        <Button 
          className='bg-indigo-600 hover:bg-indigo-800'
          icon={IoIosMail}
          linkTo='mailto:enriquesaon@gmail.com'
          buttonText='Email'
        />
      </div>
      <Divider />
      <Form />
    </div>
  )
}