import { FaDraftingCompass, FaBuilding, FaLightbulb } from "react-icons/fa";

function ProjectMilestones() {
  return (
    <div className="w-72 rounded-2xl border-2 border-purple-500 bg-white dark:bg-gray-800 p-6 shadow-xl dark:shadow-gray-700">
      {/* Header */}
      <h3 className="text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-100">
        PROJECT MILESTONES
      </h3>
      <p className="mt-1 text-xs text-gray-500 dark:text-gray-300">Our Impact</p>

      {/* Milestone points */}
      <div className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <div className="flex items-center gap-3">
          <FaDraftingCompass className="text-gray-500 dark:text-gray-400" />
          <span>
            <strong className="text-gray-900 dark:text-gray-100">500+</strong> Successful Projects Completed
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaBuilding className="text-gray-500 dark:text-gray-400" />
          <span>
            <strong className="text-gray-900 dark:text-gray-100">10+</strong> Years
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaLightbulb className="text-gray-500 dark:text-gray-400" />
          <span>Experience & Innovation</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectMilestones;
