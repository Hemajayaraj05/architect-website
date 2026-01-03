// src/components/ProjectCard.tsx
import React, { useRef } from "react";
import ProjectImage from "./ProjectImage";

type ProjectCardProps = {
  title: string;
  location: string;
  images: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  location,
  images,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-gray-100 rounded-xl overflow-hidden relative">
      {/* Image Carousel */}
      <div className="relative w-full h-70 md:h-70 lg:h-70 overflow-hidden">
        <div
          ref={scrollRef}
          className="flex w-full h-full overflow-x-hidden scroll-smooth"
        >
          {images.map((img, idx) => (
            <div key={idx} className="w-full h-full shrink-0">
              <ProjectImage
                src={img}
                alt={`${title}-${idx}`}
                eager={idx === 0} // first image loads faster
              />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-wood/70 text-white p-3 rounded-full hover:bg-wood transition z-10"
        >
          ◀
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-wood/70 text-white p-3 rounded-full hover:bg-wood transition z-10"
        >
          ▶
        </button>
      </div>

      {/* Content */}
      <div className="p-3 text-center">
        <h3 className="text-lg md:text-xl font-semibold text-wood">
          {title}
        </h3>
        <p className="text-gray-600 mt-1 text-sm md:text-base">
          📍 {location}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
