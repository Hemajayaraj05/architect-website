import { motion } from "framer-motion";
import SEO from "../seo/SEO";

import heroImage from "../assets/img01.jpeg";
import founder1 from "../assets/austin.jpeg";
import founder2 from "../assets/ajith.jpeg";

import company1 from "../assets/aboutimage/intro.jpg";
import company2 from "../assets/aboutimage/image2.jpg";
import company3 from "../assets/aboutimage/image3.jpg";
import company4 from "../assets/aboutimage/image5.jpg";
import company5 from "../assets/aboutimage/image4.jpg";
import company6 from "../assets/aboutimage/image6.jpg";
import company7 from "../assets/aboutimage/image7.jpg";
import company8 from "../assets/aboutimage/img38.jpg";

import FounderCard from "../components/about/FounderCard";
import FloatingImageCard from "../components/about/FloatingImageCard";
import SectionHeading from "../components/about/SectionHeading";

const studioImages: string[] = [
  company1,
  company7,
  company2,
  company3,
  company4,
  company5,
  company6,
  company8,
];

const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About Us | Architectural Studio"
        description="Learn more about our architectural philosophy and design expertise."
        url=""
      />

      <section id="about" className="bg-gray-100 py-28">
      
        <div className="text-center mb-8 px-7">
          <h2 className="text-4xl font-bold text-amber-900 tracking-wide">
            About Us
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto leading-relaxed text-lg">
            We design spaces that feel calm, timeless, and deeply human.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-10 lg:px-20 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-sm rounded-3xl bg-gray-100 shadow-2xl p-5">
              <div className="w-full aspect-square rounded-2xl overflow-hidden">
                <img
                  src={heroImage}
                  alt="Studio"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

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

        {/* Founders */}
        <div className="mt-28">
          <SectionHeading title="Meet the Minds Behind the Design" />

          <div className="flex justify-center gap-20 flex-wrap">
            <FounderCard
              image={founder2}
              name="Ar Austin Kingsly D"
              role="Managing Director"
              duration={5}
            />

            <FounderCard
              image={founder1}
              name="Ar Ajith M"
              role="Director"
            />
          </div>
        </div>

        {/* Studio Images */}
        <div className="mt-32">
          <SectionHeading title="Inside Our Studio" />

          <div className="max-w-6xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-10">
            {studioImages.map((img, index) => (
              <FloatingImageCard
                key={index}
                image={img}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
