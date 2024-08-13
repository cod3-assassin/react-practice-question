import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.link}
          title={project.title}
          description={project.description}
          integration={project.integration}
          concepts={project.concepts}
        />
      ))}
    </div>
  );
};

export default ProjectList;
