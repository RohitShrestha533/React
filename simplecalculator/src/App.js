import React, { useState } from "react";
import "./App.css";

function App() {
  // State to store  values
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState("");

  // Function
  const calc = (operation) => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (isNaN(num1) || isNaN(num2)) {
      setResult("Invalid input");
      return;
    }

    let res = 0;
    switch (operation) {
      case "add":
        res = num1 + num2;
        break;
      case "subtract":
        res = num1 - num2;
        break;
      case "multiply":
        res = num1 * num2;
        break;
      case "divide":
        res = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        break;
      default:
        res = "Unknown operation";
    }

    setResult(res);
  };

  return (
    <div className="calculator">
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent form submission
        }}
      >
        First number :
        <input
          type="text"
          placeholder="enter a number"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
        />
        <br />
        Second number:
        <input
          type="text"
          placeholder="enter a number"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
        />
        <br />
        Result :{" "}
        <input type="text" placeholder="result" value={result} readOnly />
        <br />
        <button
          type="reset"
          onClick={() => {
            setFirstNumber("");
            setSecondNumber("");
            setResult("");
          }}
        >
          Reset
        </button>
        <button type="button" onClick={() => calc("add")}>
          Add
        </button>
        <button type="button" onClick={() => calc("subtract")}>
          Subtract
        </button>
        <button type="button" onClick={() => calc("multiply")}>
          Multiply
        </button>
        <button type="button" onClick={() => calc("divide")}>
          Divide
        </button>
      </form>
    </div>
  );
}

export default App;
