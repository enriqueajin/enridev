import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(1, { message: 'Name required.' }),
  email: z.string().email(),
  message: z.string().min(1, { message: 'Message required.' })
})

type FormFields = z.infer<typeof formSchema>;

export function Form () {
  const { 
    register, 
    handleSubmit,
    reset,
    formState: { errors, isSubmitting } 
  } = useForm<FormFields>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    // console.log(data)
    try {
      const res = await fetch('https://formsubmit.co/ajax/enriquesaon@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      })
      console.log({ response: res.status });
      
    } catch (error) {
      console.log(error)
    } finally {
      reset();
      alert('Message sent succesfully. I will get back to you as soon as possible.')
    }
  }

  return (
    <div>
      <p className='mb-3'>Send me a message:</p>
      <form 
        className='gap-3 flex flex-col' 
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <input 
            {...register('name')}
            type='text'
            name='name'
            placeholder='Name'
            className='w-full text-gray-600 placeholder:text-gray-400 h-12 rounded-lg px-4 font-bold'>
          </input>
          {errors.name && (
            <p className='text-red-500 mt-1 text-sm'>{errors.name?.message}</p>
          )}
        </div>
        <div>
          <input 
            {...register('email')}
            type='text' 
            name='email' 
            placeholder='Email'
            className='w-full text-gray-600 placeholder:text-gray-400 h-12 rounded-lg px-4 font-bold'>
          </input>
          {errors.email && (
            <p className='text-red-500 mt-1 text-sm'>{errors.email?.message}</p>
          )}
        </div>
        <div>
          <textarea 
            {...register('message')}
            rows={3}
            name='message'
            placeholder='Message'
            className='w-full text-base text-gray-600 placeholder:text-gray-400 rounded-lg px-4 py-2 font-bold border focus:ring-primaryBlue border-gray-50 focus:border-primaryBlue'>
          </textarea>
          {errors.message && (
            <p className='text-red-500 text-sm'>{errors.message?.message}</p>
          )}
        </div>
        <button 
          type='submit'
          disabled={isSubmitting} 
          className='text-center w-full bg-primaryBlue rounded-lg px-8 py-3 font-bold hover:bg-secondaryBlue duration-300'>
          {isSubmitting ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}