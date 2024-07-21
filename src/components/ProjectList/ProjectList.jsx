import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.link}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  );
};

export default ProjectList;
