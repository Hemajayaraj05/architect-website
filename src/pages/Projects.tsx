import { useEffect, useState } from "react";
import ProjectCard from "../components/project/ProjectCard";

import SEO from "../seo/SEO";
import { fetchProjects } from "../api/projects.api";
import type{ Project } from "../api/projects.api";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);

        data.forEach((project) => {
          if (project.images?.[0]) {
            const img = new Image();
            img.src = project.images[0].url;
          }
        });
      } catch (err) {
        console.error("Failed to load projects", err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <>
      <SEO
        title="Our Projects | Architectural Portfolio"
        description="Explore our completed architectural and interior projects."
        url=""
      />

      <section className="bg-gray-200 md:pr-11 md:pl-11" id="projects">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-2 pt-9">
            Our Projects
          </h2>
          <p className="text-gray-700 text-lg">
            Showcasing spaces that combine innovation, function, and style.
          </p>
        </div>

        {loading ? (
          <div className="text-center pb-16 text-gray-600">
            Loading projects...
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-18 pb-16">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                location={project.location}
                images={project.images || []} 
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Projects;
