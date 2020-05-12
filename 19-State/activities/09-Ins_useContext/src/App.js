import React, { useState, useEffect } from "react";
import DeveloperInfo from "./components/Developer";
import MoodBtns from "./components/MoodBtns";
import Nav from "./components/Nav";
import * as API from "./utils/API";
import DeveloperContext from "./utils/DeveloperContext";//imported the context - this variable exist outside of App.js
import "./App.css";

function App() {
  // getter and setter
  const [developerState, setDeveloperState] = useState({
    // actual stateful variable to track
    name: "",
    mood: "",
    lifeLongLearner: true,
    excitementLevel: 0
  });



  function changeMood(mood) {
    if(mood === "determined") {
      developerState.excitementLevel += 10000;
    }
    else {
      developerState.excitementLevel -= 10000;
    }
    setDeveloperState({
      ...developerState,
      mood
    });
  }

  useEffect(() => {
    // For demonstration purposes, we mock an API call.
    API.getDeveloper.then((res) => {
      setDeveloperState(res);
    });
  }, []);

  return (
    // wrappng our children component in on parent compoonent, handing down our managed data (getter from "line 10")
    <div className="container">
      <DeveloperContext.Provider value={developerState}>
    {/*give access to the developerState to all child components and updates the value ^ assigning to developerState. This is a reactive object*/}
    {/*The Reactive object enables react to re-render any component that consumes that value*/}
        <Nav />
        <DeveloperInfo />
        <MoodBtns changeMood={changeMood} />
      </DeveloperContext.Provider>

    </div>
  );
}

export default App;
