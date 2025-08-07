import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { experiences } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import Carousel from "../components/Carousel";
import { FaFileDownload } from "react-icons/fa";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";

const About = () => {
  const animationControls = useAnimation();

  useEffect(() => {
    animationControls.start({ y: 0, opacity: 1, transition: { duration: 1 } });
  }, [animationControls]);

  return (
    <section className="max-container">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={animationControls}
        className="head-text"
      >
        Hello, my name is Lubega
      </motion.h1>

      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={animationControls}
        className="mt-5 flex flex-col gap-3 text-slate-400"
      >
        <p>
          I am a creative and detail-oriented person with passion in programming
          and engineering. I am always open to learning new things and
          constructive criticism to become better in the working field.
        </p>
        <p>
          I am currently working as a frontend developer at Deriv, where I am responsible
          for maintaining and improving the cashier and payments-related features. In this
          role, I work with TypeScript, React, SASS, MobX, and Jest to manage the existing
          high-code codebase, as well as Outsystems for the low-code redesign of the platform.
          I also assist the QA team by contributing to test automation using end-to-end
          testing tools such as Testim and Cypress.io.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={animationControls}
        className="py-10 flex flex-col"
      >
        <h3 className="subhead-text">My Skills</h3>

        <Carousel />
      </motion.div>

      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={animationControls}
        className="py-16"
      >
        <h3 className="subhead-text">Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-400">
          <p>
            I&apos;ve spent my time in this industry collecting experience to
            further improve myself in the field. Here&apos;s the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.id}
                date={experience.date}
                dateClassName="text-slate-400"
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: "#06b6d4",
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-cyan-500 text-xl font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-cyan-700 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={animationControls}
        className="py-10 flex justify-center"
      >
        <a
          href="/MuhammadLubega.pdf"
          download
          className="flex justify-center items-center gap-2 font-semibold w-full mx-6 bg-gradient-to-r from-[#00C6ff] hover:from-[#104f62] to-[#155E75] hover:to-[#00c8ff69] text-white p-4 rounded"
        >
          <FaFileDownload size={20} />
          Download My Resume
        </a>
      </motion.div>
    </section>
  );
};

export default About;
