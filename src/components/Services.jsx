// Home services, split in two: web development and automations. Each block lists every service with its
// one-line hook; each service links to its detailed card (what it is, what it includes, how long it takes)
// on the service page of its category. Texts come from the site's own catalog; no prices here.
// The section opens like a film shot: the night balcony photo stays pinned while you scroll, the camera
// pushes in slowly and the title rises over it; then the two blocks follow on the light ground.
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

const PHOTO = "/img/noche-balcon";

export default function Services({ navigate, schema, catalog, catalogPage, cardId }) {
  const filmRef = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: filmRef, offset: ["start end", "end start"] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.5 });
  const scale = useTransform(p, [0, 1], [1.3, 1]);
  const y = useTransform(p, [0, 1], ["-5%", "5%"]);
  const copyOpacity = useTransform(p, [0.28, 0.4, 0.66, 0.78], [0, 1, 1, 0]);
  const copyY = useTransform(p, [0.28, 0.4, 0.66, 0.78], [60, 0, 0, -60]);
  const dipOut = useTransform(p, [0.7, 0.86], [0, 1]);

  function open(event, path) {
    event.preventDefault();
    navigate(path);
  }

  return (
    <section id="servicios" aria-labelledby="servicios-title" className="services">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <div ref={filmRef} className="services-film">
        <div className="services-stage">
          <motion.div className="services-photo" style={reduce ? undefined : { scale, y }}>
            <picture>
              <source media="(max-width: 640px)" srcSet={`${PHOTO}-828.webp`} type="image/webp" />
              <source srcSet={`${PHOTO}-1024.webp 1024w, ${PHOTO}-1920.webp 1920w`} sizes="100vw" type="image/webp" />
              <img
                src={`${PHOTO}-1920.webp`}
                alt="Una mujer mira Barcelona de noche desde un balcón, con la Sagrada Família y la Torre Glòries iluminadas"
                width="1920"
                height="1072"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </motion.div>
          <div className="services-shade" aria-hidden="true" />
          <motion.div className="services-copy wrap" style={reduce ? undefined : { opacity: copyOpacity, y: copyY }}>
            <h2 id="servicios-title" className="services-title">
              Webs que captan clientes y automatizaciones que trabajan solas
            </h2>
            <p className="services-intro">
              Diseño tu web y automatizo todo lo que pasa después del clic: cada consulta respondida, cada cita confirmada y cada cliente con seguimiento. Tú te dedicas a tu negocio; el sistema se ocupa del resto.
            </p>
          </motion.div>
          {/* The shot dips into the black ground of the service blocks, like a cut. */}
          <motion.div className="scene-dip" style={{ background: "var(--color-night)", opacity: reduce ? 0 : dipOut }} aria-hidden="true" />
        </div>
      </div>

      <div className="services-body section wrap">
      <div className="services-split">
        {catalog.map((block, blockIndex) => {
          const page = catalogPage[block.id];
          return (
            <article key={block.id} data-reveal style={{ "--d": blockIndex }} aria-labelledby={`bloque-${block.id}`} className={`service-block${block.id === "web" ? " is-featured" : ""}`}>
              <span className="service-mark" aria-hidden="true" />
              <h3 id={`bloque-${block.id}`} className="service-block-title">
                {block.tab}
              </h3>
              <p className="service-block-intro">{block.intro}</p>

              <ul className="service-list">
                {block.items.map((item) => {
                  const href = `${page}#${cardId(item.name)}`;
                  return (
                    <li key={item.name}>
                      <a href={href} onClick={(event) => open(event, href)} className="service-row">
                        <span className="service-row-name">{item.name}</span>
                        <span className="service-row-hook">{item.hook}</span>
                        <span className="service-row-arrow" aria-hidden="true">
                          →
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <a href={`${page}#catalogo`} onClick={(event) => open(event, `${page}#catalogo`)} className="service-link">
                {block.id === "web" ? "Ver en detalle todas las webs" : "Ver en detalle todas las automatizaciones"}{" "}
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </article>
          );
        })}
      </div>
      </div>
    </section>
  );
}
