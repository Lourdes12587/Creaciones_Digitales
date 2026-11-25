// A full-screen photo scene between two sections, so scrolling the home page plays like a film:
// dusk, night, dawn. The scene stays pinned while you scroll through it; the photo slowly pushes in
// (a camera dolly), one short line rises and fades, and the edges dip into the neighbouring sections.
// With reduced motion it is a still photo with its line.
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

export default function Scene({ image, line, from = "#fdf2f8", to = "#fdf2f8", position = "center" }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  // 0 when the scene enters from below, 1 when it has left at the top.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.5 });

  const scale = useTransform(p, [0, 1], [1.25, 1]);
  const y = useTransform(p, [0, 1], ["-6%", "6%"]);
  const textOpacity = useTransform(p, [0.3, 0.42, 0.62, 0.74], [0, 1, 1, 0]);
  const textY = useTransform(p, [0.3, 0.42, 0.62, 0.74], [48, 0, 0, -48]);
  const fadeIn = useTransform(p, [0.18, 0.34], [1, 0]);
  const fadeOut = useTransform(p, [0.7, 0.86], [0, 1]);

  return (
    <section ref={ref} className="scene" aria-label={line}>
      <div className="scene-stage">
        <motion.div className="scene-photo" style={reduce ? undefined : { scale, y }}>
          <picture>
            <source type="image/webp" srcSet={`${image}-1024.webp 1024w, ${image}-1920.webp 1920w`} sizes="100vw" />
            <img src={`${image}-1920.webp`} alt="" width="1920" height="1280" loading="lazy" decoding="async" style={{ objectPosition: position }} />
          </picture>
        </motion.div>
        <div className="scene-shade" aria-hidden="true" />
        <motion.p className="scene-line wrap" style={reduce ? undefined : { opacity: textOpacity, y: textY }}>
          {line}
        </motion.p>
        {/* Dip from and into the colour of the sections around the scene, like a cut in a film. */}
        <motion.div className="scene-dip" style={{ background: from, opacity: reduce ? 0 : fadeIn }} aria-hidden="true" />
        <motion.div className="scene-dip" style={{ background: to, opacity: reduce ? 0 : fadeOut }} aria-hidden="true" />
      </div>
    </section>
  );
}
