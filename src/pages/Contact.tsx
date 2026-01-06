

import { motion } from "framer-motion";
import { useState } from "react";
import SEO from "../seo/SEO";
import serv3 from "../assets/serv4.png";

import GlassStyles from "../components/GlassyStyles";
import {
  contactInfo,
  socialLinks,
  timeSlots,
  meetingTypes,
} from "../data/contact.data";
import {
  fadeDown,
  fadeUp,
  scaleIn,
} from "../assets/animations/contact.animations";

function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    timeSlot: "",
    meetingType: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      setSubmitted(true);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };





  return (
    <>
      <SEO
        title="Contact Us | Architectural Studio"
        description="Get in touch with us for architectural and interior design services."
        url="" //url
      />

      <section id="connect" className="relative bg-gray-200 py-24">
        <GlassStyles />

        <div className="max-w-6xl mx-auto px-6">

          <motion.div {...fadeDown} className="text-center mb-6">
            <h1 className="text-4xl font-bold text-amber-900">Contact Us</h1>
            <p className="mt-3 text-gray-700 text-sm">
              Let’s design something extraordinary together.
            </p>
          </motion.div>


          <div className="grid md:grid-cols-3 gap-8 mb-6">
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center shadow-xl"
              >
                <h3 className="flex items-center justify-center gap-2 text-lg font-semibold text-amber-800 mb-2">
                  {item.icon && <item.icon className="text-xl text-amber-700" />}
                  <span>{item.title}</span>
                </h3>

                <p className="text-gray-700 whitespace-pre-line text-sm">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>


          <motion.div
            {...fadeUp}
            className="flex justify-center gap-4 mb-12"
          >
            {socialLinks.map(({ icon: Icon, color, link }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:scale-110 transition-transform"
                style={{ color }}
              >
                <Icon />
              </a>
            ))}
          </motion.div>


          <motion.div {...scaleIn} className="relative max-w-4xl mx-auto rounded-3xl shadow-2xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center filter blur-sm"
              style={{ backgroundImage: `url(${serv3})` }}
            />

            <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-10 border border-white/30 shadow-2xl">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-amber-900">
                  Book an Appointment
                </h2>
                <p className="text-gray-700 text-sm mt-2">
                  Fill in your details and we will get back to you.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-semibold text-amber-600 mb-3">
                    Details Submitted Successfully!
                  </h3>
                  <p className="text-gray-700">
                    Our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="glass-input"
                  />

                  <input required type="email" placeholder="Email Address" value={formData.email}
                    onChange={handleChange} name="email"
                    className="glass-input" />
                  <input required type="tel" placeholder="Phone / WhatsApp Number" value={formData.phone}
                    onChange={handleChange} name="phone"

                    className="glass-input" />
                  <input required type="date" value={formData.date}
                    onChange={handleChange}
                    name="date"
                    className="glass-input" />

                  <select required className="glass-input glass-select" value={formData.timeSlot} onChange={handleChange} name="timeSlot"> 
                    <option value="" disabled> 
                      Preferred Time slot
                    </option>
                    {timeSlots.map(slot => (
                      <option key={slot}>{slot}</option>
                    ))}
                  </select>

                  <select required className="glass-input glass-select" value={formData.meetingType} onChange={handleChange} name="meetingType">
                    <option value="" disabled>
                      Preferred Meeting Type
                    </option>
                    {meetingTypes.map(type => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>

                  <div className="md:col-span-2 flex justify-center mt-4">
                    <button
                      disabled={loading}
                      className="w-48 bg-amber-900 text-white py-3 rounded-xl font-medium hover:bg-amber-700 transition disabled:opacity-50 shadow-lg"
                    >
                      {loading ? "Submitting..." : "Submit Details"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          <p className="text-center text-black text-sm mt-14">
            " Your dream space starts here "
          </p>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
