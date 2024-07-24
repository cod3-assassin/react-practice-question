import React, { createContext, useReducer, useEffect } from "react";

const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || [],
  income: JSON.parse(localStorage.getItem("income")) || 0,
};

const TransactionContext = createContext(initialState);

const transactionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      if (action.payload.type === "income") {
        return {
          ...state,
          income: state.income + action.payload.amount,
        };
      } else {
        return {
          ...state,
          transactions: [...state.transactions, action.payload],
        };
      }
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "RESET_INCOME":
      return {
        ...state,
        income: 0,
      };
    default:
      return state;
  }
};

export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(transactionReducer, initialState);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
    localStorage.setItem("income", JSON.stringify(state.income));
  }, [state.transactions, state.income]);

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const resetIncome = () => {
    dispatch({ type: "RESET_INCOME" });
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        income: state.income,
        addTransaction,
        deleteTransaction,
        resetIncome,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContext;
