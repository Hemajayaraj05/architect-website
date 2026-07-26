import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SEO from "../seo/SEO";
import { LOCAL_BUSINESS_SCHEMA, SERVICE_AREAS, SITE_URL } from "../seo/siteConfig";


import bg1 from "../assets/bishop/img15.jpg";
import bg2 from "../assets/bishop/img15.jpg";
import bg3 from "../assets/bishop/img15.jpg";

function Home() {
  const leftContentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
const navigate = useNavigate();
  const bgImages1 = [bg1, bg2, bg3];
  const bgImages2 = [bg3, bg1, bg2];

  return (
    <>
     <SEO
        title="Best Architects in Madurai | LA Architects"
        description="LA Architects — Award-winning architecture and interior design studio in Madurai. Bespoke homes, sustainable designs and end-to-end project delivery. Free consultation available."
        url={SITE_URL}
        keywords={[
          "best architects in Madurai",
          "architects Madurai",
          "residential architects Madurai",
          "sustainable architecture Madurai",
          "interior designers Madurai",
          ...SERVICE_AREAS.map((area) => `architect in ${area}`),
        ]}
        structuredData={[
          LOCAL_BUSINESS_SCHEMA,
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "LA Architects",
            url: SITE_URL,
            potentialAction: {
              "@type": "SearchAction",
              target: `${SITE_URL}/projects?location={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          },
        ]}
      />
    <div className="relative w-full h-screen overflow-hidden">
     
      <Navbar />

   
      <div className="fixed inset-0 w-full h-full overflow-hidden">
        
        <div className="flex w-[300%] h-full animate-scrollLeft">
          {bgImages1.map((img, idx) => (
            <div
              key={idx}
              className="w-screen h-full bg-cover bg-center shrink-0"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

       
        <div className="flex w-[300%] h-full animate-scrollRight absolute inset-0">
          {bgImages2.map((img, idx) => (
            <div
              key={idx}
              className="w-screen h-full bg-cover bg-center shrink-0"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      </div>

      
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center w-full h-screen px-6 text-center"
        initial="hidden"
        animate="visible"
        variants={leftContentVariants}
      >
        {/* <p className="mb-6 text-white font-bold text-sm md:text-base lg:text-lg">
          Where imagination meets structure, dreams become spaces 
        </p> */}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
          Madurai’s Trusted Architects — LA Architects
        </h1>

        <p className="text-white  mb-8 text-base md:text-lg lg:text-xl max-w-2xl">
          Thoughtful, sustainable architecture and interiors that reflect your lifestyle. From concept to completion, we craft homes and commercial spaces that balance aesthetics, function, and value.
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/contact")}
            className="
              inline-flex items-center justify-center
              bg-white/90 text-[#3a2b26]
              px-6 md:px-8 py-3 md:py-4
              rounded-lg
              font-medium
              cursor-pointer
              transition-all duration-300
              hover:opacity-95
              shadow-sm
            "
          >
            Get a Free Consultation
          </button>

          <button
            onClick={() => navigate("/projects")}
            className="
              inline-flex items-center justify-center
              bg-[#A05A49]
              text-white
              px-6 md:px-8 py-3 md:py-4
              rounded-lg
              font-medium
              cursor-pointer
              transition-all duration-300
              hover:bg-[#8B4538]
              hover:shadow-lg
              hover:scale-[1.03]
            "
          >
            Explore Our Projects
          </button>
        </div>

      </motion.div>


      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          @keyframes scrollRight {
            0% { transform: translateX(-33.333%); }
            100% { transform: translateX(0); }
          }
          .animate-scrollLeft {
            animation: scrollLeft 90s linear infinite;
          }
          .animate-scrollRight {
            animation: scrollRight 90s linear infinite;
          }
        `}
      </style>
    </div>
  </>
  );
}

export default Home;
