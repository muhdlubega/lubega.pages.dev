import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiCypress,
  SiDart,
  SiFlutter,
  SiJavascript,
  SiJest,
  SiMobx,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Carousel = () => {
  const logos = [
    { src: <FaGitAlt color="cyan" size={48} />, alt: "Git" },
    { src: <FaReact color="cyan" size={48} />, alt: "React" },
    { src: <SiTypescript color="cyan" size={48} />, alt: "TypeScript" },
    { src: <SiJavascript color="cyan" size={48} />, alt: "JavaScript" },
    { src: <SiMobx color="cyan" size={48} />, alt: "MobX" },
    { src: <SiJest color="cyan" size={48} />, alt: "Jest" },
    { src: <SiCypress color="cyan" size={48} />, alt: "Cypress.io" },
    { src: <FaPython color="cyan" size={48} />, alt: "Python" },
    { src: <FaHtml5 color="cyan" size={48} />, alt: "HTML" },
    { src: <FaCss3Alt color="cyan" size={48} />, alt: "CSS" },
    { src: <SiTailwindcss color="cyan" size={48} />, alt: "TailwindCSS" },
    { src: <FaSass color="cyan" size={48} />, alt: "SASS" },
    { src: <SiDart color="cyan" size={48} />, alt: "Dart" },
    { src: <SiFlutter color="cyan" size={48} />, alt: "Flutter" },
    { src: <BiLogoPostgresql color="cyan" size={48} />, alt: "PostgreSQL" },
    { src: <FaNodeJs color="cyan" size={48} />, alt: "NodeJS" },
  ];
  const items = logos.map((logo, index) => {
    return (
      <div
        key={index}
        className="flex flex-col justify-center items-center max-w-[896px]"
      >
        {logo.src}
        <p className="text-slate-400 mt-4">{logo.alt}</p>
      </div>
    );
  });

  const responsive = {
    0: {
      items: 3,
    },
    768: {
      items: 5,
    },
  };

  return (
    <div className="flex flex-col items-start justify-center overflow-hidden">
      <p className="my-5 flex flex-col gap-3 text-slate-400">
        Here are the languages/frameworks that I am familiar or have worked
        with:
      </p>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlay
        autoPlayInterval={800}
        animationDuration={800}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
      />
    </div>
  );
};

export default Carousel;
