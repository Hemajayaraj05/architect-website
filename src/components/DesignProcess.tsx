import { FaHandshake, FaRocket } from "react-icons/fa";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Consultation",
    description:
      "Understanding client requirements, site conditions, and vision.",
    icon: FaHandshake,
  },
  {
    title: "Design Development",
    description:
      "Concept planning, visualization, materials, and detailing.",
    icon: TbBuildingSkyscraper,
    highlight: true,
  },
  {
    title: "Execution",
    description:
      "Coordinated execution with quality control till completion.",
    icon: FaRocket,
  },
];

const DesignProcess = () => {
  return (
    <section className="py-24 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold text-amber-900">
          Our Design Process
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          A calm, structured approach that guides every project from idea to reality.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-16">
        {processSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center relative"
            >
             
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg z-10
                  ${
                    step.highlight
                      ? "bg-white text-amber-700 scale-110"
                      : "bg-white text-amber-700"
                  }
                `}
              >
                <Icon className="text-3xl" />
              </div>

            
              <div className="w-px h-10 bg-gray-500 my-4" />

              <div className="bg-white rounded-2xl p-6 shadow-md max-w-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default DesignProcess;
