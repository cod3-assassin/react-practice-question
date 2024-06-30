import { useLocation } from "react-router-dom";
import React from "react";
import SimpleCounter from "./01-SimpleCounter";
import ToDoList from "./02-ToDoList/index.jsx";
import WeatherApp from "./03-Weather-App";
import Calculator from "./04-Calculator";
import ExpenseTracker from "./05-Expense-Tracker";
import MoviesApp from "./06-Movie-Search-App";
import NotesApp from "./07-Notes-App";
import MarkDownPreview from "./08-Markdown-Previewer";
import RecipeApp from "./09-Recipe-App";
import ImageGallery from "./10-Image-Gallery";
import BlogApp from "./11-Blog";
import ChatApp from "./12-Chat-App";
import EcommerceStore from "./13-E-commerce-Store";
import UserAuthentication from "./14-User-Authentication";
import Portfolio from "./15-Portfolio";
import QuizApp from "./16-Quiz-App";
import FormValidation from "./17-Form-Validation";
import DragNDrop from "./18-Drag-and-Drop";
import InfiniteScrolling from "./19-Infinite-Scrolling";
import KanbanBoard from "./20-Kanban-Board";
import MusicPlayer from "./21-Music-Player";
import SocialMedia from "./22-Social-Media-Dashboard";
import MovieRecommendation from "./23-Movie-Recommendation-System";
import RealtimeNotification from "./24-Real-time-Notifications";
import GraphQLClient from "./25-GraphQL-Client";
import MultiStepForm from "./26-Multi-step-Form";
import ContextApiEx from "./27-Context-API-Example";
import HigherOrderComp from "./28-Higher-Order-Components";
import RenderProps from "./29-Render-Props";
import ResponsiveNav from "./30-Responsive-Navigation";

const ImportExport = () => {
  const location = useLocation();
  const { pathname } = location;

  // Switch case statement to render the correct component
  const renderComponent = (link) => {
    switch (link) {
      case "/simple-counter":
        return <SimpleCounter />;
      case "/to-do-list":
        return <ToDoList />;
      case "/weather-app":
        return <WeatherApp />;
      case "/calculator":
        return <Calculator />;
      case "/expense-tracker":
        return <ExpenseTracker />;
      case "/movies-app":
        return <MoviesApp />;
      case "/notes-app":
        return <NotesApp />;
      case "/markdown-preview":
        return <MarkDownPreview />;
      case "/recipe-app":
        return <RecipeApp />;
      case "/image-gallery":
        return <ImageGallery />;
      case "/blog-app":
        return <BlogApp />;
      case "/chat-app":
        return <ChatApp />;
      case "/ecommerce-store":
        return <EcommerceStore />;
      case "/user-authentication":
        return <UserAuthentication />;
      case "/portfolio":
        return <Portfolio />;
      case "/quiz-app":
        return <QuizApp />;
      case "/form-validation":
        return <FormValidation />;
      case "/drag-and-drop":
        return <DragNDrop />;
      case "/infinite-scrolling":
        return <InfiniteScrolling />;
      case "/kanban-board":
        return <KanbanBoard />;
      case "/music-player":
        return <MusicPlayer />;
      case "/social-media-dashboard":
        return <SocialMedia />;
      case "/movie-recommendation":
        return <MovieRecommendation />;
      case "/real-time-notifications":
        return <RealtimeNotification />;
      case "/graphql-client":
        return <GraphQLClient />;
      case "/multi-step-form":
        return <MultiStepForm />;
      case "/context-api-example":
        return <ContextApiEx />;
      case "/higher-order-components":
        return <HigherOrderComp />;
      case "/render-props":
        return <RenderProps />;
      case "/responsive-navigation":
        return <ResponsiveNav />;
      default:
        return <div>Component not found</div>;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default ImportExport;
