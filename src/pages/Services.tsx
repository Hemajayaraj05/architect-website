

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SEO from "../seo/SEO";
import { services, stats } from "../data/services.data";
import { cardVariants } from "../assets/animations/services.animations";
import AnimatedCounter from "../components/AnimatedCounter";

const Services = () => {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <>
    <SEO
  title="Our Services | Architecture & Interior Design"
  description="Architectural design, interiors, landscape, and project management services."
  url="" //url
/>

   
    <section id="expertise" className="pt-24 pb-24 bg-gray-200 md:px-12">
    
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-4xl font-bold text-center text-amber-900">
          Our Services
        </h2>
        <p className="text-center text-lg mt-3 text-gray-600 max-w-xl mx-auto">
          Thoughtfully designed solutions that shape spaces, experiences, and lifestyles.
        </p>
      </div>

    
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            custom={service.direction === "left" ? -80 : 80}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative rounded-3xl overflow-hidden min-h-80 shadow-xl"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/45 to-black/15" />

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

     
      <div
        ref={statsRef}
        className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white/30 backdrop-blur-xl rounded-2xl p-6 shadow-lg"
          >
            <AnimatedCounter
              target={stat.value}
              start={statsInView}
            />
            <p className="mt-2 text-gray-800 font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
     </>
  );
};

export default Services;
