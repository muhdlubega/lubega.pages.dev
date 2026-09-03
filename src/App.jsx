import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FiArrowUpRight, FiDownload, FiMail, FiX } from "react-icons/fi";
import BrainScene from "./components/BrainScene";
import Navbar from "./components/Navbar";
import { aiProjects, featuredProjects, frontendProjects } from "./data/portfolio";
import "./index.css";

const reveal = {
  initial: { opacity: 0, y: 34 }, whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 }, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
};

const ExternalLink = ({ href, children, className = "" }) => (
  <a href={href} target="_blank" rel="noreferrer" className={className}>{children}<FiArrowUpRight aria-hidden="true" /></a>
);

const SectionTitle = ({ index, eyebrow, title, copy }) => (
  <motion.div className="section-heading" {...reveal}>
    <div className="section-index"><span>{index}</span><i /></div>
    <p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}
  </motion.div>
);

const ProjectModal = ({ project, onClose }) => {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    const close = () => onClose();
    dialog.addEventListener("close", close);
    return () => dialog.removeEventListener("close", close);
  }, [onClose]);
  return (
    <dialog ref={dialogRef} className="project-modal" onClick={(event) => event.target === dialogRef.current && dialogRef.current.close()}>
      <div className="modal-panel">
        <button className="modal-close" onClick={() => dialogRef.current.close()} aria-label="Close project details"><FiX /></button>
        <p className="eyebrow">{project.eyebrow}</p><h3>{project.name}</h3><p className="modal-lead">{project.description}</p>
        <div className="modal-grid">
          <div><p className="micro-label">SYSTEM HIGHLIGHTS</p><ul className="feature-list">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div><p className="micro-label">ARCHITECTURE</p><ol className="architecture-list">{project.architecture.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol></div>
        </div>
        <div className="modal-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="modal-links">{project.links.map((link) => <ExternalLink key={link.url} href={link.url}>{link.label}</ExternalLink>)}</div>
      </div>
    </dialog>
  );
};

const FeaturedCard = ({ project, index, onOpen }) => (
  <motion.article className={`featured-card rank-${index + 1}`} style={{ "--accent": project.accent }} {...reveal}>
    <div className="featured-media">
      {project.mediaType === "video" ? <video src={project.media} autoPlay muted loop playsInline aria-label={`${project.name} interface preview`} /> : <img src={project.media} alt={`${project.name} interface preview`} />}
      <span className="project-rank">{project.rank}</span>
    </div>
    <div className="featured-content"><p className="micro-label">{project.eyebrow}</p><h3>{project.name}</h3><p className="project-tagline">{project.tagline}</p><p>{project.description}</p><button className="text-button" onClick={() => onOpen(project)}>Explore system <FaArrowRight /></button></div>
    <div className="podium-base"><span>{project.name.toUpperCase()}</span></div>
  </motion.article>
);

const ProjectCard = ({ project, compact = false }) => (
  <motion.article className={`project-card ${compact ? "compact" : ""}`} {...reveal}>
    <div className={`project-thumb ${project.accent ? `thumb-${project.accent}` : ""}`}>
      {project.image ? <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" /> : <div className="defentrium-mark">D<span>SYS</span></div>}
      <span className="corner-code">{project.name.slice(0, 2).toUpperCase()}</span>
    </div>
    <div className="project-card-body">{project.kicker && <p className="micro-label">{project.kicker}</p>}<h3>{project.name}</h3><p>{project.description}</p><div className="tag-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="card-links">{project.link && <ExternalLink href={project.link}>Live</ExternalLink>}{project.source && <ExternalLink href={project.source}>Code</ExternalLink>}</div></div>
  </motion.article>
);

const App = () => {
  const progressRef = useRef(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formState, setFormState] = useState("idle");

  useEffect(() => {
    const onScroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      progressRef.current = available > 0 ? Math.min(window.scrollY / available, 1) : 0;
      document.documentElement.style.setProperty("--scroll", progressRef.current);
    };
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault(); setFormState("sending");
    try {
      await emailjs.send(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, { from_name: form.name, from_email: form.email, to_name: "Lubega", to_email: "muhdlubegasiraje@gmail.com", message: form.message }, import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
      setFormState("sent"); setForm({ name: "", email: "", message: "" });
    } catch { setFormState("error"); }
  };

  return (
    <main>
      <BrainScene progressRef={progressRef} /><div className="noise" aria-hidden="true" /><Navbar />
      <section id="home" className="hero section-shell">
        <div className="hero-grid" aria-hidden="true" />
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <p className="eyebrow"><span className="live-dot" /> AI SYSTEMS / FULL-STACK ENGINEERING</p>
          <h1>Building software<br />that <em>thinks</em><br />and ships.</h1>
          <p className="hero-intro">I’m Muhammad Lubega—an AI-focused full-stack developer turning ambitious ideas into reliable, observable products.</p>
          <div className="hero-actions"><a className="primary-button" href="#projects">Explore projects <FaArrowRight /></a><a className="ghost-button" href="/MuhammadLubega.pdf" download>Résumé <FiDownload /></a></div>
        </motion.div>
        <div className="hero-sidecopy"><span>BASED IN MALAYSIA</span><span>SCROLL TO ENTER ↓</span></div>
        <div className="brain-label" aria-hidden="true"><span>NEURAL OBJECT / 01</span><i /></div>
      </section>

      <section id="about" className="about section-shell content-layer">
        <SectionTitle index="01" eyebrow="PROFILE / OPERATING PRINCIPLES" title={<>Engineer across the<br /><em>whole intelligence stack.</em></>} />
        <div className="about-layout">
          <motion.div className="about-statement" {...reveal}><p>I design the interface, build the service, shape the retrieval path and instrument what happens after deploy.</p><p className="muted">My work sits where product craft meets AI systems: autonomous agents, grounded RAG, workflow engines, document intelligence and the full-stack infrastructure that makes them useful.</p></motion.div>
          <motion.div className="capability-grid" {...reveal}>{[
            ["01", "AI engineering", "Agents, RAG, multimodal systems, evaluations and provider abstraction."], ["02", "Product frontend", "React, Next.js, TypeScript, interaction systems and accessible UI."], ["03", "Cloud backend", "Node.js, Hono, SQL, queues, storage, APIs and auth boundaries."], ["04", "Delivery", "Testing, security, observability, Docker and Cloudflare infrastructure."],
          ].map(([number, title, copy]) => <div className="capability" key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></div>)}</motion.div>
        </div>
        <motion.div className="experience-strip" {...reveal}><div><span className="metric">74%</span><p>smaller wallet bundle delivered</p></div><div><span className="metric">21</span><p>languages supported with i18n + RTL</p></div><div><span className="metric">80%+</span><p>unit-test coverage achieved</p></div><div><span className="metric">3×</span><p>Stars of the Month at Deriv</p></div></motion.div>
        <motion.div className="timeline" {...reveal}><p className="micro-label">SELECTED TRAJECTORY</p><div className="timeline-row"><span>2023—NOW</span><strong>Frontend Developer · Deriv</strong><p>Global payment systems, platform architecture and performance.</p></div><div className="timeline-row"><span>2024—2025</span><strong>Full-stack Developer · Mindhive Asia</strong><p>AI document and finance automation for enterprise clients.</p></div><div className="timeline-row"><span>2022—2025</span><strong>CS + AI · Harvard / Google Cloud</strong><p>Computer science, AI engineering and cloud infrastructure.</p></div></motion.div>
      </section>

      <section id="projects" className="projects section-shell content-layer">
        <SectionTitle index="02" eyebrow="SELECTED SYSTEMS / 2026" title={<>Work that goes<br /><em>beyond the demo.</em></>} copy="Three flagship systems, designed across the product, intelligence and infrastructure layers." />
        <div className="featured-podium">{featuredProjects.map((project, index) => <FeaturedCard key={project.id} project={project} index={index} onOpen={setSelectedProject} />)}</div>
        <div className="collection-heading"><div><p className="eyebrow">COLLECTION A</p><h2>Applied AI projects</h2></div><span>06 SYSTEMS</span></div>
        <div className="project-grid ai-grid">{aiProjects.map((project) => <ProjectCard key={project.name} project={project} />)}</div>
        <div className="collection-heading frontend-heading"><div><p className="eyebrow">COLLECTION B</p><h2>Frontend & full-stack</h2></div><span>08 BUILDS</span></div>
        <div className="project-grid frontend-grid">{frontendProjects.map((project) => <ProjectCard key={project.name} project={project} compact />)}</div>
      </section>

      <section id="contact" className="contact section-shell content-layer">
        <SectionTitle index="03" eyebrow="CONTACT / OPEN CHANNEL" title={<>Have a hard problem?<br /><em>Let’s make it real.</em></>} />
        <div className="contact-layout">
          <motion.div className="contact-copy" {...reveal}><p>Open to thoughtful collaborations across AI products, full-stack systems and ambitious frontend engineering.</p><a className="contact-email" href="mailto:muhdlubegasiraje@gmail.com">muhdlubegasiraje@gmail.com <FiArrowUpRight /></a><div className="socials"><ExternalLink href="https://github.com/muhdlubega"><FaGithub /> GitHub</ExternalLink><ExternalLink href="https://www.linkedin.com/in/muhammad-lubega/"><FaLinkedinIn /> LinkedIn</ExternalLink></div></motion.div>
          <motion.form className="contact-form" onSubmit={handleSubmit} {...reveal}><label><span>Name</span><input required name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label><label><span>Email</span><input required type="email" name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" /></label><label><span>Project signal</span><textarea required rows="5" name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="What are we building?" /></label><button className="primary-button" disabled={formState === "sending"}>{formState === "sending" ? "Transmitting…" : "Send transmission"} <FiMail /></button><p className={`form-status ${formState}`} role="status">{formState === "sent" && "Message received. I’ll be in touch."}{formState === "error" && "The direct channel failed—please use the email link."}</p></motion.form>
        </div>
        <footer><span>© {new Date().getFullYear()} MUHAMMAD LUBEGA</span><span>DESIGNED + ENGINEERED WITH INTENT</span><a href="#home">BACK TO SIGNAL ↑</a></footer>
      </section>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </main>
  );
};

export default App;
