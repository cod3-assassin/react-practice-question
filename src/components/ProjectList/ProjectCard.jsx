import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({
  id,
  title,
  description,
  integration = [],
  concepts = [],
}) => {
  return (
    <div className="relative border border-gray-300 rounded-lg shadow-lg overflow-hidden bg-white">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 w-full"></div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-3 text-gray-900">{title}</h2>
        <p className="mb-4 text-gray-700">{description}</p>
        <div className="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Integration
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4">
            {integration.length > 0 ? (
              integration.map((item, index) => <li key={index}>{item}</li>)
            ) : (
              <li>No integrations listed</li>
            )}
          </ul>
        </div>
        <div className="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Concepts</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4">
            {concepts.length > 0 ? (
              concepts.map((item, index) => <li key={index}>{item}</li>)
            ) : (
              <li>No concepts listed</li>
            )}
          </ul>
        </div>
        <Link
          to={`/project/${id}`}
          className="inline-block mt-4 px-6 py-2 bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-600 transition-colors duration-300"
        >
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
