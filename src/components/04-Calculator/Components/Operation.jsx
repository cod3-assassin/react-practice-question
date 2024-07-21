import React from "react";
import { FaPlus, FaMinus, FaTimes, FaDivide } from "react-icons/fa";
import Button from "./Button";

const Operation = ({ onOperationClick }) => {
  const operations = [
    { label: <FaPlus />, value: "+" },
    { label: <FaMinus />, value: "-" },
    { label: <FaTimes />, value: "*" },
    { label: <FaDivide />, value: "/" },
  ];

  return (
    <div className="flex flex-col gap-2">
      {operations.map((operation) => (
        <Button
          key={operation.value}
          label={operation.label}
          onClick={() => onOperationClick(operation.value)}
          className="flex-1 bg-yellow-500 hover:bg-yellow-600"
        />
      ))}
    </div>
  );
};

export default Operation;
