import React, { useContext } from "react";
import TransactionContext from "./TransactionContext";

const IncomeExpense = () => {
  const { transactions, income, resetIncome } = useContext(TransactionContext);

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-xl shadow-xl h-full flex justify-between items-center">
      <div>
        <h4>Income</h4>
        <p className="text-2xl font-bold">${income.toFixed(2)}</p>
        <button
          onClick={resetIncome}
          className="bg-red-500 text-white p-2 rounded mt-2 hover:bg-red-600 transition-colors"
        >
          Reset Income
        </button>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="text-2xl font-bold">
          ${Math.abs(totalExpenses).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
