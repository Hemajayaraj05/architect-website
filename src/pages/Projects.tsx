// Projects.tsx
import ProjectCard from "../components/ProjectCard";

import project1Img1 from "../assets/serv4.png";
import project1Img2 from "../assets/serv4.png";
import project2Img1 from "../assets/serv4.png";
import project2Img2 from "../assets/serv4.png";

const projects = [
  {
    title: "Modern Villa",
    location: "Bangalore, India",
    images: [project1Img1, project1Img2],
  },
  {
    title: "Corporate Office",
    location: "Hyderabad, India",
    images: [project2Img1, project2Img2],
  },
  {
    title: "Urban Apartment",
    location: "Chennai, India",
    images: [project1Img1, project2Img2],
  },
];

const Projects = () => {
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
