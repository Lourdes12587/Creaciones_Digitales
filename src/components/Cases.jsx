// "Webs hechas": one case at a time, moved with previous and next arrows: the project's name, its device
// preview (pattern from the 21st.dev "Portfolio Projects Showcase") and its story.
// Each case reads business -> problem -> what I did -> result. Results are not invented: until there is
// a real figure in project.outcome, the result row is left out.
// (project.result is a different thing: the "try it" hint used on the portfolio page.)
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Cases({ projects, navigate, Showcase }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const total = projects.length;
  const project = projects[active];
  const go = (step) => setActive((current) => (current + step + total) % total);

  const swap = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: 24, rotate: -1.5 },
        animate: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", stiffness: 140, damping: 20 } },
        exit: { opacity: 0, y: -16, transition: { duration: 0.2 } },
      };

  return (
    <section id="trabajos" aria-labelledby="trabajos-title" className="cases section wrap">
      <div className="cases-head">
        <h2 id="trabajos-title" data-reveal className="cases-title">
          Webs hechas
        </h2>
        <a
          href="/portfolio"
          onClick={(event) => {
            event.preventDefault();
            navigate("/portfolio");
          }}
          data-reveal
          style={{ "--d": 1 }}
          className="cases-all"
        >
          Ver el portfolio completo <span className="arrow" aria-hidden="true">→</span>
        </a>
      </div>

      <div className="cases-grid">
        {/* One case at a time, moved with the previous and next arrows. */}
        <div className="case-panel" role="region" aria-roledescription="carrusel" aria-label="Proyectos" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={project.name} {...swap}>
              <h3 className="case-name">
                {project.name} <span className="case-type">{project.webType}</span>
              </h3>
              <div className="case-preview">
                <Showcase project={project} eager={active === 0} active />
              </div>

              <dl className="case-story">
                <div>
                  <dt>Negocio</dt>
                  <dd>
                    {project.name}, {project.category.charAt(0).toLowerCase() + project.category.slice(1)}.
                  </dd>
                </div>
                <div>
                  <dt>Problema</dt>
                  <dd>{project.problem}</dd>
                </div>
                <div>
                  <dt>Qué hice</dt>
                  <dd>{project.summary}</dd>
                </div>
                {project.outcome && (
                  <div>
                    <dt>Resultado</dt>
                    <dd>{project.outcome}</dd>
                  </div>
                )}
              </dl>

              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn mt-8">
                  Abrir la web de {project.name} <span className="arrow" aria-hidden="true">→</span>
                </a>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="case-nav">
            <button type="button" onClick={() => go(-1)} aria-label="Caso anterior" className="case-arrow">
              <ArrowLeft size={22} strokeWidth={2.5} aria-hidden="true" />
            </button>
            <p className="case-count" aria-hidden="true">
              {active + 1} / {total}
            </p>
            <button type="button" onClick={() => go(1)} aria-label="Caso siguiente" className="case-arrow">
              <ArrowRight size={22} strokeWidth={2.5} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
