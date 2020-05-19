// import react with associated hooks
import React, { createContext, useReducer, ruseContext } from "react";

//instantiate countcountex to be the createcontext function
const CountContext = createContext();
//deconsruct countcontext to get provider object
const { Provider } = CountContext;

// take state, action as arguements, create switch case for the actions of add and subtract
// with key count and value state.count, with the corresponding action
const reducer = (state, action) => {
  switch (action.type) {
  case "add":
    return { count: state.count + 1 };
  case "subtract":
    return { count: state.count - 1 };
  default:
    throw new Error(`Invalid action type: ${action.type}`);
  }
};

// takes in value and the props (if present)
const CountProvider = ({ value = 0, ...props }) => {
  // when we call on countprovider to wrap other values, all the children have access to current state (read only), and dispatch
  // a global state object
  const [state, dispatch] = useReducer(reducer, { count: value });
  // allows provider to pass down these "values"
  return <Provider value={[state, dispatch]} {...props} />;
};
// function that allows the ability to ask for these values
const useCountContext = () => {
  return useContext(CountContext);
};
// child components have access to execute countprovder as the wrap
// usecountcontext gives it access to ask for those values
export { CountProvider, useCountContext };
