// src/components/Home.jsx
import React from "react";
import { FaHome } from "react-icons/fa";
import Footer from "./Footer";
import projectData from "./ProjectList/ProjectData";
import ProjectList from "./ProjectList/ProjectList";
import SocialIcons from "./SocialIcons";

const Home = () => {
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-2xl py-2 md:py-4 sticky top-0 z-10">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4 md:space-x-6">
            <button
              onClick={handleHomeClick}
              className="relative inline-block p-3 transition-transform transform hover:scale-110 rounded-md"
              style={{
                color: "white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                background: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <FaHome className="text-xl md:text-2xl" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-opacity-1 to-opacity-10 opacity-30 blur-md" />
            </button>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white truncate">
              React Projects
            </h1>
          </div>
          <SocialIcons />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <ProjectList projects={projectData} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
