import {
  FaHandshake,
  FaDraftingCompass,
  FaMapMarkedAlt,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const borderRotateVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "linear" as const,
    },
  },
};


const steps = [
  {
    title: "Consultation",
    description: "Understanding vision, lifestyle needs, and budget alignment.",
    icon: FaHandshake,
    color: "from-amber-700 to-amber-900",
    bgColor: "bg-amber-100",
  },
  {
    title: "Site Analysis",
    description: "Studying site conditions, regulations, and context.",
    icon: FaMapMarkedAlt,
    color: "from-amber-600 to-amber-800",
    bgColor: "bg-amber-100",
  },
  {
    title: "Concept Design",
    description: "Layouts, massing, and overall design intent.",
    icon: FaDraftingCompass,
    color: "from-amber-800 to-amber-950",
    bgColor: "bg-amber-100",
    highlight: true,
  },
  {
    title: "Execution Planning",
    description: "Coordination, timelines, and quality control.",
    icon: FaTools,
    color: "from-amber-700 to-amber-900",
    bgColor: "bg-amber-100",
  },
  {
    title: "Project Delivery",
    description: "Careful execution with refined detailing.",
    icon: FaCheckCircle,
    color: "from-amber-600 to-amber-800",
    bgColor: "bg-amber-100",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: "tween" as const,
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

const DesignProcess = () => {
  return (
    <section className="py-28 bg-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:mb-24 text-center mb-12"
        >
          <h2 className="text-4xl font-light text-amber-900 tracking-tight mb-4">
            Our Design Journey
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            A deliberate and structured approach to shaping meaningful spaces
          </p>
        </motion.div>

        {/* Steps Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Animated Connection Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, type: "tween" }}
            className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-linear-to-r from-amber-700 via-amber-800 to-amber-700 origin-left"
            style={{ transformOrigin: "left" }}
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center relative group"
                >
                  {/* Icon Circle with Gradient and Rotating Border */}
                  <motion.div className="relative mb-6">
                    {/* Rotating Border Circle */}
                    <motion.div
                      variants={borderRotateVariants}
                      animate="animate"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `conic-gradient(from 0deg, #b45309, #d97706, #92400e, #b45309)`,
                        padding: "3px",
                      }}
                    >
                      <div className="absolute inset-3 rounded-full bg-gray-200" />
                    </motion.div>

                    {/* Main Icon Circle */}
                    <motion.div
                      variants={iconVariants}
                      whileHover={{
                        scale: 1.15,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                      }}
                      className={`w-20 h-20 rounded-full flex items-center justify-center bg-linear-to-br ${step.color} shadow-lg relative overflow-hidden group cursor-pointer`}
                    >
                      {/* Shimmer Effect */}
                      <motion.div
                        animate={{
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                        className="absolute inset-0 bg-white/20"
                      />

                      <Icon className="text-white text-2xl relative z-10" />
                    </motion.div>
                  </motion.div>

                  {/* Step Title */}
                  <motion.h3
                    whileHover={{ y: -5 }}
                    className="text-base font-semibold text-gray-900 tracking-wide mb-2 transition-all"
                  >
                    {step.title}
                  </motion.h3>

                  {/* Step Description */}
                  <p className="text-sm text-gray-600 leading-relaxed max-w-56 group-hover:text-gray-700 transition-colors">
                    {step.description}
                  </p>

                  {/* Highlight Indicator */}
                  {step.highlight && (
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(217, 119, 6, 0.4)",
                          "0 0 0 15px rgba(217, 119, 6, 0)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="absolute -inset-3 border-2 border-amber-600 rounded-full"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-1 bg-linear-to-r from-amber-700 via-amber-800 to-amber-700 max-w-sm mx-auto mt-20 rounded-full"
        />
      </div>
    </section>
  );
};

export default DesignProcess;


