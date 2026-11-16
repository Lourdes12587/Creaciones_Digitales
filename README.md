# Creaciones Digitales — Web de la agencia

Web de mi agencia de desarrollo web y automatización para pequeños negocios en Barcelona. Diseñada para captar clientes: servicios, portfolio, precios, proceso de trabajo y un formulario conectado a un flujo de **n8n**.

**Web en producción:** https://www.creaciones-digitales.com/

## Lo más destacado

- **React 19 + Vite** con **prerenderizado** de cada página a HTML estático (render en servidor durante el build) para que cargue rápido y Google la indexe bien
- Generación automática del `sitemap.xml`, metadatos Open Graph y páginas por servicio
- Animaciones con **GSAP** y diseño adaptable a escritorio, tablet y móvil
- Formulario de contacto que envía los datos a un **webhook de n8n** (automatización de la gestión de los contactos)
- Portfolio con capturas en tres tamaños de pantalla, imágenes en WebP
- Páginas legales (privacidad y cookies) y página 404

## Tecnologías

| Área | Stack |
|---|---|
| Frontend | React 19, Vite |
| Estilos | Tailwind CSS, tipografía General Sans |
| Animación e iconos | GSAP, Lucide |
| SEO | Prerender con `entry-server.jsx` + `scripts/prerender.mjs`, sitemap |
| Automatización | n8n (webhook del formulario) |
| Despliegue | Vercel |

## Puesta en marcha

```bash
npm install --legacy-peer-deps
npm run dev       # desarrollo
npm run build     # build de cliente + SSR + prerender en dist/
npm run preview   # previsualizar el build
```

## Autora

**María de Lourdes Ortiz** — Desarrolladora web full-stack y fundadora de Creaciones Digitales
