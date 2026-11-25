// Home hero: Barcelona as the storm opens into dawn ("clarear"). Copy on the dark left side;
// on the right, four vertical lines carry the services as nodes drawn with the logo's underscore.

import { Fragment, useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import useLetterField from "./useLetterField";

const PHOTO = "/img/amanecer-barcelona";

// Always two lines, so the slogan never runs into the vertical lines.
const SLOGAN = ["Tu negocio,", "más claro_"];

// x: which of the four lines the node sits on; y: its height on that line.
const nodes = [
  { label: "Desarrollo web", href: "/servicios/desarrollo-web-ecommerce", tip: "Webs rápidas pensadas para que te escriban, listas en 3 días.", x: 0, y: "24%" },
  { label: "Agenda automática", href: "/servicios/agenda-automatica", tip: "Reserva online, confirmación al instante y recordatorio por WhatsApp.", x: 1, y: "52%" },
  { label: "Automatizaciones", href: "/servicios/automatizacion-a-medida", tip: "Conecto lo que ya usas para que trabaje solo.", x: 2, y: "34%" },
  { label: "Tienda online", href: "/servicios/desarrollo-web-ecommerce", tip: "Catálogo, carrito, pago y envíos.", x: 3, y: "62%" },
  { label: "Mantenimiento", href: "#servicios", tip: "Actualizaciones y mejoras cada mes.", x: 1, y: "78%" },
];

const LINES = [0, 1, 2, 3];

export default function Hero({ navigate, goToSection }) {
  const sectionRef = useRef(null);
  const sloganRef = useRef(null);
  useLetterField(sectionRef, sloganRef);

  // Gentle scroll motion: the photo drifts down slower than the page and the copy fades as it leaves.
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const photoY = useTransform(smooth, [0, 1], ["0%", "18%"]);
  const photoScale = useTransform(smooth, [0, 1], [1, 1.08]);
  const copyY = useTransform(smooth, [0, 1], [0, -80]);
  const copyOpacity = useTransform(smooth, [0, 0.7], [1, 0]);

  function follow(event, href) {
    event.preventDefault();
    if (href.startsWith("/")) navigate(href);
    else goToSection(href);
  }

  return (
    <section ref={sectionRef} id="inicio" aria-labelledby="hero-title" className="hero">
      <motion.div className="hero-photo-wrap" style={reduce ? undefined : { y: photoY, scale: photoScale }}>
      <picture>
        <source media="(max-width: 640px)" type="image/avif" srcSet={`${PHOTO}-828.avif`} />
        <source media="(max-width: 640px)" type="image/webp" srcSet={`${PHOTO}-828.webp`} />
        <source type="image/avif" srcSet={`${PHOTO}-1024.avif 1024w, ${PHOTO}-1440.avif 1440w, ${PHOTO}-1920.avif 1920w`} sizes="100vw" />
        <source type="image/webp" srcSet={`${PHOTO}-1024.webp 1024w, ${PHOTO}-1440.webp 1440w, ${PHOTO}-1920.webp 1920w`} sizes="100vw" />
        <img
          src={`${PHOTO}-1440.webp`}
          alt="Barcelona al amanecer: una tormenta oscura se abre sobre la Sagrada Família, la Torre Glòries y Montjuïc"
          width="1440"
          height="804"
          fetchPriority="high"
          decoding="async"
          className="hero-photo"
        />
      </picture>
      </motion.div>
      <div className="hero-scrim" aria-hidden="true" />

      <div className="hero-lines" aria-hidden="true">
        {LINES.map((line) => (
          <span key={line} className="hero-line" style={{ "--x": line, "--i": line }} />
        ))}
      </div>

      <div className="hero-inner">
        <motion.div className="hero-copy" style={reduce ? undefined : { y: copyY, opacity: copyOpacity }}>
          <h1 id="hero-title" className="hero-title">
            <span className="sr-only">Tu negocio, más claro. </span>
            <span ref={sloganRef} className="hero-slogan hero-field" aria-hidden="true">
              {SLOGAN.map((line, i) => (
                <span key={line} className="line">
                  <span data-line style={{ "--i": i }}>
                    {line.split(" ").map((word, w) => (
                      <Fragment key={w}>
                        {w > 0 ? " " : null}
                        <span className="word">
                          {[...word].map((ch, c) => (
                            <span key={c} data-ch className={`ch${ch === "_" ? " caret" : ""}`}>
                              {ch}
                            </span>
                          ))}
                        </span>
                      </Fragment>
                    ))}
                  </span>
                </span>
              ))}
            </span>
          </h1>
        </motion.div>

        <nav aria-label="Servicios" className="hero-nodes">
          <ul>
            {nodes.map((node, index) => (
              <li key={node.label} className="hero-node" style={{ "--x": node.x, "--y": node.y, "--i": index }}>
                <a
                  href={node.href.startsWith("#") ? `/${node.href}` : node.href}
                  onClick={(event) => follow(event, node.href)}
                  aria-describedby={`nodo-${index}`}
                  className="hero-node-link"
                >
                  <span className="hero-node-mark" aria-hidden="true" />
                  <span className="hero-node-label">{node.label}</span>
                </a>
                <span id={`nodo-${index}`} role="tooltip" className="hero-node-tip">
                  {node.tip}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
