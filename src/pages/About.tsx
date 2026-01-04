import { motion } from "framer-motion";
import heroImage from "../assets/img01.jpeg";
import founder1 from "../assets/austin.jpeg";
import founder2 from "../assets/ajith.jpeg";

// Company Images
import company1 from "../assets/aboutimage/intro.jpg";
import company2 from "../assets/aboutimage/image2.jpg";
import company3 from "../assets/aboutimage/image3.jpg";
import company4 from "../assets/aboutimage/image5.jpg";
import company5 from "../assets/aboutimage/image4.jpg";
import company6 from "../assets/aboutimage/image6.jpg";
import company7 from "../assets/aboutimage/image7.jpg";
import company8 from "../assets/aboutimage/img38.jpg";

function About() {
  return (
    <section id="about" className="bg-gray-100 py-28">
      {/* Heading */}
      <div className="text-center mb-8 px-8">
        <h2 className="text-4xl font-semibold text-amber-900 tracking-wide">
          About Us
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We design spaces that feel calm, timeless, and deeply human.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-10 lg:px-20 grid md:grid-cols-2 gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
<div className="w-full max-w-sm rounded-3xl bg-gray-100 shadow-2xl p-3">
  <div className="w-full aspect-square rounded-2xl overflow-hidden">
    <img
      src={heroImage}
      alt="Studio"
      className="w-full h-full object-cover object-top"
    />
  </div>
</div>



        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-xl"
        >
          <p className="text-sm uppercase tracking-widest text-amber-700 mb-4 text-center">
            Our Philosophy
          </p>

          <h3 className="text-3xl font-medium mb-6 leading-snug text-center text-gray-900">
            Crafting Inspired Spaces
          </h3>

          <p className="text-gray-700 leading-8 mb-6">
            We are a multidisciplinary architecture and design studio creating
            thoughtful environments for living, working, and gathering.
          </p>

          <p className="text-gray-700 leading-8">
            Our approach blends functionality, sustainability, and emotion —
            shaping spaces that feel intentional, efficient, and enduring.
          </p>
        </motion.div>
      </div>

      {/* Founders Section */}
      <div className="mt-28">
        <h4 className="text-center text-2xl font-medium text-amber-900 mb-16">
          Meet the Minds Behind the Design
        </h4>

        <div className="flex justify-center gap-20 flex-wrap">
          {/* Founder 1 */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <div className="w-36 h-36 rounded-full overflow-hidden shadow-xl mb-4">
              <img
                src={founder1}
                alt="Founder 1"
                className="w-full h-full object-cover"
              />
            </div>
            <h5 className="font-medium text-gray-900">
              Ar Ajith M
            </h5>
            <p className="text-sm text-gray-600">
             Director
            </p>
          </motion.div>

          {/* Founder 2 */}
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <div className="w-36 h-36 rounded-full overflow-hidden shadow-xl mb-4">
              <img
                src={founder2}
                alt="Founder 2"
                className="w-full h-full object-cover"
              />
            </div>
            <h5 className="font-medium text-gray-900">
              Ar Austin Kingsly D
            </h5>
            <p className="text-sm text-gray-600">
              Managing Director
            </p>
          </motion.div>
        </div>
      </div>

      {/* Company Images Section (ADDED – nothing above changed) */}
      <div className="mt-32">
        <h4 className="text-center text-2xl font-medium text-amber-900 mb-16">
          Inside Our Studio
        </h4>

        <div className="max-w-6xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[company1,company7, company2, company3, company4,company5,company6,,company8].map((img, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={img}
                alt={`Company ${index + 1}`}
                className="w-full h-full object-cover aspect-square"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
