// Page-wide effects built on Motion's vanilla API, applied to existing markup so the
// prerendered HTML stays visible without JavaScript.
import { animate, inView, stagger } from "motion";

export const EASE_OUT = [0.22, 1, 0.36, 1];

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Each [data-reveal] element rises, unblurs and fades in once when it enters the viewport.
// --d on the element staggers siblings that enter together.
export function revealOnScroll(root = document) {
  const targets = [...root.querySelectorAll("[data-reveal]:not(.is-in)")];
  if (prefersReducedMotion()) {
    targets.forEach((el) => el.classList.add("is-in"));
    return () => {};
  }

  const stops = targets.map((el) =>
    inView(
      el,
      () => {
        const order = parseFloat(el.style.getPropertyValue("--d")) || 0;
        animate(
          el,
          { opacity: [0, 1], y: [28, 0], filter: ["blur(6px)", "blur(0px)"] },
          { duration: 0.9, delay: order * 0.09, ease: EASE_OUT },
        ).then(() => {
          el.classList.add("is-in");
          el.style.filter = "";
        });
      },
      { margin: "0px 0px -8% 0px" },
    ),
  );
  return () => stops.forEach((stop) => stop());
}

// Cards of a freshly selected tab come in one after another.
export function cascade(elements) {
  if (!elements.length || prefersReducedMotion()) return;
  animate(elements, { opacity: [0, 1], y: [18, 0] }, { duration: 0.6, delay: stagger(0.06), ease: EASE_OUT });
}

// .btn elements lean towards the cursor and spring back; a short squeeze on press.
// One delegated listener, so buttons rendered later work too. Only for a real mouse,
// so touch scrolling is never affected.
export function magneticButtons() {
  if (prefersReducedMotion() || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return () => {};

  const spring = { type: "spring", stiffness: 320, damping: 20, mass: 0.6 };
  let current = null;
  const release = (btn) => btn && animate(btn, { x: 0, y: 0, scale: 1 }, spring);

  const move = (event) => {
    const btn = event.target.closest?.(".btn") || null;
    if (current && current !== btn) release(current);
    current = btn;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = (event.clientX - (rect.left + rect.width / 2)) * 0.22;
    const y = (event.clientY - (rect.top + rect.height / 2)) * 0.32;
    animate(btn, { x, y }, spring);
  };
  const leaveWindow = () => {
    release(current);
    current = null;
  };
  const down = (event) => {
    const btn = event.target.closest?.(".btn");
    if (btn) animate(btn, { scale: 0.96 }, { duration: 0.12 });
  };
  const up = (event) => {
    const btn = event.target.closest?.(".btn");
    if (btn) animate(btn, { scale: 1 }, { type: "spring", stiffness: 500, damping: 18 });
  };

  document.addEventListener("pointermove", move, { passive: true });
  document.documentElement.addEventListener("pointerleave", leaveWindow);
  document.addEventListener("pointerdown", down);
  document.addEventListener("pointerup", up);
  return () => {
    document.removeEventListener("pointermove", move);
    document.documentElement.removeEventListener("pointerleave", leaveWindow);
    document.removeEventListener("pointerdown", down);
    document.removeEventListener("pointerup", up);
  };
}

// Slide a carousel item in from the side it is coming from.
export function slideIn(el, direction) {
  if (!el || prefersReducedMotion()) return;
  animate(el, { opacity: [0, 1], x: [direction * 60, 0] }, { type: "spring", stiffness: 220, damping: 28 });
}
