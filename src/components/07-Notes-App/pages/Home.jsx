// Home.jsx
import React, { useState } from "react";
import Header from "../components/Header.jsx";
import NoteList from "../components/NoteList.jsx";
import NoteForm from "../components/NoteForm.jsx";
import Archive from "./Archive.jsx";
import Trash from "./Trash.jsx";

const Home = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "archive":
        return <Archive />;
      case "trash":
        return <Trash />;
      default:
        return (
          <>
            <NoteForm />
            <NoteList />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onTabChange={setActiveTab} />
      <main className="container mx-auto mt-4 px-4 sm:px-6 lg:px-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Home;
