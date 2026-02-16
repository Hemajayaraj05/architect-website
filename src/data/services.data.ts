export type Service = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  type: "architecture" | "interior" | "management" | "3d";
  direction: "left" | "right";
};

export const services: Service[] = [
  {
    title: "Architectural Design",
    subtitle: "Concept to Completion",
    description:
      "We craft iconic residential and commercial structures blending innovation and structural precision.",
    tags: ["Concept Design", "Elevation Planning", "Urban Design"],
    type: "architecture",
    direction: "left",
  },
  {
    title: "Interior & Landscape Design",
    subtitle: "Timeless & Sustainable",
    description:
      "We design immersive interiors and natural landscapes that enhance spatial experience.",
    tags: ["Luxury Interiors", "Landscape Design", "Eco Planning"],
    type: "interior",
    direction: "right",
  },
  {
    title: "Project Management",
    subtitle: "Structured Execution",
    description:
      "We manage budgets, timelines, vendors, and site supervision to ensure flawless delivery.",
    tags: ["Planning", "Execution", "Supervision"],
    type: "management",
    direction: "left",
  },
  {
    title: "3D Modeling & Rendering",
    subtitle: "Visual Precision",
    description:
      "High-end 3D renderings and walkthroughs to visualize spaces before construction.",
    tags: ["3D Views", "Rendering", "Walkthrough"],
    type: "3d",
    direction: "right",
  },
];

export const stats = [
  { label: "Projects Completed", value: 30 },
  { label: "Happy Clients", value: 25 },
  { label: "Ongoing Projects", value: 15 },
  { label: "3D Models Rendered", value: 95 },
];
