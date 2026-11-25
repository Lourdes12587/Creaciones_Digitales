// Smooth, inertial page scroll (Lenis). The page still scrolls natively underneath,
// so Motion's useScroll, anchors and the browser's find-in-page keep working.
import Lenis from "lenis";
import { prefersReducedMotion } from "./motionFx";

let lenis = null;

export function startSmoothScroll() {
  if (lenis || prefersReducedMotion()) return () => {};
  // Touch devices already have native momentum; Lenis only smooths wheel and trackpad.
  lenis = new Lenis({ duration: 1.15, anchors: { offset: -16 }, syncTouch: false });

  let frame = 0;
  const raf = (time) => {
    lenis?.raf(time);
    frame = requestAnimationFrame(raf);
  };
  frame = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(frame);
    lenis?.destroy();
    lenis = null;
  };
}

// Scroll to an element, a selector or a pixel offset, smoothly when Lenis is running.
export function scrollToTarget(target, { immediate = false } = {}) {
  const el = typeof target === "string" ? document.querySelector(target) : target;
  if (lenis) {
    lenis.scrollTo(el ?? target, { offset: typeof target === "number" ? 0 : -16, immediate });
    return;
  }
  if (typeof target === "number") window.scrollTo({ top: target, behavior: immediate ? "auto" : "smooth" });
  else el?.scrollIntoView({ behavior: immediate ? "auto" : "smooth" });
}

// The mobile menu and the preloader stop the page from scrolling underneath them.
export function lockScroll(locked) {
  if (lenis) locked ? lenis.stop() : lenis.start();
  document.documentElement.classList.toggle("scroll-locked", locked);
}
