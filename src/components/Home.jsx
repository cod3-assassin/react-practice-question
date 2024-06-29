import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Logo from "./canvas.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
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
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white text-xl md:text-2xl hover:text-gray-300 transition duration-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white text-xl md:text-2xl hover:text-gray-300 transition duration-300" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white text-xl md:text-2xl hover:text-gray-300 transition duration-300" />
            </a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-6 py-10 flex-grow overflow-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
