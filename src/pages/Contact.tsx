import { motion } from "framer-motion";
import { useState } from "react";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import serv3 from "../assets/serv4.png";

function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="connect" className="relative bg-gray-200 py-24">
      {/* Glass styles */}
      <style>
        {`
        .glass-card {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.25);
        }

        .glass-input {
          width: 100%;
          padding: 15px 18px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(22px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          font-size: 14px;
          color: #111827;
          transition: all 0.3s ease;
        }

        .glass-input::placeholder {
          color: rgba(17, 24, 39, 0.55);
        }

        .glass-input:focus {
          outline: none;
          border-color: rgba(245, 158, 11, 0.9);
          box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.25);
          background: rgba(255, 255, 255, 0.2);
        }

        .glass-select {
          appearance: none;
          background-image:
            linear-gradient(45deg, transparent 50%, #92400e 50%),
            linear-gradient(135deg, #92400e 50%, transparent 50%);
          background-position:
            calc(100% - 24px) calc(50% - 4px),
            calc(100% - 18px) calc(50% - 4px);
          background-size: 6px 6px;
          background-repeat: no-repeat;
          border: 1px solid rgba(245, 158, 11, 0.7);
        }
      `}
      </style>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl font-bold text-amber-900">Contact Us</h1>
          <p className="mt-3 text-gray-700 text-sm">
            Let’s design something extraordinary together.
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          {[
            { title: "🏢 Visit Us", text: "424, East Cross Street, Anna Nagar, Madurai 20" },
            {
              title: "🔗 Connect",
              text: "📞 638 4284 600\n  📞 900 3851 246 \n📧 abc@gmail.com ",
            },
            {
              title: "🕒 Office Hours",
              text: "Mon – Sat\n10:00 AM – 6:00 PM",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center shadow-xl"
            >
              <h3 className="text-lg font-semibold text-amber-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 whitespace-pre-line text-sm">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-4 mb-12"
        >
          {[
            { icon: <FaInstagram />, color: "#E4405F", link: "#" },
            { icon: <FaLinkedinIn />, color: "#0077B5", link: "#" },
            { icon: <FaTwitter />, color: "#1DA1F2", link: "#" },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:scale-110 transition-transform"
              style={{ color: social.color }}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Background Image with blur */}
          <div
            className="absolute inset-0 bg-cover bg-center filter blur-sm"
            style={{ backgroundImage: `url(${serv3})` }}
          />

          {/* Glass card overlay */}
          <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-10 border border-white/30 shadow-2xl">
            {/* Form heading */}
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-amber-900">Book an Appointment</h2>
              <p className="text-gray-700 text-sm mt-2">
                Fill in your details and we will get back to you.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold text-green-600 mb-3">
                  ✅ Details Submitted Successfully!
                </h3>
                <p className="text-gray-700">
                  Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <input
                  required
                  type="text"
                  placeholder="Full Name"
                  className="glass-input"
                />

                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="glass-input"
                />

                <input
                  required
                  type="tel"
                  placeholder="Phone / WhatsApp Number"
                  className="glass-input"
                />

                <input required type="date" className="glass-input" />

                <select required className="glass-input glass-select">
                  <option value="" disabled selected>
                    Preferred Time Slot
                  </option>
                  <option>10:00 AM – 12:00 PM</option>
                  <option>12:00 PM – 2:00 PM</option>
                  <option>2:00 PM – 4:00 PM</option>
                  <option>4:00 PM – 6:00 PM</option>
                </select>

                <select required className="glass-input glass-select">
                  <option value="" disabled selected>
                    Preferred Meeting Type
                  </option>
                  <option>In-Person</option>
                  <option>Video Call</option>
                  <option>Phone Call</option>
                </select>

                <div className="md:col-span-2 flex justify-center mt-4">
                  <button
                    type="submit"
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

        <p className="text-center text-gray-600 text-sm mt-14">
          Your dream space starts here ✨
        </p>
      </div>
    </section>
  );
}

export default ContactUs;
