import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  Check,
  Code2,
  DatabaseZap,
  Globe2,
  Instagram,
  Menu,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Repeat2,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import logoCreaciones from "./assets/logo-creaciones-digitales.webp";
import logoNavbar from "./assets/logo-creaciones-navbar.webp";
import portfolioBlueIsland from "./assets/portfolio-blue-island.png";
import portfolioYouEyes from "./assets/portfolio-you-eyes.png";
import portfolioDogDreams from "./assets/portfolio-dogdreams.png";
import portfolioRestaurant from "./assets/portfolio-restaurante-ecommerce.png";
import portfolioDelux from "./assets/portfolio-delux.png";

const N8N_WEBHOOK_URL = "https://n8n.creaciones-digitales.com/webhook/formularion8n";
const WHATSAPP_URL = "https://wa.me/34697955919?text=" + encodeURIComponent("Hola, vengo de la web y quiero información.");

const services = [
  {
    id: "web-profesional",
    icon: Globe2,
    title: "Desarrollo web y e-commerce",
    audience: "Negocios que hoy dependen de Instagram o del boca a boca",
    promise: "Una web clara y rápida, pensada para que te escriban",
    items: [
      "Hasta 5 páginas con diseño y textos adaptados",
      "Formulario y WhatsApp conectados: cada consulta te llega al momento",
      "Preparada para Google desde el primer día",
      "Formación para actualizarla sin depender de mí",
    ],
    timeline: "3 días",
    price: "Desde 550 €",
    offer: "Oferta de lanzamiento",
    cta: "Quiero mi web",
  },
  {
    id: "agenda-automatica",
    icon: CalendarCheck,
    title: "Agenda automática",
    audience: "Clínicas, centros de estética, veterinarias y otros negocios con cita previa",
    promise: "Tus clientes reservan, confirman y reciben el recordatorio sin que nadie llame",
    items: [
      "Confirmación al instante al reservar",
      "Recordatorio por WhatsApp 24 horas antes",
      "Lista de espera para cubrir cancelaciones",
      "Encuesta tras la cita y petición de reseña en Google",
    ],
    timeline: "5 días",
    price: "Desde 390 €",
    offer: "Oferta de lanzamiento",
    cta: "Quiero la agenda",
    featured: "Recomendado para empezar",
  },
  {
    id: "automatizaciones",
    icon: Repeat2,
    title: "Automatización a medida",
    audience: "Equipos que copian datos entre herramientas o repiten los mismos correos",
    promise: "Convierto la tarea que más horas os quita en un flujo que funciona solo",
    items: [
      "Análisis de cómo trabajáis hoy",
      "Conexión entre lo que ya usáis: correo, hojas de cálculo, CRM, WhatsApp",
      "Pruebas y documentación",
      "30 días de soporte incluidos",
    ],
    timeline: "1 o 2 semanas",
    price: "Desde 390 €",
    offer: "Oferta de lanzamiento",
    cta: "Quiero automatizar",
  },
];

const extraServices = [
  {
    id: "app-web",
    icon: Code2,
    title: "¿Necesitas algo más grande?",
    text: "Desarrollo aplicaciones a medida: paneles de gestión, portales de clientes y herramientas internas.",
    cta: "Cuéntame tu caso",
  },
  {
    id: "mantenimiento",
    icon: ShieldCheck,
    title: "Mantenimiento mensual",
    text: "Actualizaciones, vigilancia de tus automatizaciones, 2 horas de mejoras y respuesta en 24–48 horas. Desde 49 € al mes.",
    cta: "Me interesa",
  },
];

const process = [
  {
    title: "Auditoría gratuita",
    duration: "30 minutos",
    work: "Me cuentas cómo trabajas hoy y localizo dónde se te van el tiempo y los clientes",
    result: "Las tres tareas que más compensa automatizar",
  },
  {
    title: "Propuesta cerrada",
    duration: "En 48 horas",
    work: "Te envío qué voy a construir, en qué plazo y a qué precio",
    result: "Un presupuesto fijo, sin sorpresas",
  },
  {
    title: "Construcción",
    duration: "1 o 2 semanas",
    work: "Lo desarrollo y te enseño avances para corregir a tiempo",
    result: "Una versión que puedes probar antes del segundo pago",
  },
  {
    title: "Entrega y soporte",
    duration: "30 días",
    work: "Te lo dejo funcionando y lo vigilo durante el primer mes",
    result: "Instrucciones claras y soporte incluido",
  },
];

const portfolioProjects = [
  {
    title: "Tienda online con carrito, pasarela de pago y envíos",
    category: "Tienda online (e-commerce)",
    // Pending: public store URL, admin demo URL and the gateway test card.
    url: "",
    urlLabel: "Ver la tienda",
    adminUrl: "",
    adminLabel: "Entrar al panel de prueba",
    testCard: "",
    summary:
      "E-commerce de moda con todo el recorrido de compra y un panel de administración para gestionar la tienda sin depender de nadie.",
    tags: [
      "Catálogo por categorías",
      "Buscador de productos",
      "Lista de deseos",
      "Cuenta de cliente",
      "Carrito y pago en modo de prueba",
    ],
    result: "Haz una compra de principio a fin. El pago está en modo de prueba: no se cobra nada.",
    image: portfolioDelux,
  },
  {
    title: "Reservas de barco que no se pierden entre mensajes",
    category: "Chárter náutico",
    url: "https://blue-island-boat.vercel.app/",
    summary:
      "Web de presentación con solicitud de presupuesto y seguimiento automático de quien no responde.",
    tags: [
      "Solicitud de presupuesto conectada a WhatsApp y Gmail",
      "Seguimiento automático de interesados",
      "Recuperación automática de reservas pendientes",
      "Respuestas rápidas sobre disponibilidad y precios",
      "Presentación premium de embarcaciones y rutas",
    ],
    result: "Configura una salida y pide presupuesto.",
    image: portfolioBlueIsland,
  },
  {
    title: "Web de noticias a medida, rápida y fácil de ampliar",
    category: "Medio digital",
    url: "https://you-eyes-net.vercel.app/",
    summary:
      "Portal desarrollado en React, preparado para sumar secciones y categorías sin rehacer el sitio.",
    tags: [
      "Desarrollo web profesional, no una plantilla genérica",
      "Diseño adaptado al estilo y objetivo del proyecto",
      "Estructura escalable para agregar secciones, categorías y nuevas páginas",
      "Mejor experiencia de usuario que una web hecha solo con IA sin criterio técnico",
    ],
    result: "Navega por secciones y abre una noticia.",
    image: portfolioYouEyes,
  },
  {
    title: "Citas confirmadas sin llamar a nadie",
    category: "Clínica veterinaria",
    url: "https://veterinaria-dd.vercel.app/",
    summary:
      "Reserva online con recordatorio automático y reagenda de los huecos libres.",
    tags: [
      "Recordatorios 24h antes por WhatsApp",
      "Formulario previo conectado al CRM",
      "Reagenda automática para huecos libres",
      "Panel interno para seguimiento comercial",
    ],
    result: "Reserva una visita de prueba.",
    image: portfolioDogDreams,
  },
  {
    title: "Carta digital con pedido online para restaurantes",
    category: "Restaurante",
    url: "https://zappi-app.vercel.app/",
    summary:
      "Tienda pensada para móvil: el cliente elige por categorías, añade al carrito y completa su pedido en pocos pasos.",
    tags: [
      "Catálogo por categorías",
      "Carrito de compra",
      "Proceso de pedido",
      "Gestión de productos",
      "Diseño adaptado a la marca",
    ],
    result: "Recorre la carta, añade productos al carrito y llega hasta el final del pedido.",
    image: portfolioRestaurant,
  },
];

export const PAGE_TITLES = {
  "/": "Webs y automatizaciones en Barcelona | Creaciones Digitales",
  "/portfolio": "Portfolio de webs y tiendas online | Creaciones Digitales",
  "/privacidad": "Política de privacidad | Creaciones Digitales",
  404: "Página no encontrada | Creaciones Digitales",
};

export function normalizePath(pathname) {
  return pathname.replace(/\/+$/, "") || "/";
}

function getCurrentRoute() {
  return normalizePath(window.location.pathname);
}

function App({ initialRoute }) {
  const rootRef = useRef(null);
  const [route, setRoute] = useState(() => initialRoute ?? getCurrentRoute());
  const [selectedService, setSelectedService] = useState("");

  function navigate(path) {
    window.history.pushState({}, "", path);
    setRoute(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    document.title = PAGE_TITLES[route] || PAGE_TITLES[404];
  }, [route]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const ctx = gsap.context(() => {
      const revealTargets = gsap.utils.toArray("[data-reveal]");
      if (!revealTargets.length) return;

      gsap.from(revealTargets, {
        y: 28,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
      });
    }, rootRef);

    return () => ctx.revert();
  }, [route]);

  useEffect(() => {
    function handlePopState() {
      setRoute(getCurrentRoute());
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div ref={rootRef} className="min-h-[100dvh] overflow-hidden bg-canvas text-ink">
      <SkipLink />
      <Nav route={route} navigate={navigate} />
      <main id="contenido">
        {route === "/portfolio" ? (
          <PortfolioPage />
        ) : route === "/privacidad" ? (
          <PrivacyPage navigate={navigate} />
        ) : route !== "/" ? (
          <NotFoundPage navigate={navigate} />
        ) : (
          <>
            <Hero navigate={navigate} />
            <Services onChooseService={setSelectedService} />
            <Process />
            <Contact selectedService={selectedService} onServiceChange={setSelectedService} navigate={navigate} />
          </>
        )}
      </main>
      <Footer navigate={navigate} />
      <WhatsAppButton />
    </div>
  );
}

function WhatsAppIcon({ size = 24, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbeme por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_18px_40px_-12px_rgba(37,211,102,0.7)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1ebe5b] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}

function SkipLink() {
  return (
    <a
      href="#contenido"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-40 focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink focus:shadow-panel"
    >
      Saltar al contenido
    </a>
  );
}

function Nav({ route, navigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ["Servicios", "#servicios"],
    ["Portfolio", "/portfolio"],
    ["Proceso", "#proceso"],
    ["Contacto", "#contacto"],
  ];

  function handleNav(event, href) {
    setMenuOpen(false);

    if (href === "/portfolio") {
      event.preventDefault();
      navigate("/portfolio");
      return;
    }

    if (route !== "/") {
      event.preventDefault();
      navigate("/");
      window.setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    }
  }

  function isActive(href) {
    return href === "/portfolio" && route === "/portfolio";
  }

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-ink/86 text-white backdrop-blur-xl">
      <nav aria-label="Principal" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            setMenuOpen(false);
            navigate("/");
          }}
          aria-label="Creaciones Digitales, inicio"
          className="flex items-center gap-3 rounded-xl transition duration-300 hover:opacity-90"
        >
          <span className="flex h-11 w-16 shrink-0 overflow-hidden rounded-xl bg-[#d9d8d5] p-1 ring-1 ring-white/15">
            <img src={logoNavbar} alt="Creaciones Digitales" width="56" height="45" className="h-full w-full object-contain" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-[0.8rem] font-black uppercase tracking-[0.16em] text-white">Creaciones</span>
            <span className="mt-1 block text-[0.66rem] font-bold uppercase tracking-[0.3em] text-soft">Digitales</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={(event) => handleNav(event, href)}
              aria-current={isActive(href) ? "page" : undefined}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition duration-300 hover:bg-white/10 hover:text-white ${
                isActive(href) ? "bg-white/10 text-white" : "text-slate-300"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            onClick={(event) => handleNav(event, "#contacto")}
            className="hidden rounded-xl bg-electric px-5 py-2.5 text-sm font-bold text-white shadow-[0_12px_30px_-12px_rgba(99,102,241,0.9)] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink active:scale-[0.98] sm:inline-flex"
          >
            Presupuesto
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 text-white transition hover:bg-white/10 lg:hidden"
          >
            {menuOpen ? <X size={20} strokeWidth={1.9} /> : <Menu size={20} strokeWidth={1.9} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="menu-movil" className="border-t border-white/10 px-4 pb-5 pt-2 sm:px-6 lg:hidden">
          <div className="grid gap-1">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={(event) => handleNav(event, href)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                {label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(event) => handleNav(event, "#contacto")}
              className="mt-2 inline-flex justify-center rounded-xl bg-electric px-5 py-3 text-sm font-bold text-white sm:hidden"
            >
              Presupuesto
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ navigate }) {
  const promises = ["Auditoría de 30 minutos gratis", "Presupuesto cerrado en 48 horas", "30 días de soporte incluidos"];

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-ink pt-24 text-white">
      <div className="noise-overlay absolute inset-0 opacity-95" />
      <div className="absolute -right-40 top-24 h-[28rem] w-[28rem] rounded-full bg-electric/20 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-canvas to-transparent" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 pb-28 pt-12 sm:px-6 lg:min-h-[calc(92dvh-6rem)] lg:px-8 lg:pb-32">
        <div className="max-w-3xl">
          <p data-reveal className="mb-7 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-soft glass-edge">
            <Sparkles size={16} strokeWidth={1.8} aria-hidden="true" />
            Desarrollo web y automatizaciones
          </p>
          <h1 id="hero-title" data-reveal className="font-display text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-[3.6rem]">
            Sistemas digitales para negocios que ya no quieren operar <span className="text-soft">a mano.</span>
          </h1>
          <p data-reveal className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Construyo webs, apps y flujos automáticos que capturan clientes, confirman citas, responden consultas y ordenan procesos repetitivos sin inflar tu equipo.
          </p>
          <div data-reveal className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contacto" className="group inline-flex items-center justify-center gap-3 rounded-xl bg-electric px-6 py-4 font-bold text-white shadow-[0_18px_40px_-14px_rgba(99,102,241,0.9)] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink active:scale-[0.98]">
              Pedir auditoría gratis
              <ArrowRight size={18} strokeWidth={1.9} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="/portfolio"
              onClick={(event) => {
                event.preventDefault();
                navigate("/portfolio");
              }}
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/8 px-6 py-4 font-bold text-white glass-edge transition duration-300 hover:-translate-y-0.5 hover:bg-white/15 active:scale-[0.98]"
            >
              Ver portfolio
            </a>
          </div>
          <ul data-reveal className="mt-9 flex flex-col gap-x-6 gap-y-2 text-sm text-slate-300 sm:flex-row sm:flex-wrap">
            {promises.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check size={16} strokeWidth={2.2} className="mt-0.5 shrink-0 text-soft" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

function Services({ onChooseService }) {
  return (
    <section id="servicios" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Servicios"
          title="Tres formas de dejar de hacerlo a mano"
          text="Empieza por lo que más tiempo te quita. Todo se conecta después: la web alimenta la agenda y la agenda envía tus avisos."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} onChoose={() => onChooseService(service.id)} />
          ))}
        </div>
        <div className="mt-4 grid gap-3">
          {extraServices.map((service) => (
            <ServiceStrip key={service.id} service={service} onChoose={() => onChooseService(service.id)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, onChoose }) {
  const Icon = service.icon;
  const featured = Boolean(service.featured);

  return (
    <article
      className={`flex flex-col rounded-2xl border p-5 shadow-panel ${
        featured ? "border-soft bg-ink text-white" : "border-slate-200 bg-white text-ink"
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <span className={`grid h-10 w-10 place-items-center rounded-xl ${featured ? "bg-soft text-ink" : "bg-electric/10 text-electric"}`}>
          <Icon size={21} strokeWidth={1.8} />
        </span>
        {featured && (
          <span className="rounded-lg bg-soft px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-ink">
            {service.featured}
          </span>
        )}
      </div>
      <h3 className={`font-display text-xl font-black leading-tight tracking-tight ${featured ? "text-white" : "text-ink"}`}>{service.title}</h3>
      <p className={`mt-3 text-[11px] font-black uppercase tracking-[0.14em] ${featured ? "text-soft" : "text-electric"}`}>Para quién</p>
      <p className={`mt-1 text-sm leading-6 ${featured ? "text-slate-300" : "text-slate-600"}`}>{service.audience}</p>
      <p className={`mt-4 text-base font-bold leading-6 ${featured ? "text-white" : "text-ink"}`}>{service.promise}</p>
      <p className={`mt-5 text-[11px] font-black uppercase tracking-[0.14em] ${featured ? "text-soft" : "text-electric"}`}>Incluye</p>
      <ul className="mb-6 mt-2 grid gap-2">
        {service.items.map((item) => (
          <li key={item} className={`flex items-start gap-2 text-sm leading-5 ${featured ? "text-slate-200" : "text-slate-600"}`}>
            <Check size={15} strokeWidth={2} className={`mt-0.5 shrink-0 ${featured ? "text-soft" : "text-electric"}`} />
            {item}
          </li>
        ))}
      </ul>
      <dl className={`mt-auto grid grid-cols-2 gap-3 border-t pt-4 ${featured ? "border-white/10" : "border-slate-200"}`}>
        <div>
          <dt className="text-[11px] font-black uppercase tracking-[0.14em] text-slate-400">Plazo</dt>
          <dd className="mt-1 text-sm font-bold">{service.timeline}</dd>
        </div>
        <div>
          <dt className="text-[11px] font-black uppercase tracking-[0.14em] text-slate-400">Precio</dt>
          <dd className="mt-1 text-sm font-bold">{service.price}</dd>
          {service.offer && (
            <dd className={`mt-1 text-[11px] font-black uppercase tracking-[0.12em] ${featured ? "text-soft" : "text-electric"}`}>{service.offer}</dd>
          )}
        </div>
      </dl>
      <a
        href="#contacto"
        onClick={onChoose}
        className={`mt-5 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition duration-300 hover:-translate-y-0.5 active:scale-[0.98] ${
          featured ? "bg-soft text-ink hover:bg-white" : "bg-electric text-white hover:bg-ink"
        }`}
      >
        {service.cta}
        <ArrowRight size={18} strokeWidth={1.9} />
      </a>
    </article>
  );
}

function ServiceStrip({ service, onChoose }) {
  const Icon = service.icon;

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-panel sm:flex-row sm:items-center">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-electric/10 text-electric">
        <Icon size={21} strokeWidth={1.8} />
      </span>
      <p className="flex-1 text-sm leading-6 text-slate-600">
        <span className="font-bold text-ink">{service.title}</span> {service.text}
      </p>
      <a
        href="#contacto"
        onClick={onChoose}
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-ink transition duration-300 hover:border-electric hover:text-electric"
      >
        {service.cta}
        <ArrowRight size={16} strokeWidth={1.9} />
      </a>
    </div>
  );
}

function Audience() {
  return (
    <section id="para-quien" className="bg-ink px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-soft">Para quién trabajamos</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl">
              Sectores donde más puedo ayudarte
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
              Trabajo con negocios que gestionan citas, clientes, reservas, leads o procesos repetitivos. El objetivo es simple: menos mensajes manuales, más seguimiento y una experiencia más profesional.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/8 p-5 glass-edge">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-soft">En comun</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Todos ganan cuando la web, WhatsApp, formularios, agenda y datos dejan de funcionar por separado.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, index) => (
            <article
              key={sector.name}
              className="group min-h-[170px] rounded-2xl border border-white/12 bg-white/[0.11] p-4 text-white glass-edge transition duration-300 hover:-translate-y-1 hover:border-soft/70 hover:bg-white/[0.16]"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className="rounded-lg bg-soft px-2.5 py-1 font-display text-[11px] font-black text-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <ArrowRight size={15} strokeWidth={1.9} className="text-soft transition-transform duration-300 group-hover:translate-x-1" />
              </div>
              <h3 className="font-display text-lg font-black leading-tight text-white">{sector.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{sector.benefit}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AutomationLab() {
  return (
    <section id="sistema" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Sistema en vivo"
          title="Lo que normalmente haces a mano, convertido en flujo."
          text="Un buen sistema no solo ahorra tiempo: evita olvidos, mantiene el seguimiento y mejora la respuesta al cliente."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div data-reveal className="rounded-[2rem] bg-ink p-6 text-white shadow-diffusion">
            <div className="mb-7 flex items-center justify-between">
              <p className="font-display text-lg font-black">Workflow de agenda</p>
              <Bot className="text-soft" size={24} strokeWidth={1.8} />
            </div>
            <div className="space-y-4">
              {["Entrada de lead", "Validación de datos", "Confirmación por WhatsApp", "Seguimiento post-cita"].map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/8 p-4">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-soft text-sm font-black text-ink">{index + 1}</span>
                  <span className="font-semibold text-slate-200">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal className="grid gap-5 sm:grid-cols-2">
            <LabTile icon={MessageSquareText} title="Respuestas" text="Mensajes iniciales y filtros para consultas frecuentes." />
            <LabTile icon={CalendarCheck} title="Citas" text="Recordatorios, confirmaciones y reagendado." />
            <LabTile icon={DatabaseZap} title="Datos" text="Leads guardados sin copiar entre plataformas." />
            <LabTile icon={Repeat2} title="Seguimiento" text="Tareas y avisos después de cada contacto." />
          </div>
        </div>
      </div>
    </section>
  );
}

function LabTile({ icon: Icon, title, text }) {
  return (
    <article className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-panel">
      <Icon className="text-electric" size={26} strokeWidth={1.8} />
      <h3 className="mt-5 font-display text-xl font-black">{title}</h3>
      <p className="mt-3 text-slate-600">{text}</p>
    </article>
  );
}

function Process() {
  return (
    <section id="proceso" className="relative overflow-hidden bg-ink px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="noise-overlay absolute inset-0 opacity-95" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Proceso"
          title="Una forma de trabajar clara, sin proyectos eternos."
          text="Cuatro pasos. En cada uno sabes qué toca, cuánto tarda y qué recibes."
          dark
        />

        <ol className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {process.map((step, index) => (
            <li key={step.title} className="flex flex-col rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5 glass-edge">
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-soft font-display text-sm font-black text-ink">{index + 1}</span>
                <span className="rounded-lg bg-white/10 px-2.5 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-soft">
                  {step.duration}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-black leading-tight text-white">{step.title}</h3>
              <p className="mt-4 text-[11px] font-black uppercase tracking-[0.14em] text-slate-400">Qué hago</p>
              <p className="mt-1 text-sm leading-6 text-slate-300">{step.work}</p>
              <div className="mt-auto pt-5">
                <div className="rounded-xl border border-white/10 bg-ink/60 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.14em] text-soft">Qué recibes</p>
                  <p className="mt-1 flex items-start gap-2 text-sm font-bold leading-5 text-white">
                    <Check size={15} strokeWidth={2} className="mt-0.5 shrink-0 text-soft" />
                    {step.result}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex justify-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-electric px-6 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink active:scale-[0.98]"
          >
            Empezar por la auditoría gratis
            <ArrowRight size={18} strokeWidth={1.9} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact({ selectedService, onServiceChange, navigate }) {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const email = String(form.get("email") || "").trim();

    // Honeypot: people never see this field, form-filling bots do. Pretend success and drop it.
    if (String(form.get("website") || "").trim()) {
      formElement.reset();
      onServiceChange("");
      setStatus("success");
      return;
    }

    if (!email.includes("@")) {
      setStatus("error");
      return;
    }

    if (window.location.protocol === "https:" && N8N_WEBHOOK_URL.startsWith("http://")) {
      setStatus("webhook-http-error");
      return;
    }

    setStatus("loading");

    const payload = {
      nombre: String(form.get("nombre") || "").trim(),
      empresa: String(form.get("empresa") || "").trim(),
      email,
      telefono: String(form.get("telefono") || "").trim(),
      servicio: String(form.get("servicio") || "").trim(),
      presupuesto: String(form.get("presupuesto") || "").trim(),
      mensaje: String(form.get("mensaje") || "").trim(),
      website: "",
      origen: "creaciones-digitales-web",
      fecha: new Date().toISOString(),
    };

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario");
      }

      formElement.reset();
      onServiceChange("");
      setStatus("success");
    } catch (error) {
      setStatus("submit-error");
    }
  }

  return (
    <section id="contacto" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-reveal className="h-fit rounded-[1.5rem] bg-ink p-6 text-white shadow-diffusion sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-soft">Contacto</p>
          <h2 className="mt-4 font-display text-2xl font-black leading-tight tracking-tight sm:text-3xl">
            Cuéntame qué quieres dejar de hacer a mano
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            30 minutos gratis. Sales con las tres tareas que más compensa automatizar y una estimación de coste.
          </p>
          <div className="mt-7 space-y-3">
            <ContactLine icon={WhatsAppIcon} text="Escríbeme por WhatsApp" href={WHATSAPP_URL} />
            <ContactLine icon={Phone} text="+34 697 955 919" href="tel:+34697955919" />
            <ContactLine icon={Mail} text="ubedadesarrolloweb@gmail.com" href="mailto:ubedadesarrolloweb@gmail.com" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="relative w-full rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-diffusion sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nombre" name="nombre" placeholder="Tu nombre" autoComplete="name" required />
            <Field label="Correo electrónico" name="email" type="email" placeholder="nombre@empresa.com" autoComplete="email" required />
          </div>

          <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
            <label>
              No rellenes este campo
              <input name="website" type="text" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div className="mt-4">
            <Field label="WhatsApp" optional name="telefono" type="tel" placeholder="+34 600 000 000" autoComplete="tel" />
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <FieldLabel optional>Servicio</FieldLabel>
              <select
                name="servicio"
                value={selectedService}
                onChange={(event) => onServiceChange(event.target.value)}
                className={`${fieldClassName} cursor-pointer`}
              >
                <option value="">Elige un servicio</option>
                <option value="web-profesional">Desarrollo web y e-commerce</option>
                <option value="agenda-automatica">Agenda automática</option>
                <option value="automatizaciones">Automatización a medida</option>
                <option value="app-web">Aplicación a medida</option>
                <option value="mantenimiento">Mantenimiento mensual</option>
                <option value="agente-ia">Agente de IA</option>
                <option value="otro">Otro / no estoy seguro</option>
              </select>
            </label>

            <label className="block">
              <FieldLabel optional>Presupuesto</FieldLabel>
              <select name="presupuesto" defaultValue="" className={`${fieldClassName} cursor-pointer`}>
                <option value="">Elige un rango</option>
                <option value="500-1000">500 € – 1.000 €</option>
                <option value="1000-3000">1.000 € – 3.000 €</option>
                <option value="3000-5000">3.000 € – 5.000 €</option>
                <option value="5000-10000">5.000 € – 10.000 €</option>
              </select>
            </label>
          </div>

          <label className="mt-4 block">
            <FieldLabel>¿Qué quieres mejorar?</FieldLabel>
            <textarea
              name="mensaje"
              className={`${fieldClassName} h-auto min-h-28 py-3`}
              placeholder="Cuéntame qué proceso repites, qué herramientas usas y qué resultado buscas."
              required
            />
          </label>

          {status === "error" && <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">Revisa el correo antes de enviar.</p>}
          {status === "success" && <p className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">Gracias. He recibido tu mensaje y te respondo en menos de 24 horas laborables.</p>}
          {status === "submit-error" && <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">No se pudo enviar tu mensaje. Inténtalo de nuevo o escríbeme por WhatsApp.</p>}
          {status === "webhook-http-error" && <p className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-700">Para usarlo en Vercel, el webhook de n8n debe ser HTTPS.</p>}

          <button type="submit" disabled={status === "loading"} className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-electric px-5 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-ink active:scale-[0.98] disabled:cursor-wait disabled:opacity-60 disabled:hover:translate-y-0">
            {status === "loading" ? "Enviando..." : "Pedir mi auditoría gratis"}
            <ArrowRight size={18} strokeWidth={1.9} />
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-slate-500">
            Te respondo en menos de 24 horas laborables. Al enviar aceptas la{" "}
            <a
              href="/privacidad"
              onClick={(event) => {
                event.preventDefault();
                navigate("/privacidad");
              }}
              className="font-semibold text-electric underline underline-offset-2 hover:text-ink"
            >
              política de privacidad
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
}

const fieldClassName =
  "mt-2 h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm text-ink shadow-[inset_0_1px_2px_rgba(15,23,42,0.04)] outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-electric focus:ring-4 focus:ring-electric/15";

function FieldLabel({ children, optional = false }) {
  return (
    <span className="text-xs font-bold uppercase tracking-[0.08em] text-ink">
      {children}
      {optional && <span className="ml-1.5 font-semibold normal-case tracking-normal text-slate-400">(opcional)</span>}
    </span>
  );
}

function Field({ label, name, placeholder, type = "text", autoComplete, required = false, optional = false }) {
  return (
    <label className="block">
      <FieldLabel optional={optional}>{label}</FieldLabel>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className={fieldClassName}
        placeholder={placeholder}
      />
    </label>
  );
}

function ContactLine({ icon: Icon, text, href }) {
  const className = "flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 p-3 text-sm text-slate-200 transition duration-300 hover:bg-white/12";
  const content = (
    <>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-soft text-ink">
        <Icon size={17} strokeWidth={1.9} />
      </span>
      <span className="font-semibold">{text}</span>
    </>
  );

  if (!href) {
    return <div className={className}>{content}</div>;
  }

  const external = href.startsWith("http");

  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={className}>
      {content}
    </a>
  );
}

function PortfolioPage() {
  return (
    <section className="relative min-h-[100dvh] bg-ink pt-24 text-white">
      <div className="noise-overlay absolute inset-x-0 top-0 h-[520px] opacity-80" />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
        <div data-reveal className="mx-auto max-w-6xl">
          <h1 className="text-sm font-black uppercase tracking-[0.18em] text-soft">Portfolio</h1>
        </div>

        <div id="proyectos" className="mx-auto mt-8 grid max-w-6xl scroll-mt-24 gap-5">
          {portfolioProjects.map((project) => (
            <PortfolioCard key={project.title} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

function PortfolioCard({ project }) {
  return (
    <article
      data-reveal
      className="grid gap-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white text-ink shadow-diffusion lg:grid-cols-[0.9fr_1.1fr]"
    >
      <div className="flex flex-col justify-between p-5 sm:p-6">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-lg bg-electric/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-electric">
              {project.category}
            </span>
          </div>
          <h2 className="mt-3 font-display text-xl font-black leading-tight tracking-tight text-ink sm:text-2xl">
            {project.title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">{project.summary}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-canvas px-2.5 py-1 text-[11px] font-bold text-slate-700">
                <Check size={12} strokeWidth={2.2} className="shrink-0 text-electric" />
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-5 rounded-2xl bg-ink p-4 text-white">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-soft">Qué puedes probar</p>
          <p className="mt-2 text-xs leading-5 text-slate-300">{project.result}</p>
          {project.testCard && (
            <p className="mt-3 rounded-lg border border-white/10 bg-white/8 px-3 py-2 text-xs leading-5 text-slate-200">
              <span className="font-bold text-soft">Tarjeta de prueba:</span> {project.testCard}
            </p>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-electric px-4 py-3 text-xs font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink active:scale-[0.98]"
            >
              {project.urlLabel || "Ver proyecto"}
              <ArrowRight size={16} strokeWidth={1.9} />
            </a>
          )}
          {project.adminUrl && (
            <a
              href={project.adminUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-xs font-bold text-white transition duration-300 hover:bg-white/10"
            >
              {project.adminLabel}
            </a>
          )}
        </div>
      </div>
      <PortfolioPreview image={project.image} title={project.title} />
    </article>
  );
}

function PortfolioPreview({ image, title }) {
  return (
    <div className="flex items-center justify-center bg-slate-950 p-5 sm:p-8">
      <img
        src={image}
        alt={`Captura del proyecto: ${title}`}
        className="max-h-[300px] w-auto max-w-full rounded-xl object-contain shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/10"
        loading="lazy"
      />
    </div>
  );
}

function NotFoundPage({ navigate }) {
  return (
    <section className="bg-canvas px-4 pb-24 pt-40 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-electric">Error 404</p>
        <h1 className="mt-4 font-display text-3xl font-black leading-tight tracking-tight text-ink sm:text-4xl">
          Esta página no existe
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">Puede que el enlace esté mal escrito o que la página se haya movido.</p>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            navigate("/");
          }}
          className="mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-electric px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-ink"
        >
          Volver al inicio
          <ArrowRight size={18} strokeWidth={1.9} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

function PrivacyPage({ navigate }) {
  const sections = [
    [
      "Responsable",
      "Creaciones Digitales, Barcelona (España). Contacto: ubedadesarrolloweb@gmail.com · +34 697 955 919.",
    ],
    [
      "Qué datos recojo",
      "Los que escribes en el formulario de contacto: nombre, correo electrónico, WhatsApp (opcional), servicio y presupuesto (opcionales) y tu mensaje. Si me escribes por WhatsApp o correo, los datos de esa conversación.",
    ],
    [
      "Para qué los uso",
      "Solo para responder a tu consulta, preparar la auditoría o el presupuesto que pides y hacer el seguimiento de esa conversación. No envío publicidad ni cedo tus datos a terceros con fines comerciales.",
    ],
    [
      "Base legal",
      "Tu consentimiento al enviar el formulario o escribirme, y la aplicación de medidas precontractuales cuando me pides un presupuesto.",
    ],
    [
      "Cuánto tiempo los guardo",
      "Mientras dure la conversación o la relación profesional. Si no llegamos a trabajar juntos, los borro como máximo 12 meses después del último contacto, salvo que la ley obligue a conservarlos más tiempo.",
    ],
    [
      "Quién más los trata",
      "Proveedores que necesito para gestionar las consultas, como Google (correo y hojas de cálculo) y el servidor donde se procesan los formularios. Solo acceden a los datos para prestar ese servicio.",
    ],
    [
      "Tus derechos",
      "Puedes pedir acceso, rectificación, supresión, oposición, limitación o portabilidad de tus datos escribiendo a ubedadesarrolloweb@gmail.com. Si crees que no se han respetado, puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).",
    ],
  ];

  return (
    <section className="bg-canvas px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-sm font-bold text-electric transition hover:text-ink"
        >
          <ArrowRight size={16} strokeWidth={1.9} className="rotate-180" aria-hidden="true" />
          Volver al inicio
        </button>
        <h1 className="mt-6 font-display text-3xl font-black leading-tight tracking-tight text-ink sm:text-4xl">Política de privacidad</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Cómo trato los datos que me envías a través de esta web, de forma clara y en pocas líneas.
        </p>
        <div className="mt-10 space-y-8">
          {sections.map(([title, text]) => (
            <div key={title}>
              <h2 className="font-display text-lg font-black text-ink">{title}</h2>
              <p className="mt-2 text-base leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-sm text-slate-500">Última actualización: octubre de 2026.</p>
      </div>
    </section>
  );
}

function Footer({ navigate }) {
  const footerServices = ["Desarrollo de páginas web", "Tiendas online", "Agenda automática", "Automatización a medida", "Mantenimiento mensual"];
  const navLinks = [
    ["Servicios", "#servicios"],
    ["Portfolio", "/portfolio"],
    ["Proceso", "#proceso"],
    ["Contacto", "#contacto"],
  ];

  function handleHomeLink(event, href) {
    event.preventDefault();
    if (href === "/portfolio") {
      navigate("/portfolio");
      return;
    }
    navigate("/");
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  }

  const columnTitle = "text-xs font-black uppercase tracking-[0.18em] text-soft";
  const linkClass = "text-sm text-slate-300 transition duration-300 hover:text-white";

  return (
    <footer className="relative overflow-hidden bg-ink px-4 pt-14 text-white sm:px-6 lg:px-8">
      <div className="noise-overlay absolute inset-0 opacity-55" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-soft/70 to-transparent" />
      <div className="absolute -right-28 top-10 h-56 w-56 rounded-full bg-electric/14 blur-3xl" />
      <div className="absolute -bottom-32 left-8 h-56 w-56 rounded-full bg-soft/12 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 pb-14 pt-2 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_auto_auto_auto] lg:gap-x-20">
          <div className="max-w-sm">
            <a href="/" onClick={(event) => handleHomeLink(event, "#contenido")} className="inline-flex items-center gap-3">
              <span className="flex h-14 w-20 shrink-0 overflow-hidden rounded-2xl bg-[#d9d8d5] p-1.5 ring-1 ring-soft/50">
                <img src={logoCreaciones} alt="Creaciones Digitales" width="68" height="44" className="h-full w-full object-contain" />
              </span>
              <span>
                <span className="block font-display text-base font-black leading-none text-white">
                  Creaciones Digitales
                </span>
                <span className="mt-1 block text-sm leading-none text-slate-400">
                  Desarrollo web y automatizaciones
                </span>
              </span>
            </a>
            <p className="mt-5 text-sm leading-6 text-slate-400">
              Webs que captan clientes, agendas que se confirman solas y procesos que dejan de hacerse a mano.
            </p>
            <a
              href="https://www.instagram.com/creacionesdigitales_lu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Creaciones Digitales"
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/8 px-3.5 py-2 text-sm font-semibold text-slate-200 transition duration-300 hover:border-soft/60 hover:text-white"
            >
              <Instagram size={17} strokeWidth={2} aria-hidden="true" />
              @creacionesdigitales_lu
            </a>
          </div>

          <div>
            <p className={columnTitle}>Servicios</p>
            <ul className="mt-4 grid gap-3">
              {footerServices.map((serviceName) => (
                <li key={serviceName}>
                  <a href="/#servicios" onClick={(event) => handleHomeLink(event, "#servicios")} className={linkClass}>
                    {serviceName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={columnTitle}>Navegación</p>
            <ul className="mt-4 grid gap-3">
              {navLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href === "/portfolio" ? "/portfolio" : `/${href}`} onClick={(event) => handleHomeLink(event, href)} className={linkClass}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={columnTitle}>Contacto</p>
            <ul className="mt-4 grid gap-3 text-sm text-slate-300">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-2.5`}>
                  <WhatsAppIcon size={16} className="shrink-0 text-soft" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="tel:+34697955919" className={`${linkClass} inline-flex items-center gap-2.5`}>
                  <Phone size={16} strokeWidth={1.9} className="shrink-0 text-soft" aria-hidden="true" />
                  +34 697 955 919
                </a>
              </li>
              <li>
                <a href="mailto:ubedadesarrolloweb@gmail.com" className={`${linkClass} inline-flex items-center gap-2.5 break-all`}>
                  <Mail size={16} strokeWidth={1.9} className="shrink-0 text-soft" aria-hidden="true" />
                  ubedadesarrolloweb@gmail.com
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <MapPin size={16} strokeWidth={1.9} className="shrink-0 text-soft" aria-hidden="true" />
                Barcelona · España
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/12 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold">© {new Date().getFullYear()} Creaciones Digitales. Todos los derechos reservados.</p>
          <a
            href="/privacidad"
            onClick={(event) => {
              event.preventDefault();
              navigate("/privacidad");
            }}
            className="transition hover:text-soft"
          >
            Política de privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({ eyebrow, title, text, dark = false }) {
  return (
    <div data-reveal className="max-w-3xl">
      <p className={`text-sm font-black uppercase tracking-[0.18em] ${dark ? "text-soft" : "text-electric"}`}>{eyebrow}</p>
      <h2 className={`mt-4 font-display text-3xl font-black leading-tight tracking-tight sm:text-4xl ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      <p className={`mt-4 max-w-[65ch] text-base leading-7 ${dark ? "text-slate-300" : "text-slate-600"}`}>{text}</p>
    </div>
  );
}

export default App;
