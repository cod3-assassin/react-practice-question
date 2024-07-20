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
    <div className="relative w-full h-full max-w-sm rounded-lg overflow-hidden shadow-xl transition-transform transform hover:scale-105 duration-300 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 flex flex-col justify-between">
      <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>
      <div className="relative px-6 py-4 flex-grow z-10">
        <div className="text-2xl font-extrabold text-white mb-2">
          {project.title}
        </div>
        <p className="text-white text-base">{project.description}</p>
      </div>
      <div className="relative px-6 py-4 flex justify-end z-10">
        <button
          onClick={viewProject}
          className="bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center"
        >
          View Project <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
