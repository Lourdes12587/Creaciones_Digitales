// "Cómo trabajo": the four steps as a vertical timeline whose line draws itself as you scroll
// (pattern from the 21st.dev "Scroll animated timeline", driven here by Motion's useScroll).
// The content is the WhatsApp-style conversation the site already had.
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

const steps = [
  {
    label: "Paso 1",
    lead: "Primero, me cuentas cómo trabajas. Son 30 minutos y no cuestan nada.",
    you: ["Tú, por WhatsApp", "Hola, tengo una clínica y cada semana se me escapan citas por olvidos."],
    me: ["Lo que te llevas de la auditoría", "Las tres tareas que más compensa automatizar, en orden."],
  },
  {
    label: "Paso 2",
    lead: "Después, te envío un precio cerrado en 48 horas.",
    you: ["Tú", "¿Cuánto costaría la agenda con recordatorios?"],
    me: ["Propuesta", "Agenda automática, lista en 5 días, con 30 días de soporte incluidos."],
  },
  {
    label: "Paso 3",
    lead: "Luego lo construyo y lo pruebas antes del segundo pago.",
    you: ["Tú", "¿Puedo verlo antes de que esté terminado?"],
    me: ["Versión de prueba", "Un enlace para reservar una cita de prueba y recibir tu propio recordatorio."],
  },
  {
    label: "Paso 4",
    lead: "Al final, funciona solo, y lo vigilo durante el primer mes.",
    chat: true,
  },
];

export default function Process() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section id="proceso" aria-labelledby="proceso-title" className="process section wrap">
      <h2 id="proceso-title" data-reveal className="process-title">
        Cómo trabajo
      </h2>

      <div ref={ref} className="process-track">
        <span className="process-rail" aria-hidden="true">
          <motion.span className="process-rail-fill" style={reduce ? { scaleY: 1 } : { scaleY: progress }} />
        </span>

      <ol className="process-steps">
        {steps.map((step) => (
          <li key={step.label} className="process-step">
            <span className="process-dot" aria-hidden="true" />
            <p data-reveal className="process-label">
              {step.label}
            </p>
            <p data-reveal style={{ "--d": 1 }} className="process-lead">
              {step.lead}
            </p>

            {step.you && (
              <div className="process-chat">
                <div data-reveal data-ui style={{ "--d": 2 }} className="bubble bubble-you">
                  <p className="bubble-from">{step.you[0]}</p>
                  <p>{step.you[1]}</p>
                </div>
                <div data-reveal data-ui style={{ "--d": 3 }} className="bubble bubble-me">
                  <p className="bubble-from">{step.me[0]}</p>
                  <p className="font-semibold">{step.me[1]}</p>
                </div>
              </div>
            )}

            {step.chat && (
              <div data-reveal data-ui style={{ "--d": 2 }} className="process-phone" aria-label="Ejemplo del recordatorio por WhatsApp que recibe un cliente">
                <div className="wa-bubble">
                  <p>Hola Marta, te recordamos tu cita de mañana a las 10:30. Responde 1 para confirmarla o 2 para cambiarla.</p>
                  <p className="wa-time">9:00</p>
                </div>
                <div className="wa-bubble wa-me">
                  <p>1</p>
                  <p className="wa-time">9:04</p>
                </div>
                <div className="wa-bubble">
                  <p>Perfecto, cita confirmada. ¡Hasta mañana!</p>
                  <p className="wa-time">9:04</p>
                </div>
                <p className="process-note">Ejemplo de recordatorio, 24 horas antes de la cita.</p>
              </div>
            )}
          </li>
        ))}
      </ol>
      </div>
    </section>
  );
}
