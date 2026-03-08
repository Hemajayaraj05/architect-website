const ProjectCardSkeleton = () => {
  return (
    <div className="bg-gray-100 rounded-xl overflow-hidden relative animate-pulse">
      {/* Image Skeleton */}
      <div className="relative w-full h-72 md:h-80 lg:h-96 bg-gray-300">
        {/* Navigation Button Placeholders */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-400 rounded-full opacity-50"></div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-400 rounded-full opacity-50"></div>
      </div>

      {/* Text Content Skeleton */}
      <div className="p-3 text-center space-y-2">
        {/* Title Skeleton */}
        <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto"></div>
        {/* Location Skeleton */}
        <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;
