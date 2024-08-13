import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-blue-500 p-4 text-white">
    <div className="container mx-auto flex justify-between">
      <Link to="/" className="text-2xl font-bold">
        Movie Search App
      </Link>
    </div>
  </header>
);

export default Header;
