// api/projects.api.ts

export type ProjectImage = {
  id: number;
  url: string;
  publicId: string;
};

export type Project = {
  id: number;
  title: string;
  location: string;
  images: ProjectImage[]; 
};

const BASE_URL = "https://architect-website-backend.onrender.com";

export const fetchProjects = async (): Promise<Project[]> => {
  const res = await fetch(`${BASE_URL}/projects`);
  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }
  return res.json(); 
};
