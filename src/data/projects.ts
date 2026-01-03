import project1Img1 from "../assets/serv4.png";
import project1Img2 from "../assets/serv4.png";
import project2Img1 from "../assets/serv4.png";
import project2Img2 from "../assets/serv4.png";

export type Project = {
  title: string;
  location: string;
  images: string[];
};

export const projects: Project[] = [
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
