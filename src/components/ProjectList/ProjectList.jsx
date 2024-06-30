import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./ProjectData";
import ImportExport from "../ImportExport";

const ProjectList = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleProjectClick = (link) => {
    setSelectedComponent(link);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Projects
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project) => (
          <div
            key={project.id}
            onClick={() => handleProjectClick(project.link)}
            className="cursor-pointer"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      {selectedComponent && (
        <div className="mt-8">
          <ImportExport selectedComponent={selectedComponent} />
        </div>
      )}
    </div>
  );
};

export default ProjectList;
