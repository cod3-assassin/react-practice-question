import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ id, title, description }) => {
  return (
    <div className="relative border border-transparent p-6 rounded-lg shadow-md bg-gradient-to-br from-blue-100 to-purple-100 backdrop-blur-sm bg-opacity-30 hover:shadow-xl hover:rotate-1 transition-transform transform">
      <h2 className="text-2xl font-bold mb-3 text-gray-900 transition-colors duration-300 hover:text-blue-700">
        {title}
      </h2>
      <p className="mb-4 text-gray-700 transition-transform duration-300 transform hover:translate-x-1">
        {description}
      </p>
      <Link
        to={`/project/${id}`}
        className="text-blue-600 font-semibold transition-transform duration-300 transform hover:translate-y-1"
      >
        View Project
      </Link>
    </div>
  );
};

export default ProjectCard;
