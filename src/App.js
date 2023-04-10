import './style.css';
import { useState } from "react";
// import { useEffect } from "react";

function App() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [operator, setOperator] = useState(null);
  const [display, setDisplay] = useState("")
  const [secondDisplay, setSecondDisplay] = useState("");

  const emptyString = "";
  // useEffect (() => {}, [operator, first, second]);

  function handleInput(input) {
    if(operator === null) {
      setFirst(first.concat(input.target.value))
      setDisplay(display.concat(input.target.value))
      //console.log(first)
    } else {
      handleSecondInput(input.target.value)
    }
    console.log("display: " + display)
  }

  function handleSecondInput(input) {
    setDisplay("");
    setSecond(second.concat(input));
    setSecondDisplay(secondDisplay.concat(input))
    //console.log(second)
  }

  function handleOperator(input) {
    setOperator(input.target.value)
    console.log(operator)
  }

  function handleArithmetic() {
    if (operator === "+") {
      setFirst((parseFloat(first) + parseFloat(second)).toString())
      setDisplay(parseFloat(first) + parseFloat(second));
      handleReset()
    } else if (operator === "-") {
      setFirst((parseFloat(first) - parseFloat(second)).toString());
      setDisplay(parseFloat(first) - parseFloat(second));
      handleReset();
    } else if (operator === "*") {
      setFirst((parseFloat(first) * parseFloat(second)).toString());
      setDisplay(parseFloat(first) * parseFloat(second));
      handleReset();
    } else if (operator === "/") {
      setFirst((parseFloat(first) / parseFloat(second)).toString());
      setDisplay(parseFloat(first) / parseFloat(second));
      handleReset();
    }
  }

  function handleReset() {
    setSecond("")
    setOperator(null)
    setSecondDisplay("")
  }

  function handleClear() {
    setFirst("");
    setSecond("");
    setOperator(null)
    setDisplay("")
    setSecondDisplay("")
  }

  return (
    <div className="App">
      <div className="calculator">
        <input type="text" className="calculator-screen" value={operator ? secondDisplay : display} disabled />

        <div className="calculator-keys">
          <button type="button" className="operator" value="+" onClick={handleOperator}>+</button>
          <button type="button" className="operator" value="-" onClick={handleOperator}>-</button>
          <button type="button" className="operator" value="*" onClick={handleOperator}>&times;</button>
          <button type="button" className="operator" value="/" onClick={handleOperator}>&divide;</button>

          <button type="button" value="7" onClick={handleInput}>7</button>
          <button type="button" value="8" onClick={handleInput}>8</button>
          <button type="button" value="9" onClick={handleInput}>9</button>

          <button type="button" value="4" onClick={handleInput}>4</button>
          <button type="button" value="5" onClick={handleInput}>5</button>
          <button type="button" value="6" onClick={handleInput}>6</button>

          <button type="button" value="1" onClick={handleInput}>1</button>
          <button type="button" value="2" onClick={handleInput}>2</button>
          <button type="button" value="3" onClick={handleInput}>3</button>

          <button type="button" value="0" onClick={handleInput}>0</button>
          <button type="button" className="decimal" value="." onClick={handleInput}>.</button>
          <button type="button" className="all-clear" value="all-clear" onClick={handleClear}>AC</button>
          <button type="button" className="operator" id="equal-sign" value="=" onClick={handleArithmetic}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
