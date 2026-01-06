import { useState } from "react";

type ProjectImageProps = {
  src: string;
  alt: string;
};

const ProjectImage = ({ src, alt }: ProjectImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full h-full bg-gray-200 overflow-hidden">
      {!loaded && !error && (
        <div className="absolute inset-0 animate-pulse bg-gray-300" />
      )}

      {!error ? (
        <img
          src={src}
          alt={alt}
          loading="eager"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full text-gray-500 text-sm">
          Image not available
        </div>
      )}
    </div>
  );
};

export default ProjectImage;
