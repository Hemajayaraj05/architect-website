import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { useEffect } from "react";
const Projects = () => {
    useEffect(() => {
  projects.forEach(project => {
    const img = new Image();
    img.src = project.images[0];
  });
}, []);
  return (
    <section
      className="bg-gray-200 md:pr-11 md:pl-11"
      id="projects"
      
    >
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold text-amber-900 mb-2 pt-9">Our Projects</h2>
        <p className="text-gray-700 text-lg">
          Showcasing spaces that combine innovation, function, and style.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-18 pb-16">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
