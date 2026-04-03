import { motion } from "framer-motion";
import SEO from "../seo/SEO";
import GlassStyles from "../components/GlassyStyles";
import { Mail } from "lucide-react";

import {
  contactInfo,
  socialLinks,
  timeSlots,
  meetingTypes,
} from "../data/contact.data";



import ContactInfoCard from "../components/contact/ContactInfoCard";
import SocialLinksRow from "../components/contact/SocialLinksRow";
import AppointmentForm from "../components/contact/AppointmentForm";
import { LOCAL_BUSINESS_SCHEMA, SITE_URL } from "../seo/siteConfig";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: "tween" as const,
    },
  },
};

const ContactUs: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact Architects For Any Location"
        description="Contact LA Architects for architecture, interior design, and project consultation for any city or region in India."
        url={`${SITE_URL}/contact`}
        keywords={[
          "contact architect near me",
          "architecture consultation India",
          "interior design contact India",
        ]}
        structuredData={[
          LOCAL_BUSINESS_SCHEMA,
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact LA Architects",
            url: `${SITE_URL}/contact`,
          },
        ]}
      />

      <section id="connect" className="relative bg-gray-200 py-28 overflow-hidden">
        <GlassStyles />

        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Mail className="w-12 h-12 text-amber-700" />
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-light text-amber-900 tracking-tight mb-4">
              Get In Touch
            </h1>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
              Let's collaborate and design something extraordinary together. We're excited to hear from you.
            </p>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-linear-to-r from-amber-700 via-amber-800 to-amber-700 max-w-xs mx-auto mb-16 rounded-full"
          />

        
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10 mb-16"
          >
            {contactInfo.map((item, i) => (
              <motion.div key={i} variants={itemVariants}>
                <ContactInfoCard
                  index={i}
                  title={item.title}
                  text={item.text}
                  icon={item.icon}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <SocialLinksRow links={socialLinks} />
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-linear-to-r from-transparent via-amber-300 to-transparent my-16 origin-center"
          />

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-light text-amber-900 mb-3">
                Schedule a Consultation
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
            <AppointmentForm
              timeSlots={timeSlots}
              meetingTypes={meetingTypes}
            />
          </motion.div>

       
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-gray-600 text-sm mt-10 italic font-light"
          >
            "Your dream space starts here"
          </motion.p>

          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-10 border-t border-amber-300/70 pt-8 pb-4 text-gray-600"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
              <p className="text-center md:text-left">
                Copyright @ 2026 LA Architects
              </p>
              <p className="text-center md:text-right">
                Madurai, Tamil Nadu 
              </p>
            </div>
          </motion.footer>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
