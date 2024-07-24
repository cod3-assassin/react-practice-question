import React, { useState, useContext } from "react";
import TransactionContext from "./TransactionContext";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("expense"); // Track type (income or expense)
  const { addTransaction } = useContext(TransactionContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text || isNaN(amount)) return; // Add validation

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: parseFloat(amount),
      type, // Include type
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
    setType("expense"); // Reset to default type
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl">
      <h3 className="text-xl mb-4">Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter text..."
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter amount..."
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>
        <button className="w-full bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600 transition-colors">
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
