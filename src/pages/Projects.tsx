import ProjectCard from "../components/ProjectCard";

import project1 from "../assets/At Work.jfif";
import project2 from "../assets/At Work.jfif";
import project3 from "../assets/At Work.jfif";

const projects = [
  {
    title: "Modern Villa",
    description: "Luxury residential villa with clean modern lines.",
    location: "Bangalore, India",
    image: project1,
  },
  {
    title: "Corporate Office",
    description: "High-performance workspace with sustainable design.",
    location: "Hyderabad, India",
    image: project2,
  },
  {
    title: "Urban Apartment",
    description: "Smart living spaces in the heart of the city.",
    location: "Chennai, India",
    image: project3,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-purple-100 dark:bg-gray-900 transition-colors duration-500">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-4xl font-bold text-purple-900  dark:text-purple-400 text-center">
          Our Projects
        </h2>
        <p className="text-center text-black dark:text-gray-300 mt-2 text-sm">
          Showcasing spaces that combine innovation, function, and style.
        </p>
      </div>

      {/* Glass Container */}
      <div
        className="
          group max-w-5xl mx-auto px-4 md:px-16 py-8 overflow-hidden
          bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl
          border border-white/40 dark:border-gray-700/40
          rounded-3xl shadow-xl
        "
      >
        {/* Scroll Track */}
        <div className="flex gap-8 animate-scroll w-max">
          {[...projects, ...projects].map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
