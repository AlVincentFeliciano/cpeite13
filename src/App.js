import './App.css';
import { useState } from "react";

function Display({ display }) {
  return (
    <div className="Display">
      {display}
    </div>
  );
}

function Key({ label, clickHandler, className = "" }) {
  return (
    <button className={`ButtonKeys ${className}`} onClick={clickHandler}>
      {label}
    </button>
  );
}

function App() {
  const [disp, setDisp] = useState(0);

  const buttonTextToMessage = {
    1: "Being On Time",
    2: "Making An Effort",
    3: "Being High Energy",
    4: "Having A Positive Attitude",
    5: "Being Passionate",
    6: "Using Good Body Language",
    7: "Being Coachable",
    8: "Doing A Little Extra",
    9: "Being Prepared",
    0: "Having A Strong Work Ethic",
    "RESET": "10 Things That Require Zero Talent",
    "NAME": "AL VINCENT FELICIANO",
    "What I learned?": "In web development, I learned how to build and design interactive and user-friendly websites by combining various technologies like HTML, CSS, and JavaScript.",
    "What I want to learn?": "I want to learn how to create more complex and dynamic websites, improve my skills in using frameworks like React, and understand backend development to build full-stack applications.",
    "How will I learn?": "I will learn by practicing regularly, building projects, studying online tutorials, and exploring documentation. I'll also seek feedback, collaborate with others, and stay updated with the latest trends and technologies in web development."
  };

  const buttonClickHandler = (e) => {
    e.preventDefault();
    const label = e.target.innerHTML;
    const message = buttonTextToMessage[label] || "Invalid Button";
    setDisp(message);
  };

  return (
    <div className="App">
      <h1>AL VINCENT L. FELICIANO - IT3A</h1>

      <div className="CalcContainer">
        <div className="DispContainer">
          <Display display={disp} />
        </div>

        <div className="ButtonsContainer">
          <Key label={1} clickHandler={buttonClickHandler} />
          <Key label={2} clickHandler={buttonClickHandler} />
          <Key label={3} clickHandler={buttonClickHandler} />
          <Key label={4} clickHandler={buttonClickHandler} />
          <Key label={5} clickHandler={buttonClickHandler} />
          <Key label={6} clickHandler={buttonClickHandler} />
          <Key label={7} clickHandler={buttonClickHandler} />
          <Key label={8} clickHandler={buttonClickHandler} />
          <Key label={9} clickHandler={buttonClickHandler} />
          <Key label={0} clickHandler={buttonClickHandler} />
          <Key label={"RESET"} clickHandler={buttonClickHandler} className="ClearButton" />
          <Key label={"NAME"} clickHandler={buttonClickHandler} className="OperatorButton" />
        </div>

        {/* New Section with added buttons */}
        <div className="LearningContainer">
          <Key label={"What I learned?"} clickHandler={buttonClickHandler} className="LearningButton" />
          <Key label={"What I want to learn?"} clickHandler={buttonClickHandler} className="LearningButton" />
          <Key label={"How will I learn?"} clickHandler={buttonClickHandler} className="LearningButton" />
        </div>
      </div>
    </div>
  );
}

export default App;
