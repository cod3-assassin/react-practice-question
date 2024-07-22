import React, { useContext } from "react";
import TransactionContext from "./TransactionContext";

const IncomeExpense = () => {
  const { transactions } = useContext(TransactionContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-xl shadow-xl h-full flex justify-between items-center">
      <div>
        <h4>Income</h4>
        <p className="text-2xl font-bold">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="text-2xl font-bold">${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
