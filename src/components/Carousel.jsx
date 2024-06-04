import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import css from "../assets/tech_stack/CSS3.svg";
import dart from "../assets/tech_stack/Dart.svg";
import flutter from "../assets/tech_stack/Flutter.svg";
import git from "../assets/tech_stack/Git.svg";
import html from "../assets/tech_stack/HTML5.svg";
import javascript from "../assets/tech_stack/JavaScript.svg";
import nodejs from "../assets/tech_stack/NodeJS.svg";
import postgresql from "../assets/tech_stack/PostgreSQL.svg";
import python from "../assets/tech_stack/Python.svg";
import react from "../assets/tech_stack/React.svg";
import scss from "../assets/tech_stack/SCSS.svg";
import typescript from "../assets/tech_stack/TypeScript.svg";

const Carousel = () => {
  const logos = [
    { src: css, alt: "CSS" },
    { src: dart, alt: "Dart" },
    { src: flutter, alt: "Flutter" },
    { src: git, alt: "Git" },
    { src: html, alt: "HTML" },
    { src: javascript, alt: "JavaScript" },
    { src: nodejs, alt: "NodeJS" },
    { src: postgresql, alt: "PostgreSQL" },
    { src: python, alt: "Python" },
    { src: react, alt: "React" },
    { src: scss, alt: "SCSS/SASS" },
    { src: typescript, alt: "TypeScript" },
  ];
  const items = logos.map((logo, index) => {
    return (
      <div
        key={index}
        className="flex flex-col justify-center items-center max-w-[896px]"
      >
        <img className="h-16 w-16" src={logo.src} alt={logo.alt} />
        <p className="text-slate-500 mt-4">{logo.alt}</p>
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
      <p className="my-5 flex flex-col gap-3 text-slate-500">
        Here are the languages/frameworks that I am familiar or have worked
        with:
      </p>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlay
        autoPlayInterval={1000}
        animationDuration={1000}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
      />
    </div>
  );
};

export default Carousel;
