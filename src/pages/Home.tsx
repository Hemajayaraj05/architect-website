import Navbar from "../components/Navbar";
import heroImage from "../assets/download__1_-removebg-preview.png";

function Home() {
    return (
        <div className="bg-white">
            <Navbar />

            <section className="relative bg-linear-to-r from-purple-200 to-purple-100 overflow-hidden px-5 md:px-20">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">

                    
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-5xl font-bold mb-6 text-gray-900">
                            Designing Spaces, <br /> Building Dreams
                        </h1>
                        <p className="text-gray-700 mb-8 text-lg">
                            Innovative Architectural Solutions for Modern Living
                        </p>
                        <button className="bg-purple-900 text-white px-8 py-4 rounded-lg hover:bg-purple-800 transition">
                            Explore Our Projects
                        </button>
                    </div>

                   
                    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end px-4 md:px-0">
                        <img
                            src={heroImage}
                            alt="Architect working"
                            className="rounded-lg object-cover max-w-xs md:max-w-sm"
                        />
                    </div>
                </div>

                
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
                    <svg
                        className="relative block w-full h-40"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 2000 320"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#f3e8ff" // light purple color for the curve
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
