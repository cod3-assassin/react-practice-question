import React from "react";
import Home from "./pages/Home";
import { TransactionProvider } from "./Components/TransactionContext";
import Header from "./Components/Header";

const App = () => {
  return (
    <TransactionProvider>
      <Header />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <Home />
      </div>
    </TransactionProvider>
  );
};

export default App;
