import { useEffect, useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { GrContact, GrProjects, GrStatusInfo } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import undertale from "../assets/undertale.mp3";

const Navbar = () => {
  const isMobile = window.innerWidth < 768;

  const [music, setMusic] = useState(false);

  const audioRef = useRef(new Audio(undertale));
  audioRef.current.volume = 0.1;
  audioRef.current.loop = true;

  useEffect(() => {
    if (music) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [music]);

  return (
    <header className="header">
      <div className="flex gap-2">
        <button
          onClick={() => setMusic(!music)}
          className="sticky bottom-2 left-2"
        >
          {music ? (
            <FaVolumeUp color="white" />
          ) : (
            <FaVolumeMute color="white" />
          )}
        </button>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-cyan-500 font-semibold"
              : "text-white font-semibold"
          }
        >
          <h5>lubega.dev</h5>
        </NavLink>
      </div>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-cyan-500 flex items-center gap-2"
              : "text-white flex items-center gap-2"
          }
        >
          <GrStatusInfo />
          {!isMobile && "About"}
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-cyan-500 flex items-center gap-2"
              : "text-white flex items-center gap-2"
          }
        >
          <GrProjects />
          {!isMobile && "Projects"}
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-cyan-500 flex items-center gap-2"
              : "text-white flex items-center gap-2"
          }
        >
          <GrContact /> {!isMobile && "Contact"}
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
