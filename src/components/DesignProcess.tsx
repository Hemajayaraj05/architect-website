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
    title: "Consultation",
    description: "Understanding vision, lifestyle needs, and budget alignment.",
    icon: FaHandshake,
  },
  {
    title: "Site Analysis",
    description: "Studying site conditions, regulations, and context.",
    icon: FaMapMarkedAlt,
  },
  {
    title: "Concept Design",
    description: "Layouts, massing, and overall design intent.",
    icon: FaDraftingCompass,
    highlight: true,
  },
  {
    title: "Execution Planning",
    description: "Coordination, timelines, and quality control.",
    icon: FaTools,
  },
  {
    title: "Project Delivery",
    description: "Careful execution with refined detailing.",
    icon: FaCheckCircle,
  },
];

const DesignProcess = () => {
  return (
    <section className="py-28 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-24 text-center">
          <h2 className="text-2xl font-medium text-amber-900 tracking-tight">
            Our Design Journey
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            A deliberate and structured approach to shaping meaningful spaces.
          </p>
        </div>

        {/* Process */}
        <div className="relative max-w-6xl mx-auto">
          {/* Line (desktop only) */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-gray-400" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-14">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.07 }}
                  className="flex flex-col items-center text-center relative"
                >
                  {/* Dot */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-white border
                      ${
                        step.highlight
                          ? "border-gray-700"
                          : "border-gray-300"
                      }
                    `}
                  >
                    <Icon className="text-sm text-gray-700" />
                  </div>

                  <h3 className="text-sm font-medium text-gray-900 tracking-wide">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600 leading-relaxed max-w-56">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
