import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SEO from "../seo/SEO";


import bg1 from "../assets/bishop/img15.jpg";
import bg2 from "../assets/bishop/img35.jpg";
import bg3 from "../assets/serv4.png";

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
        title="Architectural Design Studio | Modern Spaces"
        description="We design modern architectural, interior, and landscape spaces."
        url="" //need to replace domain url
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
        <p className="mb-6 text-white font-bold text-sm md:text-base lg:text-lg">
          Where imagination meets structure, dreams become spaces 
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
          Designing Spaces, <br /> Building Dreams
        </h1>

        <p className="text-white  mb-8 text-base md:text-lg lg:text-xl max-w-2xl">
          Innovative Architectural Solutions for Modern Living
        </p>
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
