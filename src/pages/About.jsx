import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { experiences } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import Carousel from "../components/Carousel";
import { FaFileDownload } from "react-icons/fa";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">Hello, my name is Lubega</h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-400">
        <p>
          I am a creative and detail-oriented person with passion in programming
          and engineering. I am always open to learning new things and
          constructive criticism to become better in the working field.
        </p>
        <p>
          Currently I am working as a frontend developer at Deriv, where I am
          tasked in handling cashier and payments related maintenance and
          improvements. For this role I work with Typescript, React, SASS, MobX
          and Jest to maintain the current codebase, solving bugs and improving
          on new features and user stories. I am also tasked in assisting the QA
          automation of the team by incorporating e2e tests via Cypress.io.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <Carousel />
      </div>

      <div className="py-16">
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
      </div>
      <div className="py-10 flex justify-center">
        <a
          href="/MuhammadLubega.pdf"
          download
          className="flex justify-center items-center gap-2 font-semibold w-full mx-6 bg-gradient-to-r from-[#00c6ff] hover:from-[#06b6d4] to-[#155E75] hover:to-[#45cff6] text-white p-4 rounded"
        >
          <FaFileDownload size={20} />
          Download My Resume
        </a>
      </div>
    </section>
  );
};

export default About;
