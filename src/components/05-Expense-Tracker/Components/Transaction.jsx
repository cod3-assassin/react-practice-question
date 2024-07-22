import React, { useContext } from "react";
import TransactionContext from "./TransactionContext";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(TransactionContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li
      className={`bg-white text-gray-800 p-4 rounded-lg shadow flex justify-between items-center border-l-4 ${
        transaction.amount < 0 ? "border-red-500" : "border-green-500"
      }`}
    >
      {transaction.text}
      <span className="font-semibold">
        {sign}${Math.abs(transaction.amount).toFixed(2)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
