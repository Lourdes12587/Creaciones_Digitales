// Home hero: Barcelona as the storm opens into dawn ("clarear"). Copy on the dark left side;
// on the right, four vertical lines carry the services as nodes drawn with the logo's underscore.

const PHOTO = "/img/amanecer-barcelona";

const benefits = [
  "Desarrollo web desde 500 € en 3 días.",
  "Automatizaciones que trabajan solas.",
  "Con la Agenda automática tus clientes reservan, confirman y reciben el recordatorio sin que nadie llame.",
  "Con n8n conecto correo, hojas de cálculo, CRM y WhatsApp.",
];

// x: which of the four lines the node sits on; y: its height on that line.
const nodes = [
  { label: "Desarrollo web", href: "/servicios/desarrollo-web-ecommerce", tip: "Webs rápidas pensadas para que te escriban, listas en 3 días.", x: 0, y: "24%" },
  { label: "Agenda automática", href: "/servicios/agenda-automatica", tip: "Reserva online, confirmación al instante y recordatorio por WhatsApp.", x: 1, y: "52%" },
  { label: "Automatizaciones", href: "/servicios/automatizacion-a-medida", tip: "Conecto lo que ya usas para que trabaje solo.", x: 2, y: "34%" },
  { label: "Tienda online", href: "/servicios/desarrollo-web-ecommerce", tip: "Catálogo, carrito, pago y envíos.", x: 3, y: "62%" },
  { label: "Mantenimiento", href: "#servicios", tip: "Actualizaciones y mejoras cada mes, desde 49 € al mes.", x: 1, y: "78%" },
];

const LINES = [0, 1, 2, 3];

export default function Hero({ navigate, goToSection }) {
  function follow(event, href) {
    event.preventDefault();
    if (href.startsWith("/")) navigate(href);
    else goToSection(href);
  }

  return (
    <section id="inicio" aria-labelledby="hero-title" className="hero">
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
      <div className="hero-scrim" aria-hidden="true" />

      <div className="hero-lines" aria-hidden="true">
        {LINES.map((line) => (
          <span key={line} className="hero-line" style={{ "--x": line, "--i": line }} />
        ))}
      </div>

      <div className="hero-inner wrap">
        <div className="hero-copy">
          <h1 id="hero-title" className="hero-title">
            <span className="hero-slogan">
              Tu negocio, más claro<span className="caret" aria-hidden="true">_</span>
            </span>
            <span className="hero-sub">Webs y automatizaciones para negocios en Barcelona.</span>
          </h1>
          <p className="hero-price">Desde 390 €.</p>
          <ul className="hero-benefits">
            {benefits.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </div>

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
