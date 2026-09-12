"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import useSectionInView from '@/hooks/useSectionInView'
import { sendEmail } from '@/actions/sendEmail'
import toast from 'react-hot-toast'

function Contact() {
  const { ref } = useSectionInView("Contact");


  return (
    <motion.section ref={ref} id='contact' className='mb-20 sm:mb-28  w-[min(100%,38rem)] text-center'>
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        Please contact me directly at{" "}
        <a className="underline" href="mailto:ahmedelsayed3157@gmail.com">
          ahmedelsayed3157@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className='flex flex-col mt-10 dark:text-black'
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error)
            return
          }
          toast.success("Email sent successfully!")
        }}
      >
        <input
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          type="email"
          name="email"
          required
          maxLength={500}
          placeholder='Your email'
        />

        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='message'
          required
          maxLength={500}
          placeholder='Your message'
        />

        <button
          type='submit'
          className='group h-[3rem] w-[8rem] flex justify-center items-center gap-2 bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10'
        >

          Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />

        </button>

      </form>
    </motion.section>
  )
}

export default Contact