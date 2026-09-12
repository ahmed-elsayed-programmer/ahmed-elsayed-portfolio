"use client"

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number]

function Project({ title, description, tags, imageUrl, projectUrl }: ProjectProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  })
  const scaleProges = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProges = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  return (
    <motion.section style={{
      scale: scaleProges,
      opacity: opacityProges
    }}
      ref={ref}
      className='group relative bg-gray-100 max-w-[42rem] rounded-lg borderBlack overflow-hidden sm:pr-8 sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20'>
      {projectUrl && (
        <a
          href={projectUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${title} repository`}
          className="absolute inset-0 z-10"
        />
      )}
      <div className='flex flex-col h-full pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
        <ul className='flex flex-wrap mt-auto gap-2'>
          {tags.map((tag, index) => (
            <li
              className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider  text-white rounded-full dark:text-white/70'
              key={index}>
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={imageUrl}
        width={500}
        height={500}
        alt={title}
        className='absolute top-8 -right-40 w-[28.25rem] h-auto rounded-md shadow-2xl transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.2] ' />
    </motion.section>)
}

export default Project;
