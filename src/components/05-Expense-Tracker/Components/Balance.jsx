import React, { useContext } from "react";
import TransactionContext from "./TransactionContext";

const Balance = () => {
  const { transactions } = useContext(TransactionContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl shadow-xl h-full flex flex-col justify-center items-center">
      <h4 className="text-lg">Your Balance</h4>
      <h1 className="text-4xl font-bold">${total}</h1>
    </div>
  );
};

export default Balance;
