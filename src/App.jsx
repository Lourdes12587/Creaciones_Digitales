import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  Check,
  ChevronDown,
  Code2,
  DatabaseZap,
  Facebook,
  Globe2,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MessageCircle,
  MessageSquareText,
  MonitorCog,
  Phone,
  Repeat2,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import logoCreaciones from "./assets/logo-creaciones-digitales.png";
import logoNavbar from "./assets/logo-creaciones-navbar.png";
import portfolioBlueIsland from "./assets/portfolio-blue-island.png";
import portfolioYouEyes from "./assets/portfolio-you-eyes.png";
import portfolioDogDreams from "./assets/portfolio-dogdreams.png";

const services = [
  {
    icon: Globe2,
    title: "Web profesional",
    text: "Tu presencia online completa: diseño, contenido y optimización SEO. Lista en 1–2 semanas.",
    items: [
      "Diseño personalizado sobre plantilla premium",
      "Hasta 5 páginas + blog",
      "SEO on-page optimizado",
      "Formulario de contacto integrado",
      "Formación básica incluida",
    ],
    visual: "https://picsum.photos/seed/wordpress-studio-dashboard/900/1100",
    alt: "Espacio de trabajo con una web profesional abierta en pantalla",
    signal: "Web lista para captar consultas",
  },
  {
    icon: CalendarCheck,
    title: "Sistema de agenda automático",
    text: "Recordatorios de cita, confirmaciones y reagendado automático por WhatsApp. Sin intervención manual.",
    items: [
      "Recordatorio 24h antes por WhatsApp",
      "Confirmación instantánea al reservar",
      "Lista de espera automática",
      "Encuesta post-cita + reseña Google",
      "Reduce no-shows hasta un 40%",
      
    ],
    visual: "https://picsum.photos/seed/appointment-automation-calendar/900/1100",
    alt: "Agenda digital con confirmaciones de citas y mensajes automáticos",
    signal: "Citas confirmadas sin intervención manual",
  },
  {
    icon: Repeat2,
    title: "Automatización de procesos",
    text: "Elimino tareas repetitivas: sincronización de datos, emails automáticos, informes periódicos.",
    items: [
      "Mapeo de procesos actuales",
      "Workflow en n8n o Make",
      "Pruebas y documentación",
      "Soporte 30 días incluido",
    ],
    visual: "https://picsum.photos/seed/process-automation-nodes/900/1100",
    alt: "Panel de automatización con nodos conectados y datos sincronizados",
    signal: "Tareas repetitivas convertidas en flujos",
    badge: "Proceso",
  },
  {
    icon: Code2,
    title: "Aplicación web a medida",
    text: "Paneles de gestión, portales de clientes o herramientas internas donde WordPress no llega.",
    items: [
      "Frontend en React",
      "Backend con Node.js + Express",
      "Base de datos + API REST",
      "Autenticación de usuarios",
    ],
    visual: "https://picsum.photos/seed/custom-web-application-panel/900/1100",
    alt: "Aplicación web a medida con paneles de gestión y métricas",
    signal: "Herramientas internas para operar mejor",
    badge: "Alto ticket",
  },
  {
    icon: ShieldCheck,
    title: "Mantenimiento mensual",
    text: "Tu web y automatizaciones siempre al día. Actualizaciones, correcciones y mejoras.",
    items: [
      "Actualizaciones WordPress",
      "Monitoreo workflows n8n",
      "2h de mejoras incluidas",
      "Respuesta en 24–48h",
    ],
    visual: "https://picsum.photos/seed/maintenance-monitoring-workflows/900/1100",
    alt: "Panel de monitoreo de mantenimiento web y automatizaciones",
    signal: "Sistemas revisados y funcionando",
    badge: "Recurrente",
  },
];

const sectors = [
  {
    name: "Clinicas y estetica",
    benefit: "Recordatorios, formularios previos y seguimiento post-cita para reducir ausencias.",
  },
  {
    name: "Peluquerias y barberias",
    benefit: "Agenda conectada a WhatsApp, confirmaciones y lista de espera automatica.",
  },
  {
    name: "Coaches y nutricionistas",
    benefit: "Captacion de leads, reservas, cuestionarios y acompanamiento entre sesiones.",
  },
  {
    name: "Talleres de reparacion",
    benefit: "Avisos de estado, presupuestos, recogidas y consultas repetidas ordenadas.",
  },
  {
    name: "Restaurantes con reservas",
    benefit: "Confirmacion de mesas, cambios de horario y mensajes para eventos privados.",
  },
  {
    name: "Ecommerce",
    benefit: "Seguimiento de pedidos, recuperacion de carritos y soporte inicial automatizado.",
  },
  {
    name: "Agencias y estudios",
    benefit: "Web comercial, formularios cualificados y paneles simples para gestionar clientes.",
  },
  {
    name: "Startups y SaaS",
    benefit: "Landing, producto web, automatizaciones internas y medicion de oportunidades.",
  },
  {
    name: "Inmobiliarias",
    benefit: "Filtro de interesados, agenda de visitas y avisos automaticos para cada propiedad.",
  },
  {
    name: "Academias y formacion",
    benefit: "Inscripciones, recordatorios, emails de bienvenida y seguimiento de alumnos.",
  },
  {
    name: "Despachos profesionales",
    benefit: "Solicitudes ordenadas, agenda de consultas y documentos enviados sin perseguir al cliente.",
  },
  {
    name: "Gimnasios y estudios",
    benefit: "Reservas de clases, renovaciones, mensajes de asistencia y reactivacion de clientes.",
  },
];

const useCases = [
  {
    metric: "18.4 h",
    label: "ahorradas al mes",
    text: "Recordatorios y confirmaciones automaticas para negocios con agenda.",
  },
  {
    metric: "37.6%",
    label: "menos mensajes repetidos",
    text: "Respuestas iniciales, filtros de consulta y seguimiento sin copiar y pegar.",
  },
  {
    metric: "11 min",
    label: "para responder leads",
    text: "Avisos internos y clasificacion de oportunidades apenas entra una solicitud.",
  },
];

const process = [
  ["01", "Auditoria", "Mapeo donde pierdes tiempo, clientes o seguimiento."],
  ["02", "Plan", "Priorizo automatizaciones con impacto rapido y bajo riesgo."],
  ["03", "Construccion", "Desarrollo la web, app o workflow con revisiones cortas."],
  ["04", "Entrega", "Documentacion, pruebas y soporte para que puedas usarlo bien."],
];

const faqs = [
  {
    question: "Puedo empezar solo con una automatizacion pequena?",
    answer: "Si. La mejor entrada suele ser un flujo de agenda, leads o seguimiento que resuelva una tarea repetitiva muy concreta.",
  },
  {
    question: "Tengo que cambiar mis herramientas actuales?",
    answer: "No necesariamente. Primero reviso lo que ya usas y conecto el sistema con WhatsApp, email, formularios, hojas de calculo o CRM cuando sea posible.",
  },
  {
    question: "Tambien haces la web completa?",
    answer: "Si. Puedo crear la web y conectarla con formularios, automatizaciones y paneles para que no sea solo una vitrina.",
  },
];

const portfolioProjects = [
  {
    title: "Blue Island Boats",
    category: "Experiencias nauticas",
    url: "https://blue-island-boat.vercel.app/",
    summary:
      "Landing premium para reservas privadas en Ibiza y Formentera, con formulario automatizado, captador de leads y agente de IA para responder consultas iniciales.",
    tags: ["Formulario automatizado", "Captador de leads", "Agente IA", "Reservas"],
    result: "Consultas ordenadas para convertir reservas sin perder oportunidades.",
    image: portfolioBlueIsland,
  },
  {
    title: "You Eyes.Net",
    category: "Diario digital",
    url: "https://you-eyes-net.vercel.app/",
    summary:
      "Web de noticias desarrollada desde cero con React, pensada para una lectura editorial clara, jerarquia de contenidos y experiencia de medio digital.",
    tags: ["React", "Desarrollo desde cero", "Noticias", "Diseño editorial"],
    result: "Una portada viva para publicar contenido con identidad propia.",
    image: portfolioYouEyes,
  },
  {
    title: "DogDreams",
    category: "Veterinaria, hotel y cuidado integral",
    url: "https://veterinaria-dd.vercel.app/",
    summary:
      "Web para veterinaria, peluqueria, hotel y servicios de mascotas, con formulario automatizado y agente de IA que responde consultas y ayuda a gestionar turnos.",
    tags: ["Formulario automatizado", "Agente IA", "Gestion de turnos", "Servicios"],
    result: "Atencion mas rapida para familias que necesitan reservar o consultar servicios.",
    image: portfolioDogDreams,
  },
];

function App() {
  const rootRef = useRef(null);
  const [route, setRoute] = useState(() => window.location.pathname);

  function navigate(path) {
    window.history.pushState({}, "", path);
    setRoute(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-reveal]", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
      });

      gsap.to("[data-float]", {
        y: -14,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.18,
      });
    }, rootRef);

    return () => ctx.revert();
  }, [route]);

  useEffect(() => {
    function handlePopState() {
      setRoute(window.location.pathname);
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
          <PortfolioPage navigate={navigate} />
        ) : (
          <>
            <Hero navigate={navigate} />
            <Services />
            <AutomationLab />
            <UseCases />
            <Process />
            <StackTrust />
            <FAQ />
            <Contact />
          </>
        )}
      </main>
      <Footer navigate={navigate} />
    </div>
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
  const links = [
    ["Servicios", "#servicios"],
    ["Portfolio", "/portfolio"],
    ["Sistema", "#sistema"],
    ["Proceso", "#proceso"],
    ["Contacto", "#contacto"],
  ];

  function handleNav(event, href) {
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

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-slate-200/70 bg-canvas/86 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#"
          aria-label="Creaciones Digitales"
          className="group flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/78 px-2.5 py-2 shadow-[0_18px_45px_-32px_rgba(15,23,42,0.55)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-soft/80 hover:bg-white"
        >
          <span className="relative flex h-14 w-[5.75rem] shrink-0 overflow-hidden rounded-xl bg-[#d9d8d5] p-1.5 ring-1 ring-slate-900/10">
            <span className="absolute inset-x-2 top-1 h-px bg-white/80" />
            <img
              src={logoNavbar}
              alt=""
              className="relative h-full w-full object-contain"
              aria-hidden="true"
            />
          </span>
          <span className="hidden leading-none sm:block">
            <span className="block font-display text-[0.72rem] font-black uppercase tracking-[0.16em] text-ink">
              Creaciones
            </span>
            <span className="mt-1 block text-[0.62rem] font-black uppercase tracking-[0.22em] text-electric">
              Digitales
            </span>
          </span>
        </a>
        <div className="hidden items-center gap-1 rounded-xl border border-slate-200 bg-white/70 p-1 shadow-panel lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={(event) => handleNav(event, href)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition duration-300 hover:bg-soft/20 hover:text-ink active:scale-[0.98] ${
                route === href ? "bg-soft/25 text-ink" : "text-slate-600"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="#contacto"
          onClick={(event) => handleNav(event, "#contacto")}
          className="hidden rounded-xl bg-electric px-5 py-3 text-sm font-bold text-white shadow-panel transition duration-300 hover:-translate-y-0.5 hover:bg-ink active:scale-[0.98] sm:inline-flex"
        >
          Auditoria gratis
        </a>
      </nav>
    </header>
  );
}

function Hero({ navigate }) {
  return (
    <section className="relative min-h-[100dvh] bg-ink pt-28 text-white">
      <div className="noise-overlay absolute inset-0 opacity-95" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-canvas to-transparent" />
      <div className="relative mx-auto grid min-h-[calc(100dvh-7rem)] max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div className="max-w-3xl">
          <div data-reveal className="mb-7 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-soft glass-edge">
            <Sparkles size={16} strokeWidth={1.8} />
            Desarrollo web y automatizaciones operativas
          </div>
          <h1 data-reveal className="font-display text-4xl font-black leading-[0.98] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Sistemas digitales para negocios que ya no quieren operar a mano.
          </h1>
          <p data-reveal className="mt-6 max-w-2xl text-base leading-7 text-slate-300">
            Construyo webs, apps y flujos automaticos que capturan leads, confirman citas, responden consultas y ordenan procesos repetitivos sin inflar tu equipo.
          </p>
          <div data-reveal className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contacto" className="group inline-flex items-center justify-center gap-3 rounded-xl bg-electric px-6 py-4 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink active:scale-[0.98]">
              Pedir auditoria gratis
              <ArrowRight size={18} strokeWidth={1.9} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="/portfolio"
              onClick={(event) => {
                event.preventDefault();
                navigate("/portfolio");
              }}
              className="inline-flex items-center justify-center rounded-xl border border-white/14 bg-white/8 px-6 py-4 font-bold text-white glass-edge transition duration-300 hover:-translate-y-0.5 hover:bg-white/14 active:scale-[0.98]"
            >
              Ver portfolio
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

function Services() {
  const [activeService, setActiveService] = useState(0);
  const selectedService = services[activeService];

  return (
    <section id="servicios" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Servicios"
          title="Web, automatizacion y producto trabajando en la misma direccion."
          text="La web deja de ser una pieza aislada cuando se conecta con tus procesos comerciales y operativos."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <ServiceVisual service={selectedService} index={activeService} />
          <div className="order-1 grid gap-3 sm:grid-cols-2 lg:order-2">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                active={activeService === index}
                onSelect={() => setActiveService(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceVisual({ service, index }) {
  const Icon = service.icon;

  return (
    <aside className="order-2 h-fit lg:sticky lg:top-24 lg:order-1">
      <div className="group relative overflow-hidden rounded-[1.65rem] bg-ink p-2.5 shadow-diffusion">
        <img
          key={service.visual}
          src={service.visual}
          alt={service.alt}
          className="h-[280px] w-full rounded-[1.25rem] object-cover opacity-80 transition duration-700 group-hover:scale-[1.035] group-hover:opacity-95 sm:h-[340px] lg:h-[430px]"
        />
        <div className="absolute inset-2.5 rounded-[1.25rem] bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/12 text-soft glass-edge">
            <Icon size={21} strokeWidth={1.8} />
          </span>
          <span className="rounded-lg border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-soft glass-edge">
            Servicio {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="absolute bottom-5 left-5 right-5">
          <p className="mb-3 inline-flex rounded-lg bg-soft px-3 py-1.5 text-xs font-black text-ink">
            {service.signal}
          </p>
          <h3 className="max-w-md font-display text-2xl font-black leading-tight text-white">
            {service.title}
          </h3>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["Diseño", "Flujo", "Soporte"].map((item) => (
              <span key={item} className="rounded-lg border border-white/10 bg-white/10 px-2 py-1.5 text-center text-[11px] font-bold text-slate-200 glass-edge">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

function ServiceCard({ service, index, active, onSelect }) {
  const Icon = service.icon;
  const visibleItems = active ? service.items.slice(0, 4) : service.items.slice(0, 2);
  const hiddenCount = service.items.length - visibleItems.length;

  return (
    <button
      type="button"
      onMouseEnter={onSelect}
      onFocus={onSelect}
      onClick={onSelect}
      className={`group flex min-h-full cursor-pointer flex-col rounded-2xl border p-4 text-left shadow-panel outline-none transition duration-300 hover:-translate-y-1 focus:ring-4 focus:ring-electric/15 ${
        active ? "border-soft bg-ink text-white" : "border-slate-200 bg-white text-ink hover:border-soft"
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <span className={`grid h-10 w-10 place-items-center rounded-xl ${active ? "bg-soft text-ink" : "bg-electric/10 text-electric"}`}>
          <Icon size={21} strokeWidth={1.8} />
        </span>
        <div className="flex flex-col items-end gap-2">
          {service.badge && (
            <span className={`rounded-lg px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] ${active ? "bg-soft text-ink" : "bg-electric/10 text-electric"}`}>
              {service.badge}
            </span>
          )}
          <span className={`text-xs font-bold ${active ? "text-slate-300" : "text-slate-400"}`}>0{index + 1}</span>
        </div>
      </div>
      <h3 className={`font-display text-lg font-black leading-tight tracking-tight ${active ? "text-white" : "text-ink"}`}>{service.title}</h3>
      <p className={`mt-2 line-clamp-2 text-sm leading-6 ${active ? "text-slate-300" : "text-slate-600"}`}>{service.text}</p>
      <div className="mt-4 grid gap-2">
        {visibleItems.map((item) => (
          <div key={item} className={`flex items-center gap-2 text-xs font-semibold ${active ? "text-slate-200" : "text-slate-600"}`}>
            <Check size={14} strokeWidth={2} className={active ? "text-soft" : "text-electric"} />
            {item}
          </div>
        ))}
        {hiddenCount > 0 && (
          <span className={`text-xs font-black ${active ? "text-soft" : "text-electric"}`}>
            +{hiddenCount} puntos mas
          </span>
        )}
      </div>
    </button>
  );
}

function Audience() {
  return (
    <section id="para-quien" className="bg-ink px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-soft">Para quien trabajamos</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl">
              Sectores donde mas puedo ayudarte
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
              Trabajo con negocios que gestionan citas, clientes, reservas, leads o procesos repetitivos. El objetivo es simple: menos mensajes manuales, mas seguimiento y una experiencia mas profesional.
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
              {["Entrada de lead", "Validacion de datos", "Confirmacion por WhatsApp", "Seguimiento post-cita"].map((step, index) => (
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
            <LabTile icon={Repeat2} title="Seguimiento" text="Tareas y avisos despues de cada contacto." />
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

function UseCases() {
  return (
    <section className="bg-ink px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-soft">Casos de uso</p>
            <h2 className="mt-3 max-w-md font-display text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl">
              Automatizaciones pequeñas con impacto visible.
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {useCases.map((item) => (
              <article key={item.metric} className="rounded-2xl border border-white/10 bg-white/8 p-4 glass-edge">
                <p className="font-display text-2xl font-black text-soft">{item.metric}</p>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-slate-400">{item.label}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const activeProcess = process[activeStep];
  const processDetails = [
    {
      image: "https://picsum.photos/seed/process-audit-map/900/620",
      benefit: "Detectamos perdidas de tiempo, puntos de fuga y oportunidades claras de automatizacion.",
      label: "Mapa operativo",
    },
    {
      image: "https://picsum.photos/seed/process-planning-board/900/620",
      benefit: "Elegimos la primera pieza con impacto real y definimos alcance sin inflar el proyecto.",
      label: "Plan de accion",
    },
    {
      image: "https://picsum.photos/seed/process-build-workflow/900/620",
      benefit: "Construimos con revisiones cortas, pruebas reales y ajustes antes de dejarlo en marcha.",
      label: "Construccion",
    },
    {
      image: "https://picsum.photos/seed/process-delivery-support/900/620",
      benefit: "Entregamos documentacion, soporte inicial y una base lista para seguir creciendo.",
      label: "Entrega",
    },
  ];
  const activeDetail = processDetails[activeStep];

  return (
    <section id="proceso" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <SectionHeader
            eyebrow="Proceso"
            title="Una forma de trabajar clara, sin proyectos eternos."
            text="Primero se entiende el problema. Despues se construye la pieza exacta que reduce friccion."
          />
          <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-panel sm:grid-cols-[220px_1fr]">
            <div className="relative min-h-44 overflow-hidden rounded-2xl bg-ink">
              <img
                key={activeDetail.image}
                src={activeDetail.image}
                alt={activeDetail.label}
                className="h-full min-h-44 w-full object-cover opacity-80 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <span className="absolute bottom-3 left-3 rounded-lg bg-soft px-3 py-1 text-xs font-black text-ink">
                {activeDetail.label}
              </span>
            </div>
            <div>
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-electric">Etapa seleccionada</p>
                <span className="rounded-xl bg-ink px-3 py-2 font-display text-xs font-black text-white">
                  {activeProcess[0]}/04
                </span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-electric transition-all duration-500"
                  style={{ width: `${((activeStep + 1) / process.length) * 100}%` }}
                />
              </div>
              <h3 className="mt-5 font-display text-xl font-black text-ink">{activeProcess[1]}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{activeDetail.benefit}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {process.map(([number, title, text], index) => {
            const isActive = activeStep === index;
            const detail = processDetails[index];

            return (
              <button
                key={number}
                type="button"
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setActiveStep(index)}
                className={`group overflow-hidden rounded-[1.5rem] border text-left shadow-panel outline-none transition duration-300 hover:-translate-y-1 focus:ring-4 focus:ring-electric/15 active:scale-[0.99] ${
                  isActive
                    ? "border-electric bg-ink text-white"
                    : "border-slate-200 bg-white text-ink hover:border-soft"
                }`}
              >
                <div className="relative h-28 overflow-hidden bg-ink">
                  <img
                    src={detail.image}
                    alt={detail.label}
                    className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${isActive ? "opacity-88" : "opacity-62"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/84 to-transparent" />
                  <p className={`absolute bottom-3 left-4 font-display text-sm font-black ${isActive ? "text-soft" : "text-white"}`}>{number}</p>
                  <span className={`absolute right-4 top-4 h-2.5 w-2.5 rounded-full ${isActive ? "bg-soft" : "bg-white/60 group-hover:bg-electric"}`} />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-black">{title}</h3>
                  <p className={`mt-3 text-sm leading-6 ${isActive ? "text-slate-300" : "text-slate-600"}`}>{text}</p>
                  <div className={`mt-5 flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] ${isActive ? "text-soft" : "text-electric"}`}>
                    Ver etapa
                    <ArrowRight size={14} strokeWidth={1.9} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StackTrust() {
  const stack = ["React", "Tailwind", "Node.js", "n8n", "Make", "WordPress", "APIs", "CRM"];

  return (
    <section className="bg-ink py-20 text-white">
      <div className="overflow-hidden border-y border-white/10">
        <div className="marquee-track flex w-max gap-4 py-6">
          {[...stack, ...stack, ...stack, ...stack].map((item, index) => (
            <span key={`${item}-${index}`} className="rounded-xl border border-white/10 bg-white/8 px-6 py-3 font-display text-sm font-black uppercase tracking-[0.16em] text-soft">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <TrustCard icon={ShieldCheck} title="Entrega documentada" text="Cada flujo se entrega con instrucciones claras y soporte para que no dependa de memoria." />
        <TrustCard icon={Layers3} title="Escalable por etapas" text="Primero el cuello de botella mas caro. Luego se agregan piezas sin rehacer todo." />
        <TrustCard icon={Sparkles} title="Diseño premium" text="No se trata solo de automatizar: la experiencia visual tambien debe inspirar confianza." />
      </div>
    </section>
  );
}

function TrustCard({ icon: Icon, title, text }) {
  return (
    <article data-reveal className="rounded-[1.5rem] border border-white/10 bg-white/8 p-6 glass-edge">
      <Icon className="text-soft" size={28} strokeWidth={1.8} />
      <h3 className="mt-5 font-display text-xl font-black text-white">{title}</h3>
      <p className="mt-3 text-slate-300">{text}</p>
    </article>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.78fr_1.22fr]">
        <div data-reveal>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-electric">Preguntas</p>
          <h2 className="mt-4 font-display text-3xl font-black leading-tight tracking-tight">Antes de automatizar, conviene aclarar esto.</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((item, index) => (
            <article data-reveal key={item.question} className="rounded-2xl border border-slate-200 bg-canvas">
              <button
                type="button"
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left font-display font-black text-ink transition active:scale-[0.99]"
              >
                {item.question}
                <ChevronDown className={`shrink-0 text-electric transition-transform duration-300 ${open === index ? "rotate-180" : ""}`} size={20} strokeWidth={1.8} />
              </button>
              {open === index && <p className="px-6 pb-6 text-slate-600">{item.answer}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") || "");

    if (!email.includes("@")) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 850);
  }

  return (
    <section id="contacto" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-reveal className="rounded-[2rem] bg-ink p-8 text-white shadow-diffusion">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-soft">Contacto</p>
          <h2 className="mt-4 font-display text-3xl font-black leading-tight tracking-tight">
            Hablemos de la parte de tu negocio que se repite demasiado.
          </h2>
          <p className="mt-6 text-slate-300">
            En la auditoria reviso tu web, tu captacion y tus tareas manuales para proponerte el primer sistema que conviene construir.
          </p>
          <div className="mt-10 space-y-4">
            <ContactLine icon={Phone} text="+34 697955919" href="tel:+34697955919" />
            <ContactLine icon={Mail} text="ubedadesarrolloweb@gmail.com" href="mailto:ubedadesarrolloweb@gmail.com" />
            <ContactLine icon={MessageSquareText} text="Barcelona · remoto para España" href="#contacto" />
          </div>
        </div>

        <form data-reveal onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-diffusion sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nombre" name="name" placeholder="Tu nombre" required />
            <Field label="Empresa" name="company" placeholder="Negocio o proyecto" />
          </div>
          <div className="mt-5">
            <Field label="Correo electronico" name="email" placeholder="nombre@empresa.com" required />
          </div>
          <label className="mt-5 block">
            <span className="text-sm font-bold text-ink">Que quieres mejorar</span>
            <textarea
              name="message"
              className="mt-2 min-h-36 w-full rounded-xl border border-slate-200 bg-canvas px-4 py-3 text-ink outline-none transition focus:border-electric focus:ring-4 focus:ring-electric/15"
              placeholder="Cuentame que proceso repites, que herramientas usas y que resultado buscas."
              required
            />
          </label>

          {status === "error" && <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">Revisa el correo antes de enviar.</p>}
          {status === "success" && <p className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">Mensaje listo. Puedes conectarlo a tu proveedor de formularios cuando publiques la web.</p>}
          {status === "loading" && (
            <div className="mt-4 grid gap-2">
              <div className="h-3 w-full animate-pulse rounded bg-slate-200" />
              <div className="h-3 w-2/3 animate-pulse rounded bg-slate-200" />
            </div>
          )}

          <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-electric px-6 py-4 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-ink active:scale-[0.98]">
            Enviar solicitud
            <ArrowRight size={18} strokeWidth={1.9} />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, placeholder, required = false }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-ink">{label}</span>
      <input
        name={name}
        required={required}
        className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-canvas px-4 text-ink outline-none transition focus:border-electric focus:ring-4 focus:ring-electric/15"
        placeholder={placeholder}
      />
    </label>
  );
}

function ContactLine({ icon: Icon, text, href }) {
  return (
    <a href={href} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/8 p-4 text-slate-200 transition duration-300 hover:bg-white/12">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-soft text-ink">
        <Icon size={18} strokeWidth={1.9} />
      </span>
      {text}
    </a>
  );
}

function PortfolioPage({ navigate }) {
  return (
    <section className="min-h-[100dvh] bg-ink pt-28 text-white">
      <div className="noise-overlay absolute inset-x-0 top-0 h-[520px] opacity-80" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div data-reveal>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-soft">Portfolio</p>
            <h1 className="mt-5 font-display text-4xl font-black leading-none tracking-tight sm:text-5xl lg:text-6xl">
              Proyectos que combinan diseño, codigo y automatizacion.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300">
              Una muestra inicial de webs, captadores de leads, formularios automatizados y agentes de IA creados para negocios reales. Esta pagina queda preparada para seguir agregando nuevos casos.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-electric px-6 py-4 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink active:scale-[0.98]"
              >
                Ver proyectos
                <ArrowRight size={18} strokeWidth={1.9} />
              </a>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="inline-flex items-center justify-center rounded-xl border border-white/14 bg-white/8 px-6 py-4 font-bold text-white glass-edge transition duration-300 hover:-translate-y-0.5 hover:bg-white/14 active:scale-[0.98]"
              >
                Volver al inicio
              </button>
            </div>
          </div>

          <div data-reveal className="grid grid-cols-3 gap-3 rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 glass-edge">
            {[
              ["3", "proyectos publicados"],
              ["2", "agentes IA integrados"],
              ["React", "codigo a medida"],
            ].map(([metric, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <p className="font-display text-2xl font-black text-soft">{metric}</p>
                <p className="mt-2 text-xs font-bold text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="proyectos" className="mt-14 grid gap-6">
          {portfolioProjects.map((project, index) => (
            <PortfolioCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div data-reveal className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 text-center glass-edge">
          <p className="font-display text-2xl font-black text-white">Mas proyectos en camino.</p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            Esta pagina ya tiene la estructura lista para sumar nuevas webs, automatizaciones, agentes y casos de negocio cuando quieras ampliar el portfolio.
          </p>
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ project, index }) {
  return (
    <article
      data-reveal
      className="grid gap-0 overflow-hidden rounded-[2rem] border border-white/10 bg-white text-ink shadow-diffusion lg:grid-cols-[0.68fr_1.32fr]"
    >
      <div className="flex flex-col justify-between p-5 sm:p-6 lg:p-7">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-lg bg-electric/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-electric">
              {project.category}
            </span>
            <span className="rounded-lg bg-ink px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white">
              Proyecto {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h2 className="mt-4 font-display text-2xl font-black leading-tight tracking-tight text-ink sm:text-3xl">
            {project.title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">{project.summary}</p>
          <div className="mt-5 grid gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-canvas px-3 py-2 text-xs font-bold text-slate-700">
                <Check size={14} strokeWidth={2} className="shrink-0 text-electric" />
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6 rounded-2xl bg-ink p-4 text-white">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-soft">Resultado</p>
          <p className="mt-2 text-xs leading-5 text-slate-300">{project.result}</p>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-electric px-4 py-3 text-xs font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink active:scale-[0.98]"
          >
            Ver proyecto en Vercel
            <ArrowRight size={16} strokeWidth={1.9} />
          </a>
        </div>
      </div>
      <PortfolioPreview image={project.image} title={project.title} />
    </article>
  );
}

function PortfolioPreview({ image, title }) {
  return (
    <div className="flex min-h-[360px] items-center justify-center overflow-hidden bg-slate-950 p-3 sm:p-4">
      <img
        src={image}
        alt={`Captura real de ${title}`}
        className="max-h-[520px] w-full object-contain"
        loading="lazy"
      />
    </div>
  );
}

function Footer({ navigate }) {
  const footerServices = services.map(({ title }) => title);
  const socialLinks = [
    ["Instagram", Instagram, "https://www.instagram.com/"],
    ["LinkedIn", Linkedin, "https://www.linkedin.com/"],
    ["Facebook", Facebook, "https://www.facebook.com/"],
    ["WhatsApp", MessageCircle, "https://wa.me/34697955919"],
  ];

  return (
    <footer className="relative overflow-hidden bg-ink px-4 pb-6 pt-12 text-white sm:px-6 lg:px-8">
      <div className="noise-overlay absolute inset-0 opacity-70" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-soft/70 to-transparent" />
      <div className="absolute -right-28 top-6 h-56 w-56 rounded-full bg-electric/14 blur-3xl" />
      <div className="absolute -bottom-36 left-8 h-56 w-56 rounded-full bg-soft/12 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5 glass-edge sm:p-6 lg:grid-cols-[0.95fr_1.05fr] lg:p-6">
          <div>
            <a href="#" className="group inline-flex items-center gap-3">
              <span className="flex h-16 w-24 shrink-0 overflow-hidden rounded-2xl bg-[#d9d8d5] p-1.5 ring-1 ring-soft/60 transition duration-300 group-hover:-translate-y-0.5">
                <img
                  src={logoCreaciones}
                  alt=""
                  className="h-full w-full object-contain"
                  aria-hidden="true"
                />
              </span>
              <span>
                <span className="block font-display text-sm font-black uppercase tracking-[0.16em] text-white">
                  Creaciones Digitales
                </span>
                <span className="mt-0.5 block text-xs font-semibold text-slate-400">
                  Desarrollo web y automatizaciones
                </span>
              </span>
            </a>

            <div className="mt-5 grid gap-2">
              <a href="tel:+34697955919" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-3 text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-soft/50 hover:bg-soft/12 hover:text-white">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-soft text-ink">
                  <Phone size={17} strokeWidth={1.9} />
                </span>
                <span>
                  <span className="block text-[11px] font-black uppercase tracking-[0.16em] text-slate-500">Telefono</span>
                  <span className="text-xs font-bold">+34 697 955 919</span>
                </span>
              </a>
              <a href="mailto:ubedadesarrolloweb@gmail.com" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-3 text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-soft/50 hover:bg-soft/12 hover:text-white">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-soft text-ink">
                  <Mail size={17} strokeWidth={1.9} />
                </span>
                <span>
                  <span className="block text-[11px] font-black uppercase tracking-[0.16em] text-slate-500">Correo</span>
                  <span className="text-xs font-bold">ubedadesarrolloweb@gmail.com</span>
                </span>
              </a>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-3 text-slate-200">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-soft text-ink">
                  <MessageSquareText size={17} strokeWidth={1.9} />
                </span>
                <span>
                  <span className="block text-[11px] font-black uppercase tracking-[0.16em] text-slate-500">Ubicacion</span>
                  <span className="text-xs font-bold">Barcelona · remoto para España</span>
                </span>
              </div>
            </div>
          </div>

          <div className="grid items-start gap-3 sm:grid-cols-[1fr_auto]">
            <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-soft">Servicios</p>
              <div className="mt-4 grid gap-1.5">
                {footerServices.map((serviceName) => (
                  <a
                    key={serviceName}
                    href="#servicios"
                    className="group flex items-center gap-2 rounded-lg border border-white/8 bg-white/[0.04] px-3 py-2 text-xs font-bold text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-soft/50 hover:bg-soft/12 hover:text-white active:scale-[0.98]"
                  >
                    <Check size={14} strokeWidth={2} className="shrink-0 text-soft" />
                    <span>{serviceName}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex sm:justify-end">
              <div className="w-full rounded-2xl bg-white p-3 text-ink shadow-[0_18px_55px_-35px_rgba(15,23,42,0.6)] sm:w-[190px]">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-electric">Redes</p>
                <div className="mt-2.5 grid grid-cols-4 gap-1.5">
                  {socialLinks.map(([label, Icon, href]) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noreferrer"
                      className="grid h-8 place-items-center rounded-lg border border-slate-200 bg-canvas text-ink transition duration-300 hover:-translate-y-0.5 hover:border-electric hover:bg-electric hover:text-white active:scale-[0.98]"
                    >
                      <Icon size={15} strokeWidth={1.9} />
                    </a>
                  ))}
                </div>
                <a
                  href="#contacto"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-electric px-3 py-2 text-[11px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-ink active:scale-[0.98]"
                >
                  Pedir auditoria gratis
                  <ArrowRight size={13} strokeWidth={1.9} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold">© 2026 Creaciones Digitales. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#servicios" className="transition hover:text-soft">Servicios</a>
            <a href="#contacto" className="transition hover:text-soft">Contacto</a>
            <a href="#contacto" className="transition hover:text-soft">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div data-reveal className="max-w-3xl">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-electric">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl font-black leading-tight tracking-tight text-ink sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-[65ch] text-base leading-7 text-slate-600">{text}</p>
    </div>
  );
}

export default App;
