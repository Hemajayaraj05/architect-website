import { motion } from "framer-motion";

function ContactUs() {
 
  const centerVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const sideVariant = (direction: "left" | "right") => ({
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  });

  return (
    <div id="connect" className="bg-purple-100 dark:bg-gray-900 pb-6 pt-12">
      <div className="max-w-4xl mx-auto px-6 py-2">
        <h1 className="text-3xl font-bold text-center text-purple-950 dark:text-purple-400 mb-3">
          Contact Us
        </h1>

        <p className="text-center text-black dark:text-gray-300 text-sm mb-12">
          We’d love to hear from you — reach out with your ideas or questions.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-center">
      
          <motion.div
            className="p-6 rounded-xl border border-white/30 bg-white/20 dark:bg-gray-800/40 backdrop-blur-md shadow-lg dark:shadow-gray-700 hover:shadow-2xl transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sideVariant("left")}
          >
            <h2 className="text-xl font-semibold mb-2 text-purple-900 dark:text-purple-400">
              🏢 Visit Us
            </h2>
            <p className="text-gray-500 dark:text-gray-300">
              Our studio is always open to welcome you. <br />
              Drop by to discuss ideas, designs, and possibilities.
            </p>
            <br />
            <p className="dark:text-gray-200">
              123 Architecture Street,<br />City, State, 12345
            </p>
          </motion.div>

          
          <motion.div
            className="p-6 rounded-xl border border-white/30 bg-white/20 dark:bg-gray-800/40 backdrop-blur-md shadow-lg dark:shadow-gray-700 hover:shadow-2xl transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={centerVariant}
          >
            <h2 className="text-xl font-semibold mb-2 text-purple-900 dark:text-purple-400">
              🔗 Connect
            </h2>
            <p className="text-gray-500 dark:text-gray-300">
              Connect with us to discuss your project and requirements.
            </p>
            <br />
            <p className="dark:text-gray-200">📞 98765 43210</p>
             <p className="dark:text-gray-200">📧 abc@gmail.com</p>
          </motion.div>

 
          <motion.div
            className="p-6 rounded-xl border border-white/30 bg-white/20 dark:bg-gray-800/40 backdrop-blur-md shadow-lg dark:shadow-gray-700 hover:shadow-2xl transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sideVariant("right")}
          >
            <h2 className="text-xl font-semibold mb-2 text-purple-900 dark:text-purple-400">
              🗓️ Book an Appointment
            </h2>
            <p className="text-gray-500 dark:text-gray-300">
              Reserve a one-on-one session with our design experts.
            </p>
            <br />
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfDD6BVUKQepXtDfJcuIoiOAMgAwPLrt1BFfXID1RavSCLZnQ/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-950 dark:bg-purple-700 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-purple-700 dark:hover:bg-purple-600 transition"
            >
              Click here to Schedule
            </a>
          </motion.div>
        </div>

        <p className="text-center text-gray-600 dark:text-gray-300 text-sm mt-12">
          Your dream space starts here. <span className="text-red-500">❤️</span>
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
