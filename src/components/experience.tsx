"use client"

import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from './section-heading';
import useSectionInView from '@/hooks/useSectionInView';
import { experiencesData } from '@/lib/data';
import { useTheme } from '@/context/themeContext';

function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  return (
    <section ref={ref} id='experience' className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>Experience</SectionHeading>

      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              visible={true}
              contentStyle={{
                background:
                  theme === 'light' ? "#f3f4f6" : 'rgba(255,255,255, 0.05)',
                boxShadow: "none",
                border: "1px solid rgba(0,0,0, 0.05)",
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: theme === 'light' ? '0.4rem solid #9ca3af' : '0.4rem solid rgba(255,255,255, 0.5)'
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === 'light' ? "white" : 'rgb(60, 35, 92)',
                fontSize: '1.5rem'
              }}
            >
              <h3 className='font-semibold capitalize'>{item.title}</h3>
              <h4 className="font-normal"> {item.location} </h4>
              <p className='mt-1 text-gray-700 dark:text-white/75'> {item.description} </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}

export default Experience;