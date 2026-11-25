// Home services: three highlighted services, large, and a compact row of everything else.
// Texts and delivery times are the ones already published on the site. No prices here, as before.

const highlights = [
  {
    hook: "Que reserven sin llamarte",
    name: "Web con reservas.",
    text: "Para clínicas, centros de estética, restaurantes, alojamientos o actividades. Tus clientes eligen día y hora, y la reserva queda confirmada al instante.",
    includes: ["Calendario de reservas integrado en tu web", "Confirmación automática por WhatsApp o correo", "Recordatorio antes de cada cita", "Gestión de cancelaciones y huecos libres"],
    terms: "Lista en 5 días.",
    page: "/servicios/agenda-automatica",
    linkLabel: "Ver la web con reservas",
  },
  {
    hook: "Tu negocio, listo para recibir clientes",
    name: "Web que capta clientes.",
    text: "Una web corporativa con tus servicios, quién eres y una forma clara de contactarte. Cada consulta te llega al momento por correo o WhatsApp.",
    includes: ["Hasta 5 páginas con diseño y textos adaptados a tu negocio", "Formulario y WhatsApp conectados", "Preparada para Google desde el primer día", "Formación para actualizarla tú"],
    terms: "Lista en 3 días.",
    page: "/servicios/desarrollo-web-ecommerce",
    linkLabel: "Ver desarrollo web",
    featured: true,
  },
  {
    hook: "Si lo repites, se puede automatizar",
    name: "Agenda automática y automatización a medida.",
    text: "Conecto lo que ya usas (WhatsApp, correo, hojas de cálculo, agenda, CRM) para que trabaje solo.",
    includes: ["Análisis del proceso actual", "Automatización conectada a tus herramientas", "Pruebas antes de ponerlo en marcha", "Documentación para tu equipo"],
    terms: "La agenda, en 5 días; a medida, en 1–2 semanas.",
    page: "/servicios/automatizacion-a-medida",
    linkLabel: "Ver automatización a medida",
  },
];

const alsoMake = ["Landing page", "Tienda online", "Portafolio", "Rediseño de web", "Blog y SEO", "Aplicación web", "Mantenimiento mensual"];

export default function Services({ navigate, schema }) {
  function open(event, path) {
    event.preventDefault();
    navigate(path);
  }

  return (
    <section id="servicios" aria-labelledby="servicios-title" className="services section wrap">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <h2 id="servicios-title" data-reveal className="services-title">
        Webs que captan clientes y automatizaciones que trabajan solas
      </h2>
      <p data-reveal style={{ "--d": 1 }} className="services-intro">
        Diseño tu web y automatizo todo lo que pasa después del clic: cada consulta respondida, cada cita confirmada y cada cliente con seguimiento. Tú te dedicas a tu negocio; el sistema se ocupa del resto.
      </p>

      <ul className="services-grid">
        {highlights.map((item, index) => (
          <li key={item.hook} data-reveal style={{ "--d": index }} className={`service${item.featured ? " is-featured" : ""}`}>
            <span className="service-mark" aria-hidden="true" />
            <h3 className="service-hook">{item.hook}</h3>
            <p className="service-text">
              <strong>{item.name}</strong> {item.text}
            </p>
            <p className="service-includes-title">Qué incluye</p>
            <ul className="service-includes">
              {item.includes.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <div className="service-foot">
              <p className="service-terms">{item.terms}</p>
              <a href={item.page} onClick={(event) => open(event, item.page)} className="service-link">
                {item.linkLabel} <span className="arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </li>
        ))}
      </ul>

      <div data-reveal className="services-also">
        <p className="services-also-title">También hago:</p>
        <ul>
          {alsoMake.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
