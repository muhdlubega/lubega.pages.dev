import { Link } from "react-router-dom";

import { projects } from "../constants";
import { FaDoorOpen } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">My Projects</h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        I&apos;ve embarked on numerous projects throughout the years, but these
        are the ones I hold closest to my heart. Many of them are open-source,
        so if you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
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
              <p className="mt-2 text-sm text-slate-500">
                {project.description}
              </p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center font-semibold text-cyan-600 hover:text-cyan-500"
                >
                  <FaDoorOpen size={24} />
                  Open Website
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
