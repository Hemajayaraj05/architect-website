type ProjectCardProps = {
  title: string;
  description: string;
  location: string;
  image: string;
};

const ProjectCard = ({ title, description, location, image }: ProjectCardProps) => {
  return (
    <div
      className="
        w-70 shrink-0
        rounded-2xl bg-white dark:bg-gray-800
        overflow-hidden
        shadow-md dark:shadow-gray-700
        transition-all duration-300 ease-out
        hover:scale-110 hover:shadow-2xl
        hover:z-50
      "
    >
     
      <img
        src={image}
        alt={title}
        className="h-44 w-full object-cover"
      />

      
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
          {description}
        </p>

        <p className="text-xs text-purple-600 dark:text-purple-400 mt-4 font-medium">
          📍 {location}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
