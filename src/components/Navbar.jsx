import { GrContact, GrProjects, GrStatusInfo } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <header className="header">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-cyan-500" : "text-white"
        }
      >
        <h5>lubega.dev</h5>
      </NavLink>
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
