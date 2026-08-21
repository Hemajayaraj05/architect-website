import {
  FaHandshake,
  FaDraftingCompass,
  FaMapMarkedAlt,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Understanding vision, lifestyle needs, and budget alignment.",
    icon: FaHandshake,
    offset: "up",
  },
  {
    number: "02",
    title: "Site Analysis",
    description: "Studying site conditions, regulations, and context.",
    icon: FaMapMarkedAlt,
    offset: "down",
  },
  {
    number: "03",
    title: "Concept Design",
    description: "Layouts, massing, and overall design intent.",
    icon: FaDraftingCompass,
    offset: "up",
  },
  {
    number: "04",
    title: "Execution Planning",
    description: "Coordination, timelines, and quality control.",
    icon: FaTools,
    offset: "down",
  },
  {
    number: "05",
    title: "Project Delivery",
    description: "Careful execution with refined detailing.",
    icon: FaCheckCircle,
    offset: "up",
  },
];

// Duplicated once so the loop is seamless — the last card always flows straight into
// the first card again, with no visible seam or reset.
const marqueeSteps = [...steps, ...steps];

// Dotted connector, no arrowhead. `direction="down"` arcs from a raised card into a
// lowered one; `direction="up"` is the mirror image.
const Connector = ({ direction }: { direction: "up" | "down" }) => (
  <svg
    width="84"
    height="140"
    viewBox="0 0 84 140"
    fill="none"
    className="shrink-0 relative z-0"
  >
    <path
      d={
        direction === "down"
          ? "M10 10 C 10 60, 10 68, 74 96"
          : "M10 130 C 10 80, 10 72, 74 44"
      }
      stroke="#a16207"
      strokeOpacity="0.45"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="0.5 11"
      fill="none"
    />
  </svg>
);

const DesignProcess = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-stone-50 to-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] text-amber-700 uppercase mb-3">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-stone-900 tracking-tight mb-4">
            Our Design Journey
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-lg">
            A deliberate, structured approach to shaping meaningful spaces
          </p>
        </motion.div>
      </div>

      {/* Full-bleed continuous flow */}
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-48 z-10 bg-gradient-to-r from-stone-100 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-48 z-10 bg-gradient-to-l from-stone-100 to-transparent" />

        <div className="marquee-track flex items-center w-max py-16">
          {marqueeSteps.map((step, index) => {
            const Icon = step.icon;
            const isUp = step.offset === "up";
            // True for every gap EXCEPT the one between the last step of a
            // cycle (Project Delivery) and the first step of the next
            // (Consultation) — that seam only exists because the sequence is
            // duplicated for the seamless loop, so it should never look connected.
            const isCycleBoundary = (index + 1) % steps.length === 0;
            const hasNext = index < marqueeSteps.length - 1 && !isCycleBoundary;

            return (
              <div key={index} className="flex items-center">
                <div
                  className={`group shrink-0 w-64 rounded-[1.75rem] bg-white/90 backdrop-blur-sm px-7 py-8 border border-stone-200/70 shadow-[0_2px_6px_rgba(41,25,10,0.04),0_16px_32px_-16px_rgba(41,25,10,0.18)] transition-shadow duration-300 hover:shadow-[0_2px_6px_rgba(41,25,10,0.06),0_24px_40px_-16px_rgba(41,25,10,0.28)] ${
                    isUp ? "-translate-y-8" : "translate-y-8"
                  }`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-amber-50 border border-amber-200/70">
                      <Icon className="text-amber-700 text-lg" />
                    </div>
                    <span className="text-xs font-medium tracking-widest text-stone-300">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-stone-900 tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {hasNext && <Connector direction={isUp ? "down" : "up"} />}
                {isCycleBoundary && <div className="w-16 md:w-24 shrink-0" />}
              </div>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent max-w-md mx-auto"
      />

      <style>{`
        .marquee-track {
          animation: marquee-scroll 38s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default DesignProcess;