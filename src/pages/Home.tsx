import Navbar from "../components/Navbar";
import heroImage from "../assets/download__1_-removebg-preview.png";
import { motion } from "framer-motion";

function Home() {
    
    const leftContentVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

   
    const rightImageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    return (
        <div id="overview" className="bg-white dark:bg-gray-900 transition-colors duration-500 ">
            <Navbar />

            <section className="relative bg-linear-to-r from-purple-200 to-purple-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden px-5 md:px-20 pt-15">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">

                
                    <motion.div
                        className="md:w-1/2 text-center md:text-left"
                        initial="hidden"
                        animate="visible"
                        variants={leftContentVariants}
                    >
                        <p className="mb-6 text-gray-900 dark:text-gray-300 pt-6 md:pt-0">
                            Where imagination meets structure, dreams become spaces❤️
                        </p>

                        <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                            Designing Spaces, <br /> Building Dreams
                        </h1>

                        <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
                            Innovative Architectural Solutions for Modern Living
                        </p>

                       <a
  href="#work"
  className="
    inline-flex items-center justify-center
    bg-purple-700 dark:bg-purple-600
    text-white
    px-8 py-4
    rounded-lg
    font-medium
    cursor-pointer
    transition-all duration-300
    hover:bg-purple-800 dark:hover:bg-purple-500
    hover:shadow-lg
    hover:scale-[1.03]
  "
>
  Explore Our Projects
</a>

                    </motion.div>

              
                    <motion.div
                        className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end px-4 md:px-0"
                        initial="hidden"
                        animate="visible"
                        variants={rightImageVariants}
                    >
                        <img
                            src={heroImage}
                            alt="Architect working"
                            className="rounded-lg object-cover max-w-xs md:max-w-sm"
                        />
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
                    <svg
                        className="relative block w-full h-40"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 2000 320"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#f3e8ff"
                            className="dark:fill-gray-800"
                            d="M0,320 
                 Q1000,0 2000,320 
                 L2000,320 
                 L0,320 
                 Z"
                        />
                    </svg>
                </div>
            </section>
        </div>
    );
}

export default Home;
