import React from "react";
import ProjectList from "./ProjectList/ProjectList";
import Footer from "./Footer";
import Logo from "./canvas.png";

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-indigo-700 to-purple-600 shadow-lg py-6">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <img className="h-12 w-12 text-white" src={Logo} />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white ml-2">
              React Projects Hub
            </h1>
          </div>
          {/* You can add more elements or navigation links here if needed */}
        </div>
      </header>
      <main className="container mx-auto px-6 py-10 flex-grow">
        <ProjectList />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
