import { Link } from "react-router-dom";

import { projects } from "../constants";
import { FaDoorOpen, FaGithub } from "react-icons/fa";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Projects = () => {
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
        My Projects
      </motion.h1>

      <motion.p
        initial={{ y: -40, opacity: 0 }}
        animate={animationControls}
        className="text-slate-400 mt-2 leading-relaxed"
      >
        I&apos;ve embarked on numerous projects throughout the years, but these
        are the ones I hold closest to my heart. Many of them are open-source,
        so if you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </motion.p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={animationControls}
            className="lg:w-[400px] w-full"
            key={project.name}
          >
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={project.iconUrl}
                alt="threads"
                className="h-[200px] object-contain"
              />
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl text-white font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-sm text-slate-400">
                {project.description}
              </p>
              <div className="flex flex-row gap-4">
                {project.link && (
                  <div className="mt-5 flex items-center gap-2">
                    <Link
                      to={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2 items-center font-semibold text-cyan-600 hover:text-cyan-500"
                    >
                      <FaDoorOpen size={24} />
                      {project.buttontext}
                    </Link>
                  </div>
                )}
                {project.sourceCode && (
                  <div className="mt-5 flex items-center gap-2">
                    <Link
                      to={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2 items-center font-semibold text-cyan-600 hover:text-cyan-500"
                    >
                      <FaGithub size={24} />
                      Source Code
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
