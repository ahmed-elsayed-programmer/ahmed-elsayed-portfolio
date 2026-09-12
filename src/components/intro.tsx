"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import useSectionInView from '@/hooks/useSectionInView';

const Intro = () => {
  const { ref } = useSectionInView("Home");

  return (
    <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-36'>
      <div className="flex items-center justify-center">
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src={'/man.png'}
              alt='photo'
              width={192}
              height={192}
              quality={95}
              priority
              className='h-24 w-24 bg-white rounded-full object-cover border-[0.35rem] border-white shadow-xl'
            />
          </motion.div>

          <motion.span
            className='absolute bottom-0 right-0 text-4xl '
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 125, delay: 0.1, duration: 0.7 }}
          >👋</motion.span>

        </div>
      </div>
      <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{`Hello, I'm Ahmed Elsayed. `}</span>{`I'm a `}
        <span className="font-bold">full-stack developer</span> focused on {' '}
        <span className="italic">backend-oriented product engineering</span>. My core stack is <span className="underline">Python/Django and React/Next.js.</span>
      </motion.h1>

      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >

        <Link href="#contact"
          className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
        >
          Contact me here <BsArrowRight />
        </Link>

        <a href='/CV.pdf' download className='bg-white  px-7 py-3 flex items-center gap-2 rounded-full cursor-pointer outline-none focus:scale-110 hover:scale-110 active:scale-105 transition dark:bg-white/10 dark:text-white/60'>
          Download CV <HiDownload />
        </a>

        <a href='https://www.linkedin.com/in/ahmed-elsayed-developer' aria-label="Linkedin profile link" target='_blank' className='bg-white p-4 text-blue-700 flex items-center gap-2 rounded-full cursor-pointer outline-none focus:scale-110 hover:scale-110 active:scale-105 transition dark:bg-white/10 dark:text-white/60'>
          <BsLinkedin />
        </a>

        <a href='https://github.com/ahmed-elsayed-programmer' aria-label="Github profile link" target='_blank' className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full cursor-pointer outline-none focus:scale-110 hover:text-gray-950 hover:scale-110 active:scale-105 transition dark:bg-white/10 dark:text-white/60'>
          <BsGithub />
        </a>

      </motion.div>
    </section>
  )
}

export default Intro
