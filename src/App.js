import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="container">
      <p className="title">Counter</p>
      <div className="inner-div">
        <button className="button" onClick={() => setCounter(counter + 1)}>
          +
        </button>
        <h1>{counter}</h1>
        <button className="button" onClick={() => setCounter(counter - 1)}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
