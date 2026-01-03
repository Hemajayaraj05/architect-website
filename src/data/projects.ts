import project1Img1 from "../assets/elevations/padur01.png";
import project1Img2 from "../assets/elevations/padur02.png";
import project2Img1 from "../assets/elevations/ss colony.jpg";
import project2Img2 from "../assets/elevations/vandiyur.jpg";
import bishop1 from "../assets/bishop/img15.jpg"
import bishop2 from "../assets/bishop/img20.jpg"
import bishop3 from "../assets/bishop/img23.jpg"
import bishop4 from "../assets/bishop/img26.jpg"
import bishop5 from "../assets/bishop/img32.jpg"
import bishop6 from "../assets/bishop/img38.jpg"
import bishop7 from "../assets/bishop/img41.jpg"
import bishop8 from "../assets/bishop/img47.jpg"


export type Project = {
  title: string;
  location: string;
  images: string[];
};

export const projects: Project[] = [
  {
    title: "Cyril Residence",
    location: "Pudur, India",
    images: [project1Img1, project1Img2],
  },
   {
    title: "Bishop House",
    location: "Sivagangai, India",
    images: [bishop1,bishop2,bishop3,bishop4,bishop5,bishop6,bishop7,bishop8],
  },

  {
    title: "SS Colony",
    location: "Madurai, India",
    images: [project2Img1],
  },
  {
    title: "Residence",
    location: "Madurai, India",
    images: [project2Img2],
  },
];
