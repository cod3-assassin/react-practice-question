import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  // Function to navigate to project detail page
  const viewProject = () => {
    // Add smooth transition effect
    document.getElementById("project-container").classList.add("fade-out");
    setTimeout(() => {
      navigate(`/project${project.link}`);
    }, 300); // Adjust this timeout to match your CSS transition duration
  };

  return (
    <div className="w-full h-full max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-yellow-100 flex flex-col justify-between">
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2 text-gray-900">
          {project.title}
        </div>
        <p className="text-gray-700 text-base">{project.description}</p>
      </div>
      <div className="px-6 py-4 flex justify-end">
        <button
          onClick={viewProject}
          className="text-blue-500 hover:text-blue-700 transition-colors duration-300 flex items-center"
        >
          View Project <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
