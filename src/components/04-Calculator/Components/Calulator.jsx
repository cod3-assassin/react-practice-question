import React, { useState, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import Operation from "./Operation";

const App = () => {
  const [display, setDisplay] = useState("");
  const [currentInput, setCurrentInput] = useState("");
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    if (/[0-9.]/.test(value)) {
      setCurrentInput((prev) => prev + value);
      setDisplay((prev) => prev + value);
    }
  };

  const handleOperationClick = (op) => {
    if (currentInput) {
      if (result === null) {
        setResult(parseFloat(currentInput));
      } else if (operator) {
        const computedResult = calculate(
          result,
          parseFloat(currentInput),
          operator
        );
        setResult(computedResult);
        setDisplay(computedResult + op);
      }
      setCurrentInput("");
      setOperator(op);
    } else if (result !== null) {
      setOperator(op);
      setDisplay(result + op);
    }
  };

  const handleClear = () => {
    setDisplay("");
    setCurrentInput("");
    setOperator(null);
    setResult(null);
  };

  const handleEqual = () => {
    if (operator && currentInput) {
      const computedResult = calculate(
        result,
        parseFloat(currentInput),
        operator
      );
      setResult(computedResult);
      setDisplay(computedResult);
      setCurrentInput("");
      setOperator(null);
    }
  };

  const handlePercent = () => {
    if (currentInput) {
      const percentValue = parseFloat(currentInput) / 100;
      setCurrentInput(percentValue.toString());
      setDisplay(percentValue.toString());
    }
  };

  const calculate = (num1, num2, operator) => {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num2 !== 0 ? num1 / num2 : "Error";
      default:
        return num2;
    }
  };

  const handleKeyPress = (event) => {
    const { key } = event;
    if (/[0-9.]/.test(key)) {
      handleButtonClick(key);
    } else if (/[+\-*/]/.test(key)) {
      handleOperationClick(key);
    } else if (key === "Enter") {
      handleEqual();
    } else if (key === "Escape") {
      handleClear();
    } else if (key === "%") {
      handlePercent();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-6 text-white">
        Calculator
      </h1>
      <Input value={display} />
      <div className="flex mt-4">
        <div className="grid grid-cols-3 gap-4 w-3/4">
          {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."].map(
            (num) => (
              <Button
                key={num}
                label={num}
                onClick={() => handleButtonClick(num)}
              />
            )
          )}
          <Button
            label="%"
            onClick={handlePercent}
            className="bg-purple-500 hover:bg-purple-600"
          />
        </div>
        <div className="flex flex-col gap-2 w-1/4 ml-4">
          <Operation onOperationClick={handleOperationClick} />
          <Button
            label="C"
            onClick={handleClear}
            className="bg-red-500 hover:bg-red-600"
          />
          <Button
            label="="
            onClick={handleEqual}
            className="bg-green-500 hover:bg-green-600"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
