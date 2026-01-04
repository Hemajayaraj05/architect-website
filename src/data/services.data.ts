// src/data/services.data.ts

import service1 from "../assets/bishop/img23.jpg";
import service2 from "../assets/elevations/padur02.png";
import service3 from "../assets/arch.png";
import service4 from "../assets/serv4.png";

export type Service = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  direction: "left" | "right";
};

export const services: Service[] = [
  {
    title: "Architectural Design",
    subtitle: "Professional Design",
    description:
      "We create stunning residential, commercial, and institutional spaces tailored to your vision.",
    tags: ["Residential", "Commercial", "Institutional"],
    image: service1,
    direction: "left",
  },
  {
    title: "Interior & Landscape Design",
    subtitle: "Sustainable & Modern",
    description:
      "From interiors to landscapes, we blend creativity and functionality for beautiful, practical spaces.",
    tags: ["Interiors", "Landscape", "Sustainable"],
    image: service2,
    direction: "right",
  },
  {
    title: "Project Management",
    subtitle: "Project Execution",
    description:
      "We manage timelines, budgets, and execution to ensure smooth and timely project delivery.",
    tags: ["Planning", "Execution", "Supervision"],
    image: service3,
    direction: "left",
  },
  {
    title: "3D Modeling & Rendering",
    subtitle: "Visualization & Planning",
    description:
      "High-quality 3D visuals and renderings to help you visualize your project before construction.",
    tags: ["3D Views", "Renderings", "Walkthroughs"],
    image: service4,
    direction: "right",
  },
];

export const stats = [
  { label: "Projects Completed", value: 30 },
  { label: "Happy Clients", value: 25 },
  { label: "Ongoing Projects", value: 15 },
  { label: "3D Models Rendered", value: 95 },
];
