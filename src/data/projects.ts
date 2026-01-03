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
import voluntus1 from "../assets/voluntas/img111.jpg"
import voluntus2 from "../assets/voluntas/img129.jpg"
import voluntus3 from "../assets/voluntas/img135.jpg"
import voluntus4 from "../assets/voluntas/img141.jpg"
import voluntus5 from "../assets/voluntas/img63.jpg"
import voluntus6 from "../assets/voluntas/img81.jpg"
import voluntus7 from "../assets/voluntas/img87.jpg"
import voluntus9 from "../assets/voluntas/img93.jpg"
import voluntus8 from "../assets/voluntas/img99.jpg"
import mus1 from "../assets/museum/img138.jpg"
import mus2 from "../assets/museum/img111.jpg"
import mus3 from "../assets/museum/img139.jpg"
import mus4 from "../assets/museum/img75.jpg"
import mus5 from "../assets/museum/img84.jpg"
import mus6 from "../assets/museum/img93.jpg"
import chap1 from "../assets/chappel/Screenshot 2026-01-04 001146.png"
import chap2 from "../assets/chappel/Screenshot 2026-01-04 001200.png"
import chap3 from "../assets/chappel/Screenshot 2026-01-04 001213.png"
import paul1 from "../assets/paulraj/Screenshot 2026-01-04 000915.png"
import paul2 from "../assets/paulraj/Screenshot 2026-01-04 000927.png"
import paul3 from "../assets/paulraj/Screenshot 2026-01-04 000934.png"
import paul4 from "../assets/paulraj/Screenshot 2026-01-04 000939.png"
import wilson1 from "../assets/wilson/Screenshot 2026-01-03 230428.png"
import wilson2 from "../assets/wilson/Screenshot 2026-01-03 230509.png"
import wilson3 from "../assets/wilson/Screenshot 2026-01-03 230528.png"
import wilson4 from "../assets/wilson/Screenshot 2026-01-03 230542.png"



export type Project = {
  title: string;
  location: string;
  images: string[];
};

export const projects: Project[] = [
   {
    title: "Voluntas",
    location: "Thirunelveli, India",
    images: [voluntus5,voluntus1,voluntus2,voluntus3,voluntus4,voluntus6,voluntus8,voluntus7,voluntus9],
  },
 
   {
    title: "Bishop House",
    location: "Sivagangai, India",
    images: [bishop1,bishop2,bishop3,bishop4,bishop5,bishop6,bishop7,bishop8],
  },

   {
    title: "Fr.leveil-Museum",
    location: "Saruguni, India",
    images: [mus1,mus2,mus3,mus4,mus5,mus6],
  },
    {
    title: "Chapel",
    location: "Pannaiyur, India",
    images: [chap1,chap2,chap3],
  },
     {
    title: "Paulraj Residence Kitchen Interiors",
    location: "Kadachanendhal,Madurai, India",
    images: [paul1,paul2,paul3,paul4],
  },
    {
    title: "Wilson Residence",
    location: "Kalayarkovil,Madurai, India",
    images: [wilson1,wilson2,wilson3,wilson4],
  },
   {
    title: "Cyril Residence",
    location: "Pudur, India",
    images: [project1Img1, project1Img2],
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
