import React, { useState } from "react";
import Balance from "../Components/Balance";
import IncomeExpense from "../Components/IncomeExpense";
import ExpenseList from "../Components/ExpenseList";
import AddTransaction from "../Components/AddTransaction";

const Home = () => {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <Balance />
        </div>
        <div className="col-span-1">
          <IncomeExpense />
        </div>
        <div className="col-span-1 md:col-span-2">
          <AddTransaction />
        </div>
        <div className="col-span-1 md:col-span-2">
          <ExpenseList />
        </div>
      </div>
    </div>
  );
};

export default Home;
