import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Define a mapping of project IDs to their corresponding components and names
const componentMap = {
  "simple-counter": {
    component: React.lazy(() => import("../01-SimpleCounter")),
    name: "Simple Counter",
  },
  "to-do-list": {
    component: React.lazy(() => import("../02-ToDoList")),
    name: "To-Do List",
  },
  "weather-app": {
    component: React.lazy(() => import("../03-Weather-App")),
    name: "Weather App",
  },
  calculator: {
    component: React.lazy(() => import("../04-Calculator")),
    name: "Calculator",
  },
  "expense-tracker": {
    component: React.lazy(() => import("../05-Expense-Tracker")),
    name: "Expense Tracker",
  },
  "movies-app": {
    component: React.lazy(() => import("../06-Movie-Search-App")),
    name: "Movies App",
  },
  "notes-app": {
    component: React.lazy(() => import("../07-Notes-App")),
    name: "Notes App",
  },
  "markdown-preview": {
    component: React.lazy(() => import("../08-Markdown-Previewer")),
    name: "Markdown Previewer",
  },
  "recipe-app": {
    component: React.lazy(() => import("../09-Recipe-App")),
    name: "Recipe App",
  },
  "image-gallery": {
    component: React.lazy(() => import("../10-Image-Gallery")),
    name: "Image Gallery",
  },
  "blog-app": {
    component: React.lazy(() => import("../11-Blog")),
    name: "Blog App",
  },
  "chat-app": {
    component: React.lazy(() => import("../12-Chat-App")),
    name: "Chat App",
  },
  "ecommerce-store": {
    component: React.lazy(() => import("../13-E-commerce-Store")),
    name: "E-commerce Store",
  },
  "user-authentication": {
    component: React.lazy(() => import("../14-User-Authentication")),
    name: "User Authentication",
  },
  portfolio: {
    component: React.lazy(() => import("../15-Portfolio")),
    name: "Portfolio",
  },
  "quiz-app": {
    component: React.lazy(() => import("../16-Quiz-App")),
    name: "Quiz App",
  },
  "form-validation": {
    component: React.lazy(() => import("../17-Form-Validation")),
    name: "Form Validation",
  },
  "drag-and-drop": {
    component: React.lazy(() => import("../18-Drag-and-Drop")),
    name: "Drag and Drop",
  },
  "infinite-scrolling": {
    component: React.lazy(() => import("../19-Infinite-Scrolling")),
    name: "Infinite Scrolling",
  },
  "kanban-board": {
    component: React.lazy(() => import("../20-Kanban-Board")),
    name: "Kanban Board",
  },
  "music-player": {
    component: React.lazy(() => import("../21-Music-Player")),
    name: "Music Player",
  },
  "social-media-dashboard": {
    component: React.lazy(() => import("../22-Social-Media-Dashboard")),
    name: "Social Media Dashboard",
  },
  "movie-recommendation": {
    component: React.lazy(() => import("../23-Movie-Recommendation-System")),
    name: "Movie Recommendation System",
  },
  "real-time-notifications": {
    component: React.lazy(() => import("../24-Real-time-Notifications")),
    name: "Real-time Notifications",
  },
  "graphql-client": {
    component: React.lazy(() => import("../25-GraphQL-Client")),
    name: "GraphQL Client",
  },
  "multi-step-form": {
    component: React.lazy(() => import("../26-Multi-step-Form")),
    name: "Multi-step Form",
  },
  "context-api-example": {
    component: React.lazy(() => import("../27-Context-API-Example")),
    name: "Context API Example",
  },
  "higher-order-components": {
    component: React.lazy(() => import("../28-Higher-Order-Components")),
    name: "Higher-Order Components",
  },
  "render-props": {
    component: React.lazy(() => import("../29-Render-Props")),
    name: "Render Props",
  },
  "responsive-navigation": {
    component: React.lazy(() => import("../30-Responsive-Navigation")),
    name: "Responsive Navigation",
  },
};

const ProjectView = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [Component, setComponent] = useState(null);
  const [projectName, setProjectName] = useState("");

  useEffect(() => {
    if (componentMap[projectId]) {
      setComponent(componentMap[projectId].component);
      setProjectName(componentMap[projectId].name);
    } else {
      setComponent(() => () => <div>Component not found</div>);
    }
  }, [projectId]);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 p-4 mb-6 flex items-center">
        <button
          onClick={() => navigate(-1)}
          className="text-white bg-indigo-600 hover:bg-indigo-700 font-semibold py-2 px-4 rounded transition duration-300"
        >
          Back
        </button>
        <h1 className="text-white text-2xl ml-4">{projectName}</h1>
      </header>
      <React.Suspense fallback={<div>Loading...</div>}>
        {Component ? <Component /> : <div>Component not found</div>}
      </React.Suspense>
    </div>
  );
};

export default ProjectView;
