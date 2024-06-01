import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import "./Modal.css";

const Modal = ({ currentStage, handlePrevStage, handleNextStage }) => {
  const animationControls = useAnimation();

  useEffect(() => {
    animationControls.start({ y: 0, opacity: 1, transition: { duration: 2 } });
  }, [animationControls]);

  return (
    <div className="flex items-center justify-center">
      {/* <button
        onClick={handlePrevStage}
        className="bg-white border-none cursor-pointer p-2 mx-2 text-lg font-bold"
      >
        {"<"}
      </button> */}
      {currentStage === 1 && (
        <motion.div
          className="flex flex-col justify-center items-center mx-20"
          initial={{ y: -50, opacity: 0 }}
          animate={animationControls}
        >
          <motion.h1 className="modal sm:leading-snug font-bold top-10 text-4xl relative text-center py-4 px-8 text-white mx-8 z-10">
            WELCOME TO THE MIRACULOUS WORLD OF LUBEGA.DEV
          </motion.h1>
          <motion.p className="text-white text-center info-box">
            Hi, I am Lubega! A passionate Frontend React Developer based in
            Kuala Lumpur, Malaysia. Get to know me here
          </motion.p>
        </motion.div>
      )}

      {currentStage === 2 && (
        <Link to="/projects">
          <motion.div
            className="flex flex-col justify-center items-center mx-20"
            initial={{ y: -50, opacity: 0 }}
            animate={animationControls}
          >
            <motion.h1 className="modal sm:leading-snug font-bold top-10 text-4xl relative text-center py-4 px-8 text-white mx-8 z-10">
              PROJECTS
            </motion.h1>
            <motion.p className="text-white text-center info-box">
              Check out more info on the projects I&apos;ve worked on here
            </motion.p>
          </motion.div>
        </Link>
      )}

      {currentStage === 3 && (
        <Link to="/contact">
          <motion.div
            className="flex flex-col justify-center items-center mx-20"
            initial={{ y: -50, opacity: 0 }}
            animate={animationControls}
          >
            <motion.h1 className="modal sm:leading-snug font-bold top-10 text-4xl relative text-center py-4 px-8 text-white mx-8 z-10">
              LET&apos;S GET IN CONTACT
            </motion.h1>
            <motion.p className="text-white text-center info-box">
              Want to learn more about me? Contact me here :)
            </motion.p>
          </motion.div>
        </Link>
      )}

      {currentStage === 4 && (
        <Link to="/about">
          <motion.div
            className="flex flex-col justify-center items-center mx-20"
            initial={{ y: -50, opacity: 0 }}
            animate={animationControls}
          >
            <motion.h1 className="modal sm:leading-snug font-bold top-10 text-4xl relative text-center py-4 px-8 text-white mx-8 z-10">
              ABOUT ME
            </motion.h1>
            <motion.p className="text-white text-center info-box">
              Find out more about my skills, achievements and tech stack here
            </motion.p>
          </motion.div>
        </Link>
      )}

      {/* <button
        onClick={handleNextStage}
        className="bg-white border-none cursor-pointer p-2 mx-2 text-lg font-bold"
      >
        {">"}
      </button> */}
    </div>
  );
};

export default Modal;
