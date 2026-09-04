import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useMotionValueEvent, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { experiences } from "../constants";

// Completed milestones run oldest to newest, with the ongoing role last.
const journey = [1, 7, 2, 3, 4, 6, 8].map((id) => experiences.find((entry) => entry.id === id));

export default function ExperienceTimeline() {
  const track = useRef(null);
  const nodes = useRef([]);
  const [active, setActive] = useState(0);
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, { stiffness: 110, damping: 28, mass: 0.5 });
  const reducedMotion = useReducedMotion();
  const displayedProgress = reducedMotion ? progress : smoothProgress;
  const pointerTop = useTransform(displayedProgress, (value) => `${Math.max(0, Math.min(1, value)) * 100}%`);

  useMotionValueEvent(displayedProgress, "change", (value) => {
    let nearest = 0;
    nodes.current.forEach((position, index) => {
      if (Math.abs(position - value) < Math.abs(nodes.current[nearest] - value)) nearest = index;
    });
    setActive((previous) => previous === nearest ? previous : nearest);
  });

  useEffect(() => {
    const element = track.current;
    let frame = 0;
    const measure = () => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      if (!rect.height) return;
      nodes.current = Array.from(element.querySelectorAll(".experience-node")).map((node) => {
        const nodeRect = node.getBoundingClientRect();
        return (nodeRect.top + nodeRect.height / 2 - rect.top) / rect.height;
      });
      progress.set(Math.max(0, Math.min(1, (window.innerHeight * 0.5 - rect.top) / rect.height)));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(measure); };
    const observer = new ResizeObserver(schedule);
    observer.observe(element);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    measure();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [progress]);

  return (
    <section className="experience-timeline" aria-labelledby="journey-title">
      <p className="micro-label">EXPERIENCE / CONTINUOUS LEARNING</p>
      <h3 id="journey-title">My journey so far.</h3>
      <div className="journey-tree" ref={track}>
        <div className="journey-rail" aria-hidden="true">
          <motion.div className="journey-progress" style={{ height: pointerTop }} />
          <motion.div className="journey-pointer" style={{ top: pointerTop }}><span /></motion.div>
        </div>
        <ol className="experience-track">
          {journey.map((experience, index) => (
            <li key={experience.id} className={`experience-entry${active === index ? " is-focused" : ""}`}>
              <span className="experience-node" aria-hidden="true" />
              <span className="experience-date">{experience.date}</span>
              <article className="experience-card">
                <p className="micro-label">{experience.company_name}</p>
                <h4>{experience.title}</h4>
                <ul>{experience.points.map((point) => <li key={point}>{point.trim()}</li>)}</ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
