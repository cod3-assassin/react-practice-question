import React from "react";
import { Link } from "react-router-dom";

const getRandomColor = () => {
  const letters = "BCDEF"; // Avoid 'A' to prevent dark colors
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};

const ProjectCard = ({
  id,
  title,
  description,
  integration = [],
  concepts = [],
}) => {
  const randomColor = getRandomColor();

  return (
    <div
      className="relative border border-gray-300 rounded-lg shadow-lg overflow-hidden"
      style={{ backgroundColor: randomColor }}
    >
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 w-full"></div>
      <div className="p-6 h-full flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">{title}</h2>
          <div className="mb-4 p-4 bg-gray-100 rounded-lg shadow-inner">
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="p-4 bg-blue-50 border border-gray-200 rounded-lg shadow-md">
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
          <div className="p-4 bg-green-50 border border-gray-200 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Concepts
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4">
              {concepts.length > 0 ? (
                concepts.map((item, index) => <li key={index}>{item}</li>)
              ) : (
                <li>No concepts listed</li>
              )}
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <Link
            to={`/project/${id}`}
            className="inline-block px-6 py-2 bg-indigo-500 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-600 transition-colors duration-300"
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
