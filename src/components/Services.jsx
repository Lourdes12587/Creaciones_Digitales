// Home services, split in two: web development and automations. Each block lists every service with its
// one-line hook; each service links to its detailed card (what it is, what it includes, how long it takes)
// on the service page of its category. Texts come from the site's own catalog; no prices here.
// The opening repeats the hero's design: thin vertical lines on the right and a large title aligned
// with the logo whose letters move away from the pointer and catch the light.
import { Fragment, useRef } from "react";
import useLetterField from "./useLetterField";

// Four balanced lines; the longest ("automatizaciones", "que trabajan solas") is about 10.6 em wide in Syne.
const TITLE = ["Webs que captan", "clientes y", "automatizaciones", "que trabajan solas"];
const LINES = [0, 1, 2, 3];

export default function Services({ navigate, schema, catalog, catalogPage, cardId }) {
  const headRef = useRef(null);
  const titleRef = useRef(null);
  useLetterField(headRef, titleRef);

  function open(event, path) {
    event.preventDefault();
    navigate(path);
  }

  return (
    <section id="servicios" aria-labelledby="servicios-title" className="services">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <div ref={headRef} className="services-head">
        <div className="services-lines" aria-hidden="true">
          {LINES.map((line) => (
            <span key={line} style={{ "--x": line, "--i": line }} />
          ))}
        </div>
        <h2 id="servicios-title" data-reveal className="services-title">
          <span className="sr-only">Webs que captan clientes y automatizaciones que trabajan solas</span>
          <span ref={titleRef} className="hero-field" aria-hidden="true">
            {TITLE.map((line) => (
              <span key={line} className="line">
                {line.split(" ").map((word, w) => (
                  <Fragment key={w}>
                    {w > 0 ? " " : null}
                    <span className="word">
                      {[...word].map((ch, c) => (
                        <span key={c} data-ch className="ch">
                          {ch}
                        </span>
                      ))}
                    </span>
                  </Fragment>
                ))}
              </span>
            ))}
          </span>
        </h2>
        <p data-reveal style={{ "--d": 1 }} className="services-intro">
          Diseño tu web y automatizo todo lo que pasa después del clic: cada consulta respondida, cada cita confirmada y cada cliente con seguimiento. Tú te dedicas a tu negocio; el sistema se ocupa del resto.
        </p>
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
