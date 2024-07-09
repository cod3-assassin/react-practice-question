import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import Footer from "./Footer";
import Logo from "./canvas.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import ProjectList from "./ProjectList/ProjectList"; // Import ProjectList component
import BackButton from "./BackButton";

const Home = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [lastVisitedProject, setLastVisitedProject] = useState(null);

  const handleProjectClick = (projectId) => {
    setLastVisitedProject(projectId);
    navigate(`/project/${projectId}`); // Use navigate to navigate to a specific project
  };

  const handleBack = () => {
    navigate(-1); // Use navigate with -1 to go back
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-2xl py-2 md:py-4 sticky top-0 z-10">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="h-10 w-10 md:h-12 md:w-12 text-white"
              src={Logo}
              alt="Logo"
            />
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white ml-2">
              React Projects
            </h1>
          </div>
          <nav className="flex space-x-2 md:space-x-4">
            <a
              href="https://github.com/cod3-assassin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white text-xl md:text-2xl hover:text-gray-300 transition duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/wasim-shah-3198b52b8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white text-xl md:text-2xl hover:text-gray-300 transition duration-300" />
            </a>
            <a
              href="https://twitter.com/cod3_assassin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white text-xl md:text-2xl hover:text-gray-300 transition duration-300" />
            </a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-6 py-10 flex-grow overflow-auto">
        <ProjectList onProjectClick={handleProjectClick} />
      </main>
      <Footer />
      {lastVisitedProject && <BackButton onClick={handleBack} />}
    </div>
  );
};

export default Home;
