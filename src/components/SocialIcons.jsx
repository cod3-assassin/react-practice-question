// src/components/SocialIcons.jsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    href: "https://github.com/cod3-assassin/react-practice-question",
    icon: <FaGithub className="text-base md:text-lg" />,
    color: "white",
    shadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
  },
  {
    href: "https://www.linkedin.com/in/wasim-shah-3198b52b8",
    icon: <FaLinkedin className="text-base md:text-lg" />,
    color: "white",
    shadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
  },
  {
    href: "https://twitter.com/cod3_assassin",
    icon: <FaXTwitter className="text-base md:text-lg" />,
    color: "white",
    shadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
  },
];

const SocialIcons = () => {
  return (
    <nav className="flex space-x-2 md:space-x-4">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block p-2 md:p-3 transition-transform transform hover:scale-110 rounded-md"
          style={{ color: link.color, boxShadow: link.shadow }}
        >
          <span className="flex items-center justify-center text-xl">
            {link.icon}
          </span>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-opacity-1 to-opacity-10 opacity-30 blur-md" />
        </a>
      ))}
    </nav>
  );
};

export default SocialIcons;
