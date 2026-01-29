

export type ProjectImage = {
  id: number;
  secure_url: string;   
  public_id: string;    
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

  const data: Project[] = await res.json();

 
  data.forEach((project) => {
    if (project.images?.[0]) {
      const img = new Image();
      img.src = project.images[0].secure_url;
    }
  });

  return data;
};
