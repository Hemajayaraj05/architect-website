import { motion } from "framer-motion";
import service1 from "../assets/At Work.jfif";
import service2 from "../assets/At Work.jfif";

const leftVariant = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 },
};

const rightVariant = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
};

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-purple-900 text-center mb-12">
        Our Services
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">

        {/* Service 1 */}
        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-2xl bg-purple-50 p-6 md:p-8 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition"
        >
          <p className="text-sm text-purple-500 mb-2">Professional Design</p>

          <h3 className="text-2xl font-semibold text-purple-900 mb-3">
            Architectural Design
          </h3>

          <p className="text-gray-950 mb-5 max-w-sm">
            We create stunning residential, commercial, and institutional spaces tailored to your vision.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs bg-purple-200 text-purple-800 rounded-full">Residential</span>
            <span className="px-3 py-1 text-xs bg-purple-200 text-purple-800 rounded-full">Commercial</span>
            <span className="px-3 py-1 text-xs bg-purple-200 text-purple-800 rounded-full">Institutional</span>
          </div>

          <img
            src={service1}
            alt="Architectural Design"
            className="hidden md:block absolute right-6 bottom-6 w-32 h-32 object-cover rounded-full border-4 border-white"
          />
        </motion.div>

        {/* Service 2 */}
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-2xl bg-purple-100 p-6 md:p-8 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition"
        >
          <p className="text-sm text-purple-500 mb-2">Sustainable & Modern</p>

          <h3 className="text-2xl font-semibold text-purple-900 mb-3">
            Interior & Landscape Design
          </h3>

          <p className="text-gray-950 mb-5 max-w-sm">
            From interiors to landscapes, we blend creativity and functionality for beautiful, practical spaces.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs bg-purple-200 text-purple-800 rounded-full">Interiors</span>
            <span className="px-3 py-1 text-xs bg-purple-200 text-purple-800 rounded-full">Landscape</span>
            <span className="px-3 py-1 text-xs bg-purple-200 text-purple-800 rounded-full">Sustainable</span>
          </div>

          <img
            src={service2}
            alt="Interior & Landscape Design"
            className="hidden md:block absolute right-6 bottom-6 w-32 h-32 object-cover rounded-full border-4 border-white"
          />
        </motion.div>

        {/* Service 3 */}
        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-2xl bg-purple-50 p-6 md:p-8 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition"
        >
          <p className="text-sm text-purple-500 mb-2">Project Execution</p>

          <h3 className="text-2xl font-semibold text-purple-900 mb-3">
            Project Management
          </h3>

          <p className="text-gray-950 mb-5 max-w-sm">
            We manage timelines, budgets, and execution to ensure smooth and timely project delivery.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs bg-purple-200 text-purple-800 rounded-full">Planning</span>
            <span className="px-3 py-1 text-xs bg-purple-200 text-purple-800 rounded-full">Execution</span>
            <span className="px-3 py-1 text-xs bg-purple-200 text-purple-800 rounded-full">Supervision</span>
          </div>

          <img
            src={service1}
            alt="Project Management"
            className="hidden md:block absolute right-6 bottom-6 w-32 h-32 object-cover rounded-full border-4 border-white"
          />
        </motion.div>

        {/* Service 4 */}
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-2xl bg-purple-100 p-6 md:p-8 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition"
        >
          <p className="text-sm text-purple-500 mb-2">Visualization & Planning</p>

          <h3 className="text-2xl font-semibold text-purple-900 mb-3">
            3D Modeling & Rendering
          </h3>

          <p className="text-gray-950 mb-5 max-w-sm">
            High-quality 3D visuals and renderings to help you visualize your project before construction.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs bg-purple-200 text-purple-800 rounded-full">3D Views</span>
            <span className="px-3 py-1 text-xs bg-purple-200 text-purple-800 rounded-full">Renderings</span>
            <span className="px-3 py-1 text-xs bg-purple-200 text-purple-800 rounded-full">Walkthroughs</span>
          </div>

          <img
            src={service2}
            alt="3D Modeling & Rendering"
            className="hidden md:block absolute right-6 bottom-6 w-32 h-32 object-cover rounded-full border-4 border-white"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
