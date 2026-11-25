// Home services as in the original page: two tabs (web development, automations) with every service as a
// card, in the current dark design. Each tab links to the page of its category. No prices here.
// The opening repeats the hero's design: thin vertical lines on the right and a large title aligned
// with the logo whose letters move away from the pointer and catch the light.
import { Fragment, useRef, useState } from "react";
import useLetterField from "./useLetterField";

// Four balanced lines; the longest ("automatizaciones", "que trabajan solas") is about 10.6 em wide in Syne.
const TITLE = ["Webs que captan", "clientes y", "automatizaciones", "que trabajan solas"];
const LINES = [0, 1, 2, 3];

export default function Services({ navigate, schema, catalog, catalogPage }) {
  const headRef = useRef(null);
  const titleRef = useRef(null);
  useLetterField(headRef, titleRef);
  const [activeId, setActiveId] = useState(catalog[0].id);

  // Arrow keys, Home and End move between the tabs (WAI-ARIA tabs pattern, automatic activation).
  function handleTabKey(event) {
    const index = catalog.findIndex((block) => block.id === activeId);
    const last = catalog.length - 1;
    const next = { ArrowRight: index === last ? 0 : index + 1, ArrowLeft: index === 0 ? last : index - 1, Home: 0, End: last }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    setActiveId(catalog[next].id);
    document.getElementById(`pestana-${catalog[next].id}`)?.focus();
  }

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

      {/* As in the original home page: two tabs, Desarrollo web and Automatizaciones, each showing every
          service as a card (hook, what it is, what it includes, how long it takes), in the current design. */}
      <div className="services-body section wrap">
        <div role="tablist" aria-label="Servicios" className="services-tabs" onKeyDown={handleTabKey}>
          {catalog.map((block) => (
            <button
              key={block.id}
              id={`pestana-${block.id}`}
              type="button"
              role="tab"
              aria-selected={block.id === activeId}
              aria-controls={`panel-${block.id}`}
              tabIndex={block.id === activeId ? 0 : -1}
              onClick={() => setActiveId(block.id)}
              className="services-tab"
            >
              {block.tab}
            </button>
          ))}
        </div>

        {catalog.map((block) => {
          const page = catalogPage[block.id];
          return (
            <div key={block.id} id={`panel-${block.id}`} role="tabpanel" aria-labelledby={`pestana-${block.id}`} hidden={block.id !== activeId} className="services-panel">
              <div className="services-panel-head">
                <p className="services-panel-intro">{block.intro}</p>
                <a href={page} onClick={(event) => open(event, page)} className="service-link">
                  {block.id === "web" ? "Todo sobre desarrollo web" : "Todo sobre automatizaciones"}{" "}
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
              <ul className="catalog-grid">
                {block.items.map((item) => (
                  <li key={item.name} className={`catalog-card${item.featured ? " is-featured" : ""}`}>
                    <h3 className="catalog-name">{item.name}</h3>
                    <p className="catalog-hook">{item.hook}</p>
                    <p className="catalog-text">{item.text}</p>
                    <p className="catalog-includes-title">Qué incluye</p>
                    <ul className="catalog-includes">
                      {item.includes.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                    <div className="catalog-foot">
                      <p className="catalog-time">Plazo: {item.time}.</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
