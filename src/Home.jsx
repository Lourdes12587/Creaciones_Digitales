// The home page as one continuous shot: a day in the Barcelona sky.
// Dawn breaking through the storm (opening), the city at night (services),
// a reel of real projects, the sky warming up step by step (process) and sunset on the beach (contact).
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { Instagram } from "lucide-react";
import { WhatsAppIcon } from "./icons";
import amanecer from "./assets/escenas/amanecer.webp";
import noche from "./assets/escenas/noche.webp";
import playa from "./assets/escenas/playa.webp";
import "./home.css";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

// Scroll progress through a section, eased with a spring so the picture glides like a camera move.
function useSceneProgress(ref, offset = ["start start", "end end"]) {
  const { scrollYProgress } = useScroll({ target: ref, offset });
  return useSpring(scrollYProgress, { stiffness: 160, damping: 32, mass: 0.35 });
}

function internalLink(navigate, path) {
  return (event) => {
    event.preventDefault();
    navigate(path);
  };
}

export default function Home({ logo, services, projects, whatsappUrl, email, phone, instagramUrl, navigate, schema }) {
  const reduce = useReducedMotion();
  return (
    <div className="cine">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <Opening logo={logo} reduce={reduce} />
      <NightServices services={services} navigate={navigate} reduce={reduce} />
      <Reel projects={projects} navigate={navigate} reduce={reduce} />
      <Process reduce={reduce} />
      <Sunset whatsappUrl={whatsappUrl} email={email} phone={phone} instagramUrl={instagramUrl} reduce={reduce} />
    </div>
  );
}

/* ---------- 1. Opening: the storm breaks over the city ---------- */

function Opening({ logo, reduce }) {
  const ref = useRef(null);
  const p = useSceneProgress(ref);
  // The camera pushes into the gap in the clouds, the title drifts up, then a dip to dark.
  const scale = useTransform(p, [0, 1], [1, 1.55]);
  const brightness = useTransform(p, [0, 0.6], [1, 1.35]);
  const filter = useTransform(brightness, (b) => `brightness(${b})`);
  const titleY = useTransform(p, [0, 0.55], [0, -140]);
  const titleOpacity = useTransform(p, [0.04, 0.4], [1, 0]);
  const dip = useTransform(p, [0.62, 0.97], [0, 1]);

  return (
    <section ref={ref} aria-labelledby="inicio-title" className="scene scene-opening">
      <div className="stage">
        <motion.div className="plate" style={reduce ? undefined : { scale, filter }}>
          <div className="drift">
            <img src={amanecer} alt="" width="2400" height="1340" fetchPriority="high" className="plate-img opening-img" />
          </div>
          <div className="light-leak" aria-hidden="true" />
        </motion.div>
        <div className="shade shade-opening" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />

        <motion.div className="opening-title wrap" style={reduce ? undefined : { y: titleY, opacity: titleOpacity }}>
          <h1 id="inicio-title">
            <span className="sr-only">Clarea. Tu negocio, más claro.</span>
            <span className="logo-wipe" aria-hidden="true">
              <img src={logo} alt="" width="1367" height="324" className="opening-logo" />
            </span>
            <span className="opening-phrase" aria-hidden="true">
              <span className="mask"><span className="rise" style={{ "--i": 0 }}>Tu negocio,</span></span>{" "}
              <span className="mask"><span className="rise" style={{ "--i": 1 }}>más claro.</span></span>
            </span>
          </h1>
          <p className="opening-sub mask">
            <span className="rise" style={{ "--i": 2 }}>Webs y automatizaciones para negocios de Barcelona.</span>
          </p>
        </motion.div>

        <div className="letterbox top" aria-hidden="true" />
        <div className="letterbox bottom" aria-hidden="true" />
        <motion.div className="dip" style={reduce ? { opacity: 0 } : { opacity: dip }} aria-hidden="true" />
      </div>
    </section>
  );
}

/* ---------- 2. Services: the city at night ---------- */

function NightServices({ services, navigate, reduce }) {
  const ref = useRef(null);
  const p = useSceneProgress(ref);
  const scale = useTransform(p, [0, 1], [1.28, 1.04]);
  const x = useTransform(p, [0, 1], ["-3%", "2%"]);
  const dip = useTransform(p, [0, 0.07, 0.93, 1], [1, 0, 0, 1]);
  const introOpacity = useTransform(p, [0.04, 0.1, 0.22, 0.28], [0, 1, 1, 0]);
  const introY = useTransform(p, [0.04, 0.1, 0.22, 0.28], [30, 0, 0, -30]);
  const progress = useTransform(p, [0.28, 0.92], [0, 1]);

  return (
    <section ref={ref} id="servicios" aria-labelledby="servicios-title" className={`scene scene-night${reduce ? " is-static" : ""}`}>
      <div className="stage">
        <motion.div className="plate" style={reduce ? undefined : { scale, x }}>
          <img src={noche} alt="" width="2400" height="1340" loading="lazy" className="plate-img night-img" />
        </motion.div>
        <div className="shade shade-night" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />

        <div className="captions wrap">
          <motion.div className="caption caption-intro" style={reduce ? undefined : { opacity: introOpacity, y: introY }}>
            <h2 id="servicios-title" className="display">Mientras descansas, tu negocio sigue atendiendo.</h2>
            <p className="caption-text">Tres cosas que hago para que eso pase.</p>
          </motion.div>

          {services.map((service, i) => (
            <ServiceCaption key={service.id} service={service} index={i} count={services.length} p={p} navigate={navigate} reduce={reduce} />
          ))}

          <div className="caption-track" aria-hidden="true">
            <motion.span style={reduce ? undefined : { scaleX: progress }} />
          </div>
        </div>
        <motion.div className="dip" style={reduce ? { opacity: 0 } : { opacity: dip }} aria-hidden="true" />
      </div>
    </section>
  );
}

function ServiceCaption({ service, index, count, p, navigate, reduce }) {
  const span = 0.64 / count;
  const start = 0.28 + index * span;
  const last = index === count - 1;
  const stops = [start, start + span * 0.2, start + span * 0.8, start + span];
  const opacity = useTransform(p, stops, [0, 1, 1, last ? 1 : 0]);
  const y = useTransform(p, stops, [40, 0, 0, last ? 0 : -40]);
  const path = `/servicios/${service.slug}`;

  return (
    <motion.article className="caption" style={reduce ? undefined : { opacity, y }}>
      <h3 className="display caption-title">{service.title}</h3>
      <p className="caption-text">{service.promise}.</p>
      <p className="caption-meta">
        Lista en {service.timeline}.{" "}
        <a href={path} onClick={internalLink(navigate, path)} className="cine-link">
          Ver {service.title.toLowerCase()}
        </a>
      </p>
    </motion.article>
  );
}

/* ---------- 3. Work: a reel of frames moving sideways ---------- */

function Reel({ projects, navigate, reduce }) {
  const ref = useRef(null);
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);
  const p = useSceneProgress(ref);
  const x = useTransform(p, [0.04, 0.96], [0, -distance]);

  useIsoLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (track) setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const shown = projects.filter((project) => project.url);

  return (
    <section
      ref={ref}
      id="trabajos"
      aria-labelledby="trabajos-title"
      className={`scene scene-reel${reduce ? " is-static" : ""}`}
      style={reduce ? undefined : { height: `calc(100svh + ${distance}px)` }}
    >
      <div className="stage reel-stage">
        <motion.div ref={trackRef} className="reel-track" style={reduce ? undefined : { x }}>
          <div className="reel-intro">
            <h2 id="trabajos-title" className="display">Trabajos</h2>
            <p className="caption-text">Webs reales, publicadas y funcionando. Ábrelas y pruébalas.</p>
          </div>

          {shown.map((project) => (
            <article key={project.name} className="frame">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="frame-shot">
                <img src={project.image} alt={`Web de ${project.name}`} loading="lazy" />
              </a>
              <div className="frame-caption">
                <h3>{project.name}</h3>
                <p>{project.title}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="cine-link">
                  Abrir la web
                </a>
              </div>
            </article>
          ))}

          <div className="reel-end">
            <p className="display">Cada proyecto, con sus pantallas y lo que resuelve.</p>
            <a href="/portfolio" onClick={internalLink(navigate, "/portfolio")} className="cine-btn">
              Ver todos los trabajos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- 4. Process: the sky warms up with each step ---------- */

const steps = [
  ["Me cuentas cómo trabajas.", "Una llamada de 30 minutos, gratis. Te llevas las tres tareas que más compensa resolver."],
  ["Te envío un precio cerrado.", "En 48 horas, con lo que incluye y cuándo estará listo."],
  ["Lo construyo y lo pruebas.", "Recibes una versión de prueba antes del segundo pago."],
  ["Funciona solo.", "Y lo vigilo durante el primer mes, con 30 días de soporte incluidos."],
];

function Process({ reduce }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const background = useTransform(scrollYProgress, [0, 0.3, 0.55, 0.8, 1], ["#161a26", "#1e1b3a", "#5a2a4a", "#c8566a", "#e9956c"]);
  const color = useTransform(scrollYProgress, [0, 0.78, 0.82], ["#f4e9dc", "#f4e9dc", "#2a1418"]);

  return (
    <motion.section ref={ref} id="proceso" aria-labelledby="proceso-title" className="scene-process wrap" style={reduce ? { background: "#1e1b3a", color: "#f4e9dc" } : { background, color }}>
      <h2 id="proceso-title" className="process-head">
        Cómo trabajo
      </h2>
      <ol className="steps">
        {steps.map(([title, text], i) => (
          <motion.li
            key={title}
            className="step"
            initial={reduce ? false : { opacity: 0.12, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.7, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="step-n" aria-hidden="true">{i + 1}</span>
            <div>
              <h3 className="display">{title}</h3>
              <p>{text}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </motion.section>
  );
}

/* ---------- 5. Contact: sunset on the beach ---------- */

function Sunset({ whatsappUrl, email, phone, instagramUrl, reduce }) {
  const ref = useRef(null);
  const p = useSceneProgress(ref, ["start end", "end end"]);
  const scale = useTransform(p, [0, 1], [1.35, 1]);
  const textY = useTransform(p, [0.4, 1], [60, 0]);
  const textOpacity = useTransform(p, [0.45, 0.9], [0, 1]);

  return (
    <section ref={ref} id="contacto" aria-labelledby="contacto-title" className="scene-sunset">
      <motion.div className="plate" style={reduce ? undefined : { scale }}>
        <img src={playa} alt="" width="2400" height="1340" loading="lazy" className="plate-img sunset-img" />
      </motion.div>
      <div className="shade shade-sunset" aria-hidden="true" />
      <div className="sunset-blend" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <motion.div className="sunset-copy wrap" style={reduce ? undefined : { y: textY, opacity: textOpacity }}>
        <h2 id="contacto-title" className="display">Cuéntame qué te quita tiempo.</h2>
        <p className="caption-text">Te respondo el mismo día. La primera conversación es gratis y sin compromiso.</p>
        <div className="sunset-actions">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="cine-btn cine-btn-wa">
            <WhatsAppIcon size={22} />
            Escribir por WhatsApp
          </a>
          <a href={`mailto:${email}`} className="cine-link">
            O por correo
          </a>
        </div>
        <p className="sunset-meta">
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="cine-link">{phone}</a>
          <span>Barcelona</span>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="cine-link inline-flex items-center gap-2">
            <Instagram size={16} strokeWidth={2} aria-hidden="true" />
            @holaclarea
          </a>
        </p>
      </motion.div>
    </section>
  );
}
