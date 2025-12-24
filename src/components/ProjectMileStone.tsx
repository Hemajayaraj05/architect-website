import { FaDraftingCompass, FaBuilding, FaLightbulb } from "react-icons/fa";

function ProjectMilestones() {
  return (
    <div className="w-72 rounded-2xl border-2 border-purple-500 bg-white p-6 shadow-xl">
      <h3 className="text-sm font-semibold tracking-wide text-gray-900">
        PROJECT MILESTONES
      </h3>

      <p className="mt-1 text-xs text-gray-500">Our Impact</p>

      <div className="mt-4 space-y-3 text-sm text-gray-700">
        <div className="flex items-center gap-3">
          <FaDraftingCompass className="text-gray-500" />
          <span>
            <strong className="text-gray-900">500+</strong> Successful Projects Completed
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaBuilding className="text-gray-500" />
          <span>
            <strong className="text-gray-900">10+</strong> Years
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaLightbulb className="text-gray-500" />
          <span>Experience & Innovation</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectMilestones;
