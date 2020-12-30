/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import { useColorMode } from "theme-ui";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [colorMode, setColorMode] = useColorMode();
  return (
    <div className="container" sx={{ backgroundColor: "background" }}>
      <button
        onClick={(e) => {
          setColorMode(colorMode === "default" ? "dark" : "default");
        }}
      >
        Toggle {colorMode === "default" ? "Dark" : "Light"}
      </button>
      <p className="title" sx={{ color: "text" }}>
        Counter
      </p>
      <div className="inner-div" sx={{ backgroundColor: "card" }}>
        <button
          sx={{ backgroundColor: "button", color: "text" }}
          className="button"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
        <h1>{counter}</h1>
        <button
          sx={{ backgroundColor: "button", color: "text" }}
          className="button"
          onClick={() => setCounter(counter - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
