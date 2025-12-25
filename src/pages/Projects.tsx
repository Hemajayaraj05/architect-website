import ProjectCard from "../components/ProjectCard";

import project1 from "../assets/At Work.jfif";
import project2 from "../assets/At Work.jfif";
import project3 from "../assets/At Work.jfif";

type Project = {
  title: string;
  description: string;
  location: string;
  image: string;
};

const projects: Project[] = [
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
    <section className="py-5 bg-purple-100 overflow-hidden m-1">
 
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-4xl font-bold text-purple-900 text-center">
          Our Projects
        </h2>
      </div>

      
      <div className="max-w-7xl mx-auto px-6 overflow-hidden p-4">
        <div className="scroll-track">
          {[...projects, ...projects].map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
