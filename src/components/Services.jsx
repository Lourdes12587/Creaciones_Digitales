// Home services: two small cards, web development and automations, each with its intro and a link that
// opens the page of its category, where every service is explained in detail. No prices here.
// The opening repeats the hero's design: thin vertical lines on the right and a large title aligned
// with the logo whose letters move away from the pointer and catch the light.
import { Fragment, useRef } from "react";
import useLetterField from "./useLetterField";

// Four balanced lines; the longest ("automatizaciones", "que trabajan solas") is about 10.6 em wide in Syne.
const TITLE = ["Webs que captan", "clientes y", "automatizaciones", "que trabajan solas"];
const LINES = [0, 1, 2, 3];

export default function Services({ navigate, schema, catalog, catalogPage }) {
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

              {/* Opens the category page, where every service is explained in detail. */}
              <a href={page} onClick={(event) => open(event, page)} className="service-link">
                {block.id === "web" ? "Ver los servicios de desarrollo web" : "Ver los servicios de automatización"}{" "}
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
