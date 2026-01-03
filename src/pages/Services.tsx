import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Variants } from "framer-motion";

import service1 from "../assets/arch.png";
import service2 from "../assets/int.png";
import service3 from "../assets/serv3.png";
import service4 from "../assets/serv4.png";

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
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Animated Counter Component
const AnimatedCounter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 30);
    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(Math.ceil(start));
    }, 30);

    return () => clearInterval(counter);
  }, [target]);

  return <span className="text-4xl font-bold text-amber-900">{count}+</span>;
};

// Stats to display below services
const stats = [
  { label: "Projects Completed", value: 120 },
  { label: "Happy Clients", value: 85 },
  { label: "Ongoing Projects", value: 200 },
  { label: "3D Models Rendered", value: 95 },
];

const Services = () => {
  return (
    <section id="expertise" className="pt-24 pb-24 bg-gray-200 md:pl-12 md:pr-12">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-4xl font-bold text-center text-amber-900">
          Our Services
        </h2>
        <p className="text-center text-sm mt-3 text-gray-600 max-w-xl mx-auto">
          Thoughtfully designed solutions that shape spaces, experiences, and lifestyles.
        </p>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            custom={service.direction === "left" ? -80 : 80}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative rounded-3xl overflow-hidden min-h-[320px] shadow-xl"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/15" />
            <div className="relative z-10 p-8 h-full flex flex-col justify-between max-w-md">
              <div>
                <p className="text-sm font-medium text-amber-400 mb-2">
                  {service.subtitle}
                </p>

                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>

                <p className="text-gray-200 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {service.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/90 text-gray-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats / Counting Section */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white/30 backdrop-blur-xl rounded-2xl p-6 shadow-lg">
            <AnimatedCounter target={stat.value} />
            <p className="mt-2 text-gray-800 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
