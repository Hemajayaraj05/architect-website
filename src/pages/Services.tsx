import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SEO from "../seo/SEO";
import { services ,stats} from "../data/services.data";
import AnimatedCounter from "../components/services/AnimatedCounter";
import DesignProcess from "../components/services/DesignProcess";
import SectionHeading from "../components/about/SectionHeading";
import { LOCAL_BUSINESS_SCHEMA, SERVICE_AREAS, SITE_URL } from "../seo/siteConfig";

import ServiceVisual from "../components/services/ServiceVisual";

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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const Services = () => {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <>
      <SEO
        title="Architecture And Interior Services Across India"
        description="End-to-end architecture, interior design, landscape, and project management services delivered across cities and regions in India."
        url={`${SITE_URL}/services`}
        keywords={[
          "architecture services near me",
          "interior design services India",
          "landscape architects India",
          "project management architects India",
        ]}
        structuredData={[
          LOCAL_BUSINESS_SCHEMA,
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Architecture and Interior Design",
            areaServed: [
              {
                "@type": "State",
                name: "Tamil Nadu",
              },
              {
                "@type": "Country",
                name: "India",
              },
              ...SERVICE_AREAS.map((name) => ({
                "@type": "Place",
                name,
              })),
            ],
            provider: {
              "@type": "ArchitectureFirm",
              name: "LA Architects",
              url: SITE_URL,
            },
            url: `${SITE_URL}/services`,
          },
        ]}
      />

      <section
        id="expertise"
        className="pt-24 pb-24 bg-linear-to-b from-stone-100 to-stone-200 md:px-12"
      >
        {/* ===== Section Heading ===== */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto px-6 mb-20"
        >
          <h2 className="text-4xl font-light text-center text-amber-900 tracking-tight mb-4">
            Our Services
          </h2>
          <p className="text-center text-lg mt-3 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Thoughtfully designed solutions that shape spaces, experiences,
            and lifestyles.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-[2px] bg-amber-800 mx-auto mt-8 rounded-full"
          />
        </motion.div>

        {/* ===== Services ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 mb-14 space-y-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${
                service.direction === "left"
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              } gap-10 md:gap-16 items-center`}
            >
            
              <div className="w-full md:w-1/2">
                <ServiceVisual type={service.type} />
              </div>

              <div className="w-full md:w-1/2">
                <motion.h3
                  className="text-3xl md:text-4xl font-light text-amber-900 mb-6 leading-tight"
                  whileHover={{ x: 8 }}
                >
                  {service.title}
                </motion.h3>

                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="mb-8 space-y-3">
                  {service.tags.map((tag, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-amber-800 rounded-full" />
                      <span className="text-gray-700 font-medium hover:text-amber-800 transition-colors">
                        {tag}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}  
                
                <div className="h-px bg-linear-to-r from-amber-200 via-amber-300 to-transparent mb-8" />

                {/* Button */}
                {/* <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-3 bg-linear-to-r from-amber-700 to-amber-900 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore Service
                  <motion.div whileHover={{ x: 5 }}>
                    <ArrowRight size={18} />
                  </motion.div>
                </motion.button> */}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== Design Process Section ===== */}
        <DesignProcess />

        {/* ===== Stats Section ===== */}
        <SectionHeading title="Our Impact in Numbers" />
        <p className="text-center text-gray-600 max-w-2xl mx-auto ">
          Real outcomes from thoughtful design, meticulous planning, and trusted delivery.
        </p>

        <div
          ref={statsRef}
          className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/40 backdrop-blur-xl rounded-2xl p-6 shadow-lg"
            >
              <AnimatedCounter target={stat.value} start={statsInView} />
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
