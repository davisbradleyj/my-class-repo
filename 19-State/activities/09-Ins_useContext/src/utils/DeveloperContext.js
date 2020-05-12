import React from "react";
//provide us with an initial context value. Creating a state option. An Oject Literal vs. Reactive Object
//objecty literal can be ommitted but best practices dictate we should define the shape of the data being represented. What is to be expected?
const DeveloperContext = React.createContext({
  name: "",
  mood: "",
  lifeLongLearner: false,
  excitementLevel: 0
});

export default DeveloperContext;
