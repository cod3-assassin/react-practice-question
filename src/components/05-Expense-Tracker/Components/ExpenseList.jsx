import React, { useContext } from "react";
import TransactionContext from "./TransactionContext";
import Transaction from "./Transaction";

const ExpenseList = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-xl shadow-xl mb-4">
      <h3 className="text-2xl font-semibold mb-4">History</h3>
      <ul className="list-none space-y-3">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
