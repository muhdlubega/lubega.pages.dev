import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Modal = ({ currentStage }) => {
  const animationControls = useAnimation();

  useEffect(() => {
    animationControls.start({ y: 0, opacity: 1, transition: { duration: 2 } });
  }, [animationControls]);

  return (
    <div className="flex items-center justify-center">
      {currentStage === 1 && (
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ y: -50, opacity: 0 }}
          animate={animationControls}
        >
          <motion.h1 className="modal sm:leading-snug font-bold top-9 text-[2rem] relative text-center py-4 px-8 text-white z-10">
            WELCOME TO LUBEGA.DEV
          </motion.h1>
          <motion.p className="text-white text-center info-box">
            Check out the miraculous world of lubega.dev. Take a spin and talk
            to the fellow inhabitants to learn more!
          </motion.p>
        </motion.div>
      )}

      {currentStage === 2 && (
        <Link to="/projects">
          <motion.div
            className="flex flex-col justify-center items-center"
            initial={{ y: -50, opacity: 0 }}
            animate={animationControls}
          >
            <motion.h1 className="modal sm:leading-snug font-bold top-10 text-4xl relative text-center py-4 px-8 text-white z-10">
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
            className="flex flex-col justify-center items-center"
            initial={{ y: -50, opacity: 0 }}
            animate={animationControls}
          >
            <motion.h1 className="modal sm:leading-snug font-bold top-10 text-4xl relative text-center py-4 px-8 text-white z-10">
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
            className="flex flex-col justify-center items-center"
            initial={{ y: -50, opacity: 0 }}
            animate={animationControls}
          >
            <motion.h1 className="modal sm:leading-snug font-bold top-10 text-4xl relative text-center py-4 px-8 text-white z-10">
              ABOUT ME
            </motion.h1>
            <motion.p className="text-white text-center info-box">
              Find out more about my skills and experiences here
            </motion.p>
          </motion.div>
        </Link>
      )}
    </div>
  );
};

export default Modal;
