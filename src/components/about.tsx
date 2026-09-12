"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import useSectionInView from "@/hooks/useSectionInView";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        I&apos;m a full-stack engineer based in Cairo and working remotely. I build
        secure web and mobile products across <span className="font-medium">Python, Django,
        Django REST Framework, React, Next.js, and React Native</span>. I enjoy owning
        the work between backend architecture and a clear, responsive interface.
      </p>
      <p className="mt-3">
        Alongside product work, I teach programming fundamentals. I&apos;m completing
        a <span className="font-medium">Bachelor&apos;s degree in Arabic Language at
        Al-Azhar University</span>, expected in 2027, and I&apos;m open to remote
        full-time and contract opportunities.
      </p>
    </motion.section>
  );
};

export default About;
