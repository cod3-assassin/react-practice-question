// src/components/ProjectList/ProjectCard.js
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-900">
          {project.title}
        </div>
        <p className="text-gray-700 text-base">{project.description}</p>
      </div>
      <div className="px-6 py-4 flex justify-end">
        <Link
          to={project.link}
          className="text-blue-500 hover:text-blue-700 transition-colors duration-300 flex items-center"
        >
          View Project <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
