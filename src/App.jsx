import { useEffect, useRef, useState } from "react";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { EASE_OUT, magneticButtons, revealOnScroll } from "./motionFx";
import logoClarea from "./assets/logo-clarea.png";
import Home from "./Home";
import { WhatsAppIcon } from "./icons";
import portfolioBlueIsland from "./assets/portfolio-blue-island.webp";
import portfolioBlueIslandTablet from "./assets/portfolio-blue-island-tablet.webp";
import portfolioBlueIslandMobile from "./assets/portfolio-blue-island-mobile.webp";
import portfolioYouEyes from "./assets/portfolio-you-eyes.webp";
import portfolioYouEyesTablet from "./assets/portfolio-you-eyes-tablet.webp";
import portfolioYouEyesMobile from "./assets/portfolio-you-eyes-mobile.webp";
import portfolioDogDreams from "./assets/portfolio-dogdreams.webp";
import portfolioDogDreamsTablet from "./assets/portfolio-dogdreams-tablet.webp";
import portfolioDogDreamsMobile from "./assets/portfolio-dogdreams-mobile.webp";
import portfolioRestaurant from "./assets/portfolio-restaurante-full.webp";
import portfolioRestaurantTablet from "./assets/portfolio-restaurante-tablet-full.webp";
import portfolioRestaurantMobile from "./assets/portfolio-restaurante-mobile.webp";
import shotBluePortada from "./assets/pantallas/blue-portada.webp";
import shotBluePortadaTablet from "./assets/pantallas/blue-portada-tablet.webp";
import shotBluePortadaMobile from "./assets/pantallas/blue-portada-mobile.webp";
import shotBlueCapitan from "./assets/pantallas/blue-capitan.webp";
import shotBlueCapitanTablet from "./assets/pantallas/blue-capitan-tablet.webp";
import shotBlueCapitanMobile from "./assets/pantallas/blue-capitan-mobile.webp";
import shotBlueReservas from "./assets/pantallas/blue-reservas.webp";
import shotBlueReservasTablet from "./assets/pantallas/blue-reservas-tablet.webp";
import shotBlueReservasMobile from "./assets/pantallas/blue-reservas-mobile.webp";
import shotZappiCategorias from "./assets/pantallas/zappi-categorias.webp";
import shotZappiCategoriasTablet from "./assets/pantallas/zappi-categorias-tablet.webp";
import shotZappiCategoriasMobile from "./assets/pantallas/zappi-categorias-mobile.webp";
import shotZappiCarta from "./assets/pantallas/zappi-carta.webp";
import shotZappiCartaTablet from "./assets/pantallas/zappi-carta-tablet.webp";
import shotZappiCartaMobile from "./assets/pantallas/zappi-carta-mobile.webp";
import shotZappiCarrito from "./assets/pantallas/zappi-carrito.webp";
import shotZappiCarritoTablet from "./assets/pantallas/zappi-carrito-tablet.webp";
import shotZappiCarritoMobile from "./assets/pantallas/zappi-carrito-mobile.webp";
import shotYouPortada from "./assets/pantallas/you-portada.webp";
import shotYouPortadaTablet from "./assets/pantallas/you-portada-tablet.webp";
import shotYouPortadaMobile from "./assets/pantallas/you-portada-mobile.webp";
import shotYouMultimedia from "./assets/pantallas/you-multimedia.webp";
import shotYouMultimediaTablet from "./assets/pantallas/you-multimedia-tablet.webp";
import shotYouMultimediaMobile from "./assets/pantallas/you-multimedia-mobile.webp";
import shotYouPie from "./assets/pantallas/you-pie.webp";
import shotYouPieTablet from "./assets/pantallas/you-pie-tablet.webp";
import shotYouPieMobile from "./assets/pantallas/you-pie-mobile.webp";
import shotDogHotel from "./assets/pantallas/dog-hotel.webp";
import shotDogHotelTablet from "./assets/pantallas/dog-hotel-tablet.webp";
import shotDogHotelMobile from "./assets/pantallas/dog-hotel-mobile.webp";
import shotDogReservar from "./assets/pantallas/dog-reservar.webp";
import shotDogReservarTablet from "./assets/pantallas/dog-reservar-tablet.webp";
import shotDogReservarMobile from "./assets/pantallas/dog-reservar-mobile.webp";
import shotDogServicios from "./assets/pantallas/dog-servicios.webp";
import shotDogServiciosTablet from "./assets/pantallas/dog-servicios-tablet.webp";
import shotDogServiciosMobile from "./assets/pantallas/dog-servicios-mobile.webp";
import shotLuxNovedades from "./assets/pantallas/lux-novedades.webp";
import shotLuxCarrito from "./assets/pantallas/lux-carrito.webp";
import portfolioDelux from "./assets/portfolio-delux-full.webp";


// Production URL of the n8n "Chat Trigger" node. The chat widget stays off while this is empty.
const N8N_CHAT_URL = "https://n8n.creaciones-digitales.com/webhook/5c3d9e2a-7b41-4f6e-9a12-cd0a8e7f4b21/chat";
const WHATSAPP_URL = "https://wa.me/34697955919?text=" + encodeURIComponent("Hola, vengo de la web y quiero información.");
const EMAIL = "ubedadesarrolloweb@gmail.com";
const PHONE = "+34 697 955 919";
const INSTAGRAM_URL = "https://www.instagram.com/holaclarea/";

// The real n8n flow behind the chat on this site.
const FLOW_IMAGE = "/img/flujo-n8n-chatbot.png";

const services = [
  {
    id: "web-profesional",
    title: "Desarrollo web",
    short: "Web",
    audience: "Negocios que hoy dependen de Instagram o del boca a boca",
    promise: "Una web clara y rápida, pensada para que te escriban",
    items: [
      "Hasta 5 páginas con diseño y textos adaptados",
      "Formulario y WhatsApp conectados: cada consulta te llega al momento",
      "Preparada para Google desde el primer día",
      "Formación para actualizarla sin depender de mí",
    ],
    timeline: "3 días",
    buildDays: [3, 3],
    amount: 500,
    price: "Desde 500 €",
    offer: "Oferta de lanzamiento",
    cta: "Quiero mi web",
    slug: "desarrollo-web-ecommerce",
    image: portfolioBlueIsland,
    imageAlt: "Web de Blue Island Boats, hecha por Clarea",
    pageTitle: "Desarrollo web",
    metaTitle: "Desarrollo web y tiendas online | Clarea",
    metaDescription:
      "Webs rápidas y tiendas online pensadas para que te escriban y te compren, con formulario y WhatsApp conectados y listas para Google. Webs desde 500 €, en 3 días.",
    problem:
      "Si tu negocio vive solo en Instagram o en el boca a boca, cada persona que te busca en Google acaba en la web de otro. Una página clara, rápida y conectada a tu WhatsApp convierte esas búsquedas en consultas.",
    faqs: [
      ["¿Qué necesito tener preparado?", "Tu logo, una idea de lo que quieres contar y fotos si las tienes. El diseño y los textos están incluidos: los adaptamos juntos."],
      ["¿Podré actualizarla yo?", "Sí. Te enseño a cambiar textos, fotos y precios para que no dependas de nadie en el día a día."],
      ["¿También haces tiendas online?", "Sí: catálogo, carrito, pasarela de pago y envíos. El precio depende del número de productos y de la pasarela, así que te envío un presupuesto cerrado en 48 horas."],
      ["¿Qué pasa después de la entrega?", "Tienes 30 días de soporte incluidos. Después puedes contratar el mantenimiento mensual desde 49 € al mes."],
    ],
  },
  {
    id: "agenda-automatica",
    title: "Agenda automática",
    short: "Agenda",
    audience: "Clínicas, centros de estética, veterinarias y otros negocios con cita previa",
    promise: "Tus clientes reservan, confirman y reciben el recordatorio sin que nadie llame",
    items: [
      "Confirmación al instante al reservar",
      "Recordatorio por WhatsApp 24 horas antes",
      "Lista de espera para cubrir cancelaciones",
      "Encuesta tras la cita y petición de reseña en Google",
    ],
    timeline: "5 días",
    buildDays: [5, 5],
    amount: 390,
    price: "Desde 390 €",
    offer: "Oferta de lanzamiento",
    cta: "Quiero la agenda",
    slug: "agenda-automatica",
    image: portfolioDogDreamsTablet,
    imageAlt: "Reserva de citas de la clínica veterinaria DogDreams",
    pageTitle: "Agenda automática",
    pageLead: "Con recordatorios por WhatsApp 24 horas antes de cada cita.",
    metaTitle: "Agenda automática con WhatsApp | Clarea",
    metaDescription:
      "Tus clientes reservan online, reciben la confirmación al instante y un recordatorio por WhatsApp 24 horas antes. Para clínicas, centros de estética y veterinarias. Desde 390 €.",
    problem:
      "Cada cita que se olvida es un hueco que no se cobra, y cada llamada para confirmar es tiempo que no dedicas a tus clientes. La agenda automática confirma, recuerda y ayuda a cubrir cancelaciones sin que nadie tenga que coger el teléfono.",
    faqs: [
      ["¿Funciona con la agenda que ya uso?", "Depende de la herramienta. En la auditoría gratuita reviso cómo gestionas hoy las citas y te digo si conviene conectarla con lo que ya usas o montarla desde cero."],
      ["¿Cómo llegan los recordatorios?", "Por WhatsApp, 24 horas antes de cada cita."],
      ["¿Qué pasa si un cliente cancela?", "La lista de espera sirve para ofrecer ese hueco a otra persona y que no se quede vacío."],
      ["¿Cuánto tarda en estar lista?", "Unos 5 días desde que cerramos la propuesta, con 30 días de soporte incluidos."],
    ],
  },
  {
    id: "automatizaciones",
    title: "Automatización a medida",
    short: "Automatización",
    audience: "Equipos que copian datos entre herramientas o repiten los mismos correos",
    promise: "Convierto la tarea que más horas os quita en un flujo que funciona solo",
    items: [
      "Análisis de cómo trabajáis hoy",
      "Conexión entre lo que ya usáis: correo, hojas de cálculo, CRM, WhatsApp",
      "Pruebas y documentación",
      "30 días de soporte incluidos",
    ],
    timeline: "1 o 2 semanas",
    buildDays: [5, 10],
    amount: 390,
    price: "Desde 390 €",
    offer: "Oferta de lanzamiento",
    cta: "Quiero automatizar",
    slug: "automatizacion-a-medida",
    image: FLOW_IMAGE,
    imageAlt: "Flujo de n8n del chat de esta web: mensaje recibido, agente de IA, memoria y hoja de preguntas frecuentes",
    pageTitle: "Automatizaciones",
    pageLead: "Flujos con n8n que conectan correo, hojas de cálculo, CRM y WhatsApp.",
    metaTitle: "Automatización de procesos con n8n | Clarea",
    metaDescription:
      "Convierto tareas repetitivas en flujos automáticos que conectan correo, hojas de cálculo, CRM y WhatsApp. Con pruebas, documentación y 30 días de soporte. Desde 390 €.",
    problem:
      "Copiar datos de un sitio a otro, mandar los mismos correos o pasar pedidos a una hoja de cálculo se come horas cada semana. Una automatización hace ese trabajo sola, sin errores y a cualquier hora.",
    faqs: [
      ["¿Por dónde empezamos?", "Por la tarea que más horas os quita. En la auditoría gratuita de 30 minutos detectamos las tres que más compensa automatizar."],
      ["¿Qué pasa si algo deja de funcionar?", "Entrego cada flujo probado y documentado, con 30 días de soporte. Después puedes contratar el mantenimiento mensual desde 49 € al mes."],
    ],
  },
];


// The line-up: every web and every automation, with its time and price.
const lineup = [
  {
    group: "Webs que hago",
    rows: [
      ["Landing page", "Una página, una acción: escribirte", "3 días", "desde 500 €"],
      ["Web corporativa", "Servicios, quién eres y contacto", "3 días", "desde 500 €"],
      ["Micrositio", "Un producto, un evento o una campaña", "3 días", "desde 500 €"],
      ["Portafolio online", "Tu trabajo, para creativos", "3 días", "desde 500 €"],
      ["Blog o revista digital", "Artículos que atraen visitas", "a medida", "presupuesto en 48 h"],
      ["Tienda online", "Catálogo, carrito, pago y envíos", "a medida", "presupuesto en 48 h"],
      ["Aplicación web", "Paneles y portales de clientes", "a medida", "presupuesto en 48 h"],
    ],
  },
  {
    group: "Lo que automatizo",
    rows: [
      ["Agenda automática", "Reservas con confirmación al instante", "5 días", "desde 390 €"],
      ["Recordatorios por WhatsApp", "Un aviso 24 horas antes de cada cita", "5 días", "en la agenda"],
      ["Formularios conectados", "Cada consulta, a tu correo o WhatsApp", "1–2 semanas", "desde 390 €"],
      ["Seguimiento de clientes", "Mensajes a quien no ha respondido", "1–2 semanas", "desde 390 €"],
      ["Respuestas automáticas", "La primera respuesta, a cualquier hora", "1–2 semanas", "desde 390 €"],
      ["Procesos a medida", "Datos entre herramientas e informes", "1–2 semanas", "desde 390 €"],
      ["Mantenimiento", "Actualizaciones y 2 h de mejoras", "cada mes", "49 € al mes"],
    ],
  },
];

const SITE_URL = "https://www.creaciones-digitales.com";

// The home services section: two tabs of cards, no prices, every card with its delivery time.
const serviceCatalog = [
  {
    id: "web",
    tab: "Desarrollo web",
    intro: "Webs rápidas, claras y pensadas para una sola cosa: que te escriban, reserven o compren.",
    page: "/servicios/desarrollo-web-ecommerce",
    pageLabel: "Todo sobre desarrollo web",
    items: [
      {
        name: "Web que capta clientes",
        featured: true,
        hook: "Tu negocio, listo para recibir clientes",
        text: "Una web corporativa con tus servicios, quién eres y una forma clara de contactarte. Cada consulta te llega al momento por correo o WhatsApp.",
        includes: ["Hasta 5 páginas con diseño y textos adaptados a tu negocio", "Formulario y WhatsApp conectados", "Preparada para Google desde el primer día", "Formación para actualizarla tú"],
        time: "3 días",
      },
      {
        name: "Landing page",
        hook: "Una página, una acción: escribirte",
        text: "Para una campaña, un servicio o un anuncio. Todo el contenido empuja hacia un solo objetivo, sin distracciones.",
        includes: ["Estructura pensada para convertir", "Llamada a la acción visible en cada pantalla", "Conexión con formulario, WhatsApp o agenda", "Lista para campañas de Google y redes sociales"],
        time: "3 días",
      },
      {
        name: "Web con reservas",
        hook: "Que reserven sin llamarte",
        text: "Para clínicas, centros de estética, restaurantes, alojamientos o actividades. Tus clientes eligen día y hora, y la reserva queda confirmada al instante.",
        includes: ["Calendario de reservas integrado en tu web", "Confirmación automática por WhatsApp o correo", "Recordatorio antes de cada cita", "Gestión de cancelaciones y huecos libres"],
        time: "5 días",
        page: "/servicios/agenda-automatica",
      },
      {
        name: "Tienda online",
        hook: "Vende mientras atiendes tu negocio",
        text: "Catálogo, carrito, pago y envíos en una tienda fácil de gestionar. Cada pedido te llega avisado y el cliente recibe la confirmación al momento.",
        includes: ["Catálogo con fichas de producto claras", "Pasarela de pago segura", "Gestión de envíos y avisos al cliente", "Formación para subir productos tú"],
        time: "a medida, presupuesto en 48 h",
      },
      {
        name: "Portafolio y micrositio",
        hook: "Tu trabajo, presentado como merece",
        text: "Para creativos, profesionales, eventos o lanzamientos de producto. Una web que muestra lo que haces y convierte visitas en contactos.",
        includes: ["Galería o presentación visual del trabajo", "Formulario de contacto o solicitud de presupuesto", "Diseño adaptado a móvil", "Optimizada para cargar rápido"],
        time: "3 días",
      },
      {
        name: "Rediseño de web",
        hook: "Tu web actual, pero que funcione",
        text: "Si tu web ya existe pero no genera consultas, la reviso, la ordeno y la convierto en una herramienta de captación.",
        includes: ["Análisis de lo que hoy frena las consultas", "Nuevo diseño y textos más claros", "Conexión con WhatsApp, formularios y agenda", "Mejoras de velocidad y posicionamiento"],
        time: "3–7 días",
      },
      {
        name: "Blog y posicionamiento en Google",
        hook: "Que te encuentren cuando te buscan",
        text: "Contenido y estructura para aparecer en Google y en los buscadores con IA, como ChatGPT, en búsquedas de tu zona y de tu servicio.",
        includes: ["Blog fácil de mantener", "SEO local: Google Business Profile y páginas por zona", "Optimización para buscadores con IA", "Medición de visitas y consultas"],
        time: "a medida, presupuesto en 48 h",
      },
      {
        name: "Aplicación web",
        hook: "Tu proceso, en una herramienta propia",
        text: "Paneles internos, portales de clientes o herramientas a medida cuando las plantillas no alcanzan.",
        includes: ["Acceso con usuario para clientes o equipo", "Paneles con la información que necesitas", "Conexión con tus herramientas actuales", "Documentación y soporte"],
        time: "a medida, presupuesto en 48 h",
      },
    ],
  },
  {
    id: "automatizaciones",
    tab: "Automatizaciones",
    intro: "Cuéntame qué repites cada semana y te digo cómo quitártelo de encima. Conecto lo que ya usas (WhatsApp, correo, hojas de cálculo, agenda, CRM) para que trabaje solo.",
    page: "/servicios/automatizacion-a-medida",
    pageLabel: "Todo sobre automatizaciones",
    items: [
      {
        name: "Agente de IA en WhatsApp",
        featured: true,
        hook: "Respuestas al instante, también a las 23 h",
        text: "Un asistente con inteligencia artificial que responde en WhatsApp e Instagram como lo harías tú: informa servicios, horarios y disponibilidad, agenda y te pasa solo las conversaciones importantes.",
        includes: ["Entrenado con la información de tu negocio", "Conectado a tu agenda, catálogo o stock", "Derivación a una persona cuando hace falta", "Resumen de conversaciones y contactos nuevos"],
        time: "1–2 semanas",
      },
      {
        name: "Agenda automática con recordatorios",
        hook: "Menos olvidos, más citas cumplidas",
        text: "Reservas con confirmación al instante y un aviso por WhatsApp 24 horas antes. Si alguien cancela, el hueco se ofrece a la lista de espera.",
        includes: ["Reserva online 24/7", "Recordatorio con opción de confirmar o cambiar", "Lista de espera automática", "Avisos a ti y a tu equipo"],
        time: "5 días",
        page: "/servicios/agenda-automatica",
      },
      {
        name: "Captación y seguimiento de clientes",
        hook: "Ningún contacto se queda sin respuesta",
        text: "Cada consulta de tu web, redes o anuncios entra a un solo lugar y recibe respuesta inmediata. A quien no contesta le llega un seguimiento automático en el momento justo.",
        includes: ["Formularios y redes conectados a correo, WhatsApp o CRM", "Primera respuesta automática a cualquier hora", "Mensajes de seguimiento a quien no ha respondido", "Aviso cuando un cliente está listo para cerrar"],
        time: "1–2 semanas",
      },
      {
        name: "Recepcionista telefónica con IA",
        hook: "Ninguna llamada perdida",
        text: "Un asistente de voz atiende el teléfono cuando tú no puedes: responde dudas frecuentes, toma reservas y te deja el resumen de cada llamada.",
        includes: ["Atención 24/7 en español y otros idiomas", "Reservas conectadas a tu agenda", "Resumen de cada llamada por WhatsApp o correo", "Derivación a una persona en casos importantes"],
        time: "1–2 semanas",
      },
      {
        name: "Presupuestos automáticos",
        hook: "Tu presupuesto, enviado el mismo día",
        text: "El cliente rellena un formulario o te escribe, y el sistema prepara el presupuesto con tu plantilla, lo envía y hace el seguimiento.",
        includes: ["Plantilla de presupuesto con tu marca", "Generación a partir de un formulario o una conversación", "Envío automático en PDF", "Recordatorio si el cliente no responde"],
        time: "1–2 semanas",
      },
      {
        name: "Reseñas en Google y reactivación de clientes",
        hook: "Clientes contentos que lo cuentan",
        text: "Después de cada servicio pido la reseña en el momento justo y contacto a los clientes que hace tiempo no vuelven.",
        includes: ["Petición de reseña automática tras la visita o compra", "Aviso si llega una reseña negativa", "Mensajes de reactivación y recordatorios de revisión", "Campañas para fechas o días con menos movimiento"],
        time: "1 semana",
      },
      {
        name: "Cobros y facturación automática",
        hook: "Cobras sin perseguir a nadie",
        text: "Links de pago, señas para reservas, facturas que se generan solas al cobrar y recordatorios a quien tiene pagos pendientes.",
        includes: ["Links de pago y señas para evitar ausencias", "Factura automática al recibir el pago", "Recordatorios de pagos pendientes", "Preparado para Verifactu"],
        time: "1–2 semanas",
      },
      {
        name: "Documentos y datos sin copiar a mano",
        hook: "Lo que hoy copias, se carga solo",
        text: "Facturas, pedidos, formularios o fichas de clientes que la IA lee, ordena y pasa a tus hojas de cálculo o sistemas.",
        includes: ["Lectura automática de PDF, correos e imágenes", "Datos ordenados en tu hoja de cálculo o CRM", "Datos que pasan de una herramienta a otra solos", "Alertas cuando falta información"],
        time: "1–2 semanas",
      },
      {
        name: "Informes automáticos",
        hook: "Tus números, sin hacer planillas",
        text: "Un resumen semanal por correo o WhatsApp con consultas, reservas, ventas y lo que necesita tu atención.",
        includes: ["Panel con los datos clave de tu negocio", "Resumen semanal automático", "Datos de varias herramientas en un solo lugar", "Alertas cuando algo se sale de lo normal"],
        time: "1–2 semanas",
      },
      {
        name: "Procesos a medida",
        hook: "Si lo repites, se puede automatizar",
        text: "Para tareas propias de tu negocio que no encajan en un servicio estándar. Analizo cómo trabajas y construyo el flujo exacto.",
        includes: ["Análisis del proceso actual", "Automatización conectada a tus herramientas", "Pruebas antes de ponerlo en marcha", "Documentación para tu equipo"],
        time: "1–2 semanas",
      },
      {
        name: "Mantenimiento y mejoras",
        hook: "Funciona hoy y sigue funcionando",
        text: "Vigilo tus automatizaciones y tu web, aplico actualizaciones y hago mejoras cada mes para que nada se rompa sin que te enteres.",
        includes: ["Monitoreo de automatizaciones y web", "Actualizaciones y copias de seguridad", "Horas de mejoras cada mes", "Soporte por WhatsApp"],
        time: "cada mes",
      },
    ],
  },
];

// schema.org Service for every card, rendered into the prerendered HTML.
const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": serviceCatalog.flatMap((block) =>
    block.items.map((item) => ({
      "@type": "Service",
      name: item.name,
      description: item.text,
      serviceType: block.tab,
      url: `${SITE_URL}${item.page || block.page}`,
      areaServed: { "@type": "Country", name: "España" },
      provider: { "@type": "ProfessionalService", name: "Clarea", url: `${SITE_URL}/`, telephone: PHONE },
    })),
  ),
};

const portfolioProjects = [
  {
    title: "Reservas de barco que no se pierden entre mensajes",
    category: "Chárter náutico",
    url: "https://blue-island-boat.vercel.app/",
    summary: "Web de presentación con solicitud de presupuesto y seguimiento automático de quien no responde.",
    tags: [
      "Solicitud de presupuesto conectada a WhatsApp y Gmail",
      "Seguimiento automático de interesados",
      "Recuperación automática de reservas pendientes",
      "Respuestas rápidas sobre disponibilidad y precios",
      "Presentación premium de embarcaciones y rutas",
    ],
    result: "Configura una salida y pide presupuesto.",
    image: portfolioBlueIsland,
    tablet: portfolioBlueIslandTablet,
    mobile: portfolioBlueIslandMobile,
    screens: [
      [shotBluePortada, "Portada", shotBluePortadaTablet, shotBluePortadaMobile],
      [shotBlueCapitan, "El capitán", shotBlueCapitanTablet, shotBlueCapitanMobile],
      [shotBlueReservas, "Formulario de reserva", shotBlueReservasTablet, shotBlueReservasMobile],
    ],
    name: "Blue Island Boats",
    webType: "Web de reservas",
  },
  {
    title: "Citas confirmadas sin llamar a nadie",
    category: "Hotel, guardería y spa canino",
    url: "https://veterinaria-dd.vercel.app/",
    summary: "Reserva online con recordatorio automático y reagenda de los huecos libres.",
    tags: ["Recordatorios 24h antes por WhatsApp", "Formulario previo conectado al CRM", "Reagenda automática para huecos libres", "Panel interno para seguimiento comercial"],
    result: "Reserva una visita de prueba.",
    image: portfolioDogDreams,
    tablet: portfolioDogDreamsTablet,
    mobile: portfolioDogDreamsMobile,
    screens: [
      [shotDogHotel, "Portada", shotDogHotelTablet, shotDogHotelMobile],
      [shotDogServicios, "Lo que hacemos", shotDogServiciosTablet, shotDogServiciosMobile],
      [shotDogReservar, "Reservar por WhatsApp", shotDogReservarTablet, shotDogReservarMobile],
    ],
    name: "DogDreams",
    webType: "Agenda para cita previa",
  },
  {
    title: "Carta digital con pedido online para restaurantes",
    category: "Restaurante",
    url: "https://zappi-app.vercel.app/",
    summary: "Tienda pensada para móvil: el cliente elige por categorías, añade al carrito y completa su pedido en pocos pasos.",
    tags: ["Catálogo por categorías", "Carrito de compra", "Proceso de pedido", "Gestión de productos", "Diseño adaptado a la marca"],
    result: "Recorre la carta, añade productos al carrito y llega hasta el final del pedido.",
    image: portfolioRestaurant,
    fullImage: true,
    tablet: portfolioRestaurantTablet,
    mobile: portfolioRestaurantMobile,
    screens: [
      [shotZappiCategorias, "Categorías y favoritos", shotZappiCategoriasTablet, shotZappiCategoriasMobile],
      [shotZappiCarta, "Carta", shotZappiCartaTablet, shotZappiCartaMobile],
      [shotZappiCarrito, "Carrito y pedido", shotZappiCarritoTablet, shotZappiCarritoMobile],
    ],
    name: "Zappi",
    webType: "Carta con pedidos",
  },
  {
    title: "Web de noticias a medida, rápida y fácil de ampliar",
    category: "Medio digital",
    url: "https://you-eyes-net.vercel.app/",
    summary: "Portal desarrollado en React, preparado para sumar secciones y categorías sin rehacer el sitio.",
    tags: [
      "Desarrollo web profesional, no una plantilla genérica",
      "Diseño adaptado al estilo y objetivo del proyecto",
      "Estructura escalable para agregar secciones, categorías y nuevas páginas",
    ],
    result: "Navega por secciones y abre una noticia.",
    image: portfolioYouEyes,
    tablet: portfolioYouEyesTablet,
    mobile: portfolioYouEyesMobile,
    screens: [
      [shotYouPortada, "Portada", shotYouPortadaTablet, shotYouPortadaMobile],
      [shotYouMultimedia, "Multimedia", shotYouMultimediaTablet, shotYouMultimediaMobile],
      [shotYouPie, "Pie de página y radio", shotYouPieTablet, shotYouPieMobile],
    ],
    name: "You Eyes",
    webType: "Medio digital",
  },
  {
    title: "Tienda online con carrito, pasarela de pago y envíos",
    category: "Tienda online",
    // Pending: public store URL, admin demo URL and the gateway test card.
    url: "",
    urlLabel: "Ver la tienda",
    adminUrl: "",
    adminLabel: "Entrar al panel de prueba",
    testCard: "",
    summary: "E-commerce de moda con todo el recorrido de compra y un panel de administración para gestionar la tienda sin depender de nadie.",
    tags: ["Catálogo por categorías", "Buscador de productos", "Lista de deseos", "Cuenta de cliente", "Carrito y pago en modo de prueba"],
    image: portfolioDelux,
    fullImage: true,
    screens: [
      [portfolioDelux, "Portada"],
      [shotLuxNovedades, "Novedades"],
      [shotLuxCarrito, "Producto y carrito"],
    ],
    name: "DE LUX",
    webType: "Tienda online",
  },
];

export function servicePath(service) {
  return `/servicios/${service.slug}`;
}

export const SITE_PAGES = [
  {
    route: "/",
    title: "Webs y automatizaciones en Barcelona | Clarea",
    description:
      "Webs que captan clientes, agendas automáticas con recordatorios por WhatsApp y automatización de procesos para negocios. Auditoría gratuita de 30 minutos. Desde 390 €.",
  },
  ...services.map((service) => ({ route: servicePath(service), title: service.metaTitle, description: service.metaDescription })),
  {
    route: "/portfolio",
    title: "Portfolio de webs y tiendas online | Clarea",
    description: "Proyectos de Clarea: tiendas online, webs de reservas, agendas automáticas y webs a medida en React que puedes abrir y probar.",
  },
  {
    route: "/privacidad",
    title: "Política de privacidad | Clarea",
    description: "Cómo trata Clarea los datos que envías a través del formulario de contacto, WhatsApp o correo.",
  },
  {
    route: "/cookies",
    title: "Política de cookies | Clarea",
    description: "Qué cookies usa creaciones-digitales.com: ninguna. Las visitas se miden sin cookies y sin identificar a nadie.",
  },
];

export const PAGE_TITLES = {
  ...Object.fromEntries(SITE_PAGES.map((page) => [page.route, page.title])),
  404: "Página no encontrada | Clarea",
};

export function normalizePath(pathname) {
  return pathname.replace(/\/+$/, "") || "/";
}

function getCurrentRoute() {
  return normalizePath(window.location.pathname);
}

function App({ initialRoute }) {
  const [route, setRoute] = useState(() => initialRoute ?? getCurrentRoute());

  const currentService = services.find((service) => servicePath(service) === route);

  function navigate(path) {
    window.history.pushState({}, "", path);
    setRoute(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goToSection(hash) {
    if (route !== "/") navigate("/");
    window.setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  }

  function chooseService() {
    goToSection("#contacto");
  }

  useEffect(() => {
    document.title = PAGE_TITLES[route] || PAGE_TITLES[404];
  }, [route]);

  // Each [data-reveal] element rises once when it enters the viewport (Motion, see motionFx.js).
  useEffect(() => revealOnScroll(), [route]);

  // Buttons lean towards the mouse.
  useEffect(() => magneticButtons(), []);

  useEffect(() => {
    function handlePopState() {
      setRoute(getCurrentRoute());
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const isHome = route === "/";

  return (
    <div className="min-h-[100dvh] overflow-x-clip">
      <SkipLink />
      <Nav navigate={navigate} goToSection={goToSection} light={isHome} />
      <main id="contenido">
        {route === "/portfolio" ? (
          <PortfolioPage onChooseService={chooseService} />
        ) : route === "/privacidad" ? (
          <LegalPage title="Política de privacidad" intro="Cómo trato los datos que me envías a través de esta web, de forma clara y en pocas líneas." sections={privacySections} />
        ) : route === "/cookies" ? (
          <LegalPage title="Política de cookies" intro="Qué cookies usa esta web y cómo puedes gestionarlas." sections={cookieSections} navigate={navigate} />
        ) : currentService ? (
          <ServicePage service={currentService} navigate={navigate} onChooseService={chooseService} />
        ) : !isHome ? (
          <NotFoundPage navigate={navigate} />
        ) : (
          <Home
            logo={logoClarea}
            services={services}
            projects={portfolioProjects}
            whatsappUrl={WHATSAPP_URL}
            email={EMAIL}
            phone={PHONE}
            instagramUrl={INSTAGRAM_URL}
            navigate={navigate}
            schema={servicesSchema}
          />
        )}
      </main>
      <Footer navigate={navigate} goToSection={goToSection} />
      <WhatsAppButton />
      <ChatWidget />
    </div>
  );
}

// n8n chat widget, self-hosted in /public/vendor/n8n-chat (copied from @n8n/chat 1.42.4).
// Loaded once, after the page has finished loading and the browser is idle.
const N8N_CHAT_SCRIPT = "/vendor/n8n-chat/loader.js";
const N8N_CHAT_STYLES = "/vendor/n8n-chat/style.css";
let chatStarted = false;

function ChatWidget() {
  useEffect(() => {
    if (!N8N_CHAT_URL || chatStarted) return undefined;

    let idleHandle;
    let timeoutHandle;

    function loadChat() {
      if (chatStarted) return;
      chatStarted = true;

      const styles = document.createElement("link");
      styles.rel = "stylesheet";
      styles.href = N8N_CHAT_STYLES;
      document.head.appendChild(styles);

      // Read by loader.js, which calls createChat once.
      window.__n8nChatOptions = {
        // In dev, go through the Vite proxy (vite.config.js) because n8n only allows CORS from the production domain.
        webhookUrl: import.meta.env.DEV ? N8N_CHAT_URL.replace(/^https:\/\/[^/]+\/webhook/, "/n8n-chat") : N8N_CHAT_URL,
        mode: "window",
        showWelcomeScreen: true,
        loadPreviousSession: false,
        initialMessages: [],
        i18n: {
          en: {
            title: "Clarea",
            subtitle: "Respondemos rápidamente",
            footer: "",
            getStarted: "Envíanos un mensaje",
            inputPlaceholder: "Escribe tu pregunta…",
            closeButtonTooltip: "Cerrar chat",
          },
        },
      };

      // A module <script> tag, because Vite does not allow importing files from /public in source code.
      const script = document.createElement("script");
      script.type = "module";
      script.src = N8N_CHAT_SCRIPT;
      script.onerror = () => {
        chatStarted = false;
      };
      document.body.appendChild(script);
    }

    function scheduleLoad() {
      if ("requestIdleCallback" in window) {
        idleHandle = window.requestIdleCallback(loadChat, { timeout: 4000 });
      } else {
        timeoutHandle = window.setTimeout(loadChat, 2000);
      }
    }

    if (document.readyState === "complete") {
      scheduleLoad();
    } else {
      window.addEventListener("load", scheduleLoad, { once: true });
    }

    return () => {
      window.removeEventListener("load", scheduleLoad);
      if (idleHandle && "cancelIdleCallback" in window) window.cancelIdleCallback(idleHandle);
      if (timeoutHandle) window.clearTimeout(timeoutHandle);
    };
  }, []);

  return null;
}

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbeme por WhatsApp"
      className="float-wa"
      style={{ bottom: N8N_CHAT_URL ? "92px" : "20px" }}
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}

function SkipLink() {
  return (
    <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-3 focus:text-bg">
      Saltar al contenido
    </a>
  );
}

const menuItem = {
  hidden: { opacity: 0, y: 24 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
};

function Nav({ navigate, goToSection, light }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const links = [
    ["Servicios", "#servicios"],
    ["Trabajos", "#trabajos"],
    ["Proceso", "#proceso"],
    ["Contacto", "#contacto"],
  ];

  function handleNav(event, href) {
    event.preventDefault();
    setMenuOpen(false);
    if (href.startsWith("/")) navigate(href);
    else goToSection(href);
  }

  return (
    <header className={`absolute inset-x-0 top-0 z-30 ${light ? "nav-light" : "text-ink"}`}>
      <nav aria-label="Principal" className="wrap flex items-start justify-between gap-4 pt-5 sm:pt-6">
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            setMenuOpen(false);
            navigate("/");
          }}
          aria-label="Clarea, inicio"
          className={`${light ? "invisible" : ""} flex h-12 shrink-0 items-center transition-transform duration-200 hover:-rotate-2`}
        >
          <img src={logoClarea} alt="Clarea" width="1367" height="324" className="h-7 w-auto sm:h-8" />
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href.startsWith("/") ? href : `/${href}`} onClick={(event) => handleNav(event, href)} className="link t-small no-underline hover:underline">
              {label}
            </a>
          ))}
          <a href="/#contacto" onClick={(event) => handleNav(event, "#contacto")} className="btn t-small">
            Pedir auditoría gratis
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="menu-movil"
          className="min-h-[44px] px-1 text-[15px] font-medium underline underline-offset-4 md:hidden"
        >
          {menuOpen ? "Cerrar" : "Menú"}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="menu-movil"
            className="wrap bg-ink pb-8 pt-6 text-bg md:hidden"
            initial={reduceMotion ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            animate={reduceMotion ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
            exit={reduceMotion ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: EASE_OUT }}
          >
            <motion.ul className="grid gap-2" initial="hidden" animate="shown" variants={{ shown: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } } }}>
              {links.map(([label, href]) => (
                <motion.li key={href} variants={menuItem}>
                  <a href={href.startsWith("/") ? href : `/${href}`} onClick={(event) => handleNav(event, href)} className="block py-1 text-[2rem] font-medium leading-tight">
                    {label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.36, duration: 0.4, ease: EASE_OUT }}>
              <a href="/#contacto" onClick={(event) => handleNav(event, "#contacto")} className="btn btn-accent mt-6 w-full">
                Pedir auditoría gratis
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// The project shown on a laptop, a tablet and a phone at once, like the original portfolio slider.
function DeviceShowcase({ project, eager = false, active = true, wide = false }) {
  const loading = eager ? "eager" : "lazy";
  const hasDevices = Boolean(project.tablet && project.mobile);
  const lower = (text) => text.charAt(0).toLowerCase() + text.slice(1);
  // Every screen keeps a descriptive alt for search engines; the hidden ones stay out of the accessibility tree.
  const describe = (caption, device) => `${project.name}, ${lower(project.webType)}: ${lower(caption)} en ${device}`;
  const screens = project.screens?.length ? project.screens : [[project.image, "Portada"]];
  const [screen, setScreen] = useState(0);
  const frameRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: frameRef, offset: ["start end", "end start"] });
  const tabletY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [28, -28]);
  const phoneY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [60, -60]);

  useEffect(() => {
    if (!active || screens.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => setScreen((current) => (current + 1) % screens.length), 3500);
    return () => window.clearInterval(timer);
  }, [active, screens.length, screen]);

  return (
    <div ref={frameRef} className={`relative mx-auto aspect-[16/9] w-full ${wide ? "max-w-5xl" : "max-w-3xl"}`}>
      <div className={`absolute top-[6%] ${hasDevices ? "right-[3%] w-[64%]" : "left-1/2 w-[80%] -translate-x-1/2"}`}>
        <div className="rounded-t-[0.9rem] bg-ink p-[1.4%]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[0.35rem] bg-ink">
            {screens.map(([src, caption], index) => (
              <img
                key={caption}
                src={src}
                alt={describe(caption, "ordenador")}
                aria-hidden={index !== screen}
                loading={index === 0 ? loading : "lazy"}
                className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500 ${index === screen ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>
        </div>
        <div className="mx-[-5%] h-[4%] min-h-2 rounded-b-xl bg-[#a9a7a2]" />
        {screens.length > 1 && (
          <div className="mt-2 flex justify-center gap-1" role="group" aria-label={`Pantallas de ${project.name}`}>
            {screens.map(([, caption], index) => (
              <button
                key={caption}
                type="button"
                onClick={() => setScreen(index)}
                aria-label={caption}
                aria-pressed={index === screen}
                className="grid h-6 place-items-center px-0.5"
              >
                <span className={`block h-1.5 rounded-full transition-[width,background-color] duration-300 ${index === screen ? "w-5 bg-ink" : "w-1.5 bg-muted"}`} />
              </button>
            ))}
          </div>
        )}
      </div>

      {hasDevices && (
        <>
          <motion.div style={{ y: tabletY }} className="absolute left-[2%] top-[20%] w-[27%] rounded-[1.1rem] bg-ink p-[1.6%]">
            <div className="relative aspect-[41/59] overflow-hidden rounded-[0.6rem] bg-ink">
              {screens.map(([, caption, tablet], index) => (
                <img
                  key={caption}
                  src={tablet || project.tablet}
                  alt={describe(caption, "tablet")}
                  aria-hidden={index !== screen}
                  loading={index === 0 ? loading : "lazy"}
                  className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500 ${index === screen ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
          </motion.div>
          <motion.div style={{ y: phoneY }} className="absolute left-[22%] top-[32%] w-[12.5%] rounded-[1.1rem] border-[3px] border-surface bg-ink p-[1%]">
            <div className="relative aspect-[39/84] overflow-hidden rounded-[0.8rem] bg-ink">
              {screens.map(([, caption, , mobile], index) => (
                <img
                  key={caption}
                  src={mobile || project.mobile}
                  alt={describe(caption, "móvil")}
                  aria-hidden={index !== screen}
                  loading={index === 0 ? loading : "lazy"}
                  className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500 ${index === screen ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}

function Lineup({ groups }) {
  return (
    <section id="servicios" aria-label="Servicios" className="section wrap on-dark md:pr-[104px]">
      {groups.map(({ group, rows }, groupIndex) => (
        <div key={group}>
          <h2 className={`lineup-head font-normal ${groupIndex === 0 ? "!mt-0" : ""}`}>{group}</h2>
          <ul>
            {rows.map(([name, what, when, price], index) => (
              <li key={name} data-reveal style={{ "--d": index % 4 }} className="lineup-row">
                <span>{name}</span>
                <span className="what">{what}</span>
                <span className="when">{when}</span>
                <span className="price text-right">{price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

function Faq({ items, title = "Preguntas frecuentes", id = "preguntas" }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="section wrap bg-surface">
      <div className="grid12 gap-y-8">
        <h2 id={`${id}-title`} data-reveal className="t-lead col-span-12 font-medium lg:col-span-3">
          {title}
        </h2>
        <div className="faq-text col-span-12 lg:col-span-8 lg:col-start-5">
          {items.map(([question, answer], index) => (
            <p key={question} data-reveal style={{ "--d": index % 3 }}>
              <strong className="font-medium">{question}</strong> {answer}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicePage({ service, navigate, onChooseService }) {
  const otherServices = services.filter((other) => other.id !== service.id);
  const isWeb = service.id === "web-profesional";

  return (
    <>
      <section className="wrap pb-[var(--section)] pt-36">
        <nav aria-label="Ruta" className="t-small muted">
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              navigate("/");
            }}
            className="link"
          >
            Inicio
          </a>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span>{service.title}</span>
        </nav>
        <h1 data-reveal className="t-head mt-8 max-w-[14ch]">
          {service.pageTitle}
        </h1>
        {service.pageLead && (
          <p data-reveal style={{ "--d": 1 }} className="t-lead mt-6 max-w-[40ch]">
            {service.pageLead}
          </p>
        )}
        <a
          href="/#contacto"
          onClick={(event) => {
            event.preventDefault();
            onChooseService(service.id);
          }}
          className="btn btn-accent mt-8"
        >
          {service.cta} · {service.price.toLowerCase()} <span className="arrow" aria-hidden="true">→</span>
        </a>
        <div className="grid12 mt-16 gap-y-10">
          <p data-reveal style={{ "--d": 2 }} className="col-span-12 max-w-[60ch] lg:col-span-5">
            {service.problem}
          </p>
          <p data-reveal style={{ "--d": 3 }} className="t-lead col-span-12 max-w-[28ch] font-medium lg:col-span-5 lg:col-start-8">
            {service.promise}.
          </p>
        </div>
      </section>

      {isWeb && <Lineup groups={[lineup[0]]} />}

      <Faq items={service.faqs} title={`Sobre ${service.short.toLowerCase()}`} id="preguntas-servicio" />

      <section aria-labelledby="otros-title" className="section wrap">
        <h2 id="otros-title" data-reveal className="t-lead mb-10 font-medium">
          Otros servicios
        </h2>
        <ul>
          {otherServices.map((other, index) => (
            <li key={other.id} data-reveal style={{ "--d": index + 1 }}>
              <a
                href={servicePath(other)}
                onClick={(event) => {
                  event.preventDefault();
                  navigate(servicePath(other));
                }}
                className="work-name"
              >
                <span className="t-head">{other.title}</span>
                <span className="t-lead">
                  {other.price} · {other.timeline}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

function PortfolioPage({ onChooseService }) {
  return (
    <>
      <section className="wrap pb-16 pt-36">
        <h1 data-reveal className="t-head">
          Webs hechas
        </h1>
        <p data-reveal style={{ "--d": 1 }} className="t-lead mt-6 max-w-[38ch]">
          Cinco proyectos reales. Ábrelos y pruébalos: reserva, pide presupuesto o llega hasta el final de un pedido.
        </p>
        <a
          href="/#contacto"
          onClick={(event) => {
            event.preventDefault();
            onChooseService("web-profesional");
          }}
          className="btn btn-accent mt-8"
        >
          Quiero una web así <span className="arrow" aria-hidden="true">→</span>
        </a>
      </section>

      {portfolioProjects.map((project, index) => (
        <article key={project.name} aria-labelledby={`proyecto-${index}`} className={`section wrap ${index % 2 ? "bg-surface" : ""}`}>
          <div data-reveal className={`mx-auto max-w-4xl rounded-[1.75rem] px-6 py-4 sm:px-12 sm:py-6 ${index % 2 ? "bg-bg" : "bg-surface"}`}>
            <DeviceShowcase project={project} eager={index === 0} />
          </div>
          <div className="grid12 mx-auto mt-10 max-w-4xl gap-y-8">
            <div className="col-span-12 lg:col-span-5">
              <h2 id={`proyecto-${index}`} data-reveal className="t-lead font-medium">
                {project.name}
              </h2>
              <p data-reveal style={{ "--d": 1 }} className="t-small muted mt-3">
                {project.category} · {project.webType}
              </p>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <p data-reveal className="t-lead font-medium">
                {project.title}
              </p>
              <p data-reveal style={{ "--d": 1 }} className="mt-4 max-w-[60ch]">
                {project.summary}
              </p>
              <ul data-reveal style={{ "--d": 2 }} className="mt-6 grid gap-1">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              {project.result && (
                <p data-reveal style={{ "--d": 3 }} className="mt-6">
                  <strong className="font-medium">Qué puedes probar:</strong> {project.result}
                </p>
              )}
              {project.testCard && (
                <p className="mt-3">
                  <strong className="font-medium">Tarjeta de prueba:</strong> {project.testCard}
                </p>
              )}
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn">
                    {project.urlLabel || "Abrir la web"} <span className="arrow" aria-hidden="true">→</span>
                  </a>
                ) : (
                  <p className="muted">Enlace de prueba disponible pronto.</p>
                )}
                {project.adminUrl && (
                  <a href={project.adminUrl} target="_blank" rel="noopener noreferrer" className="link">
                    {project.adminLabel}
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>
      ))}

      <section className="section wrap on-accent">
        <p data-reveal className="t-head max-w-[16ch]">
          ¿La siguiente es la tuya?
        </p>
        <a
          href="/#contacto"
          onClick={(event) => {
            event.preventDefault();
            onChooseService("web-profesional");
          }}
          className="btn mt-10"
        >
          Pedir auditoría gratis <span className="arrow" aria-hidden="true">→</span>
        </a>
      </section>
    </>
  );
}

function NotFoundPage({ navigate }) {
  return (
    <section className="on-accent wrap flex min-h-[100svh] flex-col justify-center">
      <h1 className="t-head">Esta página no existe</h1>
      <p className="t-lead mt-6 max-w-[34ch]">Puede que el enlace esté mal escrito o que la página se haya movido.</p>
      <a
        href="/"
        onClick={(event) => {
          event.preventDefault();
          navigate("/");
        }}
        className="btn mt-10 self-start"
      >
        Volver al inicio <span className="arrow" aria-hidden="true">→</span>
      </a>
    </section>
  );
}

const cookieSections = [
  ["Qué son las cookies", "Son pequeños archivos que algunas webs guardan en tu navegador para recordar datos de tu visita, como tus preferencias o tu sesión, o para medir cómo se usa la web."],
  ["Esta web no usa cookies", "creaciones-digitales.com no instala cookies propias ni de terceros, ni de análisis ni de publicidad. Por eso no te mostramos un aviso para aceptarlas."],
  [
    "Chat de la web",
    "Para que el chat funcione, se guarda en el almacenamiento local de tu navegador un identificador de conversación (n8n-chat/sessionId). No es una cookie de seguimiento ni sirve para identificarte, y puedes borrarlo desde la configuración de tu navegador.",
  ],
  ["Medición de visitas sin cookies", "Para saber cuántas personas visitan la web uso Vercel Web Analytics, que cuenta las visitas de forma agregada sin instalar cookies ni identificar a nadie."],
  ["Fuentes y recursos", "Las tipografías y las imágenes se sirven desde esta misma web. No cargamos recursos de Google Fonts ni de otros servicios externos que puedan instalar cookies."],
  ["Enlaces a otras webs", "Si pulsas el botón de WhatsApp o el enlace a Instagram, saldrás de esta web. Esos servicios tienen sus propias políticas de cookies, que puedes consultar en sus páginas."],
  ["Cómo gestionar las cookies en tu navegador", "Puedes ver y borrar las cookies, o bloquearlas, desde la configuración de tu navegador: Chrome, Firefox, Safari y Edge lo permiten en su apartado de privacidad."],
  ["Cambios en esta política", "Si en el futuro la web empieza a usar cookies, actualizaré esta página y, cuando la ley lo exija, te pediré tu consentimiento antes de instalarlas."],
];

const privacySections = [
  ["Responsable", `Clarea, Barcelona (España). Contacto: ${EMAIL} · ${PHONE}.`],
  [
    "Qué datos recojo",
    "Los que escribes en el formulario de contacto: nombre, correo electrónico, WhatsApp (opcional), servicio y presupuesto (opcionales) y tu mensaje. Si me escribes por WhatsApp o correo, los datos de esa conversación.",
  ],
  [
    "Para qué los uso",
    "Solo para responder a tu consulta, preparar la auditoría o el presupuesto que pides y hacer el seguimiento de esa conversación. No envío publicidad ni cedo tus datos a terceros con fines comerciales.",
  ],
  ["Base legal", "Tu consentimiento al enviar el formulario o escribirme, y la aplicación de medidas precontractuales cuando me pides un presupuesto."],
  [
    "Cuánto tiempo los guardo",
    "Mientras dure la conversación o la relación profesional. Si no llegamos a trabajar juntos, los borro como máximo 12 meses después del último contacto, salvo que la ley obligue a conservarlos más tiempo.",
  ],
  [
    "Quién más los trata",
    "Proveedores que necesito para gestionar las consultas, como Google (correo y hojas de cálculo) y el servidor donde se procesan los formularios. Solo acceden a los datos para prestar ese servicio.",
  ],
  ["Analítica", "Para saber cuántas personas visitan la web uso Vercel Web Analytics, que cuenta visitas de forma agregada y sin cookies. No identifica a nadie ni guarda datos personales."],
  [
    "Chat con asistente automático",
    "El chat de la web responde con un servicio de inteligencia artificial (OpenAI) a través de mi sistema de automatización. Lo que escribas se envía a ese servicio para generar la respuesta, así que no compartas datos sensibles como datos de salud, bancarios o contraseñas. Si necesitas tratar algo personal, escríbeme por WhatsApp o por correo.",
  ],
  [
    "Tus derechos",
    `Puedes pedir acceso, rectificación, supresión, oposición, limitación o portabilidad de tus datos escribiendo a ${EMAIL}. Si crees que no se han respetado, puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).`,
  ],
];

function LegalPage({ title, intro, sections, navigate }) {
  return (
    <section className="wrap pb-[var(--section)] pt-36">
      <div className="max-w-[68ch]">
        <h1 className="t-head">{title}</h1>
        <p className="t-lead mt-6">{intro}</p>
        <div className="mt-14 grid gap-10">
          {sections.map(([heading, text]) => (
            <div key={heading}>
              <h2 className="font-medium">{heading}</h2>
              <p className="mt-2">{text}</p>
            </div>
          ))}
        </div>
        {navigate && (
          <p className="mt-12">
            Para saber cómo trato los datos que me envías, consulta la{" "}
            <a
              href="/privacidad"
              onClick={(event) => {
                event.preventDefault();
                navigate("/privacidad");
              }}
              className="link"
            >
              política de privacidad
            </a>
            .
          </p>
        )}
        <p className="t-small muted mt-12">Última actualización: octubre de 2026.</p>
      </div>
    </section>
  );
}

function Footer({ navigate, goToSection }) {
  const columns = [
    {
      title: "Servicios",
      links: [
        ["Desarrollo web", "/servicios/desarrollo-web-ecommerce"],
        ["Agenda automática", "/servicios/agenda-automatica"],
        ["Automatizaciones", "/servicios/automatizacion-a-medida"],
        ["Mantenimiento", "#servicios"],
      ],
    },
    {
      title: "Navegación",
      links: [
        ["Trabajos", "/portfolio"],
        ["Proceso", "#proceso"],
        ["Contacto", "#contacto"],
      ],
    },
  ];

  function handleLink(event, href) {
    event.preventDefault();
    if (href.startsWith("/")) navigate(href);
    else goToSection(href);
  }

  return (
    <footer className="on-accent wrap pb-6 pt-10">
      <div className="mx-auto max-w-7xl text-[15px] leading-normal md:text-base">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-[minmax(0,1fr)_auto_auto_auto] lg:gap-x-16">
          <div className="col-span-2 max-w-sm sm:col-span-3 lg:col-span-1">
            <div>
              <img src={logoClarea} alt="Clarea" width="1367" height="324" loading="lazy" className="h-10 w-auto" />
              <p className="muted mt-3">Desarrollo web y automatizaciones</p>
            </div>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="link muted mt-4 inline-flex min-h-[44px] items-center gap-2 no-underline hover:underline">
              <Instagram size={17} strokeWidth={2} className="shrink-0" aria-hidden="true" />
              @holaclarea
            </a>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="font-medium">{column.title}</p>
              <ul className="muted mt-3 grid gap-2">
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href.startsWith("/") ? href : `/${href}`} onClick={(event) => handleLink(event, href)} className="link no-underline hover:underline">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 sm:col-span-1">
            <p className="font-medium">Contacto</p>
            <ul className="muted mt-3 grid gap-2">
              <li>
                <a href="tel:+34697955919" className="link inline-flex items-center gap-2.5 no-underline hover:underline">
                  <Phone size={16} strokeWidth={2} className="shrink-0" aria-hidden="true" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="link inline-flex items-center gap-2.5 break-all no-underline hover:underline">
                  <Mail size={16} strokeWidth={2} className="shrink-0" aria-hidden="true" />
                  {EMAIL}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <MapPin size={16} strokeWidth={2} className="shrink-0" aria-hidden="true" />
                Barcelona, España
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 pr-[80px] text-[13px] sm:flex-row sm:items-center sm:justify-between lg:pr-[96px]">
          <p>© {new Date().getFullYear()} Clarea. Todos los derechos reservados.</p>
          <nav aria-label="Textos legales" className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="/privacidad"
              onClick={(event) => {
                event.preventDefault();
                navigate("/privacidad");
              }}
              className="link no-underline hover:underline"
            >
              Política de privacidad
            </a>
            <a
              href="/cookies"
              onClick={(event) => {
                event.preventDefault();
                navigate("/cookies");
              }}
              className="link no-underline hover:underline"
            >
              Política de cookies
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default App;
