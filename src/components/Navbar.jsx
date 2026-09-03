import { useEffect, useState } from "react";

const links = ["about", "projects", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home", ...links].map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-35% 0px -55%", threshold: [0, 0.25, 0.6] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="nav-shell">
      <a href="#home" className="brand" aria-label="Lubega — back to top"><span className="brand-mark">L</span><span>lubega<span className="signal">.dev</span></span></a>
      <nav aria-label="Primary navigation">
        {links.map((link, index) => <a key={link} href={`#${link}`} className={active === link ? "active" : ""}><span>0{index + 1}</span>{link}</a>)}
      </nav>
      <a className="nav-status" href="mailto:muhdlubegasiraje@gmail.com"><i /> Available for ideas</a>
    </header>
  );
};

export default Navbar;
