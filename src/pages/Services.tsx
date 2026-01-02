import { motion } from "framer-motion";
import service1 from "../assets/arch.png";
import service2 from "../assets/int.png";
import service3 from "../assets/serv3.png";
import service4 from "../assets/serv4.png";

import type { Variants } from "framer-motion";

type Service = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  direction: "left" | "right";
};

const services: Service[] = [
  {
    title: "Architectural Design",
    subtitle: "Professional Design",
    description:
      "We create stunning residential, commercial, and institutional spaces tailored to your vision.",
    tags: ["Residential", "Commercial", "Institutional"],
    image: service1,
    direction: "left",
  },
  {
    title: "Interior & Landscape Design",
    subtitle: "Sustainable & Modern",
    description:
      "From interiors to landscapes, we blend creativity and functionality for beautiful, practical spaces.",
    tags: ["Interiors", "Landscape", "Sustainable"],
    image: service2,
    direction: "right",
  },
  {
    title: "Project Management",
    subtitle: "Project Execution",
    description:
      "We manage timelines, budgets, and execution to ensure smooth and timely project delivery.",
    tags: ["Planning", "Execution", "Supervision"],
    image: service3,
    direction: "left",
  },
  {
    title: "3D Modeling & Rendering",
    subtitle: "Visualization & Planning",
    description:
      "High-quality 3D visuals and renderings to help you visualize your project before construction.",
    tags: ["3D Views", "Renderings", "Walkthroughs"],
    image: service4,
    direction: "right",
  },
];

const cardVariants: Variants = {
  hidden: (direction: number) => ({ opacity: 0, x: direction }),
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = () => {
  return (
    <section
      id="expertise"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 text-gray-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-4xl font-bold text-center dark:text-purple-400">Our Services</h2>
        <p className="text-center text-sm mt-3">
          Thoughtfully designed solutions that shape spaces, experiences, and lifestyles.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`relative rounded-2xl p-6 md:p-8 overflow-hidden shadow-lg hover:-translate-y-1 transition
              ${
                index % 2 === 0
                  ? "bg-purple-50 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-gray-700"
                  : "bg-purple-100 dark:bg-gray-800 hover:bg-purple-200 dark:hover:bg-gray-700"
              } flex flex-col md:flex-row md:items-start`}
            custom={service.direction === "left" ? -80 : 80}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            
            <div className="mb-4 md:mb-0 md:mr-6 flex justify-center md:justify-end">
              <img
                src={service.image}
                alt={service.title}
                className="w-32 h-32 md:w-32 md:h-32 object-cover  rounded-full border-2 border-white"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <p className="text-sm mb-2 text-purple-500 dark:text-purple-300">{service.subtitle}</p>

              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>

              <p className="mb-5 text-gray-950 dark:text-gray-300">{service.description}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {service.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs bg-purple-200 text-purple-800 dark:bg-purple-700 dark:text-purple-200 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
