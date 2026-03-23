

import { useEffect, useState } from "react";
import ProjectCard from "../components/project/ProjectCard";
import ProjectCardSkeleton from "../components/project/ProjectCardSkeleton";
import SEO from "../seo/SEO";
import { fetchProjects, type Project } from "../api/projects.api";
import { LOCAL_BUSINESS_SCHEMA, SITE_URL } from "../seo/siteConfig";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        const sortedProjects = data.sort((a, b) => b.id - a.id);
        

        setProjects(sortedProjects);
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
        title="Architecture Portfolio Across India"
        description="Browse LA Architects' residential and commercial architecture portfolio delivered across multiple cities and regions in India."
        url={`${SITE_URL}/projects`}
        keywords={[
          "architectural projects India",
          "interior projects India",
          "residential design portfolio India",
          "commercial architecture portfolio",
        ]}
        structuredData={[
          LOCAL_BUSINESS_SCHEMA,
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "LA Architects Project Portfolio",
            url: `${SITE_URL}/projects`,
            description:
              "Architecture and interior design project portfolio across multiple locations in India.",
          },
        ]}
      />

      <section className="bg-gray-200 md:pr-11 md:pl-11" id="projects">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-light text-amber-900 mb-2 pt-9 tracking-tighter">
            Our Projects
          </h2>
          <p className="text-gray-700 text-lg">
            Showcasing spaces that combine innovation, function, and style.
          </p>
        </div>

        {loading ? (
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-18 pb-16">
            {[...Array(6)].map((_, index) => (
              <ProjectCardSkeleton key={index} />
            ))}
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
