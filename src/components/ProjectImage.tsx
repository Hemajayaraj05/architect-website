// src/components/ProjectImage.tsx
import { useState } from "react";

type ProjectImageProps = {
  src: string;
  alt: string;
  eager?: boolean;
};

const ProjectImage = ({ src, alt, eager = false }: ProjectImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full bg-gray-200 overflow-hidden">
      {/* Skeleton loader */}
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-300" />
      )}

      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default ProjectImage;
