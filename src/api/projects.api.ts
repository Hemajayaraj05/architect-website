

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

export type Review = {
  id: number;
  project_name: string;
  client_name: string;
  place: string;
  review: string;
  stars: number;
  created_at: string;
  updated_at: string;
};

// Toggle between local and production backend
const USE_LOCAL_BACKEND = false;
const BASE_URL = USE_LOCAL_BACKEND 
  ? "http://localhost:5000" 
  : "https://architect-website-backend.onrender.com";


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

export const fetchReviews = async (): Promise<Review[]> => {
  try {
    const res = await fetch(`${BASE_URL}/reviews`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch reviews: ${res.status} ${res.statusText}`);
    }

    const data: Review[] = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
};
