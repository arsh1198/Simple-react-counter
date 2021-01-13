/** @jsx jsx */
import { Button, jsx } from "theme-ui";
import { useState } from "react";
import { useColorMode } from "theme-ui";
import Switch from "react-switch";
import { GiMoon } from "react-icons/gi";
import { RiSunFill } from "react-icons/ri";
import { GrPowerReset } from "react-icons/gr";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [colorMode, setColorMode] = useColorMode();
  const checked = colorMode === "dark" ? true : false;
  return (
    <div className="container" sx={{ backgroundColor: "background" }}>
      <div className="switch">
        <Switch
          onChange={() =>
            setColorMode(colorMode === "default" ? "dark" : "default")
          }
          checked={checked}
          uncheckedIcon={
            <GiMoon size={20} style={{ marginTop: 4, marginLeft: 6 }} />
          }
          checkedIcon={
            <RiSunFill size={20} style={{ marginTop: 4, marginLeft: 4 }} />
          }
          offColor="#ffc0cb"
          onColor="#610035"
          onHandleColor="#fff"
          offHandleColor="#000"
          handleDiameter={20}
        />
      </div>
      <p className="title" sx={{ color: "text" }}>
        Counter
      </p>
      <div className="inner-div" sx={{ backgroundColor: "card" }}>
        <button
          sx={{ backgroundColor: "button" }}
          className="button"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
        <h1>{counter}</h1>
        <button
          sx={{
            backgroundColor: "button",
          }}
          className="button"
          onClick={() => setCounter(counter - 1)}
        >
          -
        </button>
      </div>
      <button
        onClick={() => setCounter(0)}
        className="reset"
        sx={{
          paddingTop: 1,
          outline: "none",
          height: 55,
          width: 55,
          backgroundColor: "button",
          borderRadius: 50,
        }}
      >
        <GrPowerReset size={30} />
      </button>
    </div>
  );
}

export default App;
