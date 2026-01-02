
import heroImage from "../assets/about img.png";
import { motion } from "framer-motion";

function About() {
  
  const featureVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div id="process" className="bg-purple-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-purple-900 dark:text-purple-400 text-center pt-6">
        About Us
      </h2>
      <p className="text-center text-gray-700 dark:text-gray-300 mt-2 text-sm md:hidden">
  Building innovative spaces where design meets purpose.
</p>

      <section className="py-5 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

         
          <div>
            <img
              src={heroImage}
              alt="Architect studio"
              className="rounded-xl border-purple-500 dark:border-purple-400 object-cover w-full h-100"
            />
          </div>

         
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight text-center">
              Crafting Spaces That Inspire Living
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              We are an architectural studio focused on designing meaningful
              environments that balance aesthetics, function, and innovation.
              Every project is shaped by people, purpose, and place.
            </p>

           
            <div className="space-y-5">
           
              <motion.div
                className="flex gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={featureVariants}
                transition={{ delay: 2 }}
              >
                <span className="text-purple-600 dark:text-purple-400 text-xl">🏛️</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                    Modern Design Approach
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Clean lines, thoughtful materials, and timeless aesthetics.
                  </p>
                </div>
              </motion.div>

          
              <motion.div
                className="flex gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={featureVariants}
                transition={{ delay: 4 }}
              >
                <span className="text-purple-600 dark:text-purple-400 text-xl">🏗️</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                    Sustainable Solutions
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Environmentally responsible design for future generations.
                  </p>
                </div>
              </motion.div>

          
              <motion.div
                className="flex gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={featureVariants}
                transition={{ delay: 6 }}
              >
                <span className="text-purple-600 dark:text-purple-400 text-xl">👤</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                    Client-Focused Process
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Every space is tailored to real human needs.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default About;
