import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Define a mapping of project IDs to their corresponding components
const componentMap = {
  "simple-counter": React.lazy(() => import("../01-SimpleCounter")),
  "to-do-list": React.lazy(() => import("../02-ToDoList")),
  "weather-app": React.lazy(() => import("../03-Weather-App")),
  calculator: React.lazy(() => import("../04-Calculator")),
  "expense-tracker": React.lazy(() => import("../05-Expense-Tracker")),
  "movies-app": React.lazy(() => import("../06-Movie-Search-App")),
  "notes-app": React.lazy(() => import("../07-Notes-App")),
  "markdown-preview": React.lazy(() => import("../08-Markdown-Previewer")),
  "recipe-app": React.lazy(() => import("../09-Recipe-App")),
  "image-gallery": React.lazy(() => import("../10-Image-Gallery")),
  "blog-app": React.lazy(() => import("../11-Blog")),
  "chat-app": React.lazy(() => import("../12-Chat-App")),
  "ecommerce-store": React.lazy(() => import("../13-E-commerce-Store")),
  "user-authentication": React.lazy(() => import("../14-User-Authentication")),
  portfolio: React.lazy(() => import("../15-Portfolio")),
  "quiz-app": React.lazy(() => import("../16-Quiz-App")),
  "form-validation": React.lazy(() => import("../17-Form-Validation")),
  "drag-and-drop": React.lazy(() => import("../18-Drag-and-Drop")),
  "infinite-scrolling": React.lazy(() => import("../19-Infinite-Scrolling")),
  "kanban-board": React.lazy(() => import("../20-Kanban-Board")),
  "music-player": React.lazy(() => import("../21-Music-Player")),
  "social-media-dashboard": React.lazy(() =>
    import("../22-Social-Media-Dashboard")
  ),
  "movie-recommendation": React.lazy(() =>
    import("../23-Movie-Recommendation-System")
  ),
  "real-time-notifications": React.lazy(() =>
    import("../24-Real-time-Notifications")
  ),
  "graphql-client": React.lazy(() => import("../25-GraphQL-Client")),
  "multi-step-form": React.lazy(() => import("../26-Multi-step-Form")),
  "context-api-example": React.lazy(() => import("../27-Context-API-Example")),
  "higher-order-components": React.lazy(() =>
    import("../28-Higher-Order-Components")
  ),
  "render-props": React.lazy(() => import("../29-Render-Props")),
  "responsive-navigation": React.lazy(() =>
    import("../30-Responsive-Navigation")
  ),
};

const ProjectView = () => {
  const { projectId } = useParams();
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    if (componentMap[projectId]) {
      setComponent(componentMap[projectId]);
    } else {
      setComponent(() => () => <div>Component not found</div>);
    }
  }, [projectId]);

  return (
    <div className="container mx-auto px-4 py-8">
      <React.Suspense fallback={<div>Loading...</div>}>
        {Component ? <Component /> : <div>Component not found</div>}
      </React.Suspense>
    </div>
  );
};

export default ProjectView;
