import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const EASE_OUT = [0.22, 1, 0.36, 1];

const links = [
  ["Servicios", "#servicios"],
  ["Trabajos", "#trabajos"],
  ["Proceso", "#proceso"],
  ["Contacto", "#contacto"],
];

const menuItem = {
  hidden: { opacity: 0, y: 24 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
};

// Header at the top of the page. It does not follow the scroll: it scrolls away with the page.
// Over the home photo it is transparent with white text.
export default function Nav({ navigate, goToSection, isHome }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const reduceMotion = useReducedMotion();
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    function update() {
      const hero = isHome ? document.getElementById("inicio") : null;
      const limit = hero ? hero.offsetHeight - 72 : 24;
      setSolid(window.scrollY > limit);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isHome]);

  // While the phone menu is open: no page scroll behind it, Escape closes it, focus starts on the first link.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector("a")?.focus();
    function onKey(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  function handleNav(event, href) {
    event.preventDefault();
    setMenuOpen(false);
    if (href.startsWith("/")) navigate(href);
    else goToSection(href);
  }

  const light = isHome || solid || menuOpen;

  return (
    // data-menu turns the blur off while the menu is open: a backdrop-filter would trap the full-screen menu inside the bar.
    <header className="site-header" data-light={light || undefined} data-solid={solid || undefined} data-menu={menuOpen || undefined}>
      <nav aria-label="Principal" className="site-nav flex items-start justify-between gap-4 pt-5 sm:pt-6">
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            setMenuOpen(false);
            navigate("/");
          }}
          aria-label="Clarea, inicio"
          className="flex h-12 shrink-0 items-center"
        >
          <Logo label="" className="h-7 sm:h-8" />
        </a>

        <div className="flex items-center gap-2 sm:gap-7">
          <ul className="hidden items-center gap-7 md:flex">
            {links.map(([label, href]) => (
              <li key={href}>
                <a href={`/${href}`} onClick={(event) => handleNav(event, href)} className="nav-link">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="grid h-11 w-11 place-items-center md:hidden"
          >
            {menuOpen ? <X size={26} strokeWidth={2} aria-hidden="true" /> : <Menu size={26} strokeWidth={2} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="menu-movil"
            ref={menuRef}
            className="site-menu md:hidden"
            initial={reduceMotion ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            animate={reduceMotion ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
            exit={reduceMotion ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: EASE_OUT }}
          >
            <motion.ul className="wrap grid gap-3" initial="hidden" animate="shown" variants={{ shown: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } } }}>
              {links.map(([label, href]) => (
                <motion.li key={href} variants={menuItem}>
                  <a href={`/${href}`} onClick={(event) => handleNav(event, href)} className="site-menu-link">
                    {label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
