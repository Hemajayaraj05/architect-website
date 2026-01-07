import { motion } from "framer-motion";
import SEO from "../seo/SEO";
import GlassStyles from "../components/GlassyStyles";

import {
  contactInfo,
  socialLinks,
  timeSlots,
  meetingTypes,
} from "../data/contact.data";

import { fadeDown } from "../assets/animations/contact.animations";

import ContactInfoCard from "../components/contact/ContactInfoCard";
import SocialLinksRow from "../components/contact/SocialLinksRow";
import AppointmentForm from "../components/contact/AppointmentForm";

const ContactUs: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact Us | Architectural Studio"
        description="Get in touch with us for architectural and interior design services."
        url=""
      />

      <section id="connect" className="relative bg-gray-200 py-24">
        <GlassStyles />

        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeDown} className="text-center mb-6">
            <h1 className="text-4xl font-bold text-amber-900">
              Contact Us
            </h1>
            <p className="mt-3 text-gray-700 text-lg">
              Let’s design something extraordinary together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-6">
            {contactInfo.map((item, i) => (
              <ContactInfoCard
                key={i}
                index={i}
                title={item.title}
                text={item.text}
                icon={item.icon}
              />
            ))}
          </div>

          <SocialLinksRow links={socialLinks} />

          <AppointmentForm
            timeSlots={timeSlots}
            meetingTypes={meetingTypes}
          />

          <p className="text-center text-black text-sm mt-14">
            " Your dream space starts here "
          </p>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
