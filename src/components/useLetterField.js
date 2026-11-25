import { useEffect } from "react";

// Letters move away from the pointer, tilt and take the coral light as it gets close, then ease back.
// Brought back from the first version of the hero. Every letter is a [data-ch] span inside titleRef;
// the pointer is followed over the whole section.
export default function useLetterField(sectionRef, titleRef) {
  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    if (!section || !title) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const letters = [...title.querySelectorAll("[data-ch]")].map((el) => ({ el, x: 0, y: 0, r: 0, h: 0, cx: 0, cy: 0 }));
    const pointer = { x: 0, y: 0, active: false };
    let frame = 0;

    // Resting centres relative to the title, measured with each letter's own transform removed.
    const measure = () => {
      const base = title.getBoundingClientRect();
      letters.forEach((l) => {
        const kept = l.el.style.transform;
        l.el.style.transform = "none";
        const rect = l.el.getBoundingClientRect();
        l.el.style.transform = kept;
        l.cx = rect.left + rect.width / 2 - base.left;
        l.cy = rect.top + rect.height / 2 - base.top;
      });
    };
    measure();

    const tick = () => {
      const base = title.getBoundingClientRect();
      const size = parseFloat(getComputedStyle(title).fontSize);
      const radius = size * 1.5;
      let moving = false;
      letters.forEach((l) => {
        let tx = 0;
        let ty = 0;
        let tr = 0;
        let th = 0;
        if (pointer.active) {
          const dx = base.left + l.cx - pointer.x;
          const dy = base.top + l.cy - pointer.y;
          const d = Math.hypot(dx, dy) || 1;
          const f = Math.max(0, 1 - d / radius) ** 2;
          tx = (dx / d) * f * size * 0.32;
          ty = (dy / d) * f * size * 0.32;
          tr = (dx / radius) * f * 18;
          th = f;
        }
        l.x += (tx - l.x) * 0.16;
        l.y += (ty - l.y) * 0.16;
        l.r += (tr - l.r) * 0.16;
        l.h += (th - l.h) * 0.2;
        if (Math.abs(tx - l.x) + Math.abs(ty - l.y) + Math.abs(th - l.h) > 0.02) moving = true;
        l.el.style.transform = `translate(${l.x.toFixed(2)}px, ${l.y.toFixed(2)}px) rotate(${l.r.toFixed(2)}deg)`;
        l.el.classList.toggle("hot", l.h > 0.28);
      });
      frame = moving || pointer.active ? requestAnimationFrame(tick) : 0;
    };
    const wake = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const move = (x, y) => {
      pointer.x = x;
      pointer.y = y;
      pointer.active = true;
      wake();
    };
    const onPointer = (event) => move(event.clientX, event.clientY);
    const onTouch = (event) => event.touches[0] && move(event.touches[0].clientX, event.touches[0].clientY);
    const leave = () => {
      pointer.active = false;
      wake();
    };

    // The entry animation shifts the lines, so measure again once it has finished and on every new approach.
    const settle = window.setTimeout(() => {
      title.classList.add("is-live");
      measure();
    }, 1400);
    section.addEventListener("pointerenter", measure);
    section.addEventListener("pointermove", onPointer);
    section.addEventListener("pointerleave", leave);
    section.addEventListener("touchstart", onTouch, { passive: true });
    section.addEventListener("touchmove", onTouch, { passive: true });
    section.addEventListener("touchend", leave);
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(settle);
      section.removeEventListener("pointerenter", measure);
      section.removeEventListener("pointermove", onPointer);
      section.removeEventListener("pointerleave", leave);
      section.removeEventListener("touchstart", onTouch);
      section.removeEventListener("touchmove", onTouch);
      section.removeEventListener("touchend", leave);
      window.removeEventListener("resize", measure);
    };
  }, [sectionRef, titleRef]);
}
