type ProjectCardProps = {
  title: string;
  description: string;
  location: string;
  image: string;
};

const ProjectCard = ({
  title,
  description,
  location,
  image,
}: ProjectCardProps) => {
  return (
    <div className="w-70 shrink-0 rounded-xl bg-white shadow-lg overflow-hidden hover:shadow-2xl transition">
      <img
        src={image}
        alt={title}
        className="h-44 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mt-2">
          {description}
        </p>

        <p className="text-xs text-purple-600 mt-4 font-medium">
          📍 {location}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
