// src/components/ProjectList/ProjectList.js
import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./ProjectData";

const ProjectList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Projects
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
